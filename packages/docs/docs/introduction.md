---
sidebar_position: 1
---

# Introduction
So you want to get started with Encryptr, huh? <br />
Ok, let's discover **Encryptr in 5 minutes**

### Getting Started

Encryptr is built with typescript and ECMAScript Modules by default, so importing it into another typescript project should work just fine. <br />
The package you're looking for is named `core`, it contains all the default encryption methods and abstractions on top of those.

```typescript
import Encryptr from "@encryptr/core"
```

After that, your IDE will give you autocompletion on the imports, but if you don't have autocompletion, here are the definitions

|Import Name|Definition|
|-----|-----|
|ICryptography|The base contract for Encryption methods, if you want to create another encryption implementation, you will need to use this|
|ROT|The ROT encryption method, instatiate it and in a object prop pass a `skip` value, which will decide how many characters to skip|
|Zenit|The new implementation of ZenitPolar which requires you to pass an array of `keys`, that will encrypt your data, the default is *[Zenit, Polar]*|
|DefaultZenitPolar|The default ZenitPolar method, is not as customizable as the previous one and can only run with keys *[Zenit, Polar]*|
|Decrypter|An abstraction class over the encryption mehtods, when instantiating it, pass as the first and only argument your encryption method|