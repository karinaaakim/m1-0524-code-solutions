interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

const student: StudentProps = {
  firstName: 'Karina',
  lastName: 'Kim',
  age: 23,
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Server';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
console.log('typeof student:', typeof student);

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

const vehicle: Vehicle = {
  make: 'Ferrari',
  model: 'Testarossa',
  year: 1990,
};

vehicle['color'] = 'red';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible":', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);
console.log('typeof vehicle:', typeof vehicle);

interface Pet {
  name: string;
  kind: string;
}

const pet: Pet = {
  name: 'Ashe',
  kind: 'cat',
};

delete pet.name;
delete pet['kind'];

console.log('value of pet:', pet);
console.log('typeof pet:', typeof pet);
