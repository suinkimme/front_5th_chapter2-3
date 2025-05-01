import { useMemo } from "react"
import { usePostsQuery, useSearchPostsQuery, useTagsQuery, usePostsByTagQuery } from "@/entities/post/model/queries"
import { useUsersQuery } from "@/entities/user/model/queries"
import { usePostStore } from "@/features/post/model/store"
import { enrichPostsWithAuthors, sortPosts } from "@/features/post/lib/mappers"

export const usePost = () => {
  const sortBy = usePostStore((state) => state.sortBy)
  const sortOrder = usePostStore((state) => state.sortOrder)
  const selectedTag = usePostStore((state) => state.selectedTag)
  const searchQuery = usePostStore((state) => state.searchQuery)
  const setSearchQuery = usePostStore((state) => state.setSearchQuery)
  const setSelectedTag = usePostStore((state) => state.setSelectedTag)
  const setSortBy = usePostStore((state) => state.setSortBy)
  const setSortOrder = usePostStore((state) => state.setSortOrder)

  const { data: usersResponse } = useUsersQuery()
  const { data: tags } = useTagsQuery()

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

  // 태그 선택
  const {
    data: tagPostsData,
    isLoading: isTagLoading,
    error: tagError,
  } = usePostsByTagQuery(selectedTag, {
    enabled: selectedTag !== "all" && selectedTag !== "",
  })

  const posts = useMemo(() => {
    if (searchQuery.length >= 2) {
      return enrichPostsWithAuthors(searchPostsData, usersResponse)
    }

    if (selectedTag !== "all") {
      return enrichPostsWithAuthors(tagPostsData, usersResponse)
    }

    return enrichPostsWithAuthors(normalPostsData, usersResponse)
  }, [normalPostsData, searchPostsData, searchQuery, tagPostsData, usersResponse, selectedTag])

  const isLoading = searchQuery.length >= 2 ? isSearchLoading : selectedTag !== "all" ? isTagLoading : isNormalLoading
  const error = searchQuery.length >= 2 ? searchError : selectedTag !== "all" ? tagError : normalError

  return {
    // 상태
    isLoading,
    error,

    // 데이터
    posts: sortPosts(posts, sortBy, sortOrder),
    tags: tags || [],
    selectedTag,
    searchQuery,
    sortBy,
    sortOrder,

    // 액션
    setSearchQuery,
    setSelectedTag,
    setSortBy,
    setSortOrder,
  }
}
