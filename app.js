
let listaAmigos = [];


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



function sortearAmigo(){
    if(listaAmigos.length != ""){
        let indiceSorteado = Math.floor(Math.random() * listaAmigos.length); //gerando índice aleatório da listaAmigos
        let nomeSorteado = listaAmigos[indiceSorteado]; //cria uma variável para receber o valor do índice sorteado
        document.getElementById('resultado').innerHTML = `O amigo sorteado foi <strong>${nomeSorteado}</strong>`
    }else{
        alert("Não há itens na lista para sortear!");
        return;
    }
return
}