
export const BarraNavegacion = ({miLista}) => {

    return(
        <nav>
            <button>
                
               MiLista ({miLista.length > 0 ? <span>{miLista.length}</span> : null}); 
            </button>
        </nav>
    ); 
}

