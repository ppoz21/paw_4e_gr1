import React from "react"
import Home from "../pages/Home"
import Blog from "../pages/Blog"
import BlogPost from "../pages/BlogPost";

interface RouteElement {
  path: string
  element: React.JSX.Element
  name: string
  hideInNavbar?: boolean
}

// export const routes: RouteElement[] = []
export const routes: Array<RouteElement> = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/blog",
    element: <Blog />,
    name: "Blog",
  },
  {
    path: "/blog/:id",
    element: <BlogPost />,
    name: "Blog Post",
    hideInNavbar: true,
  }
]