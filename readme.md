# Cryptia

**_Cryptia_** is a simple JavaScript library for encrypting and decrypting text using a basic substitution cipher. It provides an easy-to-use interface for securing text data in client-side applications..

## Features:

- **Simple Encryption and Decryption:** Cryptia allows developers to easily encrypt and decrypt text using a basic substitution cipher.

- **Lightweight:** The library is lightweight and easy to integrate into any JavaScript project.

- **No Dependencies:**  Cryptia does not rely on any external libraries, making it a standalone solution for text encryption.

## Installation:

To install Cryptia, clone the repository and navigate to the project directory:

```bash
git clone https://github.com/chukwunonsoprosper/cryptia
cd cryptia
```

or install via npm

```bash
npm i cryptia 
```

## Usage:

To use Cryptia, include the cryptia.js file in your project and create an instance of the cryptia object. You can then use the encrypt and decrypt methods to encrypt and decrypt text.

```javascript
/* 
import the module from cryptia.js
*/
import { cryptia } from "../cryptia.js";

/*
create an instance of cryptia
*/

const crypt = cryptia();

const encrypted = crypt.encrypt("welcome to cryptia");

console.log('[encrypted text]:', encrypted);
console.log('[decryped text]:', crypt.decrypt(encrypted))
```


## Project Structure:

- **engine.js:** Contains the algorithms used for encryption and decryption.

- **cryptia.js:** Minified version of the library.

- **test.js:** Example usage of the library.

- **cryptia.raw.js:** Source code of the library.

- **package.json:** Project metadata

## Running a test

```javascript
npm run test

```
