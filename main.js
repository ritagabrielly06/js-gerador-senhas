const numeroSenha = document .querySelector('.parametro-senha__text0');
let tamanhoSenha = 12;
numeroSEnha.textContent = tamanhoSenha;

const botoes = document. querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[0].onclick = aumentaTamanho;

function diminuiTamanho (){
if(tamanhoSenha > 1){ 
    tamanhoSenha = tamanhoSenha
}
numeroSenha.textContent = tamanhoSenha
}

function aumentaTamanho(){
    if(tamanhoSenha < 20){
        tamanhoSenha = tamanhoSenha + 1;
    }
    numeroSenha.textContext = tamanhoSenha;
}














    
    
    
    
    
    
    
