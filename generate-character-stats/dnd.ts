export class DnDCharacter {
  strength: number = DnDCharacter.generateAbilityScore();
  dexterity: number = DnDCharacter.generateAbilityScore();
  constitution: number = DnDCharacter.generateAbilityScore();
  intelligence: number = DnDCharacter.generateAbilityScore();
  wisdom: number = DnDCharacter.generateAbilityScore();
  charisma: number = DnDCharacter.generateAbilityScore();
  hitpoints: number = 10 + DnDCharacter.getModifierFor(this.constitution);

  private static rollDice(min: number = 1, max: number = 6): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  public static generateAbilityScore(): number {
    let randNumbers = [
      DnDCharacter.rollDice(),
      DnDCharacter.rollDice(),
      DnDCharacter.rollDice(),
      DnDCharacter.rollDice(),
    ]
    randNumbers.sort((a, b) => b - a);
    let result = randNumbers.slice(0, 3).reduce((prevValue, currentValue) => prevValue + currentValue)
    return result;
  }

  public static getModifierFor(constitution: number): number {
    return Math.floor((constitution - 10) / 2);
  }
}
