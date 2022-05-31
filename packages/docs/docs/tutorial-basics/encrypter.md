---
sidebar_position: 1
---

# Encrypter Class

The Encrypter class holds the abstraction to the implementation of a Encrypter method, it serves like a puzzle piece that can only connect with other pieces, those other pieces being the actual implemented Encrypter method

## Usage

first, import the class from the `core` package.
(for the sake of the example we're going to use ROT as the Encrypter implementation but it could also be ZenitPolar, the implementation would stay the same.)

```ts
import { Encrypter, ROT } from "@encryptr/core"
```

then we need to instatiate both our Encrypter *implementation* and *class*

```ts {3-4} showLineNumbers
import { Encrypter, ROT } from "@encryptr/core"

const rot = new ROT()
const encrypter = new Encrypter(rot)
```

you could manually use the `execute` method on the rot variable, but you won't need to do it, if our codebase ever grows it's easier to keep up with updates with the `Encrypter` class rather than the ROT implementation directly.

Then we just need to run execute on it passing as the only parameter the string you want to convert. <br />
Reminder, this `Encrypter` class alonside with our implementations of the `ICryptography` contract always return a promise by default, so you'll need to `await` before you can get the final result.

```ts
import { Encrypter, ROT } from "@encryptr/core"

const rot = new ROT()
const encrypter = new Encrypter(rot)

const MyFunction = async () => {
  const myEncryptedName = await encrypter.execute("Vitor Gouveia")

  return myEncryptedName
}

MyFunction() // Ivgbe Tbhirvn
```