import "./style.scss"

import { inicializarJuego } from './logicaJuego.js'
import { coloresContenedor } from './colores.js'

const cajasDiv = document.querySelectorAll(".caja")
inicializarJuego(cajasDiv, coloresContenedor)