"use client"
import React, { createContext, useCallback, useContext, useEffect, useState } from "react"

import { useArticles } from "@/hooks/articles"

interface ArticlesContextType {
  articles: Lumenai.Article[]
  totalArticles: number
  loading: boolean
  searchTerm: string
  setSearchTerm: (term: string) => void
  filters: {
    tags: string[]
    featured: boolean
  }
  setFilters: (filters: { tags: string[]; featured: boolean }) => void
  loadMoreArticles: () => void
  latest: boolean
  setLatest: (value: boolean) => void
  setPage: (value: number) => void
  isFetchingMore: boolean
}

const ArticlesContext = createContext<ArticlesContextType | undefined>(undefined)

export const ArticlesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { getAllArticles, searchArticle, loading } = useArticles()
  const [articles, setArticles] = useState<Lumenai.Article[]>([])
  const [totalArticles, setTotalArticles] = useState(0)
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [latest, setLatest] = useState(false)
  const [filters, setFilters] = useState({ tags: ["news", "events"], featured: false })
  const [isFetchingMore, setIsFetchingMore] = useState(false)

  const fetchArticles = useCallback(async () => {
    const response = await getAllArticles({
      tags: filters.tags,
      featured: filters.featured,
      pagination: { page, perPage: 6 },
    })

    if (response.success && response.data) {
      setArticles((prev) => (page === 1 ? response.data.articles : [...prev, ...response.data.articles]))
      setTotalArticles(response.data.totalCount)
    } else {
      console.error(response.message)
    }
  }, [filters, page, getAllArticles])

  const searchArticles = useCallback(async () => {
    const response = await searchArticle({
      type: "all",
      term: searchTerm,
    })

    if (response.success && response.data) {
      setArticles(response.data.articles)
      setTotalArticles(response.data.totalCount)
    } else {
      console.error(response.message)
    }
  }, [searchArticle, searchTerm])

  useEffect(() => {
    if (searchTerm.trim() === "") {
      fetchArticles()
    } else {
      searchArticles()
    }
  }, [fetchArticles, searchArticles, searchTerm, filters, page])

  const loadMoreArticles = () => {
    const maxPages = Math.ceil(totalArticles / 6)

    if (page < maxPages) {
      setIsFetchingMore(true)
      setPage((prevPage) => prevPage + 1)
    } else {
      console.log("No more pages to load.")
    }
  }

  useEffect(() => {
    if (page > 1) {
      fetchArticles().then(() => setIsFetchingMore(false))
    }
  }, [page, fetchArticles])

  return (
    <ArticlesContext.Provider
      value={{
        articles,
        totalArticles,
        loading: loading && !isFetchingMore,
        searchTerm,
        setSearchTerm,
        filters,
        setFilters,
        loadMoreArticles,
        latest,
        setLatest,
        setPage,
        isFetchingMore,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  )
}

export const useArticlesContext = () => {
  const context = useContext(ArticlesContext)
  if (!context) throw new Error("useArticlesContext must be used within an ArticlesProvider")
  return context
}
