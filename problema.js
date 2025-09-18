let camisa = 50
let boné = 30
let tenis = 200
let jaqueta = 180
let calça = 120
let vcamisa = parseInt(prompt("quantas camisas venderam?"))
let vboné = parseInt(prompt("quantos bonés venderam?"))
let vtenis = parseInt(prompt("quantos tênis venderam?"))
let vjaqueta = parseInt(prompt("quantas jaquetas venderam?"))
let vcalça = parseInt(prompt("quantas calças venderam?"))
let faturamento = (camisa * vcamisa) + (boné * vboné) + (tenis * vtenis) + (jaqueta * vjaqueta) + (calça * vcalça)
let vendas = {
    Camisa: vcamisa,
    Boné: vboné,
    Tênis: vtenis,
    Jaqueta: vjaqueta,
    Calça: vcalça
}
let maisVendido
let maiorQuantidade = 0
for (let produto in vendas) {
    if (vendas[produto] > maiorQuantidade) {
        maiorQuantidade = vendas[produto]
        maisVendido = produto
    }
}
alert("Faturamento total: R$ " + faturamento + " Produto mais vendido: " + maisVendido + " (" + maiorQuantidade + " unidades)")
