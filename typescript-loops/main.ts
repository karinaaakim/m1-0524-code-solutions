/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen(): object {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
};

function getEvenNumbersToTwenty(): object {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber+=2;
  }
  return evenNumbers;
};

function repeatWord(word: string, times: number): string {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++
  }
  return repeated;
};

function logEachCharacter(str: string) {
  for (let i = 0; i < str.length ; i++) {
    console.log(str[i])
  }
};

function doubleAll(numbers: number[]): number[] {
  let doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
};

function getKeys(obj: Record<string, unknown>): any {
  let keys = [];
  for (let key in obj) {
    keys.push(key);
  }
  return keys;
};

function getValues(obj: Record<string, unknown>): any {
  let values = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
