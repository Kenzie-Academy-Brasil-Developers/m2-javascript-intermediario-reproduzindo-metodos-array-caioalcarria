// Método map

const arrayMap = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas imprime o elemento na posição do index e de que array ele veio
function callbackMap(element, index, array) {
  
  return `Número ${element} na posição: ${index}, veio desse array: ${array}`;
}

function map(array, callback) {
  //sua lógica aqui
  result = []
  for (let i=0; i<array.length; i++){
    result.push(callback(array[i], i, array))
  }
  return result
}

console.table(map(arrayMap, callbackMap));

















//*Método Filter ---------

const arrayFilter = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas imprime o elemento que for maior que 2
function callbackFilter(element, index, array) {
  if (element > 2 && index && array.length > 2) {
    return element;
    
  }
}

function filter(array, callback) {
  //sua lógica
  result = []
  for (let i=0; i<array.length; i++){
    
    if(callback(array[i], i, array) != undefined){
        result.push(callback(array[i], i, array))
    }
    
  }
  return result
}

console.log(filter(arrayFilter, callbackFilter));















//*Método Reduce ---------

const arrayReduce = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas soma os valores, como um acumulador mesmo
function callbackReduce(acumulator, valorAtual) {
  return acumulator + valorAtual;
}

function reduce(array, callback, initialValue = array[0]) {
  //sua lógica
  for (let i=0; i<array.length; i++){
    initialValue = callback(initialValue, array[i])
    
  }
  return initialValue
}

 console.log(reduce(arrayReduce, callbackReduce));
 console.log(reduce(arrayReduce, callbackReduce, 50));
