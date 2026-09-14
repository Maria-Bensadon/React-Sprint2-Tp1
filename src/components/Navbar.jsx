

export const BarraNavegacion = ({ miLista, setPanelAbierto }) => {
  return (
    <nav>
      <button onClick={() => setPanelAbierto(true)}>
        MiLista ({miLista.length > 0 ? <span>{miLista.length}</span> : null})
      </button>
    </nav>
  );
};

