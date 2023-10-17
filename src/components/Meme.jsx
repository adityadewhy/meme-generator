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

  function handleChange(event){
    const {name, value} = event.target
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }})
  }

  return (
    <div className='main'>

      <div className='form'>
          <input 
            type='text' 
            placeholder='top text' 
            className='form--input'
            name='topText'
            value={meme.topText}
            onChange={handleChange}
            />
        
          <input 
            type='text' 
            placeholder='bottom text' 
            className='form--input' 
            name= 'bottomText'
            value= {meme.bottomText}
            onChange= {handleChange}
            />
        
          <button className='form-btn' onClick={getMemeImage}> get random meme
          </button>
      </div>

      <div className='meme'>
        <img src={meme.memeImage} className="meme--image" />
        <h2 className='meme--text meme--top--text'>{meme.topText}</h2>
        <h2 className='meme--text meme--bottom--text'>{meme.bottomText}</h2>
      </div>   

    </div>
  )
}