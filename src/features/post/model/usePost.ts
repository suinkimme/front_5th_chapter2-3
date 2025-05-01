import { useMemo } from "react"
import { usePostsQuery, useSearchPostsQuery } from "@/entities/post/model/queries"
import { useUsersQuery } from "@/entities/user/model/queries"
import { usePostStore } from "@/features/post/model/store"
import { enrichPostsWithAuthors } from "@/features/post/lib/mappers"

export const usePost = () => {
  const searchQuery = usePostStore((state) => state.searchQuery)
  const setSearchQuery = usePostStore((state) => state.setSearchQuery)

  const { data: usersResponse } = useUsersQuery()

  // 검색 X
  const {
    data: normalPostsData,
    isLoading: isNormalLoading,
    error: normalError,
  } = usePostsQuery({
    enabled: !searchQuery,
  })

  // 검색 O
  const {
    data: searchPostsData,
    isLoading: isSearchLoading,
    error: searchError,
  } = useSearchPostsQuery(searchQuery, {
    enabled: searchQuery.length >= 2,
  })

  const posts = useMemo(() => {
    if (searchQuery.length >= 2) {
      return enrichPostsWithAuthors(searchPostsData, usersResponse)
    }
    return enrichPostsWithAuthors(normalPostsData, usersResponse)
  }, [normalPostsData, searchPostsData, searchQuery, usersResponse])

  const isLoading = searchQuery.length >= 2 ? isSearchLoading : isNormalLoading
  const error = searchQuery.length >= 2 ? searchError : normalError

  return {
    // 상태
    isLoading,
    error,

    // 데이터
    posts,
    searchQuery,

    // 액션
    setSearchQuery,
    // searchPosts:
  }
}
