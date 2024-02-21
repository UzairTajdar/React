import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')

  return (
   <div className='w-full h-screen duration-200'
   style={{backgroundColor:color}}>
      <div className='fixed flex justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button 
            onClick={()=>setColor('red')}
            className='rounded-3xl py-1 px-4 shadown-lg text-white' style={{backgroundColor: 'red'}}>Red
            </button>
            <button 
            onClick={()=>setColor('green')}
            className='rounded-3xl py-1 px-4 shadown-lg text-white' style={{backgroundColor: 'green'}}>Green
            </button>
            <button 
            onClick={()=>setColor('blue')}
            className='rounded-3xl py-1 px-4 shadown-lg text-white' style={{backgroundColor: 'blue'}}>Blue
            </button>
            <button 
            onClick={()=>setColor('yellow')}
            className='rounded-3xl py-1 px-4 shadown-lg text-black' style={{backgroundColor: 'yellow'}}>Yellow
            </button>
            <button 
            onClick={()=>setColor('aqua')}
            className='rounded-3xl py-1 px-4 shadown-lg text-white' style={{backgroundColor: 'aqua'}}>Aqua
            </button>
            
          </div>
      </div>
   </div>
  )
}

export default App
