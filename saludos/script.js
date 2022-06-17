console.log("Se nota que todavía me extrañas");



//console.log("frase " +frase);
//let frase = document.getElementsByTagName("h2")[1].innerHTML;
setInterval(cambiarSaludo, 2000 ); //Funcion de intervalo de tiempo, algo  que se repite cada cierto tiempo, funciones asíncronas en ms
//Cambiar el texto del h2[1] cada 2 segundos 

// Hacer este tipo de comentarios 
/**
 * Cambia la frase en h2
 * uno sí uno no 
 */
function cambiarSaludo (){
 // console.log("Me parece una falta de respeto");
    let frase = document.getElementsByTagName("h2")[1];
    // frase.innerText="Impongo moda";
    // frase.innerHTML="Impongo moda";


    if ( frase.innerHTML == "Ganando como siempre"){

        frase.innerHTML = "Impongo moda para las niñas!";
    }else{
        frase.innerHTML = "Ganando como siempre"
    }
  //  console.log("frase " +frase);

}