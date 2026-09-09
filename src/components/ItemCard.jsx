
export const Card = ({ nombre, artista, duracion, 
    // se agregan "estaListada", "agregarCancion(cancion)"
    esAcustica, estaListada, agregarCancion, cancion }) => {
    return (
        <div>
            <h3>{nombre}</h3>
            <h4>{artista}</h4>
            <h4>{duracion}</h4>

            {/* BAGDE */}
            <>{esAcustica ? "Acústica" : null}</>

            {/* Boton con condicional ternario */}
            <button onClick={() => agregarCancion(cancion)}>
                {estaListada ? "✓ En mi lista" : "+ Agregar"}
            </button>
        </div>
    );
};

