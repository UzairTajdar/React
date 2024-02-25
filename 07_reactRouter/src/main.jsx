import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import { Home ,About,Contact, User, Github} from './components'
import { githubInfoLoader } from './components/Github/Github'
// const router = createBrowserRouter ([
//   {
//     path :'/',
//     element : <Layout />,
//     children : [
//       {
//         path :'',
//         element : <Home />
//       },
//       {
//         path :'about',
//         element : <About />
//       },
//     ]
//   }
// ])

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
       <Route path='' element={<Home/>} />
       <Route path='about' element={<About/>} />
       <Route path='contact' element={<Contact/>} />
       <Route path='user/:id' element={<User/>} />
       <Route 
       loader={githubInfoLoader}
       path='github'
       element={<Github/>}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
