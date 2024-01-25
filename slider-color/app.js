// aca estamos llamando del html
const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

// convertimos las variables en let
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.textContent = inputRojo.value;
textoVerde.textContent = inputVerde.value;
textoAzul.textContent = inputAzul.value;

// aca en esta funcion lo que hacemos es sacra las bariablse de los 3 primarios(colores) lo que hace que automaticamente el boddy del html cambie de color por el rgb
function actualizarColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

// Para actualizar Red (Rojo).
//El evento Change tiene lugar cuando cambia el valor de la propiedad Value
inputRojo.addEventListener("change", (e) => {
  rojo = e.target.value;
  textoRojo.textContent = rojo;
  // en este actualizar lo que hacmeos que las bariables de cad acolor cambien de numero y oara que se guarden
  // en la bariable de arriva ya que es la funcion que hae que cambie de color
  actualizarColor(rojo, verde, azul);
});

// Para actualizar Green (Verde).
inputVerde.addEventListener("change", (e) => {
  verde = e.target.value;
  textoVerde.textContent = verde;
  actualizarColor(rojo, verde, azul);
});

// Para actualizar Blue (Azul).
inputAzul.addEventListener("change", (e) => {
  azul = e.target.value;
  textoAzul.textContent = azul;
  actualizarColor(rojo, verde, azul);
});
