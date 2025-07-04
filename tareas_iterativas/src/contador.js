// Función que crea un contador visual para mostrar cuántas tareas hay actualmente.
export function Contador(){
    // Se crea un div que actuará como contenedor del número de tareas
    const divContador = document.createElement("div")
    divContador.classList.add("contador__wrapper")
    
    
    
    // Se crea un título descriptivo encima del contador
    const tituloContador = document.createElement("h4")
    tituloContador.classList.add("contador__title")
    tituloContador.textContent = "Tareas actuales"
     "1px 2px white"
    
    // Inserta tanto el título como el contador visual antes del input dentro del contenedor principal de tareas
    const divTareas = document.querySelector(".tareas")
    const input = document.querySelector("input")
    divTareas.insertBefore(tituloContador, input)
    divTareas.insertBefore(divContador, input)

    // Retorna el div del contador para poder actualizar su contenido desde fuera
    return divContador
}
