function cauculaIMC() {
  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value / 100;
  var imc = peso / (altura * altura);
    if(peso != '' && altura != ''){
  
    var resultado = imc;
    document.getElementById("resultado").innerHTML = resultado.toFixed(2);

  } else{
    document.getElementById("resultado").innerHTML = "Preencha ambos os campos";
  }
}
