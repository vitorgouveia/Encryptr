---
sidebar_position: 4
---

# Zenit

Another letter substitution library that only substitues the letters from the words `ZENIT` and `POLAR`

## Versioning

As of today, there are two versions of zenit, `Zenit` and `DefaultZenitPolar`, the `DefaultZenitPolar` is the default zenit polar implementation according to [wikipedia](https://pt.wikipedia.org/wiki/Zenit_Polar), the new version, `Zenit`, accepts multiple keys as a parameter and can be way more useful than the normal zenit polar implementation.

## Usage

### Zenit

The usage is simple, import the `Zenit` class from the `core` package and instantiate it.

```ts
import { Zenit } from "@encryptr/core"

const zenit = new Zenit()
```

The `Zenit` class has just one prop, which is optional and is by default ["zenit", "polar"], the keys that will "encrypt" your string, making it not only a `PolarZenit` method but a `PolarZenitAndEverythingYouWantItToBe` method, and you can do it like so.

```ts
import { Zenit } from "@encryptr/core"

const zenit = new Zenit({
  keys: ["polar", "zenit", "homer", "chris"]
})
```

### DefaultZenitPolar

The usage is simple, import the `DefaultZenitPolar` class from the `core` package and instantiate it.

```ts
import { DefaultZenitPolar } from "@encryptr/core"

const defaultZenitPolar = new DefaultZenitPolar()
```

The `DefaultZenitPolar` class has no props, using make of the default zenit polar algorithm.

```ts
import { DefaultZenitPolar } from "@encryptr/core"

const defaultZenitPolar = new DefaultZenitPolar()
```

## Internal Workings

The way Zenit polar works is by substituting it's owns letters positions, just like this:
[Z  E  N  I  T] <br />
[P  O  L  A  R] <br />

this is how the letter "E" would look like

E -> H

so if the string has a "z" letter, it would be replaced by "p" and so on for the next letters

### New Zenit

in the new version of Zenit, because the chain is much bigger, the letter keep being substituted after each key, working like so

[Z  E  N  I  T] <br />
[P  O  L  A  R] <br />
[H  O  M  E  R] <br />
[C  H  R  I  S] <br />

this is how the letter "E" would look like

E -> O -> O -> H
