const divTemporizador = document.createElement("div")
divTemporizador.classList.add("temporizador__wrapper")

const ptemporizador = document.createElement("p")
ptemporizador.classList.add("temporizador__texto")

const contenedor = document.getElementById("contenedor")

divTemporizador.append(ptemporizador)
contenedor.prepend(divTemporizador)

let tiempo = 0;
let temporizador;

export function iniciarTemporizador() {
  temporizador = setInterval(() => {
    tiempo++;
    // También podés mostrarlo en el HTML:
    // document.querySelector("#reloj").textContent = `${tiempo} segundos`;
  }, 1000);
}

export function detenerTemporizador() {
  clearInterval(temporizador);
}


