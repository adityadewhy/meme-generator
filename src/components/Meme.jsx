import React from 'react'

export default function Meme() {
  return (
    <form>
      <input type='text' placeholder='top text' className='form--input' />
      <input type='text' placeholder='bottom text' className='form--input' />
      <button className='form-btn' > get random meme
      </button>
    
    </form>
  )
  
}