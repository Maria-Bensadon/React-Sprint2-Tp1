
# App (Tema Libre): OnMusic 🎵

Elegí realizar una App de catálogo musical con lista personal. 
La cual permite buscar canciones, agregarlas a una lista propia 
además de persistirla entre sesiones.

## Cómo correr el proyecto

npm install
npm run dev

## Tecnologías

- React + Vite
- Tailwind CSS v4
- localStorage

## Decisiones de estado

- "miLista" vive en App.jsx, porque es utilizada por varios componentes: BarraNavegacion, Panel, ListaCanciones. 
    - Panel: necesita mostrar las canciones de "miLista"
    - BarraNavegacion: recibe a "miLista" como props para poder mostrar la longitud del array (miLista.length)
    - ListaCanciones: para avisar si una cancion ya esta listada previamente, cuando se quiere agregarla.

- "busqueda" vive en App.jsx porque es modificada por "BarraBusqueda" a traves de "setBusqueda". App utiliza este hook para buscar ir filtrando las canciones, buscando que los caracteres ingresados por el usuario esten incluidos en una cancion. Esta vector con las canciones ya filtradas, se pasan a "ListaCanciones".

- "panelAbierto" vive en App.jsx porque la BarraNavegacion y Panel lo utilizan para abrir el panel.


## Qué se simplificó con el refactor (Bloque D)

Quedo más limpia el archivo de App.jsx. Las funcionalidades y sus lógicas estan modularizadas, lo cual da más orden al proyecto permitiendo visualizar mejor el flujo de datos al ir darle a cada componente un espacio propio, y delimitar mejor las responsabilidades de cada uno de ellos. 
App.jsx, por tanto, solo queda a cargo de:
- manejar los estados, 
- los hooks, 
- gestionar el flujo de datos entre todos los componentes. 

