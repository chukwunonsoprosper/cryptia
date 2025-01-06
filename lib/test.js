/* 
import the module from cryptia.js
*/
import cryptia from "../cryptia.js";

/*
create an instance of cryptia
*/

const crypt = cryptia();

const encrypted = crypt.encrypt("Hello! Welcome tO cryptia :). (U+1F602)");

console.log('[encrypted text]:', encrypted);
console.log('[decrypted text]:', crypt.decrypt(encrypted))
