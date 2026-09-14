

export const Panel = ({ miLista, setPanelAbierto, agregarCancion, vaciarLista }) => {

    return (
        <div>
            {/** Condicional */}
            {miLista.length === 0 ? 'Todavía no agregaste nada, buscá algo arriba 👆' : null}

            {/** Funcion map para renderizar la nueva vista */}
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

             {/* Botones*/}
            <>
             <button onClick={() => { setPanelAbierto(false) }}>
                Cerrar 
            </button>
            </>
            <>
                <button onClick={() => { vaciarLista() }}>
                    Vaciar Lista
                </button>
            </>
        </div>
    );
}
