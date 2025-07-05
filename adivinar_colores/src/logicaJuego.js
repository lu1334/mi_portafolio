let cajaActiva = null

export function inicializarJuego(cajas, colores) {
    cajas.forEach((caja, i) => {
        caja.dataset.color = colores[i]
        caja.dataset.estado = "false"
    })

    cajas.forEach(caja => {
        caja.addEventListener("click", () => {
            if (!cajaActiva) {
                caja.style.backgroundColor = caja.dataset.color
                caja.draggable = true
                cajaActiva = caja
            }
        })
    })

    cajas.forEach(caja => {
        caja.addEventListener("dragover", (e) => {
            const event = e.currentTarget
            if (event.dataset.estado === "false" && event.dataset.color === cajaActiva.dataset.color) {
                e.preventDefault()
            }
        })
    })

    cajas.forEach(caja => {
        caja.addEventListener("dragstart", (e) => {
            if (!cajaActiva || caja.dataset.estado === "true") {
                e.preventDefault()
            }
        })
    })

    cajas.forEach(caja => {
        caja.addEventListener("drop", (e) => {
            const event = e.currentTarget
            if (cajaActiva.dataset.color === event.dataset.color) {
                event.style.backgroundColor = caja.dataset.color
                event.dataset.estado = "true"
                event.draggable = false
                cajaActiva.dataset.estado = "true"
                cajaActiva.draggable = false
                cajaActiva = null
                if (comprobacion(cajas)) {
                    alert("fin del juego ha ganado")
                }
            } else {
                cajaActiva.style.backgroundColor = "black"
                event.style.backgroundColor = event.dataset.color
                setTimeout(() => {
                    event.style.backgroundColor = "black"
                }, 1000)
                cajaActiva = null
            }
        })
    })
}

function comprobacion(cajas) {
    return [...cajas].every(caja => caja.dataset.estado === "true")
}