function Calcular() {
    let nome = document.getElementById("nome");
    let peso = document.getElementById("peso");
    let altura = document.getElementById("altura");
    let res = document.getElementById("res");


    let p = Number(peso.value)
    let a = Number(altura.value)
    if (nome == 0 || p == 0 || a == 0) {
        alert("[ERRO] Digitar valores noc campos abaixo primeiro")
        
    }
    else {
        let  resultado = p/(a*a)
        res.innerHTML = `${nome.value} seu imc é igual a ${resultado} \n` 
        

        if(resultado<18.5){
            res.innerHTML+= "Abaixo do peso"
        }
        else if(resultado>=18.5 && resultado<=24.9){
            res.innerHTML+= "Peso Normal"
        }
        else if(resultado>=25 && resultado<=29.9){
            res.innerHTML+= "Sobrepeso"

        }
        else if(resultado>=30 && resultado<=34.9){
            res.innerHTML+= " Obesidade Grau I"

        }
        else if(resultado>=35 && resultado<=39.9){
            res.innerHTML+= "Obesidade Grau II"
        }
        else{
            res.innerHTML+="Obesidade grau III ou Mórbida"
        }
    
    }
}