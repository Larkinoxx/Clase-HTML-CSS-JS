import { personas } from "./persona.js";
import { computersChoiceDisplay, pagina } from "./dom.js";
import { usersChoiceDisplay } from "./dom.js";
import { resultDisplay } from "./dom.js";

const sectionMain = document.createElement("div")
const parrafoPrincipal = document.createElement("p")
parrafoPrincipal.innerHTML = personas[0].primerNombre + " " + personas[0].apellido
sectionMain.classList.add("main")
document.body.appendChild(parrafoPrincipal)

sectionMain.innerHTML = pagina
document.body.appendChild(sectionMain);