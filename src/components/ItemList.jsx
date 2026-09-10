
import { Card } from "./ItemCard";
import '../App'; 

export const ListaCanciones = ({canciones,
   agregarCancion, miLista}) => {
  return (
    <div>
      <h2>Lista de canciones disponibles</h2>

      <div>
        {canciones.map(cancion => (
          <Card
            key={cancion.id}
            nombre={cancion.nombre}
            artista={cancion.artista}
            duracion={cancion.duracion}
            cancion = {cancion}
            agregarCancion={agregarCancion}
            esAcustica={cancion.esAcustica}
            estaListada = {miLista.some(item => 
              item.id === cancion.id
            )}
          />
        ))}
      </div>
    </div>
  );
};
