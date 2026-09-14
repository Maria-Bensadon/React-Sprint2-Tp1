
import { Card } from "./ItemCard";
import '../App';

export const ListaCanciones = ({ canciones,
  agregarCancion, miLista, busqueda }) => {
  return (
    <div>
      <h2>Lista de canciones disponibles</h2>
      <div>{canciones.length === 0 ? <p>No encontramos la cancion que buscas para "{busqueda}"</p> : null}</div>
      <div>
        {canciones.map(cancion => (
          <Card
            key={cancion.id}
            nombre={cancion.nombre}
            artista={cancion.artista}
            duracion={cancion.duracion}
            cancion={cancion}
            agregarCancion={agregarCancion}
            esAcustica={cancion.esAcustica}
            estaListada={miLista.some(item =>
              item.id === cancion.id
            )}
          />
        ))}
      </div>
    </div>
  );
};
