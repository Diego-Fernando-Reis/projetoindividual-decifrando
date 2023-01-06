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
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let W = window.innerWidth;
let H = window.innerHeight;

canvas.width = W;
canvas.height = H;

let fontSize = 16;
let columns = Math.floor(W / fontSize);
let drops = [];
for(let i=0; i<columns; i++){
  drops.push(0);
}
let str = 'JAvascript Hacking Effect';
function draw(){
  context.fillStyle = 'rgba(0,0,0,0.05)';
  context.fillRect(0, 0, W, H);
  context.fontSize = '700' + fontSize + 'px';
  context.fillStyle = '#00cc33';
  for(let i=0; i<columns; i++){
    let index = Math.floor(Math.random()*str.length);
    let x = i*fontSize;
    let y = drops[i] * fontSize;
    context.fillText(str[index], x, y);
    if(y >= canvas.height && Math.random() > 0.99){
      drops[i] = 0;
    }

    drops[i]++;
  }
}
draw();
setInterval(draw, 35);
code.addEventListener('click', () => {
 modulo.innerHTML = `<p>Codificar Mensagem!</p>`;
 mensagemCode.style.display = 'block';
 mensagemDecode.style.display = 'none';
 btn.innerText = 'Codificar';
 
})

decode.addEventListener('click', () => {
 modulo.innerHTML =`<p>Decodificar Mensagem!</p>`;
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
      arrayTemporario[i] = cifraDeCesar[(cifraDeCesar.indexOf(arrayTemporario[i]) + incremento) % 26];
      
    }else if(cifraDeCesar.includes(arrayTemporario[i].toUpperCase())){
      arrayTemporario[i] = cifraDeCesar[(cifraDeCesar.indexOf(arrayTemporario[i].toUpperCase()) + incremento) % 26].toLowerCase();
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
      arrayTemporario[i] = cifraDeCesar[(cifraDeCesar.length + cifraDeCesar.indexOf(arrayTemporario[i]) - (incremento % 26) ) % 26];
      
    }else if(cifraDeCesar.includes(arrayTemporario[i].toUpperCase())){
      arrayTemporario[i] = cifraDeCesar[(cifraDeCesar.length + cifraDeCesar.indexOf(arrayTemporario[i].toUpperCase()) - (incremento % 26)) % 26].toLowerCase();
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
