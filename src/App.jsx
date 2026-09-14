import { useEffect, useState } from "react";
import { ListaCanciones } from "./components/ItemList";
import "./App.css";
import { canciones } from "./data/item";
import { BarraBusqueda } from "./components/SearchBar";
import { BarraNavegacion } from "./components/Navbar";
import { Panel } from "./components/ListPanel";
import { useMiLista } from "./hooks/onMusic";
import { useToggle } from "./hooks/useToggle";

function App() {

  const {miLista, agregarCancion, vaciarLista} = useMiLista(); 

  // BUSCADOR
  const [busqueda, setBusqueda] = useState("");

  // Canciones filtradas para el Buscador
  const cancionesFiltradas = canciones.filter((cancion) =>
    cancion.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  // PANEL
  const [panelAbierto, setPanelAbierto] = useToggle(false); // valor boleano o bandera

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
            vaciarLista={vaciarLista}
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
