import { setupWorker } from "msw/browser"
import { http, HttpResponse } from "msw"
import { ALL_POSTS, TEST_USERS, TEST_COMMENTS } from "@/shared/model/mockData"

export const worker = setupWorker(
  // POSTS
  http.get("/front_5th_chapter2-3/api/posts", ({ request }) => {
    const url = new URL(request.url)
    const skip = parseInt(url.searchParams.get("skip") || "0", 10)
    const limit = parseInt(url.searchParams.get("limit") || "10", 10)
    const paginatedPosts = ALL_POSTS.slice(skip, skip + limit)

    return HttpResponse.json({
      posts: paginatedPosts,
      total: ALL_POSTS.length,
      skip,
      limit,
    })
  }),

  http.post("/front_5th_chapter2-3/api/posts/add", async ({ request }) => {
    // @ts-ignore
    const body = await request.json()
    // @ts-ignore
    const newPost = { ...body, id: ALL_POSTS.length + 1 }
    ALL_POSTS.unshift(newPost)
    return HttpResponse.json(newPost)
  }),

  http.put("/front_5th_chapter2-3/api/posts/:postId", async ({ params, request }) => {
    const postId = Number(params.postId)
    // @ts-ignore
    const body = await request.json()
    const index = ALL_POSTS.findIndex((p) => p.id === postId)
    // @ts-ignore
    if (index !== -1) ALL_POSTS[index] = { ...ALL_POSTS[index], ...body }
    return HttpResponse.json(ALL_POSTS[index])
  }),

  http.delete("/front_5th_chapter2-3/api/posts/:postId", ({ params }) => {
    const postId = Number(params.postId)
    const index = ALL_POSTS.findIndex((p) => p.id === postId)
    if (index !== -1) ALL_POSTS.splice(index, 1)
    return HttpResponse.json({ success: true })
  }),

  http.get("/front_5th_chapter2-3/api/posts/search", ({ request }) => {
    const url = new URL(request.url)
    const query = url.searchParams.get("q")?.toLowerCase() ?? ""
    const results = ALL_POSTS.filter(
      (p) => p.title.toLowerCase().includes(query) || p.body.toLowerCase().includes(query),
    )
    return HttpResponse.json({
      posts: results,
      total: results.length,
      skip: 0,
      limit: results.length,
    })
  }),

  http.get("/front_5th_chapter2-3/api/posts/tags", () => {
    const allTags = Array.from(new Set(ALL_POSTS.flatMap((post) => post.tags)))
    return HttpResponse.json(allTags)
  }),

  http.get("/front_5th_chapter2-3/api/posts/tag/:tag", ({ params }) => {
    const tag = String(params.tag).toLowerCase()
    const results = ALL_POSTS.filter((p) => p.tags.includes(tag))
    return HttpResponse.json({
      posts: results,
      total: results.length,
      skip: 0,
      limit: results.length,
    })
  }),

  // USERS
  http.get("/front_5th_chapter2-3/api/users", () => {
    return HttpResponse.json(TEST_USERS)
  }),

  http.get("/front_5th_chapter2-3/api/users/:userId", ({ params }) => {
    const userId = Number(params.userId)
    const user = TEST_USERS.users.find((u) => u.id === userId)
    return HttpResponse.json(user ?? {})
  }),

  // COMMENTS
  http.get("/front_5th_chapter2-3/api/comments/post/:postId", ({ params }) => {
    const postId = Number(params.postId)
    const comments = TEST_COMMENTS.filter((c) => c.postId === postId)
    return HttpResponse.json({
      comments,
      total: comments.length,
      skip: 0,
      limit: comments.length,
    })
  }),

  http.post("/front_5th_chapter2-3/api/comments/add", async ({ request }) => {
    // @ts-ignore
    const body = await request.json()
    const newComment = {
      // @ts-ignore
      ...body,
      id: TEST_COMMENTS.length + 1,
      user: {
        // @ts-ignore
        id: body.userId,
        // @ts-ignore
        username: `user${body.userId}`,
        // @ts-ignore
        fullName: `User ${body.userId}`,
      },
      likes: 0,
    }
    TEST_COMMENTS.push(newComment)
    return HttpResponse.json(newComment)
  }),

  http.put("/front_5th_chapter2-3/api/comments/:commentId", async ({ params, request }) => {
    const commentId = Number(params.commentId)
    // @ts-ignore
    const body = await request.json()
    const index = TEST_COMMENTS.findIndex((c) => c.id === commentId)
    // @ts-ignore
    if (index !== -1) TEST_COMMENTS[index] = { ...TEST_COMMENTS[index], ...body }
    return HttpResponse.json(TEST_COMMENTS[index])
  }),

  http.delete("/front_5th_chapter2-3/api/comments/:commentId", ({ params }) => {
    const commentId = Number(params.commentId)
    const index = TEST_COMMENTS.findIndex((c) => c.id === commentId)
    if (index !== -1) TEST_COMMENTS.splice(index, 1)
    return HttpResponse.json({ success: true })
  }),

  http.post("/front_5th_chapter2-3/api/comments/:commentId", ({ params }) => {
    const commentId = Number(params.commentId)
    const comment = TEST_COMMENTS.find((c) => c.id === commentId)
    if (comment) comment.likes += 1
    return HttpResponse.json(comment)
  }),
)
