import "./App.css";
import Video from "./pages/Video.js"; /*Importar o componente video deste diretorio*/

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;