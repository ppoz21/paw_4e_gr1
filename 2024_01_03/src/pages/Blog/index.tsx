import {useEffect, useState} from "react"
import {Post} from "../../types"
import {Link} from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json() as Promise<Post[]>)
      .then(posts => {
        setPosts(posts)
      })
      .catch(error => {
        setError(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <>
      <h1>Blog</h1>
      {loading
        ? (<p>Loading posts...</p>)
        : error
          ? (<p>Error: {error}</p>)
          : (
            <div>
              {posts.map(post => (
                <div key={post.id}>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                  <Link to={`/blog/${post.id}`}>Read more</Link>
                </div>
              ))}
            </div>
          )
      }
    </>
  )
}