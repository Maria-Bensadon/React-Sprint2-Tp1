import { useState } from "react";
import { ListaCanciones } from "./components/ItemList";
import "./App.css";
import { canciones } from "./data/item";
import { BarraBusqueda } from "./components/SearchBar";
import { BarraNavegacion } from "./components/Navbar";

function App() {
  // lista personal
  const [miLista, setMiLista] = useState([]); // esta bien

  // TOOGLE
  // falta export?
  const agregarCancion = (canciones) => {
    setMiLista((lista) => {
      // falta:
      const encontrada = lista.some((item) => item.id === canciones.id);

      if (encontrada) {
        return lista.filter((item) => item.id !== canciones.id);
      }

      // agrega la canciones al array
      return [...lista, canciones];
    });
  };

  // BUSCADOR
  const [busqueda, setBusqueda] = useState("");

  // Canciones filtradas para el Buscador
  const cancionesFiltradas = canciones.filter(cancion => cancion.nombre.toLowerCase().includes(busqueda.toLowerCase()) ); 

  return (
    <div>
      <div>
        <BarraNavegacion miLista={miLista}/>
        <BarraBusqueda busqueda={busqueda} setBusqueda={setBusqueda}/>
      </div>
      <div>
        <ListaCanciones
        canciones={cancionesFiltradas}
        agregarCancion={agregarCancion}
        miLista={miLista}
      />
      </div>
    </div>
  );
}

export default App;
