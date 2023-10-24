import * as Vue from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import {mainCore} from "./mainCore.Vue.js";

// TOMO EL MODULO A TRABAJAR Y CREAR LA APP
const { createApp} = Vue; 

// GUARDO EL ID EN UNA VARIABLE
const mainId = "#form";

// GENERO LA APP A MONTAR
const mainApp = createApp(mainCore);

// MONTADO DE LA APP
mainApp.mount(mainId);

