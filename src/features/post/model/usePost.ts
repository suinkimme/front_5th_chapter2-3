import { useMemo } from "react"
import { useEffect } from "react"
import { usePostsQuery } from "@/entities/post/model/queries"
import { useUsersQuery } from "@/entities/user/model/queries"
import { usePostStore } from "@/features/post/model/store"
import { enrichPostsWithAuthors } from "@/features/post/lib/mappers"

export const usePost = () => {
  const { data, isLoading, error } = usePostsQuery()
  const { data: usersResponse } = useUsersQuery()

  // zustand 접근
  const posts = useMemo(() => enrichPostsWithAuthors(data, usersResponse), [data, usersResponse])
  const setPosts = usePostStore((state) => state.setPosts)
  const searchQuery = usePostStore((state) => state.searchQuery)
  const setSearchQuery = usePostStore((state) => state.setSearchQuery)

  useEffect(() => {
    if (data && !isLoading) {
      setPosts(data.posts)
    }
  }, [data, isLoading, setPosts])

  return {
    // 상태
    isLoading,
    error,

    // 데이터
    posts,
    searchQuery,
  }
}
