function insert(num){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado + num;
}

function limpar(){
    document.getElementById('resultado').innerHTML = "";
}

function apagar(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
        document.getElementById('resultado').style.backgroundColor = 'white';
    }else{
        alert("error");
        document.getElementById('resultado').style.backgroundColor = '#ff6961';
    }
}

function mudei(){
    document.getElementById('resultado').style.backgroundColor = 'white';
}
