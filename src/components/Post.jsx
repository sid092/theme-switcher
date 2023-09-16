import React, { useContext } from 'react'
import {themeContext} from '../context/themeContext'
const Post = () => {
  const {theme , handleOnclick}= useContext(themeContext)
  return (
    <div>
      <h4>My post with {theme}</h4>
      <button className={`btn ${theme==='dark'?"btn-light":"btn-dark"}`} onClick={handleOnclick}>
       {theme ==="dark"?"light":"dark"}
        </button>
    </div>
  )
}

export default Post
