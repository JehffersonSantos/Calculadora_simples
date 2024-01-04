const number = document.getElementById("numero");
const btn = document.querySelector(".btn");
const container = document.querySelector(".container")
const calculo = document.querySelector(".calculo")
const resultado = document.querySelector(".resultado")


btn.addEventListener("click", function() {

    console.log("clicou")

    resultado.innerHTML = " ";

    for(i = 0; i <= 10; i++) {
        if(number.value <= 10) {
            const multiplica = i * number.value
            console.log(multiplica)
            console.log(typeof(number.value))
    
            const paragrafo = document.createElement("p");

            console.log(paragrafo)

            resultado.appendChild(paragrafo)

            console.log(resultado)

            paragrafo.innerHTML = `${i} * ${number.value} = ${multiplica}`

            
        } else {
            resultado.innerHTML = "Por favor coloque um numero de 0 a 10";
        }

    }


} ) 
    
