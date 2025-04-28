import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { IPost } from "@/entities/post/model/types"
import { postApi } from "@/entities/post/api/postApi"
import { POST_QUERIES } from "@/entities/post/model/constants"

export const usePostsQuery = () => {
  return useQuery({
    queryKey: POST_QUERIES.all,
    queryFn: postApi.getPosts,
  })
}

export const useCreatePostMutation = (post: IPost) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => postApi.createPost(post),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: POST_QUERIES.list() })
    },
  })
}

export const useUpdatePostMutation = (id: number, post: IPost) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => postApi.updatePost(id, post),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: POST_QUERIES.list() })
    },
  })
}

export const useDeletePostMutation = (id: number) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => postApi.deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: POST_QUERIES.list() })
    },
  })
}

export const useTagsQuery = () => {
  return useQuery({
    queryKey: POST_QUERIES.tags(),
    queryFn: postApi.getTags,
  })
}

export const usePostsByTagQuery = (tag: string) => {
  return useQuery({
    queryKey: POST_QUERIES.byTag(tag),
    queryFn: () => postApi.getPostsByTag(tag),
  })
}
