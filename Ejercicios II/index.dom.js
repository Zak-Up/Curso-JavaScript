import hamburguerMenu from "./menu_hamburguesa.js";
import { digitalClock,alarm } from "./reloj.js";
// import { moveBall, shortcuts } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./botton_scroll.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("/Ejercicios II/assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","Apr 12, 2022 03:23:19","Feliz cumpleaños!");
    scrollTopButton(".scroll-top-btn");
});



// d.addEventListener("keydown", (e) => {
//     shortcuts(e);
//     moveBall(e, ".ball", ".stage");
// })

