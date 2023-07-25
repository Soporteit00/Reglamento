let boton = document.getElementById("boton");
let contadorClicks = 0;

function reproducirAudio(){
    if (contadorClicks % 2 === 0){
         let audio = new Audio("../../../img/Page2/prueba.mp4")
         audio.play();
    }else {
        window.location.href = "../Page3/Page3.html"
    }

    contadorClicks++;
}