export const handler = async (event) => {
    const { num1, num2, operation } = event;
  
    if (num1 === undefined || num2 === undefined || !['soma', 'subtracao', 'multiplicacao', 'divisao'].includes(operation)) {
      return {
        statusCode: 400,
        body: JSON.stringify('Erro: Forneça dois números e uma operação válida (soma, subtracao, multiplicacao, divisao).'),
      };
    }
  
    let resultado;
    switch (operation) {
      case 'soma':
        resultado = num1 + num2;
        break;
      case 'subtracao':
        resultado = num1 - num2;
        break;
      case 'multiplicacao':
        resultado = num1 * num2;
        break;
      case 'divisao':
        if (num2 === 0) {
          return { statusCode: 400, body: JSON.stringify('Erro: Não é possível dividir por zero.') };
        }
        resultado = num1 / num2;
        break;
    }
  
    return {
      statusCode: 200,
      body: JSON.stringify(`Resultado da operação ${operation}: ${resultado}`),
    };
  };
  