const handleCaptureArrayLength = (numArray, filter) => {
  const arrayLength = prompt(`Qual sera numero de itens ${filter ? 'que deseja filtrar' : 'do array' }  ${numArray ? numArray : ''}:`);

  while(isNaN(arrayLength)) {
    arrayLength = prompt(`Qual sera numero de itens do array ${numArray ? numArray : ''} ${filter ? 'de filtro' : '' } :`);
  }
  return arrayLength;
}

const handleArrayValues = (numArray) => {
  const response = [];
  const value = [];
  arrayLength = handleCaptureArrayLength(numArray);
  for (let i = 0; i < arrayLength; i++) {
    value[i] = prompt(`Digite um valor para a posição ${i} do array ${numArray ? numArray : ''} :`);
    response[i] = Number(value[i]);
  }
  return response;
}

function firstAlgorithm() {
  const multiplier = prompt('Qual sera numero de itens do array:' );
  const value = prompt('Qual sera o conteúdo dentro dos indices:');
  const array = []
  for (let index = 0; index < multiplier; index++) {
    array.push(value);
  }
  console.log(array);
  alert(array);
}

function secondAlgorithm() {
  const array = handleArrayValues();
  const reverseArray = []
  for (let index = (array.length - 1); index >= 0; index--) {
    reverseArray.push(array[index]);
  }
  console.log(reverseArray);
  alert(reverseArray);
}

function thirdAlgorithm() {
  const array = handleArrayValues();
  const cleanArray = array.filter(value => !!value)
  console.log(cleanArray);
  alert(cleanArray);
}

function fourthAlgorithm() {
  const arrayLength = handleCaptureArrayLength();
  let array = []
  for (let index = 0; index < arrayLength; index++) {
    const subArray = []
    for (let indexSubArray = 0; indexSubArray < 2; indexSubArray++) {
      const value = prompt(`Qual o valor do item na posição ${indexSubArray} do array ${index} :`);
      subArray[indexSubArray] = indexSubArray === 0 ? value : Number(value); 
    }
    array.push(subArray);
  }
  const objectArray = {}
  array.forEach(value => {
    objectArray[value[0]] = value[1];
  });
  console.log(objectArray);
  alert(JSON.stringify(objectArray));
}

function fifthAlgorithm() {
  const array = handleArrayValues();
  const filterArrayLength = handleCaptureArrayLength(false, true);
  const arrayFilter = [];
  const value = [];
  for (let i = 0; i < filterArrayLength; i++) {
    value[i] = prompt(`Digite o valor para a posição ${i} que você quer filtrar :`);
    arrayFilter[i] = Number(value[i]);
  }
  const filteredArray =  array.filter(element => arrayFilter.indexOf(element) === -1)
  console.log(filteredArray);
  alert(filteredArray);
}

function sixthAlgorithm() {
  const array = handleArrayValues();
  const  noDuplicatesArray = array.filter((element, position) => {
    return array.indexOf(element) == position;
})
  console.log(noDuplicatesArray);
  alert(noDuplicatesArray);
}

function seventhAlgorithm() {
  const arrayOne = handleArrayValues(1);
  const arrayTwo = handleArrayValues(2);
  if (arrayOne.length === arrayTwo.length) {
    if (arrayOne.join(',') === arrayTwo.join(',')) {
      console.log(true);
    alert(true);
    } else {
      console.log(false);
      alert(false);
    }
    alert(true);
  }else {
    console.log(false);
    alert(false);
  }
}

function eighthAlgorithm() {
  let array = []
  const arrayLength = handleCaptureArrayLength();
  for (let index = 0; index < arrayLength; index++) {
    if(window.confirm(`Este valor para a posição ${index} é um array?`)){
      const microArray = handleArrayValues();
      array = [...array, microArray]
    }else{
    array[index] = Number(prompt(`Qual o valor da posição ${index}`))
    }
  }
  console.log(array.flat());
  alert(array.flat());
}

function ninthAlgorithm() {
  const newArray = []
  const array = handleArrayValues();
  const divider = Number(prompt('Em quantas vezes sera dividido o array:'));
  for (let index = 0; index < array.length; index+=divider) {
    const sliceArray = array.slice(index, (index + divider));
    newArray.push(sliceArray)
  }
  console.log(newArray)
  alert(newArray.map(element => (`[${element}]`)));
}

function tenthAlgorithm() {
  const arrayOne = handleArrayValues(1);
  const arrayTwo = handleArrayValues(2);
  const commonValuesArray = []
  arrayOne.forEach(value => {
    const commonValue = arrayTwo.find(element => element === value);
    if(commonValue !== undefined){
      commonValuesArray.push(commonValue);
    }
  })
  console.log(commonValuesArray);
  alert(commonValuesArray);
}