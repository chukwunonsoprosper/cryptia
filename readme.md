# CryptiaJS 🔐

CryptiaJS is a lightweight and secure JavaScript library for encrypting and decrypting text using a substitution cipher. Whether you're safeguarding sensitive data in web applications or adding encryption to your server-side projects, CryptiaJS is designed to be fast, reliable, and easy to use. ⚡

Your data stays protected—as long as you keep your encryption key private.

## 🚀 Installation

Install CryptiaJS via npm:

```bash
npm i cryptia
```

Or clone the GitHub repository:

```bash
git clone https://github.com/chukwunonsoprosper/cryptia
cd cryptia
```

## 🛠 Usage

To test the library, run:

```bash
npm run test
```

To spin up a customizable workspace, run:

```bash
npm run dev
```

You can also link `workspace.js` to your project directory to integrate CryptiaJS easily.

### Example

```javascript
/**
 * Import Cryptia and required dependencies.
 */
import Cryptia from '../cryptia.js'

// Initialize Cryptia with custom settings.
const cryptia = Cryptia({
    obfuscationLevel: 10,
    logging: false,
    preserveWhitespace: true
});

/**
 * Encrypt and decrypt text with a secure key.
 */
const plainText = 'This is a secret message.🤣😂';
const encryptionKey = 'MySecureKey1';

const encryptedResult = cryptia.encrypt(plainText, encryptionKey)
console.log('Encrypted Text:', encryptedResult.data);

const decryptedResult = cryptia.decrypt(encryptedResult, encryptionKey)
console.log('Decrypted Text:', decryptedResult.data);

```

## 🔥 What’s New in v1.0.6?

- ✅ Stronger security – Your encrypted data stays safe as long as your encryption key remains private.
- ✅ Better performance – Optimized for speed and efficiency.
- ✅ Cleaner code – More maintainable and readable.
- ✅ Improved documentation – Making integration smoother than ever.

## 📜 License

This project is licensed under the MIT License.

## 👨‍💻 Contributors

Builder: Chukwunonso Prosper & other contributors.

## 🌟 Get Involved!

💙 Don't forget to star the project on GitHub!
🔗 [GitHub Repository](https://github.com/chukwunonsoprosper/cryptia)

📖 Read the full guide: [npmjs.com/package/cryptia](https://www.npmjs.com/package/cryptia)

📢 Follow for updates & discussions:
- 🐦 Twitter: [@prospercode](https://x.com/prospercode)

