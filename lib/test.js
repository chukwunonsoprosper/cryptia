/* 
Import the Cryptia module from cryptia.js
*/

import Cryptia from "../cryptia.js";
import fs from "fs";

// Create an instance of Cryptia with custom options
const cryptia = Cryptia({
  obfuscationLevel: 10, // Higher obfuscation for stronger encryption
  logging: true, // Enable logging for operations
  preserveWhitespace: true, // Maintain original whitespace in text
});

/* 
Encryption and Decryption of Text
*/

// Define the text to encrypt
const plainText = "This is a secret message.";
const encryptionKey = "MySecureKey123"; // A secure key for encryption

// Encrypt the plain text
const encryptedResult = cryptia.encrypt(plainText, encryptionKey, (result) => {
  console.log("Encryption callback:", result);
});

console.log("Encrypted Text:", encryptedResult.data);

// Decrypt the encrypted text
const decryptedResult = cryptia.decrypt(
  encryptedResult.data,
  encryptionKey,
  (result) => {
    console.log("Decryption callback:", result);
  }
);

console.log("Decrypted Text:", decryptedResult.data);

// Verify the decryption
if (plainText === decryptedResult.data) {
  console.log("Decryption successful!");
} else {
  console.log("Decryption failed!");
}

/* 
Encryption and Decryption of Files
*/

// Path to the input file
const inputFilePath = "asset/example.txt";

// Create an example file for encryption
fs.writeFileSync(
  inputFilePath,
  "This is the content of the file to be encrypted.",
  "utf-8"
);

// Encrypt the file
const encryptedFileResult = cryptia.encryptFile(
  inputFilePath,
  encryptionKey,
  (result) => {
    const { data, timeTaken, encryptedFilePath } = result;
    console.log("File Encryption callback:", result);
  },
  "customEncryptedFile.txt"
); // Specify a custom output file name

console.log("Encrypted File Path:", encryptedFileResult.encryptedFilePath);

// Decrypt the encrypted file
const decryptedFileResult = cryptia.decryptFile(
  encryptedFileResult.encryptedFilePath,
  encryptionKey,
  (result) => {
    const { data, timeTaken, decryptedFilePath } = result;
    console.log("File Decryption callback:", result);
  },
  "customDecryptedFile.txt" // Specify a custom output file name for decryption
);

console.log("Decrypted File Path:", decryptedFileResult.decryptedFilePath);

// Verify the decrypted file content
const decryptedFileContent = fs.readFileSync(
  decryptedFileResult.decryptedFilePath,
  "utf-8"
);
if (
  decryptedFileContent === "This is the content of the file to be encrypted."
) {
  console.log("File decryption successful!");
} else {
  console.log("File decryption failed!");
}

/* 
Additional Options and Observations
*/

// 1. Default File Names
// If you don't specify an output file name, the default names "encryptedFile.cpt" and "decryptedFile.cpt" will be used.

// Encrypt a file with default naming
cryptia.encryptFile(inputFilePath, encryptionKey);

// Decrypt a file with default naming
cryptia.decryptFile("asset/encryptedFile.cpt", encryptionKey);

// 2. Callback Functionality
// The `encrypt` and `decrypt` functions, as well as their file counterparts, support a callback function to handle results asynchronously.

// 3. Customizable Options
// Modify `obfuscationLevel`, `logging`, and `preserveWhitespace` to fit your encryption needs.
