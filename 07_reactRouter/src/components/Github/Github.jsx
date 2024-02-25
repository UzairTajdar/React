import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
      const data = useLoaderData()
      // const [data,setData] =useState([])
      // useEffect(() => {
      //   fetch('https://api.github.com/users/uzairtajdar')
      //   .then((res)=>res.json())
      //   .then((data=>{setData(data)}))
      // }, [])
      
  return (
    <div className='text-3xl text-white bg-slate-400 p-4 flex justify-center flex-col items-center'>
      <h1>Github Following : {data.following}</h1>
      <img className='m-4 outline' src={data.avatar_url} width={300} alt="" />
      </div>
  )
}

export default Github

export const githubInfoLoader =async()=>{
      const response = await fetch('https://api.github.com/users/uzairtajdar')
      return response.json()
}