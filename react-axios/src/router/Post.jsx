import blogFetch from "../axios/config"

import { useState, useEffect } from "react"

import { useParams } from "react-router-dom"

import './Post.css'

const Post = () => {
  const [post, setPost] = useState({})

  const {id} = useParams()

  console.log(id);
  

  const getPost = async() => {
    try {
      console.log(id);
      const reponse = await blogFetch.get(`/posts/${id}`)

      const data = reponse.data
      setPost(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPost()
  }, [])

  return <div className="post-container">
    {!post.title ? (<p>Carregando...</p>) : (<div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>)}
  </div>
}

export default Post