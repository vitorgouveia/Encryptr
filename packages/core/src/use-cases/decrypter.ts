import { ICryptography } from "../index";

export class Decrypter {
  constructor(private cryptographer: ICryptography) {}

  public async execute(value: string): Promise<string> {
    return await this.cryptographer.execute(value);
  }
}
