

export const BarraBusqueda = ({ busqueda, setBusqueda }) => {

    return (
        <>
            <input
                type="text"
                placeholder="buscar cancion"
                className="rounder -lg border-2"
                value={busqueda}

                // Evento 
                onChange={(evento) => {
                    setBusqueda(evento.target.value);
                }}
           />;
        </>
    );
}
