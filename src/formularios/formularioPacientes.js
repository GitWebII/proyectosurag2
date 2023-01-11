//creamos una función que nos permita recibir los datos del formulario
import {validarFormulario1} from './validacionPacientes.js'
export function capturarDatos1(etiquetaNombre1,etiquetaIdentificacion1,etiquetaTelefono1,etiquetaCorreo1,etiquetaCuota1,etiquetaRegimen1,etiquetaGrupoingreso1){

let nombrePaciente=etiquetaNombre1.value
let identificacionPacientes=etiquetaIdentificacion1.value
let telefonoPaciente=etiquetaTelefono1.value
let correoPaciente=etiquetaCorreo1.value
let cuotaPaciente=etiquetaCuota1.value
let regimenPaciente=etiquetaRegimen1.value
let grupoingresoPaciente=etiquetaGrupoingreso1.value


//debemos almacenar todos los valores del formulario en una sola variable
//en una sola variable
//objeto= almacenar varios datos en 1 solo espacio de memoria

let datosFormularioPaciente={
    nombre1:nombrePaciente,
    identificacion1:identificacionPacientes,
    telefono1:telefonoPaciente,
    correo1:correoPaciente,
    cuota1:cuotaPaciente,
    regimen1:regimenPaciente,
    grupoingreso1:grupoingresoPaciente,
  
}
validarFormulario1(datosFormularioPaciente)

}