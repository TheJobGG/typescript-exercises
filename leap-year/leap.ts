export function isLeap(year: number): boolean {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      return true
    } else {
      return false;
    }
  } else {
    if (year % 4 == 0) {
      return true;
    } else {
      return false;
    }
  }
}

/* 
console.log(!isLeap(1996)); // Expected: false
console.log(!isLeap(1960)); // Expected: false 
console.log(!isLeap(2100)); // Expected: true
console.log(!isLeap(1900)); // Expected: true
console.log(!isLeap(2000)); // Expected: false
console.log(!isLeap(2400)); // Expected: false
console.log(!isLeap(1800)); // Expected: true
 */