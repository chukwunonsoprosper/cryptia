import { cryptia } from "../cryptia.js";

//create an instance of cryptia

const crypt = cryptia();
const encrypted = crypt.encrypt("Writing code is fun, don't forget to star cryptia");
console.log('[encrypted text]:', encrypted);
