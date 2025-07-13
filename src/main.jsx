import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './pages/HomePage'
import MovieDetails from './pages/MovieDetails'
import { BrowserRouter } from 'react-router-dom'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
// import store from './app/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <HomePage/>,
  },
  {
    path: "/movie/:id",
    element: <MovieDetails />
  },
]);

createRoot(document.getElementById('root')).render(
   <StrictMode>
    <RouterProvider router={router} />
   </StrictMode>,
)
