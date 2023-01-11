//Importaciones
import {capturarDatos1} from '../formularios/formularioPacientes.js'

//etiquetas de control
let etiquetaNombre1=document.getElementById("nombre1")
let etiquetaIdentificacion1=document.getElementById("identificacion1")
let etiquetaTelefono1=document.getElementById("telefono1")
let etiquetaCorreo1=document.getElementById("correo1")
let etiquetaCuota1=document.getElementById("cuota1")
let etiquetaRegimen1=document.getElementById("regimen1")
let etiquetaGrupoingreso1=document.getElementById("grupoingreso1")
let etiquetaBoton1=document.getElementById("boton1")



//detectar el evento clic

etiquetaBoton1.addEventListener("click",function(evento){
    evento.preventDefault()
   
   capturarDatos1(etiquetaNombre1,etiquetaIdentificacion1,etiquetaTelefono1,etiquetaCorreo1,etiquetaCuota1,etiquetaRegimen1,etiquetaGrupoingreso1)
})