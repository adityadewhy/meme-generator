import React from 'react'
import memesData from '../memesData.js'

export default function Meme() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    memeImage: "https://i.imgflip.com/30b1gx.jpg"
  })

  const [allImages, setAllImages] = React.useState(memesData)


  function getMemeImage() {
    const memesArray = allImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      memeImage: url
    }))
  }

  return (
    <>

      <div className='form'>
          <input type='text' placeholder='top text' className='form--input' />
          <input type='text' placeholder='bottom text' className='form--input' />
          <button className='form-btn' onClick={getMemeImage}> get random meme
          </button>
      </div>


      <img src={meme.memeImage} className="meme--image" />

    </>
  )
}