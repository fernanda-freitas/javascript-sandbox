import React from 'react'
import './App.css';

function App() {
  // shift - Remove um item na primeira posição de um array.
  console.log(`shift - Remove um item na primeira posição de um array`)
  const array1 = [1, 2, 3]
  console.log(array1)
  const firstItemRemoved = array1.shift()
  console.log(firstItemRemoved)
  console.log(array1)
  
  // unshift - Adiciona um item na primeira posição de um array.
  console.log(`unshift - Adiciona um item na primeira posição de um array`)
  const array2 = [4, 5, 6]
  console.log(array2)
  const newArr2 = array2.unshift(12)
  console.log(newArr2) // returns the lenght of the new array
  console.log(array2)

  // pop - Remove um item na última posição de um array.
  console.log(`pop - Remove um item na última posição de um array.`)
  const array3 = [7, 8, 9]
  console.log(array3)
  const newArr3 = array3.pop()
  console.log(newArr3)
  console.log(array3)

  // push - Adiciona um item na última posição de um array.
  console.log(`push - Adiciona um item na última posição de um array`)
  const array4 = [10, 11, 12]
  console.log(array4)
  const newArr4 = array4.push(13)
  console.log(newArr4) // returns the lenght of the new array
  console.log(array4)

  // Concat - Junta vários arrays e devolve uma cópia dos arrays concatenados.
  console.log(`Concat - Junta vários arrays e devolve uma cópia dos arrays concatenados`)
  const array5 = [14, 15, 16]
  const array6 = [17, 18, 19]
  console.log(array5)
  console.log(array6)
  console.log(array5.concat(array6))

  // Filter - Cria um array com todos os elementos avaliados com true pela função especificada.
  console.log(`filter - Cria um array com todos os elementos que passarem na condição especificada`)
  const array7 = [20, 21, 22]
  console.log(array7)
  const newArr = array7.filter((newArr) => newArr % 2 === 0)
  console.log(newArr)

  // map - Cria outro array a partir de uma função que contém o critério/condição e devolve os elementos do array que correspondam ao critério.
  console.log(`map - Cria outro array transformando cada item a partir da iteração em cada item`)
  const array8 = [23, 24, 25, 26]
  console.log(array8)
  const newArr8 = array8.map((newArr) => newArr + 1)
  console.log(newArr8)

  // reduce - Recebe uma função com os seguintes parâmetros(previousValue, currentValue, index e array). Index e array são opcionais.
  // podemos usar reduce para devolver um único valor que será somado a um acumulador.
  console.log(`reduce - Recebe uma função com os seguintes parâmetros(previousValue, currentValue, index e array). Index e array são opcionais. Caso: Somar todos os itens de um array!`)
  const array9 = [27, 28, 29, 30]
  console.log(array9)
  const newArr9 = array9.reduce((prev, current) => prev + current )
  console.log(newArr9)
  
  // join - Reúne todos os elementos do array em uma string.

  // slice - Devolve um novo array a partir do índice especificado.

  // Every - Itera por todos os elementos do array, verificando uma condição desejada (função) até que false seja devolvido
  
  // forEach - Executa uma função específica em cada elemento do array.
  
  // indexOf - Pesquisa o array em busca de elementos específicos e devolve a sua posição.
  
  // lastIndexOf - Devolve a posição do último item do array que corresponda ao critério de pesquisa.
  
  // reverse - Inverte o array, de modo que o último item se torne o primeiro, e vice-versa
  
  // some - Itera por todos os elementos do array, verificando a condição desejada (função)
  
  // sort - Organiza o array em ordem alfabética ou de acordo com a função específicada.
  
  // toString - Devolve o array na forma de uma string.
  
  // valueOf - É semelhante ao método toString e devolve o array na forma de uma string.

  return (
    <div className="App">
    </div>
  );
}

export default App;
