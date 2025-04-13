//INPUTS
const typeInputElement = document.getElementById('type-name-input');
const rangeInputElement = document.getElementById('range-input');
const rangeNumberElement = document.getElementById('range-number');

//BOTONES
const buttonExample1Element = document.getElementById('button-example1');
const buttonExample2Element = document.getElementById('button-example2');

//DIV
const example1Container = document.getElementById('example1');
const example2Container = document.getElementById('example2');


//FUNCIONES

//MODO SIMPLE

//Ejemplo 1
const sayHello = () => {
  
  const inputName = typeInputElement.value;
  
  if (inputName.length >= 3) {
    const greet = document.createElement('h2');
    greet.textContent = `Hello, ${inputName}`;
    example1Container.append(greet);
  } else { 
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Please enter a name with at least 3 characters.';
    example1Container.append(errorMessage);
  }
  
};

//Ejemplo 2
const addHeader = () => {
  const headerNumber = rangeNumberElement.textContent; 

  if (headerNumber >= 1 && headerNumber <= 6) {
    const header = document.createElement(`h${headerNumber}`); //ya es generica sin tanto if
    header.textContent = `I am an h${headerNumber}`;
    example2Container.append(header);
  } else {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Please select a valid heading level (1-6).';
    example2Container.append(errorMessage);
  }
};


const changeRange = () => {
  rangeNumberElement.textContent = rangeInputElement.value;

}

//EVENTOS
buttonExample1Element.addEventListener('click', sayHello);
rangeInputElement.addEventListener('input', changeRange);
buttonExample2Element.addEventListener('click', addHeader);

//EJERCICIOS MODO PRO

//EJERCICIO 3
const supplies = [
  'a medkit',
  'a flashlight with half battery',
  'some canned food',
  'a rusty knife',
  'a bottle of clean water',
  'a pack of bullets',
  'a piece of cloth (could be used as a bandage)',
  'a lighter',
  'an empty bottle (might be useful)',
  'some herbs (smell weird)',
  'a broken walkie-talkie',
  'a protein bar, still edible',
  'a map with strange markings'
  ];
  
  const failureTexts = [
  'Nothing but silence and dust. Abby returned empty-handed.',
  'No supplies today. The world remains unforgiving.',
  "She searched everywhere, but luck wasn't on her side."
  ];


//BOTONES

const buttonExample3Element = document.getElementById('button-example3');

//DIV
const supplyHistoryElement = document.getElementById('supply-history');

//VARIABLES GENERALES
let dayCounter=0;//tiene que estar fuera de la funcion para que no se reinicie

//FUNCIONES
const searchSupply = () => {
  dayCounter++; //incremento el contador de dias
  const randomIndexSupply = Math.floor(Math.random() * supplies.length);
  const randomSupply = supplies[randomIndexSupply]; //saco el supplie random
  const randomIndexFailure = Math.floor(Math.random() * failureTexts.length);
  const randomFailureText = failureTexts[randomIndexFailure]; //saco el failure text random
  const listItem = document.createElement('li'); //creo el li

  //50% posibilidad
  if (Math.random() < 0.5) {
    listItem.textContent = `Day ${dayCounter}: ${randomSupply}`;
  } else {
    listItem.textContent = `Day ${dayCounter}: ${randomFailureText}`;
  }
  
  supplyHistoryElement.append(listItem);


};

//EVENTOS
buttonExample3Element.addEventListener('click', searchSupply);

//EJERCICIO 4

const buttonExample4Element = document.getElementById('button-example4');
const trafficZoneElement = document.getElementById('traffic-zone');

const cars = ['🚗', '🚕', '🚙'];
let carCounter = []; //contador de coches

//Funciones

const dodgeCar = () => {

  const randomIndex = Math.floor(Math.random() * cars.length);
  const randomCar = cars[randomIndex]; //coche random

  const traffic = document.createElement('span');
  traffic.textContent = randomCar;
  trafficZoneElement.append(traffic);

  //registro de coches
  carCounter.push(randomCar);
  if (carCounter.length > 3) {
    carCounter.shift(); // permite que el array tenga solo los 3 ultimos coches
  }

 
    let existingWarning = document.querySelector('p'); //busco si ya existe un p de warning
    if (existingWarning) {
      existingWarning.remove(); //lo elimino si existe
    }
    

  //cuando el array tiene 3 coches y TODOS sean iguales al primero del array
  //me perdi un poco en la formulacion del .every con flecha 
  if (carCounter.length === 3 && carCounter.every(car => car === carCounter[0])) {
    const warning = document.createElement('p');
    warning.textContent = `Bego, please be careful! This car model ${carCounter[0]} is stalking you! 🚨`;
    trafficZoneElement.append(warning);
    carCounter=[]; //reinicio el contador de coches
  }
  
}

//EVENTOS
buttonExample4Element.addEventListener('click', dodgeCar);




