//recolher valores do tipo, quantidade
function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let quantidadeIngresso = parseInt(document.getElementById('qtd').value);

    if (quantidadeIngresso <= 0 || !quantidadeIngresso) {
        alert('Por favor, digite um valor válido!');
        return;
    }

    if (tipoIngresso.value == 'pista') {
        comprarPista(quantidadeIngresso);
    } else if (tipoIngresso.value == 'superior') {
        comprarSuperior(quantidadeIngresso);
    } else if (tipoIngresso.value == 'inferior') {
        comprarInferior(quantidadeIngresso);
    }
}

function comprarPista(quantidadeIngresso) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidadeIngresso > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
        document.getElementById('qtd').value = '';
    } else {
        qtdPista = qtdPista - quantidadeIngresso;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
        document.getElementById('qtd').value = '';
    }
    verificarEsgotado();
}

function comprarSuperior(quantidadeIngresso) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidadeIngresso > qtdSuperior) {
        alert('Quantidade indisponível para tipo superior');
        document.getElementById('qtd').value = '';
    } else {
        qtdSuperior = qtdSuperior - quantidadeIngresso;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
        document.getElementById('qtd').value = '';
    }
    verificarEsgotado();
}

function comprarInferior(quantidadeIngresso) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidadeIngresso > qtdInferior) {
        alert('Quantidade indisponível para tipo inferior');
        document.getElementById('qtd').value = '';
    } else {
        qtdInferior = qtdInferior - quantidadeIngresso;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
        document.getElementById('qtd').value = '';
    }
    verificarEsgotado();
}

function verificarEsgotado() {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    
    if (qtdPista === 0 && qtdSuperior === 0 && qtdInferior === 0) {
        document.getElementById('titulo-disponibilidade').textContent = "Ingressos esgotados!";
    }
}

