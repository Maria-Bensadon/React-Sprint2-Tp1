import { useState } from "react";
import { ListaCanciones } from "./components/ItemList";
import "./App.css";
import { canciones } from "./data/item";

function App() {

  // lista personal
  const [miLista, setMiLista] = useState([]); // esta bien

  // TOOGLE
  // falta export?
  const agregarCancion = (canciones) => {
    setMiLista(lista => {

      // falta: 
      const encontrada = lista.some(item => item.id === canciones.id);

      if (encontrada) {
        return lista.filter(item => item.id !== canciones.id);
      }

      // agrega la canciones al array
      return [...lista, canciones];
    });
  };

  return (

    <div>
      <ListaCanciones canciones={canciones} agregarCancion={agregarCancion} miLista = {miLista} />
    </div>
  );
}

export default App;


