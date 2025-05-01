import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { INewPost, ISelectedPost, IPostsResponse, ITag } from "@/entities/post/model/types"
import { postApi } from "@/entities/post/api/postApi"
import { POST_QUERIES } from "@/entities/post/model/constants"

export const usePostsQuery = (limit: number, skip: number, options = {}) => {
  return useQuery<IPostsResponse>({
    queryKey: [POST_QUERIES.all, limit, skip],
    queryFn: () => postApi.getPosts(limit, skip),
    ...options,
  })
}

export const useSearchPostsQuery = (searchQuery: string, options = {}) => {
  return useQuery<IPostsResponse>({
    queryKey: POST_QUERIES.search(searchQuery),
    queryFn: () => postApi.searchPosts(searchQuery),
    enabled: searchQuery.trim().length >= 2 && (options as { enabled?: boolean }).enabled !== false,
    staleTime: 30000,
    ...options,
  })
}

export const useCreatePostMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (post: INewPost) => postApi.createPost(post),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: POST_QUERIES.list() })
    },
  })
}

export const useUpdatePostMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (post: ISelectedPost) => postApi.updatePost(post),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: POST_QUERIES.list() })
    },
  })
}

export const useDeletePostMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => postApi.deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: POST_QUERIES.list() })
    },
  })
}

export const useTagsQuery = () => {
  return useQuery<ITag[]>({
    queryKey: POST_QUERIES.tags(),
    queryFn: postApi.getTags,
  })
}

export const usePostsByTagQuery = (tag: string, options = {}) => {
  return useQuery<IPostsResponse>({
    queryKey: POST_QUERIES.byTag(tag),
    queryFn: () => postApi.getPostsByTag(tag),
    enabled: tag !== "all" && tag !== "" && (options as { enabled?: boolean }).enabled !== false,
    ...options,
  })
}
