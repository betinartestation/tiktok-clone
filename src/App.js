import "./App.css";
import Video from "./pages/Video.js"; /*Importar o componente video deste diretorio*/

function App() {
  return (
    <div className="App">
      <div className="app__videos">

        <Video 
          likes={111}
          comments={222}
          shares={333}
        />

        <Video 
          likes={444}
          comments={555}
          shares={666}
        />

      </div>
    </div>
  );
}

export default App;
