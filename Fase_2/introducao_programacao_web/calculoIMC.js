const nome = 'Carlos'
const peso = 100
const altura = 1.75
const sexo = 'Masculino'

const imc = peso / (altura * altura)

if(imc >= 30) {
    console.log(`${nome} você está acima do peso! Seu IMC é: ${imc}`)
} else {
    console.log(`${nome} você não está acima do peso! Seu IMC é: ${imc}`)
}
