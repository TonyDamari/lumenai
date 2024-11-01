"use client"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import LoadingSpinner from "@/components/loading-spinner"
import { useArticles } from "@/hooks/articles"
import { cleanHtmlContent } from "@/utils/helpers"

const Article = () => {
  const { id } = useParams()
  const router = useRouter()
  const { loading, getArticleById } = useArticles()
  const [article, setArticle] = useState<Lumenai.Article | null>(null)
  const articleId = Array.isArray(id) ? id[0] : id

  const fetchArticle = async () => {
    if (articleId) {
      const response = await getArticleById({ id: articleId })
      if (response.success && response.data) {
        setArticle(response.data.article)
      } else {
        console.error(response.message)
      }
    }
  }

  useEffect(() => {
    fetchArticle()
  }, [id, getArticleById])

  if (!article) return <div className="flex items-center justify-center h-screen text-gray-300">No article found.</div>

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <LoadingSpinner />
        </div>
      ) : (
        <div>
          <div className="relative w-full h-52 sm:h-80 lg:h-96">
            <button
              onClick={() => router.back()}
              className="absolute left-5 top-0 z-10 flex text-xs sm:text-base items-center justify-center text-light_blue rounded-full hover:bg-white transition-colors my-5 py-1 px-3"
            >
              <Image src="../svgs/icon-back.svg" width={8} height={8} alt="Arrow Right" className=" mr-2" />
              Back
            </button>
            <Image
              src={article.imgUrl || "/images/broken-url.webp"}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-5">
            <div className="mb-5">
              <h3 className="font-bold mb-1">{article.title}</h3>
              <p className="text-gray-400">{article.excerpt}</p>
            </div>
            <hr className="w-1/2 " />
            <div className="mt-5">
              <p>{cleanHtmlContent(article.body)}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Article
