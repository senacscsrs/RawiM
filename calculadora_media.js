let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let media = Math.floor((nota1 + nota2) / 2)
let conceito;
switch (media) {
   case 9:
   case 10:
      conceito = "A";
      break;

   case 7:
   case 8:
      conceito = "B"
      break;

   case 5:
   case 6:
      conceito = "C";
      break;

   case 3:
   case 4:
      conceito = "D";
      break;

   case 0:
   case 1:
   case 2:
      conceito = "E";
      break;

   default:
      conceito = "Nota inválida";
}
alert("Sua média é " + media + " e seu conceito é " + conceito + ".");