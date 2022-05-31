export interface ICryptography {
  execute: (value: string) => Promise<string>;
}

export { Decrypter } from "./use-cases/decrypter";
export { Encrypter } from "./use-cases/encrypter";

export { ROT } from "./implementations/rot";
export { DefaultZenitPolar, Zenit } from "./implementations/zenit-polar";

export { alphabet } from "./lib/ascii";
