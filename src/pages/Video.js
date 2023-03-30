import React, { useRef, useState } from 'react'
import "./video.css"; 

function Video() {
  
  /* Play e Pause no click do mouse */
  const videoRef = useRef(null); /* Criar uma referencia que estamos conectando a esse video especifico */
  /*Nao inicializa ja tocando*/
  const [play, setPlay] = useState(false)
    /* Play ja eh implicitamente true */
    function handleStart(){

      /* Play e Pause no click do mouse */
      if(play){ /* Quando estiver tocando, queremos que pause seja */
        videoRef.current.pause()
        setPlay(false) /* Mudar o valor do play pra nao ficar infinito */
      } else { /* Quando nao estiver tocando, queremos que play seja true */
        videoRef.current.play()
        setPlay(true) /* Mudar o valor do play pra nao ficar infinito */
      }
    }

   
  return (
    <div className="video">
        
        <video
            className="video__player"
            ref={videoRef}
            onClick={handleStart}
            loop
            src="https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/brecker2.mp4?alt=media&token=9aa979e9-0907-4093-abd5-a71efe4fc946"
        >
        
        </video>
    </div>
  )
}

export default Video