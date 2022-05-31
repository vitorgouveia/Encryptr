---
sidebar_position: 1
---

# Create your own implementation

As of today, the pieces necessary to create a new encrypting method are available on the `core` package, and you can use it like so:

```ts
import { alphabet, ICryptography } from "@encryptr/core"
```

the `alphabet` is an array that contains the entire english alphabet in *lowercase*

you can implement your own crypographic method by implementing the `ICryptography` contract,
the contract, asks by default for you to create a `execute` method, that method will receive a value parameter, which is a string

```ts
import { alphabet, ICryptography } from "@encryptr/core"

class MyCryptographicSystem implements ICryptography {
  public async execute(value: string): Promise<string> {
    // your own code in here
  }
}
```

then you can instantiate that code and use it in the known Encrypter and Decrypter classes

```ts
import { alphabet, ICryptography, Encrypter, Decrypter } from "@encryptr/core"

class MyCryptographicSystem implements ICryptography {
  public async execute(value: string): Promise<string> {
    // your own code in here
  }
}

const myCryptographicSystem = new MyCryptographicSystem()

// this will now use your code to encrypt and decrypt strings
const encrypter = new Encrypter(myCryptographicSystem)
const decrypter = new Encrypter(myCryptographicSystem)
```
