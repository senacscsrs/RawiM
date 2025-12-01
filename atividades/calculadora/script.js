let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let operacao = document.getElementById("operacao")
let bt_calcular = document.getElementById("bt_calcular")
let resultadofinal = document.getElementById("resultado")
bt_calcular.addEventListener("click", function () {
    let valor1 = num1.value
    let numero1 = parseFloat(valor1)
    let valor2 = num2.value
    let numero2 = parseFloat(valor2)
    let operacaoSelecionada = operacao.value
    let resultado
    switch (operacaoSelecionada) {
        case "soma":
            resultado = numero1 + numero2
            break;

        case "subtracao":
            resultado = numero1 - numero2
            break;

        case "multiplicacao":
            resultado = numero1 * numero2
            break;

        case "divisao":
            resultado = numero1/numero2
            break;

        default:
            resultado = "invalido"
    }
resultadofinal.textContent =resultado
resultadofinal.style.color = "red"

})