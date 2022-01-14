function insert(num){
    var resultado = document.getElementById('resultado').value;
    document.getElementById('resultado').value = resultado + num;
}

function limpar(){
    document.getElementById('resultado').value = "";
}

function apagar(){
    var resultado = document.getElementById('resultado').value;
    document.getElementById('resultado').value = resultado.substring(0, resultado.length -1)
}

function calcular(){
    var resultado = document.getElementById('resultado').value;
    if(resultado){
        document.getElementById('resultado').value = eval(resultado);
        document.getElementById('resultado').style.backgroundColor = 'white';
    }else{
        alert("error");
        document.getElementById('resultado').style.backgroundColor = '#ff6961';
    }
}

function mudei(){
    document.getElementById('resultado').style.backgroundColor = 'white';
}
