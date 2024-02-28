import {Post} from "../../types"
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import CommentList from "../../components/CommentList";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>()

  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json() as Promise<Post>)
      .then(post => {
        setPost(post)
      })
      .catch(error => {
        setError(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id]);

  return (
    <div>
      {loading
        ? (<p>Loading post...</p>)
        : error
          ? (<p>Error: {error}</p>)
          : post
            ? (
              <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <CommentList postId={post.id} />
              </div>
            )
            : (<p>Post not found</p>)
      }
    </div>
  )
}