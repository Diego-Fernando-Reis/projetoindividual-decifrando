let cifraDeCesarMaiusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const code = document.getElementById('code');
const decode = document.getElementById('decode');
const cifra = document.getElementById('cifra');
const base = document.getElementById('base');
const modulo = document.getElementById('modulo');
const mensagemCode = document.getElementById('mensagemCode');
const mensagemDecode = document.getElementById('mensagemDecode');
const incremento = document.getElementById('incremento');
const btn = document.getElementById('btn');

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

