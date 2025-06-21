// Importa un módulo externo que devuelve el elemento contador del DOM.
import { Contador } from "./contador"
 
// Crea el contador y una variable numérica para llevar el seguimiento de cuántas tareas hay.
const contador = Contador()
let conteo = 0
// Función que captura y devuelve el texto ingresado en el input, eliminando espacios innecesarios al principio y al final.
const capturarTexto = ()=>{
    let input = document.querySelector("input")
    input = input.value.trim()
    return input
}

// Función que añade una nueva tarea a la lista.
// Verifica que el input no esté vacío, luego crea un <li> con el texto ingresado y un botón de eliminar.
// También asigna el evento al botón para que pueda eliminar la tarea correspondiente.
const añadirTexto = ()=>{
    const ul = document.querySelector("ul")
    const li = document.createElement("li")
    let input = document.querySelector("input")
    if(!input.value || input.value === " "){
        alert("Escriba una tarea") // Validación para evitar tareas vacías.
        return
    }else{
        li.textContent = capturarTexto() // Asigna el texto al nuevo <li>
        ul.appendChild(li) // Agrega el <li> al <ul>
        const boton = botonEliminar() // Crea el botón de eliminar
        li.appendChild(boton)   // Lo añade al <li>
        input.value = "" // Limpia el input después de añadir la tarea
        // Asigna evento al botón para que al hacer clic elimine la tarea

        conteo += 1 // Incrementa el conteo de tareas al añadir una nueva
        contador.textContent = conteo // Actualiza el contador visual

        boton.addEventListener("click",()=>{
            li.remove()
            conteo -=1 // Decrementa el contador cuando se elimina una tarea individual
            contador.textContent = conteo // Actualiza visualmente el contador
        })

        li.addEventListener("click",()=>{
            li.classList.toggle("marcado") // Permite marcar/desmarcar la tarea visualmente con una clase CSS
        })
    }
}

// Función que crea y devuelve un botón de eliminar estilizado.
// Se reutiliza esta función cada vez que se crea una nueva tarea.
const botonEliminar = ()=>{
    const btnEliminar = document.createElement("button")
    btnEliminar.classList.add("btn","btn--eliminar")
    btnEliminar.textContent = "Eliminar" 
    return btnEliminar
}


// Función que asigna el evento click al botón principal "Añadir".
// Este evento ejecuta la lógica de añadir una tarea cuando se hace clic.
const eventoAgregar = ()=>{
    const boton = document.querySelector("button")
    boton.addEventListener("click",añadirTexto)
    
}
// Función que crea el botón "Eliminar todas" y lo añade al contenedor de tareas.
// También asigna su evento para que funcione correctamente.
const funcionEliminarTarea = ()=>{
    const divTareasContenedor = document.querySelector(".tareas__contenedor")
    const btnEliminarTodas = crearBtnEliminarTodasTareas()
    divTareasContenedor.appendChild(btnEliminarTodas)
    btnEliminarTodas.addEventListener("click",btnEliminarTodasTareas)
}

// Crea el botón "Eliminar todas" con clases reutilizables.
const crearBtnEliminarTodasTareas = ()=>{
    const btnTodas = document.createElement("button")
    btnTodas.textContent = "eliminar todas"
    btnTodas.classList.add("btn","btn--eliminar-todas")
    return btnTodas
}

// Función que elimina todas las tareas de la lista (<li>), sin eliminar el contenedor <ul>.
// También reinicia el contador visual.
const btnEliminarTodasTareas = ()=>{
    const li = document.querySelectorAll("ul li")
    li.forEach(item => {
        item.remove()
    });
    conteo = 0
    contador.textContent = conteo
}




// Función principal que inicializa la aplicación.
// Se exporta para ser llamada desde el archivo main.js
function main(){
    eventoAgregar()
    funcionEliminarTarea()
}
export {main}