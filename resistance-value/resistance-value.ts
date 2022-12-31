const colorCodes: Record<string, number> = {
  "black": 0,
  "brown": 1,
  "red": 2,
  "orange": 3,
  "yellow": 4,
  "green": 5,
  "blue": 6,
  "violet": 7,
  "grey": 8,
  "white": 9
}
export const COLORS = Object.keys(colorCodes).map(color => color)
export const colorCode = (code: string) => {
  code.toLowerCase();
  return colorCodes[code]
}

/* 
console.log(colorCode('yellow'));
console.log(COLORS);
 */