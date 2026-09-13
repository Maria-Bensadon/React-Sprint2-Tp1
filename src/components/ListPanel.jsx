

export const Panel = ({ miLista, setPanelAbierto, agregarCancion, cancion }) => {

    return (
        <div>
            {miLista.map((cancion) => {
                return <div key={cancion.id}>
                    nombre ={cancion.nombre},
                    artista={cancion.artista}
                    {/* Boton Quitar Cancion*/}
                    <button onClick={() => { agregarCancion(cancion) }}>
                        Quitar
                    </button>
                </div>
            })}

            {/*Boton Cerrar Panel*/}
            <button onClick={() => { setPanelAbierto(false) }}>
                Cerrar
            </button>
        </div>
    );
}
