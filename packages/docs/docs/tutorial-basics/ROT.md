---
sidebar_position: 3
---

# ROT

A simple letter susbstitution cypher that rotates the alphabet for X quantity of letters.

## About

Widely known due to your famous variant ROT-13, is a letter substitution cypher that rotates the alphabet by 13 letters. More about it [in here](https://en.wikipedia.org/wiki/ROT13)

In Encryptr we implemented it as a class that follows the `ICryptography` contract, which defines base methods for a cryptographic implementation.

## Usage

The usage is simple, import the `ROT` class from the `core` package and instantiate it.

```ts
import { ROT } from "@encryptr/core"

const rot = new ROT()
```

The `ROT` class has just one prop, which is optional and is by defauult 13, the amount of characters you want to skip, making it not only a `ROT-13` method but a `ROT-∞` method, and you can do it like so.

```ts
import { ROT } from "@encryptr/core"

const rot = new ROT({
  skip: 20
})
```

## Construction

This is a step by step document that shows how I thought about it when building

First, I needed to transform the user input into an array so I could traverse it and link it with it's 13 more position character, so I did just that, using a neat ES6 javascript trick to convert strings into arrays

```ts {2}
function ROT(input: string) {
  const inputArray = [...input]
}
```

It would convert a simple string like `"vitor"` to `["v", "i", "t", "o", "r"]`, and that's exatly what I needed, then I would traverse through each and every letter and finds it's counterpart in ROT13 system.

To find the character counterpart I would need to know first where the character was located in the alphabet array first, so I did just that using the `.indexOf()` method.

After finding it's index in the alphabet array, it was just a question of adding 13 to the index and that's it, job done.

```ts {2}
function ROT(input: string) {
  const inputArray = [...input]

  const transformInput = inputArray.map((character) => {
    const currentIndex = alphabet.indexOf(character)

    return alphabet[currentIndex + 13]
  })
}
```

**But there's a problem.**

Any character that would be *less than* 13 characters from the end of the alphabet would return `undefined`, and that's not good. So I made a special case for those letter and treated them accordingly.

The way I treated those letters was, I first needed to know how many characters it would take to finish the alphabet array, then I could subtract that from the whole skip, which is 13, that would be how many character I would need to travel from the beggining of the array, I don't if that makes that much sense but it makes to me.

That basically wraps the idea of the ROT-13 implementation and the internal workings and little problems.
