"use strict";
function getRangeReport(start, end) {
    start <= end;
    let total = 0;
    for (let i = start; i <= end; i++) {
        total += i;
    }
    ;
    Object.total = total;
    let oddNumbers;
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            oddNumbers.push(i);
        }
    }
    Object.odds = oddNumbers;
    return Object;
}
