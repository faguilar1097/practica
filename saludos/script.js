console.log("Se nota que todavía me extrañas");



//console.log("frase " +frase);
//let frase = document.getElementsByTagName("h2")[1].innerHTML;
setInterval(cambiarSaludo, 500 ); //Funcion de intervalo de tiempo, algo  que se repite cada cierto tiempo, funciones asíncronas en ms

//Cambiar el texto del h2[1] cada 2 segundos 
function cambiarSaludo (){
   // console.log("Me parece una falta de respeto");
    let frase = document.getElementsByTagName("h2")[1].innerHTML;
    if ( document.getElementsByTagName("h2")[1].innerHTML == "Ganando como siempre"){

        document.getElementsByTagName("h2")[1].innerHTML = "Impongo moda para las niñas!";
    }else{
        document.getElementsByTagName("h2")[1].innerHTML = "Ganando como siempre"
    }
  //  console.log("frase " +frase);
}