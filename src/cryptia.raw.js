import path from "path";
import fs from "fs";
import { decryptionAlgorithm, encryptionAlgorithm } from "../core/engine.js";


function Cryptia(options = {}) {
  const defaultOptions = {
    obfuscationLevel: 8,
    logging: false,
    preserveWhitespace: true,
  };

  const settings = { ...defaultOptions, ...options };

  function log(message) {
    if (settings.logging) {
      console.log(`[-cryptia] ${message}`);
    }
  }

  function measureTime(callback, ...args) {
    const start = performance.now();
    const result = callback(...args);
    const end = performance.now();
    const timeTaken = end - start;
    log(`Operation completed in ${timeTaken.toFixed(4)} milliseconds`);
    return { result, timeTaken };
  }

  function encrypt(text, key, callback = null) {
    if (!key || typeof key !== "string") {
      throw new Error("A valid key is required for encryption.");
    }

    const encryptedText = encryptionAlgorithm(
      text,
      key,
      settings.obfuscationLevel,
      settings.preserveWhitespace
    );

    const { timeTaken } = measureTime(() => encryptedText);
    const result = { data: encryptedText, timeTaken };
    if (callback && typeof callback === "function") {
      callback(result);
    }
    return result;
  }

  function decrypt(encryptedText, key, callback = null) {
    if (!key || typeof key !== "string") {
      throw new Error("A valid key is required for decryption.");
    }

    const decryptedText = decryptionAlgorithm(
      encryptedText,
      key,
      settings.obfuscationLevel,
      settings.preserveWhitespace
    );

    const { timeTaken } = measureTime(() => decryptedText);
    const result = { data: decryptedText, timeTaken };
    if (callback && typeof callback === "function") {
      callback(result);
    }
    return result;
  }

  function encryptFile(
    filePath,
    key,
    callback = null,
    outputFileName = "encryptedFile.cpt"
  ) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data: encryptedContent, timeTaken } = encrypt(fileContent, key);

    // Determine output path
    const encryptedFilePath = path.isAbsolute(outputFileName)
      ? outputFileName
      : path.join(path.dirname(filePath), outputFileName);

    // Write encrypted content
    fs.writeFileSync(encryptedFilePath, encryptedContent, "utf-8");
    log(`File encryption completed in ${timeTaken.toFixed(4)} milliseconds.`);

    const result = { data: encryptedContent, timeTaken, encryptedFilePath };
    if (callback && typeof callback === "function") {
      callback(result);
    }

    return result;
  }

  function decryptFile(
    filePath,
    key,
    callback = null,
    outputFileName = "decryptedFile.cpt"
  ) {
    const encryptedContent = fs.readFileSync(filePath, "utf-8");
    const { data: decryptedText, timeTaken } = decrypt(encryptedContent, key);

    // Determine output path
    const decryptedFilePath = path.isAbsolute(outputFileName)
      ? outputFileName
      : path.join(path.dirname(filePath), outputFileName);

    // Write decrypted content
    fs.writeFileSync(decryptedFilePath, decryptedText, "utf-8");
    log(`File decryption completed in ${timeTaken.toFixed(4)} milliseconds.`);

    const result = { data: decryptedText, timeTaken, decryptedFilePath };
    if (callback && typeof callback === "function") {
      callback(result);
    }

    return result;
  }

  return { encrypt, decrypt, encryptFile, decryptFile };
}

export default Cryptia;
