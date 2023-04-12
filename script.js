function calcular(){
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var resultado = document.getElementById("resultado");
    var operacoes = document.getElementById("operacoes").value;
    if(numero1=== "" || numero2=== ""){
        resultado.innerHTML="Digite ao menos um numero";
        return
    } 
    if(operacoes=== "+"){
        resultado.innerHTML=parseInt(numero1)+parseInt(numero2);
    } else if(operacoes=== "-"){
        resultado.innerHTML=(numero1)-(numero2);
    } else if(operacoes=== "/"){
        resultado.innerHTML=(numero1)/(numero2);
    } else if(operacoes=== "*"){
        resultado.innerHTML=(numero1)*(numero2);
    }
}   