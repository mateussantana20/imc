var form = document.getElementById('form');
form.addEventListener('submit',handleSubmit);


function handleSubmit(event) {
  event.preventDefault();

  var getPeso = convertNumber('peso');
  var getAltura = convertNumber('altura');

  var getAlturaEmMetros = getAltura / 100;
  var resultado = getPeso / (getAlturaEmMetros * getAlturaEmMetros);

  if(resultado < 18.5 ) {
    var magraTipo = `MAGREZA precisa ganhar peso`
  }else if (resultado >= 18.5 &&  resultado <= 24.9) {
    var magraTipo =  `NORMAL está tudo bem com você`
  }else if (resultado >= 25.0 &&  resultado <= 29.9) {
    var magraTipo =  'SOBREPESO precisa perder peso'
  }else if (resultado >= 30.0 &&  resultado <= 39.9) {
    var magraTipo = 'OBESIDADE precisa perder muito peso'
  }else if (resultado >= 40.0) {
    var magraTipo = 'OBESIDADE GRAVE tome cuidado! isso é perigoso'
  }

  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.style.display = 'block';
  const layout =  `
    <p>Seu IMC é ${resultado.toFixed(2)}</p>
    <p>Sua Classificação é ${magraTipo}
  `
  resultadoDiv.innerHTML = layout
}

function convertNumber(id) {
  return  Number(document.getElementById(id).value);
}
