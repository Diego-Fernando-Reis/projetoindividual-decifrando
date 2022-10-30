const code = document.getElementById('code');
const decode = document.getElementById('decode');
const cifra = document.getElementById('cifra');
const base = document.getElementById('base');
const modulo = document.getElementById('modulo');
const mensagemCode = document.getElementById('mensagemCode');
const mensagemDecode = document.getElementById('mensagemDecode');
const incremento = document.getElementById('incremento');
const btn = document.getElementById('btn');
const form = document.getElementById('form');

code.addEventListener('click', () => {
 modulo.innerHTML = `<p>Codificar Mensagem</p>`;
 mensagemCode.style.display = 'block';
 mensagemDecode.style.display = 'none';
 btn.value = 'codificar';
 alert(btoa('Diego'));
})

decode.addEventListener('click', () => {
 modulo.innerHTML =`<p>Decodificar Mensagem</p>`;
 mensagemCode.style.display = 'none';
 mensagemDecode.style.display = 'block';
 btn.value = 'decodificar';
 alert(atob('RGllZ28='));
})

cifra.addEventListener('click', () => {
 incremento.style.display = 'block';
})

base.addEventListener('click', () => {
 incremento.style.display = 'none';
})

form.addEventListener('submit', (e) =>{

 e.preventDefault;
})

function cifraDeCesar(valor, incremento) {
 let cifraDeCesar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

 let arrayTemporario = [];
 let i = 0;
 arrayTemporario = valor.split('');

 while(i < arrayTemporario.length){
  if(cifraDeCesar.includes(arrayTemporario[i])){
   arrayTemporario[i] = cifraDeCesar[cifraDeCesar.indexOf(arrayTemporario[i]) + incremento];
  }else if(cifraDeCesar.includes(arrayTemporario[i].toUpperCase())){
   arrayTemporario[i] = cifraDeCesar[cifraDeCesar.indexOf(arrayTemporario[i].toUpperCase()) + incremento].toLowerCase();
  }else{
   arrayTemporario[i] = arrayTemporario[i];
  }
  i++;
 }

 return arrayTemporario;
}

console.log(getElementsByName('modo').value);