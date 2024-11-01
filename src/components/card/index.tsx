import Image from "next/image"
import { useRouter } from "next/navigation"

import { formatDate } from "@/utils/helpers"

type CardProps = {
  article: Lumenai.Article
}

const Card = ({ article }: CardProps) => {
  const route = useRouter()
  const handleReadMore = () => {
    route.push(`/articles/${article.id}`)
  }
  return (
    <div className="w-96  relative">
      <div className="bg-white  h-[445px] rounded-3xl overflow-hidden hover:shadow-md transition-shadow duration-300 circular-clip">
        <div className="relative bg-slate-50 rounded-b-3xl w-full h-56 overflow-hidden">
          <Image src={article.imgUrl || "/images/broken-url.webp"} alt={article.title} fill className="object-cover" />
        </div>
        <div className="p-5 relative">
          <span className="text-green-600 font-semibold">{formatDate(article.updatedAt)}</span>
          <h2 className="text-dark_blue font-bold text-lg mt-5">{article.title}</h2>
          <p className="text-dark_blue mt-5">{article.excerpt}</p>
        </div>
      </div>
      <div className="bg-white w-4 h-4 rounded-full absolute bottom-0 right-20" />
      <div className="bg-white w-4 h-4 rounded-full absolute bottom-24 right-0" />
      <button
        onClick={handleReadMore}
        className="absolute bg-background flex items-center justify-center rounded-full w-28 h-28 p-5 -right-3 -bottom-1 cursor-pointer hover:scale-95 transition-all"
      >
        <Image src="./svgs/icon-arrow-read-more.svg" alt="read more" width={50} height={50} />
      </button>
    </div>
  )
}

export default Card
