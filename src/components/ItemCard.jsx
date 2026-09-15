

export const Card = ({ nombre, artista, duracion,
    esAcustica, estaListada, agregarCancion, cancion }) => {
    return (
        <div className="bauhaus-surface bauhaus-border bauhaus-shadow bauhaus-interactive p-4 flex flex-col gap-2">

            {/* BAGDE CONDICIONAL */}
            <p>
                {esAcustica ? <span className="tag-ochre px-2 py-1 text-xs font-bold w-fit">Acústica</span> : null}
            </p>

            <h3 className="font-bold text-base">{nombre}</h3>
            <h4 className="text-sm text-on-surface-variant">{artista}</h4>
            <h4 className="text-xs text-on-surface-variant">{duracion}</h4>


            {/* Btn con condicional ternario */}
            <button onClick={() => agregarCancion(cancion)}
                 className={`mt-2 px-4 py-2 font-bold bauhaus-interactive bauhaus-shadow ${estaListada ? 'btn-secondary' : 'btn-primary'}`}
            >
                {estaListada ? '✓ En mi lista' : '+ Agregar'}
            </button>
        </div>
    );
};



