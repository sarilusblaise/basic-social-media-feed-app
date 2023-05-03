import React from 'react'
import { useSelector } from 'react-redux'
import { useLoaderData, Link } from 'react-router-dom-v5-compat'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'
import { selectPostById } from './postsSlice'

// react-router : for loading data in a route
export function loader({ params }) {
  const postId = params.postId
  return { postId }
}

export const SinglePostPage = () => {
  const { postId } = useLoaderData()

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  )
}
