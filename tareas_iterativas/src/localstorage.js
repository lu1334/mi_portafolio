// Se crea una única vez el contenedor principal donde se mostrarán las tareas del localStorage
const divLocalStorage = document.createElement("div")
// divLocalStorage.classList.add("localStore__wrapper") // BEM: bloque contenedor de la sección localStorage

// Se crea una única vez la lista <ul> donde se insertarán los <li> con las tareas
const ulLocalStorage = document.createElement("ul")
// ulLocalStorage.classList.add("localStore__items") // BEM: elemento que contiene los ítems individuales

// Función que crea un elemento <li> con su clase y lo devuelve.
// Este será usado para representar una tarea en el DOM.
const liLocalStorage = ()=>{
    const li = document.createElement("li")
    // li.classList.add("localStorage__item") // BEM: cada tarea individual en la lista
    return li
}

const botonLocalStorage = ()=>{
   const boton =  document.createElement("button")
//    boton.classList.add("localStorage--eliminar")
   boton.textContent = "Eliminar"
   return boton
}

// Función que captura el valor ingresado en el input, lo limpia y lo transforma a minúsculas.
const capturarInputValor = ()=>{
    const inputElemento = document.querySelector("input")
    const valor = inputElemento.value.trim().toLowerCase()
    return valor
}

// Función que recupera la lista de tareas almacenadas en localStorage.
// Si no hay ninguna guardada, devuelve un array vacío.
const crearListaLocalStorage = ()=>{
    let lista = JSON.parse(localStorage.getItem("tareas")) || []
    return lista
}

// Función que guarda la lista completa de tareas en localStorage.
const guardarListaLocalStorage = (lista)=>{
    localStorage.setItem("tareas",JSON.stringify(lista))
}

// Función que agrega una nueva tarea al array, y lo actualiza en localStorage.
const addTareasLocalStorage = (tarea)=>{
    const lista = crearListaLocalStorage()
    lista.push({id:Date.now(),texto:tarea})
    guardarListaLocalStorage(lista)
    
}



// Función que recorre las tareas guardadas en localStorage y las pinta en el DOM.
// Si no hay tareas, muestra un mensaje de alerta.
const mostrarTareasLocalStorage = ()=>{
    const lista = crearListaLocalStorage()
    if(lista.length > 0){
        lista.forEach((element,index) => {
            const elementCreado = pintarTareaEnDOM()
            const texto = document.createTextNode(`${index +1} - ${element.texto}`)
            elementCreado.appendChild(texto)
            const boton = botonLocalStorage()
            boton.dataset.id = element.id;
            estilosTareasDOM(boton) // Aplica estilos al <button>                      
            elementCreado.appendChild(boton) // Agregamos el boton al <li>
            
            boton.addEventListener("click",()=>{ 
            elementCreado.remove()// Borramos el <li> (elementCreado)
            const nuevaLista = crearListaLocalStorage()
            const idTarea = parseInt(boton.dataset.id);
            const listaActual = nuevaLista.filter(tarea => tarea.id !== idTarea);
            guardarListaLocalStorage(listaActual)            
            })
        });
    }else {
        alert("en estos momentos no exiten tareas para mostrar")
    }
}

// Función que construye la estructura visual (div > ul > li) para mostrar una tarea.
// Aplica los estilos correspondientes y asegura que la estructura se inserte correctamente en el DOM.
const  pintarTareaEnDOM = ()=>{ 
    estilosTareasDOM(divLocalStorage)  // Aplica estilos al contenedor general
    estilosTareasDOM(ulLocalStorage)   // Aplica estilos a la lista <ul>

    const li = liLocalStorage()  // Crea un nuevo <li> para la tarea
    estilosTareasDOM(li)
 
    ulLocalStorage.appendChild(li)                  // Inserta el <li> en el <ul>
    divLocalStorage.appendChild(ulLocalStorage)     // Asegura que el <ul> esté dentro del <div>

    const divTareas = document.querySelector(".tareas")
    const inputTareas = document.querySelector("input")
    divTareas.insertBefore(divLocalStorage,inputTareas) // Inserta el div antes del input en el DOM

    return li // Retorna el <li> para poder modificarlo con el texto de la tarea
}

// Función que aplica estilos directamente a elementos del DOM según su tipo (DIV, UL, LI).
// Usa condicionales para evitar aplicar estilos incorrectos.
const estilosTareasDOM = (elemento)=>{
   if(elemento.tagName === "DIV"){
    elemento.classList.add("localStorage__wrapper")
     
   }
   if(elemento.tagName === "UL"){
    elemento.classList.add("localStorage__items")
    
   }
   if(elemento.tagName === "LI"){
    elemento.classList.add("localStorage__item")
   }
   if(elemento.tagName=== "BUTTON"){
    elemento.classList.add("localStorage--eliminar")
   }
}

// Exporta todas las funciones necesarias para usarlas desde otros módulos JavaScript.
export { 
    capturarInputValor, 
    crearListaLocalStorage, 
    guardarListaLocalStorage,
    addTareasLocalStorage, 
    mostrarTareasLocalStorage, 
    pintarTareaEnDOM,
    estilosTareasDOM 
}
