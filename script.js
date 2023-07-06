function alerta(){
    alert("Esta seccion esta indefinida :)")
    console.log(alerta)
}

let button = document.getElementById("botonContador");
let clicks = 0;

button.addEventListener("click", function() {
    clicks++;
    button.innerHTML = "Haz clic aquí (" + clicks + " clics)";
  }); 