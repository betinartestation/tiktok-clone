import React, { useRef, useState, useEffect } from 'react'
import VideoFooter from "./components/footer/VideoFooter" /* Importar o arquivo js footer para esse file */
import VideoSideBar from './components/sidebar/VideoSideBar'; /* Importar o arquivo js sidebar para esse file */
import { useInView } from "react-intersection-observer"
import "./video.css"; 

/* Trazer variaveis do App para o Video */ 
function Video({likes, comments, shares, username, description, music, url}) {
  
  /* Parar o video quando sair da tela */


  const stopVideo = () => {
    videoRef.current.pause()
    videoRef.current.currentTime = 0
    setPlay(!play)
  }

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
  
    const [inViewRef, inView] = useInView({ threshold: 0.5 })

  useEffect(() => {
    if (!inView && play) {
      stopVideo()
    }
  })

  return (
    <div className="video" ref={inViewRef} >
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