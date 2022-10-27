const btnCalcular = document.querySelector("#calcular")

const calcular = () => {
    const nome = document.querySelector("#nome").value
    const altura = document.querySelector("#altura").value
    const peso = document.querySelector("#peso").value
    

    if( nome === "" || altura === "" || peso === "" ){
        resultado.textContent = "Preencha todos os campos!"
    }else{
        const res = (peso / altura**2).toFixed(2)
        if(res < 18.5){
            resultado.textContent = `${nome}, seu IMC deu: ${res}, você esta leve de mais.`
        }else if(res < 25){
            resultado.textContent = `${nome}, seu IMC deu: ${res}, ta de boa.`
        }else if(res < 30){
            resultado.textContent = `${nome}, seu IMC deu: ${res}, ta quase dando ruim`
        }else if(res < 35){
            resultado.textContent = `${nome}, seu IMC deu: ${res}, você esta pesado(a) de mais.`
        }else if(res < 40){
            resultado.textContent = `${nome}, seu IMC deu: ${res}, ta muito ruim.`
        }else {
            resultado.textContent = `${nome}, seu IMC deu: ${res}, ta péssimo.`
        }
        
        
    }
}
