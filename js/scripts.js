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

//FUNCIONES

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
// buttonExample1Element.addEventListener('click', sayHello);
rangeInputElement.addEventListener('input', changeRange);
buttonExample2Element.addEventListener('click', addHeader);