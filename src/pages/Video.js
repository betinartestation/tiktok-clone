import React, { useRef, useState } from 'react'
import VideoFooter from "./components/footer/VideoFooter" /* Importar o arquivo js footer para esse file */
import VideoSideBar from './components/sidebar/VideoSideBar'; /* Importar o arquivo js sidebar para esse file */
import "./video.css"; 

/* Trazer variaveis do App para o Video */ 
function Video({likes, comments, shares, username, description, music, url}) {
  
  /* Play e Pause no click do mouse */
  const videoRef = useRef(null); /* Criar uma referencia que estamos conectando a esse video especifico */
  /*Nao inicializa ja tocando*/
  const [play, setPlay] = useState(false)
    /* Play ja eh implicitamente true */
    function handleStart(){

      /* Play e Pause no click do mouse */
      if(play){ /* Quando estiver tocando, queremos que pause seja false*/
        videoRef.current.pause()
        setPlay(false) /* Mudar o valor do play pra nao ficar infinito */
      } else { /* Quando nao estiver tocando, queremos que play seja true */
        videoRef.current.play()
        setPlay(true) /* Mudar o valor do play pra nao ficar infinito */
      }
    }

   
  return (
    <div className="video">
        {/* Video */}
        <video
            className="video__player"
            ref={videoRef}
            onClick={handleStart}
            loop
            src={url}
        >
        
        </video>
        {/* Side Bar */}
        <VideoSideBar 
          likes={likes}
          comments={comments}
          shares={shares}
        />

        {/* Footer */}
        <VideoFooter 
          username={username}
          description={description}
          music={music}
        />
    </div>
  )
}

export default Video