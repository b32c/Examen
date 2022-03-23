function limpiar() {
  document.getElementById("miFormulario").reset();
}

function sumar() {
  let x = parseFloat(document.getElementById("valor1").value);
  let y = parseFloat(document.getElementById("valor2").value);
  document.getElementById("el-resultado").innerHTML = x + y;
}

function restar() {
  let x = parseFloat(document.getElementById("valor1").value);
  let y = parseFloat(document.getElementById("valor2").value);
  document.getElementById("el-resultado").innerHTML = x - y;
}

function multiplicar() {
  let x = parseFloat(document.getElementById("valor1").value);
  let y = parseFloat(document.getElementById("valor2").value);
  document.getElementById("el-resultado").innerHTML = x * y;
}

function dividir() {
  let x = parseFloat(document.getElementById("valor1").value);
  let y = parseFloat(document.getElementById("valor2").value);
  document.getElementById("el-resultado").innerHTML = x / y;
}
