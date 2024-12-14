import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import './index.css'
import MainLayout from './layouts/MainLayout.jsx'
import Singlepage from './views/Singlepage.jsx'
import Login from './views/Login.jsx'
import App from './App.jsx'
import Frontpage from './views/Frontpage.jsx'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path:"/",
        element: <Frontpage />,
      },
      {
        path:"/profile",
        element: <Singlepage />,
      },
      {
        path:"/login",
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <App />
  </StrictMode>,
)
