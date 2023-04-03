import "./App.css";
import Video from "./pages/Video.js"; /*Importar o componente video deste diretorio*/

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        {/* Preparando o BackEnd */}
        <Video 
          likes={111}
          comments={222}
          shares={333}
          username="bbetinapp"
          description="gatinho maneirinho mane"
          music="Epic Song"
          url="https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/brecker2.mp4?alt=media&token=9aa979e9-0907-4093-abd5-a71efe4fc946"
        />

        <Video 
          likes={444}
          comments={555}
          shares={666}
          username="lucazesilva"
          description="N TA MAIS VERDEEEE"
          music="Another Epic Song hehe"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />

      </div>
    </div>
  );
}

export default App;
