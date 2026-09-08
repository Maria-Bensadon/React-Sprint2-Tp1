
import { Card } from "./ItemCard";

export const Playlist = ({canciones, estaListada}) => {
  return (
    <div>
      <h2>Lista de canciones disponibles</h2>

      <div>
        {canciones.map((cancion) => (
          <Card
            key={cancion.id}
            nombre={cancion.nombre}
            artista={cancion.artista}
            duracion={cancion.duracion}
            estaListada = {estaListada}
          />
        ))}
      </div>
    </div>
  );
};
