import {useDispatch} from 'react-redux'
import { useState,useEffect } from 'react'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import { Header,Footer } from './components'
// import './App.css'
import { Outlet } from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
  authService.getUser()
  .then((userData)=>{
    if (userData) {
      dispatch(login({userData}))
    }else{
      dispatch(logout())
    }
  }).finally(()=>setLoading(false))
  },[])
  return !loading ? (
    <div className='h-screen flex flex-wrap content-between bg-indigo-200'>
          <div className='w-full block'> 
          <Header />
          <Outlet />
          <Footer />
          </div>
    </div>
  ) : null
}

export default App
