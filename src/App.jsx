import { useEffect, useState } from "react";
import { ListaCanciones } from "./components/ItemList";
import "./App.css";
import { canciones } from "./data/item";
import { BarraBusqueda } from "./components/SearchBar";
import { BarraNavegacion } from "./components/Navbar";
import { Panel } from "./components/ListPanel";

function App() {
  // lista personal
  const [miLista, setMiLista] = useState([]); // esta bien

  // TOGGLE
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
  const cancionesFiltradas = canciones.filter((cancion) =>
    cancion.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  // PANEL
  const [panelAbierto, setPanelAbierto] = useState(false); // valor boleano o bandera

  // USE EFFECT
  /**
      El título de la pestaña muestra el contador con un useEffect: 
      "Mi lista (3) | NombreDeTuApp". Cuando la lista está vacía, 
      solo el nombre de tu app. El array de dependencias tiene 
      que ser el correcto y tenés que poder explicar por qué.
   */

  useEffect(() =>
  //console.log('efecto'),
  {
    if (miLista.length === 0) {
      document.title = "OnMusic";
    }
    else {
      document.title = `Mi Lista ${miLista.length} | OnMusic`;
    }
  },
    [miLista]
  );


  return (
    <div>
      <div>
        {panelAbierto ? (
          <Panel
            miLista={miLista}
            setPanelAbierto={setPanelAbierto}
            agregarCancion={agregarCancion}
          />
        ) : null}
      </div>
      <div>
        <BarraNavegacion miLista={miLista} setPanelAbierto={setPanelAbierto} />
        <BarraBusqueda busqueda={busqueda} setBusqueda={setBusqueda} />
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
