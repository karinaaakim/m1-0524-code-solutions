const colors: string[] = ['red', 'white', 'blue'];
console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);

const americaIs: string = `America is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`;
console.log(americaIs);

colors[2] = 'green';
const mexicoIs: string = `Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`;
console.log(mexicoIs);

console.log('value of colors:', colors);
console.log('typeof colors:', typeof colors);

const students: string[] = ['Josh', 'Victoria', 'Jared', 'Val'];
const numberOfStudents: number = students.length;

const studentsInClass: string = `There are ${numberOfStudents} students in the class.`;
console.log(studentsInClass);

const lastIndex: number = students.length - 1;
console.log(lastIndex);
const lastStudent: string = students[students.length - 1];
const lastStudentIs: string = `The last student in the array is ${lastStudent}.`;
console.log(lastStudentIs);
console.log('value of students:', students);
console.log('typeof students:', typeof students);
