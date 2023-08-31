import React from 'react'

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./assets/troll-face.png" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h5 className="header--project">React - Project 3</h5>
        </header>
    )
}