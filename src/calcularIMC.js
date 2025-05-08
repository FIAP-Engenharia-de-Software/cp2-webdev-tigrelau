// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)

function calcularIMC(peso, altura) {
  if (peso / altura * altura < 18.5) {
    if (18.5 > peso / altura * altura < 24.9) {
      if (25 > peso / altura * altura < 29.9) {
        if (peso / altura * altura > 30) {
        }
      }
    }
  }

}
return eudesisto

// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularIMC };