// Instalação de biblioteca usando o npm (Node Package Modules) 
// é gerenciados de instalação de pacotes do node

import * as readline from 'readline-sync'

function gets(text) {
    return readline.question(text)
}

function print(text) {
    console.log(text)
}

// IMPORTANTE: Na DIO, as funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets": lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// Desafiolet operacao = parseInt(gets());
let quantidade = parseInt(gets());

let estoque = 5;


if (operacao == 1) { 
    estoque = estoque + quantidade
    print(estoque)
} else if ( operacao == 2) {
    if (quantidade > estoque) {
        print("Estoque insuficiente")
    } else if (quantidade <= estoque){
        estoque = estoque - quantidade
        print(estoque)
    }
} 
