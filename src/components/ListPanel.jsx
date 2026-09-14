

export const Panel = ({ miLista, setPanelAbierto, agregarCancion, cancion }) => {

    return (
        <div>
            {miLista.length === 0 ? 'Todavía no agregaste nada, buscá algo arriba 👆' : null}
            {/** funcion map para renderizar la nueva vista */}
            {miLista.map((cancion) => {
                return <div key={cancion.id}>
                    <p>{cancion.nombre}</p>
                    <p>{cancion.artista}</p>
                    {/* Btn Quitar Cancion*/}
                    <button onClick={() => { agregarCancion(cancion) }}>
                        Quitar
                    </button>
                </div>
            })}

            {/*Btn Cerrar Panel*/}
            <button onClick={() => { setPanelAbierto(false) }}>
                Cerrar
            </button>
        </div>
    );
}
