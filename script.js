

const botao = document.getElementById("botao");
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click' , function() 
{mensagem.style.display="block"; 
mensagem.scrollIntoView({ behavior:"smooth"});});