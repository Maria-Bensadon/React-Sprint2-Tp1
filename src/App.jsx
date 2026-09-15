import { useEffect, useState } from "react";
import { ListaCanciones } from "./components/ItemList";
import "./App.css";
import { canciones } from "./data/item";
import { BarraBusqueda } from "./components/SearchBar";
import { BarraNavegacion } from "./components/Navbar";
import { Panel } from "./components/ListPanel";
import { useMiLista } from "./hooks/onMusic";
import { useToggle } from "./hooks/useToggle";
import { Footer } from "./components/Footer";

function App() {

  const {miLista, agregarCancion, vaciarLista} = useMiLista(); 

  // BUSCADOR
  const [busqueda, setBusqueda] = useState("");

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
     <div className="min-h-screen bg-(--color-background) text-(--color-on-background)">
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
      <div className="sticky top-0 z-50">
        <BarraNavegacion miLista={miLista} setPanelAbierto={setPanelAbierto} />
      </div>
      <div>
        <BarraBusqueda busqueda={busqueda} setBusqueda={setBusqueda} />
      </div>
      <div>
        <ListaCanciones canciones={canciones} agregarCancion={agregarCancion} miLista={miLista} busqueda={busqueda} />
      </div>
      <div><Footer/></div>
    </div>
  );
}

export default App;
