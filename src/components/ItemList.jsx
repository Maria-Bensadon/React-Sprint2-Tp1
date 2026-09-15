import { Card } from "./ItemCard";

export const ListaCanciones = ({ canciones, agregarCancion, miLista, busqueda }) => {

    // Canciones filtradas para el Buscador
    const cancionesFiltradas = canciones.filter((cancion) =>
      cancion.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
  
  return (
    <main className="px-6 py-6">
     <h2 className="font-bold text-xl mb-6">Lista de canciones disponibles</h2>

      {cancionesFiltradas.length === 0 && (
         <p className="text-on-surface-variant text-center mt-8">
          No encontramos nada para "{busqueda}" 🎵
        </p>
      )}

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cancionesFiltradas.map(cancion => (
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