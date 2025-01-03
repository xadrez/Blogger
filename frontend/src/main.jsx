import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , 
         RouterProvider
        } from 'react-router-dom'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import './index.css'
import MainLayout from './layouts/MainLayout.jsx'
import Singlepage from './views/Singlepage.jsx'
import Login from './views/Login.jsx'
import Register from './views/Register.jsx'
import Write from './views/Write.jsx'
import Frontpage from './views/Frontpage.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import Test from './views/Test.jsx'
import PostListPage from './views/postListPage.jsx'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

//Create an new instance of QueryClient
const queryClient = new QueryClient()
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

let router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path:"/",
        element: <Frontpage />,
      },
      {
        path:"/singlepage",
        element: <Singlepage />,
      },
    {
      path:"/posts",
      element: <PostListPage />,
    },
      {
        path:"/login",
        element: <Login />,
      },
      {
        path:"/register",
        element: <Register />,
      },
      {
        path:"/write",
        element: <Write />,
      },
      {
        path:"/test",
        element: <Test />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
        <ToastContainer position='bottom-right'/>
      </QueryClientProvider>
    </ClerkProvider>
  </StrictMode>,
)
