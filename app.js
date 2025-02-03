
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
function mostrarNomesAdicionados(nome){
    let itensLista = document.getElementById('listaAmigos');
    itensLista.innerHTML = "";
    for (let i=0; i < listaAmigos.length; i++){
        let novoItemListaExibicao = document.createElement('li');
        novoItemListaExibicao.textContent = listaAmigos[i];
        itensLista.appendChild(novoItemListaExibicao);
    }

}



function exibirNomeSelecionado(){



return
}