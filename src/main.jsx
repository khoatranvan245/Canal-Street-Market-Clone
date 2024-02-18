import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FoodPage from './pages/FoodPage'
import RetailPage from './pages/RetailPage'
import CommunityPage from './pages/CommunityPage.jsx'
import GlobalStyle from './global-style/GlobalStyle.jsx'
import App from './App.jsx'

const route = createBrowserRouter([
  {
    element: <App />,
    children: [
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
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle>
      <RouterProvider router={route} />
    </GlobalStyle>
  </React.StrictMode>
)
