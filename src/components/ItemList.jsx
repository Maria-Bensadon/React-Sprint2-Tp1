import { Card } from "./ItemCard";

export const ListaCanciones = ({ canciones, agregarCancion, miLista, busqueda }) => {
  return (
    <main className="px-6 py-6">
     <h2 className="font-bold text-xl mb-6">Lista de canciones disponibles</h2>

      {canciones.length === 0 && (
         <p className="text-on-surface-variant text-center mt-8">
          No encontramos nada para "{busqueda}" 🎵
        </p>
      )}

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {canciones.map(cancion => (
          <Card
            key={cancion.id}
            nombre={cancion.nombre}
            artista={cancion.artista}
            duracion={cancion.duracion}
            cancion={cancion}
            agregarCancion={agregarCancion}
            esAcustica={cancion.esAcustica}
            estaListada={miLista.some(item => item.id === cancion.id)}
          />
        ))}
      </div>
    </main>
  );
};