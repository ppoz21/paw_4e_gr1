import {useEffect, useState} from "react"
import {Comment} from "../../types"

interface CommentListProps {
  postId: number
}

export default function CommentList({ postId }: CommentListProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(response => response.json() as Promise<Comment[]>)
      .then(comments => {
        setComments(comments)
      })
      .catch(error => {
        setError(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [postId])

  return (
    <div>
      <h2>Comments</h2>
      {loading
        ? (<p>Loading comments...</p>)
        : error
          ? (<p>Error: {error}</p>)
          : (
            <div>
              {comments.map(comment => (
                <div key={comment.id}>
                  <h3>{comment.name}</h3>
                  <p>{comment.body}</p>
                  <p>{comment.email}</p>
                </div>
              ))}
            </div>
          )
      }
    </div>
  )
}