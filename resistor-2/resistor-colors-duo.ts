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

export function decodedValue(colors: Array<string>): number{
  return Number(`${colorCodes[colors[0].toLowerCase()]}${colorCodes[colors[1].toLowerCase()]}`)
}

// console.log(decodedValue(['Brown', 'Black']));
