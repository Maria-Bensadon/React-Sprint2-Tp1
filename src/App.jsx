import { useState } from "react";
import { Playlist } from "./components/ItemList";
import "./App.css";
import { canciones } from "./data/item";

function App() {

  // lista personal
  const [myPlaylist, setMyPlaylist] = useState([]); // esta bien

  // TOOGLE
  // falta export?
  const agregarCancion = (cancion) => {
    setMyPlaylist(lista => {

      // falta: 
      const encontrada = lista.some(item => item.id === cancion.id); 

      if (encontrada) {
        lista = lista.filter(item => item.id !== cancion.id); 
        return lista; 
      }

      // agrega la cancion al array
      return [...lista, cancion];
    });
  };

  return(

    <div>
      <Playlist canciones={canciones}/>
    </div>
  ); 
}

export default App;
