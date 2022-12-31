export class Clock {
  hours: number = 0;
  minutes: number = 0;
  constructor(hour: number, minute?: number) {
    // Verificamos si minutos tiene algún valor, sino le asignamos cero como valor por defecto
    minute ? minute = minute : minute = 0;
    [this.hours, this.minutes] = this.getHoursAndMinutes(hour, minute)
  }

  public toString(): string {
    return `${this.hours.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}`;
  }

  public plus(minutes: number): Clock {
    [this.hours, this.minutes] = this.getHoursAndMinutes(0, minutes);
    return this;
  }


  public minus(minutes: number): Clock {
    minutes = Math.abs(minutes) * -1;
    [this.hours, this.minutes] = this.getHoursAndMinutes(0, minutes);
    return this;
  }

  public equals(date: string | Clock): boolean {
    if (date instanceof Clock) {
      return this.hours === date.hours && this.minutes === date.minutes;
    }

    let [hoursGiven, minutesGiven] = date.split(':')
    let [parseHoursGiven, parseMinutesGiven] = [Number(hoursGiven), Number(minutesGiven)];

    return parseHoursGiven === this.hours && parseMinutesGiven === this.minutes;
  }

  private getHoursAndMinutes(hour: number, minute: number): number[] {
    hour += this.hours;
    minute += this.minutes;
    let minutos = minute % 60 ?? 0;
    minutos = minutos < 0 ? minutos + 60 : minutos;
    let horasDeMinutos = Math.floor(minute / 60);

    let horas = hour % 24;
    horas = (horas + horasDeMinutos) % 24;
    horas = horas < 0 ? horas + 24 : horas;

    return [horas, minutos]
  }
}

/* 
const a = new Clock(20, 5).plus(5).minus(10);

console.log(a.toString());
console.log(a.equals(new Clock(20, 0)));
console.log(a.equals('20:00'));


console.log('After make some modifies...');
a.minus(300)
console.log(a.toString());


console.log(a.equals(new Clock(20, 0)));
console.log(a.equals('20:00')); */


/* Timer */
/* const timer = new Clock(0)
console.log('\n\nStart timer: ');

setInterval(() => {
  console.log(timer.toString());
  timer.plus(1)
}, 1000) */