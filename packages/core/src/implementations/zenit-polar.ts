import { ICryptography } from "../index";

type ZenitProps = {
  keys: string[];
};

const check = (
  set: string,
  character: string,
  keys: string[],
  index: number
) => {
  const currentCharIndex = Array.from(set).indexOf(character.toLowerCase());

  const setOfChars = keys[index - 1];

  const isLastPlace = index === keys.length - 1;

  if (!setOfChars) {
    if (!isLastPlace) {
      // this one is the first
      let final = Array.from(keys[index + 1])[currentCharIndex];

      keys.forEach((set2, j) => {
        if (j > index) {
          if (set.includes(final)) {
            final = check(set2, final, keys, index);
            return;
          }

          final = final;
          return;
        }
      });

      return final;
    }

    const result = Array.from(keys[index + 1])[currentCharIndex];

    return result;
  }

  if (!isLastPlace) {
    let final = Array.from(setOfChars)[currentCharIndex];

    keys.forEach((set2, j) => {
      if (j > index) {
        if (set.includes(final)) {
          final = check(set2, final, keys, index);
          return;
        }

        final = final;
        return;
      }
    });

    return final;
  }

  const result = Array.from(setOfChars)[currentCharIndex];

  return result;
};

export class Zenit implements ICryptography {
  private keys: string[];

  constructor({ keys }: ZenitProps) {
    this.keys = keys;
  }

  public async execute(value: string): Promise<string> {
    const arrayValue = Array.from(value);

    const result = arrayValue.map((character) => {
      const isUpperCase = character === character.toUpperCase();

      const keys = this.keys;

      let newChar: string | null = null;

      keys.forEach((set, index) => {
        if (set.includes(character.toLowerCase())) {
          newChar = check(set, character.toLowerCase(), keys, index);
        }
      });

      if (!newChar) {
        return isUpperCase ? character.toUpperCase() : character;
      }

      // @ts-ignore
      return isUpperCase ? newChar.toUpperCase() : newChar;
    });

    return result.join("");
  }
}

export class DefaultZenitPolar implements ICryptography {
  public async execute(value: string): Promise<string> {
    const arrayValue = Array.from(value);

    const result = arrayValue.map((character) => {
      const zenit = "zenit";
      const polar = "polar";

      if (zenit.includes(character)) {
        const currentIndexInZenit = Array.from(zenit).indexOf(character);
        return Array.from(polar)[currentIndexInZenit];
      }

      if (polar.includes(character)) {
        const currentIndexInPolar = Array.from(polar).indexOf(character);
        return Array.from(zenit)[currentIndexInPolar];
      }

      return character;
    });

    return result.join("");
  }
}
