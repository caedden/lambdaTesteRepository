Função AWS Lambda - Operações Matemáticas
📌 Descrição
Esta função AWS Lambda executa operações matemáticas básicas: soma, subtração, multiplicação e divisão. Basta enviar dois números e a operação desejada no formato JSON, e a Lambda retornará o resultado.

🔧 Como Funciona
A função recebe um evento JSON com três parâmetros:

num1: Primeiro número (inteiro ou decimal).

num2: Segundo número (inteiro ou decimal).

operation: Operação desejada (soma, subtracao, multiplicacao, divisao).

📜 Exemplo de Entrada
json
{
  "num1": 10,
  "num2": 5,
  "operation": "soma"
}
📤 Exemplo de Saída
json
{
  "Resultado da operação soma": 15
}
