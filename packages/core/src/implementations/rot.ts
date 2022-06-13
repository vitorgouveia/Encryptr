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
    // const arrayValue = [...value];
    const arrayValue = Array.from(value);
    // fazer while com a length

    const newValue = arrayValue.map((character) => {
      const isUppercase = character === character.toUpperCase();

      if (!alphabet.includes(character.toLowerCase())) {
        return isUppercase ? character.toUpperCase() : character.toLowerCase();
      }

      const currentIndex = alphabet.indexOf(character.toLowerCase());

      const skipAhead = alphabet[currentIndex + this.skip];

      if (!skipAhead) {
        return isUppercase
          ? this.calculateSkipAhead(currentIndex).toUpperCase()
          : this.calculateSkipAhead(currentIndex).toLowerCase();
      }

      return isUppercase ? skipAhead.toUpperCase() : skipAhead.toLowerCase();
    });

    return newValue.join("");
  }

  public async decrypt(value: string): Promise<string> {
    const arrayValue = Array.from(value);

    const newValue = arrayValue.map((character) => {
      const isUppercase = character === character.toUpperCase();

      if (!alphabet.includes(character.toLowerCase())) {
        return isUppercase ? character.toUpperCase() : character.toLowerCase();
      }

      const currentIndex = alphabet.indexOf(character.toLowerCase());
      const skipBehind = alphabet[currentIndex - this.skip];

      if (!skipBehind) {
        // get the rest
        const rest = (currentIndex - this.skip) * -1;

        if (rest > alphabet.length) {
          // recurse until rest is less than alphabet.length
          // not doing this now
          const howManyAlphabetsCanFit = rest / alphabet.length;
          const result =
            alphabet[rest - alphabet.length * howManyAlphabetsCanFit];

          return isUppercase ? result.toUpperCase() : result.toLowerCase();
        }

        const result = alphabet[alphabet.length - rest];

        return isUppercase ? result.toUpperCase() : result.toLowerCase();
      }

      return isUppercase ? skipBehind.toUpperCase() : skipBehind.toLowerCase();
    });

    return newValue.join("");
  }
}
