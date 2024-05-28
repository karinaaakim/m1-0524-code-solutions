function convertMinutesToSeconds(minutes: number): number {
  const product: number = minutes * 60;
  return product;
}
const convertMinutesToSecondsResult: number = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);
const convertMinutesToSecondsResult2: number = convertMinutesToSeconds(10);
console.log('convertMinutesToSecondsResult2:', convertMinutesToSecondsResult2);

function greet(name: string): string {
  const greeting: string = 'Hey ' + name + '!';
  return greeting;
}
const greetResult: string = greet('Beavis');
console.log('greetResult:', greetResult);
const greetResult2: string = greet('SpongeBob');
console.log('greetResult2:', greetResult2);

function getArea(width: number, height: number): number {
  const product: number = width * height;
  return product;
}
const getAreaResult: number = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);
const getAreaResult2: number = getArea(22, 38);
console.log('getAreaResult2:', getAreaResult2);

interface Person {
  firstName: string;
  lastName: string;
}
const getFirstName = (person: Person): string => {
  return person.firstName;
};
const getFirstNameResult: string = getFirstName({
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
});
console.log('getFirstNameResult:', getFirstNameResult);
const getFirstNameResult2: string = getFirstName({
  firstName: 'John',
  lastName: 'Henry',
});
console.log('getFirstNameResult2:', getFirstNameResult2);

const getLastElement = (array: any): any => {
  const lastIndex: number = array.length - 1;
  const lastElement: string = array[lastIndex];
  return lastElement;
};
const getLastElementResult: string = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]);
console.log('getLastElementResult:', getLastElementResult);
const getLastElementResult2: string = getLastElement([true, true, false, true]);
console.log('getLastElementResult2:', getLastElementResult2);

function callOtherFunction(otherFunction: Function, params: unknown): any {
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
