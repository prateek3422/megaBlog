import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import {RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthLayout, Login } from "./components/"
import AllPosts from "./pages/AllPost.jsx";
import AddPost from "./pages/addPost.jsx";
import Post from "./pages/post.jsx";
import EditPost from './pages/EditPost.jsx'
import Register from "./pages/signup.jsx";
import Home from  './pages/Home.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
           {
            path: "/",
            element: <Home />,
        },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Register />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            {" "}
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/add-posts",
        element: (
          <AuthLayout authentication>
            {" "}
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
            <AuthLayout authentication>
                {" "}
                <EditPost/>
            </AuthLayout>
        ),
    },
    {
        path: "/post/:slug",
        element: <Post />,
    },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  </React.StrictMode>
);
