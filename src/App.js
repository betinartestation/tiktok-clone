import React, { useEffect, useState } from "react"
import "./App.css";
import Video from "./pages/Video.js"; /*Importar o componente video deste diretorio*/
import db from "./config/firebase";
import {collection, getDocs } from 'firebase/firestore/lite';
/* import { configure } from "@testing-library/react"; Use essa variavel! */

function App() {
  /* Adaptar conteudo a diferentes telas otimizado para diferentes navegadores mobile */
  let maxHeight;
  if(window.innerHeight <= 800){
    maxHeight = window.innerHeight
  }

  const [videos, setVideos] = useState([])

  async function getVideos() {
    /* Entra no banco de dados e abra a colecao de videos */
    const videosCollection = collection(db, "videos");
    /* Pega as informacoes do video */
    const videosSnapshot = await getDocs(videosCollection); /* async + await precisa esperar pegar as informacoes do return para poder renderizar esse codigo */
    const videosList = videosSnapshot.docs.map((doc) => doc.data()); /* Logica propria do firebase, siga a sintaxe com detalhes */
    setVideos(videosList);
  }

  useEffect(()=> {
    getVideos();
  }, []) /* [] impede um looping indesejado, atualizara um video novo com f5, nao automaticamente */
  
  return (
    <div className="App"
      style={{ maxHeight: maxHeight }}
    >
      <div className="app__videos">

        {/* Preparando o BackEnd */}
        {/* Renderizar os dados do videos */}
        { videos.map((item) => { /* Cada item sera renderizado diferente com as informacoes daquele item */
          return (
            <Video /* Chama cada variavel de cada elemento dentro da pasta videos da minha database */
              /* Nao esqueca de adicionar isso no database pra poder incluir fotos e icones uploaded direto do firebase */
              /* profile_pic={item.profile_pic} */
              /* profile_plus-icon={item.profile_plus-icon} */
              likes={item.likes}
              comments={item.comments}
              shares={item.shares}
              username={item.username}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          )
        }) }

      </div>
    </div>
  );
}

export default App;