import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { INewPost, ISelectedPost } from "@/entities/post/model/types"
import { postApi } from "@/entities/post/api/postApi"
import { POST_QUERIES } from "@/entities/post/model/constants"

export const usePostsQuery = () => {
  return useQuery({
    queryKey: POST_QUERIES.all,
    queryFn: postApi.getPosts,
  })
}

export const useCreatePostMutation = (post: INewPost) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => postApi.createPost(post),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: POST_QUERIES.list() })
    },
  })
}

export const useUpdatePostMutation = (post: ISelectedPost) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => postApi.updatePost(post),
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
