/**
 * Reverses the characters in a string.
 * This function is used for encryption and decryption purposes
 * to ensure efficient character mapping and reduce errors or bugs.
 *
 * @param {string} str - The input string to reverse.
 * @returns {string} - The reversed string.
 */
const reverseString = (str) => {
    return str.split('').reverse().join('');
};

/**
 * Contains all primary symbols available on a standard keyboard.
 * This is separated to allow easier editing and debugging.
 */
const $primarySymbols = "~!@#$%^&*()-_=+[{]}|;:,<.>/?\"'`\\";
const $revPrimarySymbols = reverseString($primarySymbols);

/**
 * Represents general punctuation characters.
 * Includes typographic symbols, mathematical notations, and special marks.
 */
const $generalPunctuation = "§−℃©×÷℉®¦—№™℗⁅⁆‹›⌈⌉«»⌊⌋⟨⟩⟦⟧´⟪⟫⟬⟭‸¸⟮⟯‖‗¨¯′‵‘’‛″‶“”„‟‴‷⁗†‡•¶⁋⁎⁕‰‣⁌⁍⁑⁜‱♪⁽⁾⁂※·․⁞⁛¬⁏‥⁚⁖⁙✓…⁝⁘✕¡‼°⁔⁀¿⁈ª‿⁐‽⁇º⁁⁄–⏑±µ⁓⌀⏓⏒⏖⏔⏕⁊⁒⌂";
const $revGeneralPunctuation = reverseString($generalPunctuation);

/**
 * Contains a comprehensive set of currency symbols from various countries.
 * Useful for applications handling international financial data.
 */
const $currencySymbols = "¥฿₫₩֏€₹₪₺₡₦£₽₢₱৳₲₮₸₾₥៛₨₴₵₭؋૱¢﷼₣₿₼௹¤₳₯₤₷৹₰₠ℳ₶৻₻ƒ₧৲";
const $revCurrencySymbols = reverseString($currencySymbols);

/**
 * Includes Latin-based characters and their extended variants.
 * Covers a wide range of letters used in linguistic and typographic contexts.
 */
const $latinSymbols = "ĀāǍǎĂăĄąÆæɐʙĆćɑɒɓɔĊċČčĐđĎďɗɖĈĉÐðʤʣĒēĚěĔĕĖėĘęɜʚɘGgĜɞɛəɠɡĞɝɚʩĠġĢĝɣHhɦʜğɤĤĥɥɪģʯĦħɧɩĪīǏǐĬĭİıĮįɨɫĴĵĸʞĲĳɟʝĶķĽľʟʪĹĺĻļɭɮĿŀŁłɬʫɱɰŃńŅņɯŉŇňŊŋṆṅŌōǑǒɳɴÓóÔôɲÒòÖöŎŏØøɸɹÕõŒœʠɺŐőɵɷɶŔŕɻʀʁʃŘřɼɽſßŖŗɾɿʅʂŚśŞşŦŧŠšŢţþÞŜŝʨʧʈʦŪūǓǔŬŭÛûŨũÙùÜüűŰǕǖǛǜʉʌǗǘŮůʋǙǚŲųʊʍÝýʎʏŴŵŶŷʬʭŸÿŹźŻżʒʕʖŽžʓʡʘʐʑʔʢ";
const $revLatinSymbols = reverseString($latinSymbols);

export {
    $primarySymbols,
    $revPrimarySymbols,
    $generalPunctuation,
    $revGeneralPunctuation,
    $currencySymbols,
    $revCurrencySymbols,
    $latinSymbols,
    $revLatinSymbols,
};

/**
 * Combines all defined character sets into one string for validation.
 * Checks for duplicate characters to ensure uniqueness and avoid conflicts.
 */
const allCharacters = $primarySymbols + $generalPunctuation + $currencySymbols + $latinSymbols;
const characterMap = new Map();

for (let i = 0; i < allCharacters.length; i++) {
    const char = allCharacters[i];
    if (characterMap.has(char)) {
        /**
         * Duplicate character logging (disabled by default).
         * Uncomment the line below to log duplicate characters for debugging.
         */
        // console.error(`Duplicate character '${char}' found at index ${i} (first occurrence at index ${characterMap.get(char)})`);
    } else {
        characterMap.set(char, i);
    }
}

/**
 * Validates whether all characters in the combined set are unique.
 * Logs a success message if no duplicates are found.
 */
if (characterMap.size === allCharacters.length) {
    // console.log("No duplicate characters found.");
}
