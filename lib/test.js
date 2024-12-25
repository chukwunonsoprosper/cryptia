/* 
import the module from cryptia.js
*/
import { cryptia } from "../cryptia.js";

/*
create an instance of cryptia
*/

const crypt = cryptia();

const encrypted = crypt.encrypt("Hello! Welcome tO cryptia :).");

console.log('[encrypted text]:', encrypted);
console.log('[decryped text]:', crypt.decrypt(encrypted))
