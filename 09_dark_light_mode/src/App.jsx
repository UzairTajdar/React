import './App.css'
import Card from './assets/components/Card'
import ThemeBtn from './assets/components/ThemeButton'
import { ThemeProvider } from './assets/context/theme'
import { useState,useEffect } from 'react'

function App() {
   const [themeMode,setThemeMode] = useState('light')

   const lightMode = ()=> {
      setThemeMode('light')
   }
   const darkMode = ()=> {
      setThemeMode('dark')
   }

   useEffect(() => {
     const theme = document.querySelector('html').classList
     theme.remove('light','dark')
     theme.add(themeMode)
   }, [themeMode])
   

  return (
    <ThemeProvider value={{themeMode,lightMode,darkMode}}>
       <div className="flex flex-wrap min-h-screen items-center">
       <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Button */}
            <ThemeBtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
           {/* Card */}
           <Card />
        </div>
       </div>
    </div>
    </ThemeProvider>
  )
}

export default App
