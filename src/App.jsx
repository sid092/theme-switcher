import './App.css'
import React , {useState ,useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Post from './components/Post'
import {themeContext,themes} from './context/themeContext'
function App() {
  const [theme,setTheme]= useState(themes.light)

  function handleOnclick(){
    theme===themes.light?setTheme(themes.dark):setTheme(themes.light)
  }
useEffect(()=>{
  document.body.className=theme
},[theme])

  return (
    <>
    <themeContext.Provider value = {{theme ,handleOnclick}}>
      <div className={`${theme}`}>
    <div className='main-container '>
      <h1 className='text-center'>Light Dark theme App</h1>
      <Post/>
    </div>
    </div>
    </themeContext.Provider>
     
    </>
  )
}

export default App
