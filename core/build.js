import fs from 'fs'
const inputFilePath = 'workspace.js',
  devMode =
    "/**\n * Import Cryptia and required dependencies.\n */\nimport Cryptia from './cryptia.js'\n\n/**\n * Initialize Cryptia with custom settings.\n */\nconst cryptia = Cryptia({\n  obfuscationLevel: 10,\n  logging: false,\n  preserveWhitespace: false\n})\n\nconst plainText = 'This is a secret message.🤣😂'\nconst encryptionKey = 'cryptiaSecuredKey'\n\nconst encryptedResult = cryptia.encrypt(plainText, encryptionKey)\nconsole.log('Encrypted Text:', encryptedResult.data)\n\nconst decryptedResult = cryptia.decrypt(encryptedResult.data, encryptionKey)\nconsole.log('Decrypted Text:', decryptedResult.data)"
fs.writeFileSync(inputFilePath, devMode, 'utf-8')
console.log('[-cryptia]: development workspace created successfully');