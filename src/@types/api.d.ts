declare namespace API {
  declare namespace Payload {
    type AllArticlesPayload = {
      tags: string[]
      featured: boolean
      pagination: {
        page: number
        perPage: number
      }
    }

    type ArticleByIdPayload = {
      id: string
    }

    type SearchArticlePayload = {
      type: string
      term: string
    }
  }
  declare namespace Response {
    type BaseResponse = {
      success: boolean
      msg: string
    }

    interface AllArticlesResponse extends BaseResponse {
      data: {
        articles: Lumenai.Article[]
        totalCount: number
      }
    }
    interface ArticleByIdResponse extends BaseResponse {
      data: {
        article: Lumenai.Article
      }
    }
    interface SearchArticleResponse extends BaseResponse {
      data: {
        documents: []
        articles: Lumenai.Article[]
        media: []
        totalCount: number
        pageCount: number
      }
    }
  }
}
