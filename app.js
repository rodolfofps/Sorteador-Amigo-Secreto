
let listaAmigos = [];
let nomesSorteados = [];

// Adição de nome de amigos à lista
function adicionarAmigos(){
    let validRegEx = /^[a-zA-Záéíóúãõ\s]+$/
    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo == ""){
        alert("Campo não pode estar vazio");
        
    }else if (!validRegEx.test(nomeAmigo)){
        alert("Insira caracteres válidos!");
        limparCampo();
    }
    else{
        if (listaAmigos.includes(nomeAmigo)){
            alert("Amigo já adicionado!")
            limparCampo();
        }else{
            listaAmigos.push(nomeAmigo);
            mostrarNomesAdicionados();
            limparCampo();
        }
    }    
}

//Função para limpar o campo de inserção de nomes
function limparCampo(){
    nomeAmigo = document.getElementById('amigo');
    nomeAmigo.value = '';
}

//Função para mostrar nomes adicionados à lista
function mostrarNomesAdicionados(){
    let itensLista = document.getElementById('listaAmigos');
    itensLista.innerHTML = "";
    for (let i=0; i < listaAmigos.length; i++){
        let novoItemListaExibicao = document.createElement('li');
        novoItemListaExibicao.textContent = listaAmigos[i];
        itensLista.appendChild(novoItemListaExibicao);
    }
}


//Função para realizar sorteio de um nome
function sortearAmigo(){
if(listaAmigos.length == 0){
    alert("Não há itens na lista para sortear!");
    return;
}
    let nomeSorteado    
do{
   let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
   nomeSorteado = listaAmigos[indiceSorteado]; //obtém o valor do índice 
}while(nomesSorteados.includes(nomeSorteado)); //verificação condicional, se já foi sorteado

nomesSorteados.push(nomeSorteado); 
document.getElementById('resultado').innerHTML = `O amigo sorteado foi <strong>${nomeSorteado}</strong>`;

if (nomesSorteados.length === listaAmigos.length){
    alert("Todos nomes já foram sorteados!");
    document.getElementById('btnSortear').disabled = true;
    }
}



function reiniciarSorteio(){
    listaAmigos=[]; //zerar array inicial dos nomes de amigos
    nomesSorteados = [];
    mostrarNomesAdicionados();
    limparCampo();
    limparCampoNomeSorteado();
    document.getElementById('btnSortear').disabled = false;
}

function limparCampoNomeSorteado(){
    nomeAmigo = document.getElementById('resultado');
    nomeAmigo.innerHTML = "";
}

