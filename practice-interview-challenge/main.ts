interface Object {
  total: number;
  odds: Array<number>;
  evens: Array<number>;
  range: Array<number>;
  average: number;
}

function getRangeReport(start: number, end: number): Object {
  start <= end;

  let total = 0;
    for (let i = start; i<= end; i++) {
      total += i;
    };
  Object.total = total;

  let oddNumbers: number[] ;
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(i);
    }
  }

  Object.odds = oddNumbers

  return Object;
}
