import { useCallback, useState } from "react"

import AxiosInstance from "@/utils/axiosInstance"

export const useArticles = () => {
  const [loading, setLoading] = useState(false)

  const getAllArticles = useCallback(async (payload: API.Payload.AllArticlesPayload) => {
    setLoading(true)
    try {
      const response = await AxiosInstance.post<API.Response.AllArticlesResponse>("/articles", payload)
      if (response.data.success) {
        return { success: true, message: response.data.msg, data: response.data.data }
      } else {
        throw "Error fetching articles"
      }
    } catch (error) {
      return { success: false, message: error as string }
    } finally {
      setLoading(false)
    }
  }, [])

  const getArticleById = useCallback(async (payload: API.Payload.ArticleByIdPayload) => {
    setLoading(true)
    try {
      const response = await AxiosInstance.get<API.Response.ArticleByIdResponse>(`/articles/${payload.id}`)
      if (response.data.success) {
        return { success: true, message: response.data.msg, data: response.data.data }
      } else {
        throw "Error fetching articles"
      }
    } catch (error) {
      return { success: false, message: error as string }
    } finally {
      setLoading(false)
    }
  }, [])

  const searchArticle = useCallback(async (payload: API.Payload.SearchArticlePayload) => {
    setLoading(true)
    try {
      const response = await AxiosInstance.post<API.Response.SearchArticleResponse>("search", payload)
      if (response.data.success) {
        return { success: true, message: response.data.msg, data: response.data.data }
      } else {
        throw "Error fetching articles"
      }
    } catch (error) {
      return { success: false, message: error as string }
    } finally {
      setLoading(false)
    }
  }, [])

  return { loading, getAllArticles, getArticleById, searchArticle }
}
