"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useRef } from "react"

import { useArticlesContext } from "../context/ArticlesContext"

import Card from "@/components/card"
import LoadingSpinner from "@/components/loading-spinner"

const Articles = () => {
  const { articles, totalArticles, loading, loadMoreArticles, latest, isFetchingMore } = useArticlesContext()
  const lastArticleRef = useRef<HTMLDivElement | null>(null)
  const router = useRouter()

  const handleLoadMore = async () => {
    await loadMoreArticles()
    if (lastArticleRef.current) {
      lastArticleRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const sortedArticles = latest
    ? articles.sort((a, b) => Number(new Date(b.updatedAt)) - Number(new Date(a.updatedAt)))
    : articles

  if (articles.length === 0)
    return <div className="flex items-center justify-center h-screen text-gray-300">No articles found.</div>

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="px-5 lg:px-20">
          <button
            onClick={() => router.back}
            className="flex items-center justify-center text-light_blue text-xs sm:text-base font-bold rounded-full hover:bg-white transition-colors my-12 py-1 px-3"
          >
            <Image src="./svgs/icon-back.svg" width={8} height={8} alt="Arrow Right" className=" mr-2" />
            Back
          </button>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 my-8">
            {sortedArticles.map((article, index) => (
              <motion.div
                viewport={{ once: false }}
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.3 }}
                key={`${article.id}-${index}`}
                ref={index === sortedArticles.length - 1 ? lastArticleRef : null}
                className="flex justify-center"
              >
                <Card article={article} />
              </motion.div>
            ))}
          </div>
          {isFetchingMore && <div className="flex w-full items-center justify-center text-gray-300">loading...</div>}
          {articles.length < totalArticles && (
            <div className="flex justify-center my-16">
              <button
                onClick={handleLoadMore}
                className="relative flex items-center justify-center border border-1 border-light_blue rounded-full text-light_blue font-semibold hover:bg-white transition-colors min-w-44 min-h-8 sm:min-h-12"
              >
                <p className="mr-8">Load More</p>
                <Image
                  src="./svgs/icon-arrow-down-grey.svg"
                  width={50}
                  height={50}
                  alt="Arrow Right"
                  className="absolute -rotate-90 h-8 sm:h-12 sm:rotate-0 -right-2 sm:right-0"
                />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Articles
