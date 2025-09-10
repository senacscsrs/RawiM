let nome = prompt("Digite seu nome:");
let nota1 = parseFloat(prompt("digite a primeira nota:"))
let nota2 = parseFloat(prompt("digite a segunda nota:"))
let nota3 = parseFloat(prompt("digite a terceira nota:"))
let media = (nota1 + nota2 + nota3) / 3
if (media >= 7) {
    alert("Parabéns " + nome + ", você foi aprovado com média " + media + "!")
} else {
    alert("Infelizmente " + nome + ", você foi reprovado com média " + media + ".")

}
console.log("Nome: " + nome);
console.log("Média: " + media);
console.log("Notas: " + nota1 + ", " + nota2 + ", " + nota3);