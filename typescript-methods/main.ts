const heroes = ['Iron Man', 'Black Widow', 'Doctor Strange', 'Black Panther'];
const randomNumber = Math.random() * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

interface books {
  title: string;
  author: string;
}
const library: books[] = [
  { title: 'Paradise Lost', author: 'John Milton' },
  { title: "The World's Religions", author: 'Huston Smith' },
  { title: 'Kafka on the Shore', author: 'Haruki Murakami' },
];
const lastBook = library.pop();
console.log('lastBook:', lastBook);
const firstBook = library.shift();
console.log('firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

const fullName = 'Karina Kim';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);

interface pplInfo {
  name: string;
  age: number;
  position: string;
}
const employee: pplInfo = {
  name: 'Tommy',
  age: 42,
  position: 'Dean',
};
const employeeKeys = Object.keys(employee);
console.log('employeeKeys:', employeeKeys);
const employeeValues = Object.values(employee);
console.log('employeeValues:', employeeValues);
const employeePairs = Object.entries(employee);
console.log('employeePairs:', employeePairs);
