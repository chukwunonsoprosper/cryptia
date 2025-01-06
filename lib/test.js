/** 
 * Import Cryptia and required dependencies.
 */
import Cryptia from '../cryptia.js'
import fs from 'fs'

// Initialize Cryptia with custom settings.
const cryptia = Cryptia({
  obfuscationLevel: 10, 
  logging: true, 
  preserveWhitespace: true 
})

/** 
 * Encrypt and decrypt text with a secure key.
 */
const plainText = 'This is a secret message.🤣😂'
const encryptionKey = 'MySecureKey123'

const encryptedResult = cryptia.encrypt(plainText, encryptionKey, result => {
  console.log('Encryption callback:', result)
})
console.log('Encrypted Text:', encryptedResult.data)

const decryptedResult = cryptia.decrypt(encryptedResult.data, encryptionKey, result => {
  console.log('Decryption callback:', result)
})
console.log('Decrypted Text:', decryptedResult.data)

if (plainText === decryptedResult.data) {
  console.log('Decryption successful!')
} else {
  console.log('Decryption failed!')
}

/** 
 * Encrypt and decrypt files.
 */
const inputFilePath = 'asset/example.txt'

fs.writeFileSync(inputFilePath, 'This is the content of the file to be encrypted.', 'utf-8')

const encryptedFileResult = cryptia.encryptFile(inputFilePath, encryptionKey, result => {
  console.log('File Encryption callback:', result)
}, 'customEncryptedFile.txt')

console.log('Encrypted File Path:', encryptedFileResult.encryptedFilePath)

const decryptedFileResult = cryptia.decryptFile(encryptedFileResult.encryptedFilePath, encryptionKey, result => {
  console.log('File Decryption callback:', result)
}, 'customDecryptedFile.txt')

console.log('Decrypted File Path:', decryptedFileResult.decryptedFilePath)

const decryptedFileContent = fs.readFileSync(decryptedFileResult.decryptedFilePath, 'utf-8')
if (decryptedFileContent === 'This is the content of the file to be encrypted.') {
  console.log('File decryption successful!')
} else {
  console.log('File decryption failed!')
}

/** 
 * Default behavior: If no custom file names are provided, default names are used.
 */
cryptia.encryptFile(inputFilePath, encryptionKey)
cryptia.decryptFile('asset/encryptedFile.cpt', encryptionKey)
