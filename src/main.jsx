import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FoodPage from './pages/FoodPage'
import RetailPage from './pages/RetailPage'
import CommunityPage from './pages/CommunityPage.jsx'

const route = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/food',
    element: <FoodPage />,
  },
  {
    path: '/retail',
    element: <RetailPage />,
  },
  {
    path: '/community',
    element: <CommunityPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
)
