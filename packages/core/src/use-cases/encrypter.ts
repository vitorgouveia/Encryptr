import { ICryptography } from "../index";

export class Encrypter {
  constructor(private cryptographer: ICryptography) {}

  public async execute(value: string): Promise<string> {
    return await this.cryptographer.execute(value);
  }
}
