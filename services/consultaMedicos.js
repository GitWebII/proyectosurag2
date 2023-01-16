export async function consultarMedicos(){
    //Consumiendo API
    //1.Conocer la dirección del API
    //API o servicio
    let url="https://apigestorapp.vercel.app/gestionapp/especialistas"
    //Configurar a que voy al API
    //Configurando la request o petición
    let peticion={
        method:"GET",
        
    }
    //3. Consumir
    //Traer los datos del API usando Variable
    let respuesta=await fetch(url,peticion)
    let medicos=await respuesta.json()

    return(medicos)
}