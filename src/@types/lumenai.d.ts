declare namespace Lumenai {
  interface Article {
    id: string
    title: string
    body: string
    externalUrl: string
    excerpt: string
    imgUrl: string
    featured: 1 | 0 | null
    createdAt: string
    updatedAt: string
  }
}
