interface PlanetTime {
  [key: string]: number
}

const planetTime: PlanetTime = {
  "mercury": 0.2408467,
  "venus": 0.61519726,
  "earth": 1.0,
  "mars": 1.8808158,
  "jupiter": 11.862615,
  "saturn": 29.447498,
  "uranus": 84.016846,
  "neptune": 164.79132
}

export function age(planet: string, seconds: number): number {
  // Punto de referencia de segundos en la tierra por año
  const secondsEarth: number = 60 * 60 * 24 * 365.25; // 100%
  // segundos transcurridos por año en el planeta seleccionado
  const secondsPlanet: number = secondsEarth * planetTime[planet];


  const result: number = seconds / secondsPlanet;

  return Number(result.toFixed(2))
}

/* console.log(age('mercury', 2134835688));
console.log(age('venus', 189839836));
 */