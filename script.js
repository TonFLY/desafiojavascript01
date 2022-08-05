/* 
💡 O que será abordado nesse desafio:

- Variáveis;
- Operações matemáticas;
- Operadores comparativos;
- Condicional.


Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
O resultado final desse desafio deve ser algo em torno de:
*/

let firstNumber = prompt('Digite o primeiro número.')
let secondNumber = prompt('Digite o primeiro número.')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = (firstNumber * secondNumber).toFixed(2)
const div = (firstNumber / secondNumber).toFixed(2)
const restDiv = firstNumber % secondNumber

alert ('Soma: ' + sum)
alert ('Subtração: ' + sub)
alert ('Multiplicação: ' + multi)
alert ('Divisão: ' + div)
alert ('Resto da divisão: ' + restDiv)

if (sum % 2 == 0) {
    alert(" a soma destes números é par.")
} else {
    alert(" a soma destes números é impa.")
}

if (firstNumber == secondNumber) {
    alert("Os numeros inseridos são iguais.")
} else {
    alert("Os números inseridos são diferentes.")
}






