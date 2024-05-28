'use strict';
function convertMinutesToSeconds(minutes) {
  const product = minutes * 60;
  return product;
}
const convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);
const convertMinutesToSecondsResult2 = convertMinutesToSeconds(10);
console.log('convertMinutesToSecondsResult2:', convertMinutesToSecondsResult2);
function greet(name) {
  const greeting = 'Hey ' + name + '!';
  return greeting;
}
const greetResult = greet('Beavis');
console.log('greetResult:', greetResult);
const greetResult2 = greet('SpongeBob');
console.log('greetResult2:', greetResult2);
function getArea(width, height) {
  const product = width * height;
  return product;
}
const getAreaResult = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);
const getAreaResult2 = getArea(22, 38);
console.log('getAreaResult2:', getAreaResult2);
const getFirstName = (person) => {
  return person.firstName;
};
const getFirstNameResult = getFirstName({
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
});
console.log('getFirstNameResult:', getFirstNameResult);
const getFirstNameResult2 = getFirstName({
  firstName: 'John',
  lastName: 'Henry',
});
console.log('getFirstNameResult2:', getFirstNameResult2);
const getLastElement = (array) => {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  return lastElement;
};
const getLastElementResult = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]);
console.log('getLastElementResult:', getLastElementResult);
const getLastElementResult2 = getLastElement([true, true, false, true]);
console.log('getLastElementResult2:', getLastElementResult2);
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
console.log(
  'callOtherFunctionResult:',
  callOtherFunction(convertMinutesToSeconds, 10)
);
console.log(
  'callOtherFunctionResult2:',
  callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha'])
);
