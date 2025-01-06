import { $primarySymbols, $revPrimarySymbols, $generalPunctuation, $revGeneralPunctuation, $currencySymbols, $revCurrencySymbols, $latinSymbols, $revLatinSymbols } from "../characters.js";

const encryptionAlgorithm = () => `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 ${$primarySymbols}${$generalPunctuation}${$currencySymbols}${$latinSymbols}`;
const decryptionAlgorithm = () => `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0987654321 ${$revLatinSymbols}${$revCurrencySymbols}${$revGeneralPunctuation}${$revPrimarySymbols}`;

export { encryptionAlgorithm, decryptionAlgorithm };

