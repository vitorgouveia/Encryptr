import { ICryptography } from "../index";
import { alphabet } from "../lib/ascii";

type RotProps = {
  skip?: number;
};

export class ROT implements ICryptography {
  private skip: number;

  constructor({ skip = 13 }: RotProps) {
    this.skip = skip;
  }

  private bruh(result: number): string {
    if (result - alphabet.length - 1 > alphabet.length) {
      return this.bruh(result - alphabet.length - 1);
      // return alphabet[result - alphabet.length - 1];
    }

    return alphabet[result - alphabet.length - 1];
  }

  private calculateSkipAhead(currentIndex: number): string {
    const indexToLastCharacterInAlphabet = alphabet.length - 1 - currentIndex;
    const rest = this.skip - indexToLastCharacterInAlphabet;

    if (rest > alphabet.length) {
      return this.bruh(rest);
    }

    return alphabet[rest - 1];
  }

  public async execute(value: string): Promise<string> {
    const arrayValue = [...value];

    const newValue = arrayValue.map((character) => {
      if (!alphabet.includes(character)) {
        return character;
      }

      const currentIndex = alphabet.indexOf(character);

      const skipAhead = alphabet[currentIndex + this.skip];

      if (!skipAhead) {
        return this.calculateSkipAhead(currentIndex);
      }

      return skipAhead;
    });

    return newValue.join("");
  }
}
