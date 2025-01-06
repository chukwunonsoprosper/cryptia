import {
  $primarySymbols,
  $revPrimarySymbols,
  $generalPunctuation,
  $revGeneralPunctuation,
  $currencySymbols,
  $revCurrencySymbols,
  $latinSymbols,
  $revLatinSymbols,
} from "../characters.js";

function generateKey(key, obfuscationLevel) {
  const baseKey = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 ${$primarySymbols}${$generalPunctuation}${$currencySymbols}${$latinSymbols}`;

  const baseKeyWithSpace = baseKey;
  const keySum = [...key].reduce((sum, char) => sum + char.charCodeAt(0), 0);

  const obfuscate = (chars) =>
    chars
      .split("")
      .sort(
        (a, b) =>
          (((a.charCodeAt(0) + keySum) * obfuscationLevel) % chars.length) -
          (((b.charCodeAt(0) + keySum) * obfuscationLevel) % chars.length)
      )
      .join("");

  const shuffled = obfuscate(baseKeyWithSpace);

  return { encryptionKey: baseKey, decryptionKey: shuffled };
}
export function encryptionAlgorithm(
  text,
  key,
  obfuscationLevel,
  preserveWhitespace
) {
  const { encryptionKey, decryptionKey } = generateKey(key, obfuscationLevel);
  let encryptedText = "";

  for (const char of text) {
    const index = encryptionKey.indexOf(char);
    if (index === -1) {
      encryptedText += char;
    } else {
      encryptedText += decryptionKey[index];
    }
  }

  if (preserveWhitespace) {
    encryptedText = encryptedText
      .replace(/ /g, "_SPACE_")
      .replace(/\n/g, "_NEWLINE_");
  }

  return encryptedText;
}

export function decryptionAlgorithm(
  encryptedText,
  key,
  obfuscationLevel,
  preserveWhitespace
) {
  if (preserveWhitespace) {
    encryptedText = encryptedText
      .replace(/_SPACE_/g, " ")
      .replace(/_NEWLINE_/g, "\n");
  }

  const { encryptionKey, decryptionKey } = generateKey(key, obfuscationLevel);

  let decryptedText = "";

  for (const char of encryptedText) {
    const index = decryptionKey.indexOf(char);
    if (index === -1) {
      decryptedText += char;
    } else {
      decryptedText += encryptionKey[index];
    }
  }

  return decryptedText;
}
