document.querySelector('#serializeButton').addEventListener('click', () => {

    var textoInserido = document.querySelector('#inserir-textarea');

    if (textoInserido.value != "") {
        var textoSerializado = textoInserido.value.replace(/e/gi, "enter");
        textoSerializado = textoSerializado.replace(/i/gi, "imes");
        textoSerializado = textoSerializado.replace(/a/gi, "ai");
        textoSerializado = textoSerializado.replace(/o/gi, "ober");
        textoSerializado = textoSerializado.replace(/u/gi, "ufat");

        document.querySelector('.img-procurando').classList.add("invisivel");
        document.querySelector('#resposta-textarea').value = textoSerializado;
        document.querySelector('#btn-copiar').disabled = false;
        textoInserido.value = "";
    } else {
        alert("Por favor, insira um texto.")
    }
});

document.querySelector('#deserializeButton').addEventListener('click', () => {

    var textoInserido = document.querySelector('#inserir-textarea');

    if (textoInserido.value != "") {
        var textoSerializado = textoInserido.value.replace(/enter/g, "e");
        textoSerializado = textoSerializado.replace(/imes/g, "i");
        textoSerializado = textoSerializado.replace(/ai/g, "a");
        textoSerializado = textoSerializado.replace(/ober/g, "o");
        textoSerializado = textoSerializado.replace(/ufat/g, "u");

        document.querySelector('.img-procurando').classList.add("invisivel");
        document.querySelector('#resposta-textarea').value = textoSerializado;
        document.querySelector('#btn-copiar').disabled = false;
        textoInserido.value = "";
    } else {
        alert("Por favor, insira um texto.")
    }
});

document.querySelector('#btn-copiar').addEventListener('click', () => {

    document.querySelector("#resposta-textarea").disabled = false;
    document.querySelector("#resposta-textarea").select();
    document.execCommand("cut");
    document.querySelector('.img-procurando').classList.remove("invisivel");
    document.querySelector('#btn-copiar').disabled = true;
    document.querySelector("#resposta-textarea").disabled = true;
});