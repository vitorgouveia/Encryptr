interface ICryptography {
  encrypt: (value: string) => Promise<string>;
  decrypt: (value: string) => Promise<string>;
}

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type RotProps = {
  skip?: number;
};

class ROT implements ICryptography {
  private skip: number;

  constructor({ skip = 13 }: RotProps) {
    this.skip = skip;
  }

  public async encrypt(value: string): Promise<string> {
    const arrayValue = [...value];
    const newValue = arrayValue.map((character) => {
      const currentIndex = alphabet.indexOf(character);

      const skipAhead = alphabet[currentIndex + this.skip];

      if (!skipAhead) {
        const indexToLastCharacterInAlphabet =
          alphabet.length - 1 - currentIndex;
        const rest = this.skip - indexToLastCharacterInAlphabet;

        return alphabet[rest - 1];
      }

      return skipAhead;
    });

    return newValue.join("");
  }

  public async decrypt(value: string): Promise<string> {
    const arrayValue = [...value];

    const newValue = arrayValue.map((character) => {
      const currentIndex = alphabet.indexOf(character);

      const skipBehind = alphabet[currentIndex - this.skip];

      if (!skipBehind) {
        const rest = this.skip - currentIndex;
        return alphabet[alphabet.length - rest];
      }

      return skipBehind;
    });
    console.log(newValue);

    return newValue.join("");
  }
}

type ZenitProps = {
  keys: string[];
};

class Zenit implements ICryptography {
  private keys: string[];

  constructor({ keys }: ZenitProps) {
    this.keys = keys;
  }

  public async encrypt(value: string): Promise<string> {
    const arrayValue = [...value];

    const result = arrayValue.map((character) => {
      const keys = this.keys;

      let newChar: string | null = null;

      keys.forEach((set, index) => {
        if (set.includes(character)) {
          const currentCharIndex = [...set].indexOf(character);

          const setOfChars = keys[index - 1];

          if (!setOfChars) {
            newChar = [...keys[index + 1]][currentCharIndex];
            return;
          }

          newChar = [...setOfChars][currentCharIndex];
        }
      });

      if (newChar === null) {
        return character;
      }

      const zenit = "zenit";
      const polar = "polar";

      /**
       * v i
       * [z, e, n, i, t] -
       *
       * [j, u, d, a, s] -
       * [p, o, l, a, r]
       */

      if (zenit.includes(character)) {
        const currentIndexInZenit = [...zenit].indexOf(character);
        return [...polar][currentIndexInZenit];
      }

      if (polar.includes(character)) {
        const currentIndexInPolar = [...polar].indexOf(character);
        return [...zenit][currentIndexInPolar];
      }

      return newChar;
    });

    return result.join("");
  }

  public async decrypt(value: string): Promise<string> {
    return value;
  }
}

class Encrypter {
  constructor(private cryptographer: ICryptography) {}

  public async execute(value: string): Promise<string> {
    return this.cryptographer.encrypt(value);
  }
}

class Decrypter {
  constructor(private cryptographer: ICryptography) {}

  public async execute(value: string): Promise<string> {
    return this.cryptographer.decrypt(value);
  }
}

const rot = new ROT({
  skip: 13,
});

const zenit = new Zenit({
  keys: ["zenit", "polar"],
});

const ROTEncrypter = new Encrypter(rot);
const ROTDecrypter = new Decrypter(rot);
const ZenitEncrypter = new Encrypter(zenit);

async function Result() {
  const result = await ZenitEncrypter.execute("vitor");
  console.log(result);
}

Result();
