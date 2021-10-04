// Ação do botão calcular
function calcular() {
  let elementoAprov = document.getElementById("mediaDasNotas").value;
  let elementoNota1 = document.getElementById("primeiraNota").value;
  let elementoNota2 = document.getElementById("segundaNota").value;
  let elementoNota3 = document.getElementById("terceiraNota").value;
  let elementoNota4 = document.getElementById("quartaNota").value;

  let aprov = parseFloat(elementoAprov);
  let n1 = parseFloat(elementoNota1);
  let n2 = parseFloat(elementoNota2);
  let n3 = parseFloat(elementoNota3);
  let n4 = parseFloat(elementoNota4);

  let media = ((n1 + n2 + n3 + n4) / 4).toFixed(2);

  let txt = media + " ";

  let passou;

  // Mensagem de aprovado ou reprovado
  if (media >= aprov) {
    passou = "Parabéns, você foi aprovado!!";
  } else {
    passou = "Que pena, você foi reprovado...";
  }

  console.log(txt);

  if (txt !== "NaN ") {
    let mostrarElemento1 = document.getElementById("valor");
    mostrarElemento1.innerHTML = txt;

    let mostrarElemento2 = document.getElementById("aprovado");
    mostrarElemento2.innerHTML = passou;
  } else {
    alert("Preencha todos os campos corretamente!");
  }
  document.getElementById("mediaDasNotas").value = "";
  document.getElementById("primeiraNota").value = "";
  document.getElementById("segundaNota").value = "";
  document.getElementById("terceiraNota").value = "";
  document.getElementById("quartaNota").value = "";
}