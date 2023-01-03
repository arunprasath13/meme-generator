import React from 'react'
import memesData from "../MemesData.js"
import { useState } from 'react';
const Meme = () => {
    const [memeImage,setMemeImage] = useState("")
    let url;
    function getMemesData(){
        const memes = memesData.data.memes;
        const random = Math.floor(Math.random()*memes.length);
        setMemeImage(memes[random].url)
    }
    return (
        <main>
            <div>
                <input type="text" placeholder='First-Text'/>
                <input type="text" placeholder='Second-Text'/>
                <button onClick={getMemesData}>Get a Meme message 😀</button>
            </div>
            <img src={memeImage} className="meme-image"/>
        </main>
    )
}

export default Meme