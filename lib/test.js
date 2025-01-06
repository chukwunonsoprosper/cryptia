/** 
 * Import the Cryptia module and required dependencies for encryption operations.
 */
import Cryptia from '../cryptia.js'
import fs from 'fs'

// Create an instance of Cryptia with custom encryption settings.
const cryptia = Cryptia({
  obfuscationLevel: 10, // Set a high level of obfuscation for stronger encryption
  logging: true, // Enable logging for tracking encryption and decryption activities
  preserveWhitespace: true // Retain original formatting for accurate decryption
})

/** 
 * Encrypt and Decrypt Text
 */

/** 
 * Define the plain text and encryption key.
 */
const plainText = 'This is a secret message.'
const encryptionKey = 'MySecureKey123' // A secure key for encryption and decryption

/** 
 * Encrypt the plain text using the provided encryption key.
 */
const encryptedResult = cryptia.encrypt(plainText, encryptionKey, result => {
  console.log('Encryption callback:', result) // Log encryption result
})

// Log the encrypted text
console.log('Encrypted Text:', encryptedResult.data)

/** 
 * Decrypt the encrypted text using the same encryption key.
 */
const decryptedResult = cryptia.decrypt(encryptedResult.data, encryptionKey, result => {
  console.log('Decryption callback:', result) // Log decryption result
})

// Log the decrypted text
console.log('Decrypted Text:', decryptedResult.data)

/** 
 * Verify the success of the decryption by comparing it with the original text.
 */
if (plainText === decryptedResult.data) {
  console.log('Decryption successful!') // Success message if texts match
} else {
  console.log('Decryption failed!') // Failure message if texts do not match
}

/** 
 * File Encryption and Decryption
 */

/** 
 * Define the path for the input file to be encrypted.
 */
const inputFilePath = 'asset/example.txt'

/** 
 * Create a sample text file for encryption demonstration.
 */
fs.writeFileSync(inputFilePath, 'This is the content of the file to be encrypted.', 'utf-8')

/** 
 * Encrypt the file with the specified encryption key and custom file name.
 */
const encryptedFileResult = cryptia.encryptFile(inputFilePath, encryptionKey, result => {
  const { data, timeTaken, encryptedFilePath } = result
  console.log('File Encryption callback:', result) // Log encryption result
}, 'customEncryptedFile.txt') // Custom output file name for encrypted file

// Log the path of the encrypted file
console.log('Encrypted File Path:', encryptedFileResult.encryptedFilePath)

/** 
 * Decrypt the encrypted file and save the result to a custom file name.
 */
const decryptedFileResult = cryptia.decryptFile(encryptedFileResult.encryptedFilePath, encryptionKey, result => {
  const { data, timeTaken, decryptedFilePath } = result
  console.log('File Decryption callback:', result) // Log decryption result
}, 'customDecryptedFile.txt') // Custom output file name for decrypted file

// Log the path of the decrypted file
console.log('Decrypted File Path:', decryptedFileResult.decryptedFilePath)

/** 
 * Verify that the content of the decrypted file matches the original content.
 */
const decryptedFileContent = fs.readFileSync(decryptedFileResult.decryptedFilePath, 'utf-8')
if (decryptedFileContent === 'This is the content of the file to be encrypted.') {
  console.log('File decryption successful!') // Success message if content matches
} else {
  console.log('File decryption failed!') // Failure message if content does not match
}

/** 
 * Additional Notes and Configuration Options
 */

/** 
 * Default File Naming:
 * If no custom file names are provided, the default names "encryptedFile.cpt" and "decryptedFile.cpt" are used.
 */

// Encrypt a file with default naming conventions
cryptia.encryptFile(inputFilePath, encryptionKey)

// Decrypt a file with default naming conventions
cryptia.decryptFile('asset/encryptedFile.cpt', encryptionKey)

/** 
 * Callback Functionality:
 * The `encrypt`, `decrypt`, `encryptFile`, and `decryptFile` functions support asynchronous callbacks to handle results and manage further operations.
 */

/** 
 * Customizable Options:
 * The `obfuscationLevel`, `logging`, and `preserveWhitespace` options can be adjusted for enhanced security and logging according to the user's requirements.
 */
