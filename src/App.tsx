import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import  Home from './pages/Home'
import  Root from './pages/Root'
import Work  from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {index:true, element: <Home /> },
      {path: 'work', element: <Work />},
      {path: 'about', element: <About />},
      {path: 'contact', element: <Contact />}
    ]
  }
])
function App() {
  return <RouterProvider router={router} />
}

export default App
