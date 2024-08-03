//seleciona o campo de texto
const textArea = document.querySelector(".textArea");
const mensagem = document.querySelector(".mensagem");
const copiar = document.querySelector(".copiar");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],
                matrizCodigo[i][1]);


        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value); //chamada de funcao
    mensagem.value = textoDesencriptado; //define o valor da area de texto
    textArea.value = ""; //limpa o conteudo da area de texto
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringDesencriptada = stringDesencriptada.toLowerCase(); //convertendo para letras minusculas 
    for (let i = 0; i < matrizCodigo.length; i++) {         // iterando elementos da matrizCodigo enquanto o "i" for menor que martrizCodigo
        if (stringDesencriptada.includes(matrizCodigo[i][1])) { //verifica se stringDesencriptada contém essa string encriptada.
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],
                matrizCodigo[i][0]); //inverte as iteracoes 

        }
    }
    return stringDesencriptada; //retorna a funcao desencriptada
}

function btnCopiar(){
     // Seleciona a area de texto
    let mensagem = document.querySelector(".mensagem");
    // Seleciona o texto na área de texto
    mensagem.select();
     // Copia o texto selecionado para a área de transferência
     document.execCommand("copy");
     alert("Texto copiado!");


}

