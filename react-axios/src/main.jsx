import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

// páginas
import Home from './router/Home.jsx'
import NewPost from './router/NewPost.jsx'
import Post from './router/Post.jsx'
import Admin from './router/Admin.jsx'
import EditPost from './router/EditPost.jsx'

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/new',
        element: <NewPost/>
      },
      {
        path: '/posts/:id',
        element: <Post/>
      },
      {
        path: '/admin',
        element: <Admin/>
      },
      {
        path: '/posts/edit/:id',
        element: <EditPost/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
