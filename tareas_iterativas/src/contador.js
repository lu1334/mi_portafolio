export function Contador(){
    const divContador = document.createElement("div")
    divContador.classList.add("contenedorContador")
    divContador.style.width = "3rem"
    divContador.style.height = "1rem"
    divContador.style.background = "white"
    divContador.style.marginBottom = "1rem"
    divContador.style.borderRadius = "5px"
    divContador.style.border = "1px solid blue"
    divContador.style.textAlign = "center"
    divContador.style.fontWeight = "bold"
    
    
    
    const tituloContador = document.createElement("h4")
    tituloContador.classList.add("parrafoContador")
    tituloContador.textContent = "Tareas actuales"
    tituloContador.style.fontSize = "1rem"
    tituloContador.style.color = "blue"
    tituloContador.style.textShadow = "1px 2px white"
    
    
    
    const divTareas = document.querySelector(".tareas")
    const input = document.querySelector("input")
    divTareas.insertBefore(tituloContador,input)
    divTareas.insertBefore(divContador,input)
    return divContador

}
