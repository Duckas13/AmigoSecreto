// atribuir os nomes do amigo secreto a array
let amigo = [];

function adicionarAmigo() {//função para adicionar amigo
    let nome = document.querySelector('#amigo').value;

    if (nome === '') {
        alert('Digite o nome do amigo');
        return;
    }
    else{

        amigo.push(nome);
        document.querySelector('#amigo').value = '';
        console.log(amigo);
        exibirListaNaTela();
}
  
}

function sortearAmigo() {//função para sortear amigo
    if (amigo.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    console.log(amigoSorteado);
    document.querySelector('#resultado').innerHTML = `<li>${amigoSorteado}</li>`;
}



function exibirListaNaTela() {//função para exibir lista na tela
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = ''; 

    amigo.forEach(nome => {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}
