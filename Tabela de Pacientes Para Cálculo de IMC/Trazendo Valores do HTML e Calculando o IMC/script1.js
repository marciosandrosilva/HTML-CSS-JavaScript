/* O aplicativo consiste em uma tabela com 5 pacientes onde cada um deles terá um nome, peso, altura
e gordura e cada um deles também terá o seu IMC calculado. Para trazer os valores do HTML utilizadas
classes numeradas para cada célula da tabela (td) onde cada número na classe corresponde a uma linha 
(tr) desta mesma tabela. Já os cálculos do imc de cada linha (paciente) foram realizados através do 
atributo 'textContent' já que os valores já estão definidos na tabela restando apenas realizar a 
importação dos mesmso para o JavaScript. A utilização do método 'toFixed()' serve para imprimir
na tela o valor de saída com 2 casas decimais. */

//----------------------- 1 -----------------------------
var celulaPeso = document.querySelector('.peso1')
var celulaAltura = document.querySelector('.altura1')
var celulaImc = document.querySelector('.imc1')

var imc = celulaPeso.textContent / (celulaAltura.textContent * celulaAltura.textContent)
celulaImc.textContent = imc.toFixed(2)

//----------------------- 2 -----------------------------
var celulaPeso = document.querySelector('.peso2')
var celulaAltura = document.querySelector('.altura2')
var celulaImc = document.querySelector('.imc2')

var imc = celulaPeso.textContent / (celulaAltura.textContent * celulaAltura.textContent)
celulaImc.textContent = imc.toFixed(2)

//------------------------ 3 ----------------------------
var celulaPeso = document.querySelector('.peso3')
var celulaAltura = document.querySelector('.altura3')
var celulaImc = document.querySelector('.imc3')

var imc = celulaPeso.textContent / (celulaAltura.textContent * celulaAltura.textContent)
celulaImc.textContent = imc.toFixed(2)

//------------------------ 4 ----------------------------
var celulaPeso = document.querySelector('.peso4')
var celulaAltura = document.querySelector('.altura4')
var celulaImc = document.querySelector('.imc4')

var imc = celulaPeso.textContent / (celulaAltura.textContent * celulaAltura.textContent)
celulaImc.textContent = imc.toFixed(2)

//------------------------ 5 ----------------------------
var celulaPeso = document.querySelector('.peso5')
var celulaAltura = document.querySelector('.altura5')
var celulaImc = document.querySelector('.imc5')

var imc = celulaPeso.textContent / (celulaAltura.textContent * celulaAltura.textContent)
celulaImc.textContent = imc.toFixed(2)


