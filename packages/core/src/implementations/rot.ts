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

  public async execute(value: string): Promise<string> {
    const arrayValue = [...value];

    const newValue = arrayValue.map((character) => {
      const isUpperCase = character === character.toUpperCase();

      const currentIndex = alphabet.indexOf(character.toLowerCase());

      const skipBehind = alphabet[currentIndex - this.skip];

      if (!skipBehind) {
        const rest = this.skip - currentIndex;
        const result = alphabet[alphabet.length - rest];
        return isUpperCase ? result.toUpperCase() : result;
      }

      return isUpperCase ? skipBehind.toUpperCase() : skipBehind;
    });

    return newValue.join("");
  }
}
