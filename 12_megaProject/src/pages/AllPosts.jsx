import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components'
import Service  from '../appwrite/configure'


function AllPosts() {
      const [posts, setPosts] = useState([])
      useEffect(() => {
        Service.getPosts([]).then((post)=>{
            if (post) {
                  setPosts(post.documents)
            }
        })
      }, [])
      
  if (posts.length > 0 ) {
    return (
      <div className='py-8 w-full'>
        <Container>
           <div className='flex flex-wrap'>
           {posts.map((post)=>(
              <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard {...post}/>
              </div>
           ))}
           </div>
        </Container>
      </div>
    )
  }else{
    return(<div>You don't have any posts</div>)
  }
}

export default AllPosts