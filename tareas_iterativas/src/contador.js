// Función que crea un contador visual para mostrar cuántas tareas hay actualmente.
export function Contador(){
    // Se crea un div que actuará como contenedor del número de tareas
    const divContador = document.createElement("div")
    divContador.classList.add("contenedorContador")
    
    // Estilos del contenedor del contador
    divContador.style.width = "3rem"
    divContador.style.height = "1rem"
    divContador.style.background = "white"
    divContador.style.marginBottom = "1rem"
    divContador.style.borderRadius = "5px"
    divContador.style.border = "1px solid blue"
    divContador.style.textAlign = "center"
    divContador.style.fontWeight = "bold"
    
    // Se crea un título descriptivo encima del contador
    const tituloContador = document.createElement("h4")
    tituloContador.classList.add("parrafoContador")
    tituloContador.textContent = "Tareas actuales"
    
    // Estilos del título del contador
    tituloContador.style.fontSize = "1rem"
    tituloContador.style.color = "blue"
    tituloContador.style.textShadow = "1px 2px white"
    
    // Inserta tanto el título como el contador visual antes del input dentro del contenedor principal de tareas
    const divTareas = document.querySelector(".tareas")
    const input = document.querySelector("input")
    divTareas.insertBefore(tituloContador, input)
    divTareas.insertBefore(divContador, input)

    // Retorna el div del contador para poder actualizar su contenido desde fuera
    return divContador
}
