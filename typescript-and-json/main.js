'use strict';
const array = [
  {
    isbn: '0-7289',
    title: 'Kafka on the Shore',
    author: 'Haruki Murakami',
  },
  {
    isbn: '1-2674',
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
  },
  {
    isbn: '2-5297',
    title: "On Earth We're Briefly Gorgeous",
    author: 'Ocean Vuong',
  },
];
const json = JSON.stringify(array);
console.log(json, typeof json);
const student = '{"number":"1738", "id":"505", "name":"Karina Kim"}';
const studentParsed = JSON.parse(student);
console.log(studentParsed, typeof studentParsed);
