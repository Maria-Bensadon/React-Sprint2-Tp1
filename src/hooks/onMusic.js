import { useLocalStorage } from "./useLocalStorage";

export const useMiLista = () => {

    // lista personal
    const [miLista, setMiLista] = useLocalStorage('OnMusic:MiLista', []);

    // TOGGLE
    const agregarCancion = (canciones) => {
        setMiLista((lista) => {
            // falta:
            const encontrada = lista.some((item) => item.id === canciones.id);

            if (encontrada) {
                return lista.filter((item) => item.id !== canciones.id);
            }

            // agrega la canciones al array
            return [...lista, canciones];
        });
    };

    // Vaciar lista
    const vaciarLista = () => {
        if (confirm('Deseas eliminar la lista personal')) {
            setMiLista([]);
            localStorage.removeItem('OnMusic:MiLista');
        }
    }

    return { miLista, agregarCancion, vaciarLista };
}

