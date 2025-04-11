//INPUTS
const typeInputElement = document.getElementById('type-name-input');

//BOTONES
const buttonExample1Element = document.getElementById('button-example1');

//DIV
const example1Container = document.getElementById('example1');

//FUNCIONES

const sayHello = () => {
  const greet = document.createElement('h2');
  greet.textContent = `Hello,${typeInputElement.value}`;

  example1Container.append(greet);
};

//EVENTOS
buttonExample1Element.addEventListener('click', sayHello);
