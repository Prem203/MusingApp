import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from './Pages/Profile';
import Saved from './Pages/Saved';
import Post from './Pages/Post';
import LandingPage from './Pages/LandingPage';
import Comment from './Pages/Comment';

const router = createBrowserRouter([
  {
    path: "/profile",
    element: <Profile />,
  },

  {
    path: "/",
    element: <LandingPage />,
  },

  {
    path: "/saved",
    element: <Saved />,
  },

  {
    path: "/post",
    element: <Post />,
  },

  {
    path: "/comment",
    element: <Comment />,
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

