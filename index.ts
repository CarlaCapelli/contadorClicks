let contador: number = 0;
function clickear() {
  //incrementa el valor de contador
  contador = contador + 1;
  //forma corta: contador++
  console.log("Hiciste " + contador + " clicks");
}
let botonContar = document.getElementById("clickear");
botonContar.addEventListener("click", clickear);
