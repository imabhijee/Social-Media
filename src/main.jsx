import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import  PostList  from "./components/PostList";
const router = createBrowserRouter([
  { path: "/Social-Media", element: <App /> , children: [{
      path: "/Social-Media/" , element: <PostList />} ,
     { path: "/Social-Media/createpost" , element: <CreatePost />} ,
  ]}
]); 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
