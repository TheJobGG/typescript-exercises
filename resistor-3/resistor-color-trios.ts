/** 
 * 1.- orange = 3  
 * 2.- orange = 3
 * 3.- black  = 0 : ohms
 * 
 * === 33 suffix : 33 ohms
 * 
 * ---
 * 
 * 1.- blue  = 6  
 * 2.- grey  = 8
 * 3.- brown = 1 : 0 ohms
 * 
 * === 68 suffix : 680 ohms
 * 
 * ---
 * 
 * 1.- red   = 2
 * 2.- black = 0  // If the second value is black (0), then is removed from the output
 * 3.- red   = 2 : kiloohms
 * 
 * === 2 suffix : 2 kiloohms
 * 
 * ---
 * 
 * 1.- green  = 5
 * 2.- brown  = 1
 * 3.- orange = 3
 * 
 * === 51 kiloohms
 * 
 * ---
 * 
 * 1.- yellow = 4
 * 2.- violet = 7
 * 3.- yellow = 4 : 0 kiloohms
 * 
 * === 470 kiloohms
 * 
 */

type bandCode = Record<string, number>;

const colorCodes: bandCode = {
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

export function decodedResistorValue(colors: Array<string>): string {
  const newColors = colors.map((color) => color.toLowerCase());
  const colorValue1 = colorCodes[newColors[0]];
  const colorValue2 = colorCodes[newColors[1]];
  const colorValue3 = colorCodes[newColors[2]];

  const numericValue = getValue(colorValue1, colorValue2, colorValue3);
  const resultFormatted = formatResult(numericValue, colorValue3)

  return resultFormatted;
}

function getValue(value1: number, value2: number, value3: number): number {
  const multiply = (10 ** value3)
  let result = Number(`${value1}${value2}`);
  result = result * multiply;

  return result;
}

function formatResult(numericValue: number, value3: number): string {
  if (value3 <= 1) {
    let stringResult: string = `${numericValue} ohms`
    return stringResult;
  } else if (value3 <= 4) {
    numericValue = numericValue / 1000;
    let stringResult = `${numericValue} kiloohms`;
    return stringResult;
  } else {
    numericValue = numericValue / 1000000;
    let stringResult = `${numericValue} megaohms`;
    return stringResult;
  }
}
