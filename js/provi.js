const code = document.getElementById('code');
const decode = document.getElementById('decode');
const cifra = document.getElementById('cifra');
const base = document.getElementById('base');
const modulo = document.getElementById('modulo');
const mensagemCode = document.getElementById('mensagemCode');
const mensagemDecode = document.getElementById('mensagemDecode');
const incremento = document.getElementById('incremento');
const btn = document.getElementById('btn');
const formulario = document.getElementById('formulario');
const mostrarResultado = document.getElementById('mostrarResultado');

code.addEventListener('click', () => {
 modulo.innerHTML = `<p>Codificar Mensagem</p>`;
 mensagemCode.style.display = 'block';
 mensagemDecode.style.display = 'none';
 btn.innerText = 'Codificar';
 
})

decode.addEventListener('click', () => {
 modulo.innerHTML =`<p>Decodificar Mensagem</p>`;
 mensagemCode.style.display = 'none';
 mensagemDecode.style.display = 'block';
 btn.innerText = 'Decodificar';
})

cifra.addEventListener('click', () => {
 incremento.style.display = 'block';
})

base.addEventListener('click', () => {
 incremento.style.display = 'none';
})

formulario.addEventListener('submit', (e) =>{
  e.preventDefault();
  let radios = document.getElementsByName('modo');
  let radios2 = document.getElementsByName('cripto');

  for(var i = 0; i< radios.length; i++){
    if(radios[0].checked){
      for(var i = 0; i< radios2.length; i++){
        if(radios2[0].checked){
          let mensagem = mensagemCode.value;
          let valor = incremento.value;
          typeof(valor);
          mostrarResultado.innerHTML = `<p>${cifraDeCesarCodificar(mensagem, parseInt(valor))}</p>`;
        }else if(radios2[1].checked){
          let mensagem = mensagemCode.value;
          mostrarResultado.innerHTML = `<p>${base64Codificar(mensagem)}</p>`;
        }
      }
    }else if(radios[1].checked){
      for(var i = 0; i< radios2.length; i++){
        if(radios2[0].checked){
          let mensagem = mensagemDecode.value;
          let valor = incremento.value;
          mostrarResultado.innerHTML = `<p>${cifraDeCesarDecodificar(mensagem, parseInt(valor))}</p>`;
        }else if(radios2[1].checked){
          let mensagem = mensagemDecode.value;
          mostrarResultado.innerHTML = `<p>${base64Decodificar(mensagem)}</p>`;
        }
      }
    }
  }
  
  
})

function cifraDeCesarCodificar(valor, incremento) {
 let cifraDeCesar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

 /*Utilizei um regex pronto para me ajudar com os acentos.*/
 valor = valor.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

 let arrayTemporario = [];
 let i = 0;
 arrayTemporario = valor.split('');

 while(i < arrayTemporario.length){
    if(cifraDeCesar.includes(arrayTemporario[i])){
      if(cifraDeCesar.indexOf(arrayTemporario[i]) + incremento >= cifraDeCesar.length){
        arrayTemporario[i] = cifraDeCesar[cifraDeCesar.indexOf(arrayTemporario[i]) + incremento - cifraDeCesar.length]; 
      }else{
        arrayTemporario[i] = cifraDeCesar[cifraDeCesar.indexOf(arrayTemporario[i]) + incremento];
      }
      
    }else if(cifraDeCesar.includes(arrayTemporario[i].toUpperCase())){
      if(cifraDeCesar.indexOf(arrayTemporario[i].toUpperCase()) + incremento >= cifraDeCesar.length){
        arrayTemporario[i] = cifraDeCesar[cifraDeCesar.indexOf(arrayTemporario[i].toUpperCase()) + incremento - cifraDeCesar.length].toLowerCase(); 
      }else{
        arrayTemporario[i] = cifraDeCesar[cifraDeCesar.indexOf(arrayTemporario[i].toUpperCase()) + incremento].toLowerCase();
      }
    }else{
      arrayTemporario[i] = arrayTemporario[i];
    }
    i++;
 }

 return arrayTemporario.join("");
}

function cifraDeCesarDecodificar(valor, incremento) {
  let cifraDeCesar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  let arrayTemporario = [];
  let i = 0;
  arrayTemporario = valor.split('');
 
  while(i < arrayTemporario.length){
    if(cifraDeCesar.includes(arrayTemporario[i])){
      if(cifraDeCesar.indexOf(arrayTemporario[i]) - incremento < 0){
        arrayTemporario[i] = cifraDeCesar[cifraDeCesar.length + cifraDeCesar.indexOf(arrayTemporario[i]) - incremento]; 
      }else{
        arrayTemporario[i] = cifraDeCesar[cifraDeCesar.indexOf(arrayTemporario[i]) - incremento];
      }
    }else if(cifraDeCesar.includes(arrayTemporario[i].toUpperCase())){
      if(cifraDeCesar.indexOf(arrayTemporario[i].toUpperCase()) - incremento < 0){
        arrayTemporario[i] = cifraDeCesar[cifraDeCesar.length + cifraDeCesar.indexOf(arrayTemporario[i].toUpperCase()) - incremento].toLowerCase(); 
      }else{
        arrayTemporario[i] = cifraDeCesar[cifraDeCesar.indexOf(arrayTemporario[i].toUpperCase()) - incremento].toLowerCase();
      }
    }else{
     arrayTemporario[i] = arrayTemporario[i];
    }
   i++;
  }
 
  return arrayTemporario.join("");
}

function base64Codificar(valor){
  return btoa(valor);
}

function base64Decodificar(valor){
  return atob(valor);
}