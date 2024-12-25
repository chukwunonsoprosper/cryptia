import { cryptia } from "../cryptia.js";

//create an instance of cryptia
const crypt = cryptia();

const encrypted = crypt.encrypt("Hey User(S), Ŵriting cÔde is fun, but pls... don't forget to star cryptia's github repo!.");

console.log('[encrypted text]:', encrypted);
console.log('[decryped text]:', crypt.decrypt(encrypted))