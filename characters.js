// Description: This file contains all the characters that are used in the application.

// original v1 characters:  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 `~!@#$%^&*()-_=+[{]}|;:,<.>/?"©•▪∘–°—⋅∙·․€£¥←→é²§−℃×÷℉®¦№™℗⁅⁆‹›⌈⌉«»⌊⌋⟨⟩⟦⟧´⟪⟫⟬⟭‸¸⟮⟯‖‗¨¯′‵‘’‚‛″‶“”„‟‴‷⁗†‡¶⁋⁎⁕‰‣⁌⁍⁑⁜‱♪⁽⁾⁂※⁞⁛¬⁏‥⁚⁖⁙✓…⁝⁘✕¡‼⁔¿⁈ª‿⁐‽⁇º⁁⁄⏑±µ⌀⏓⏒‾⌁⏖⏔⏕⁊⁒⌂';
// original v1 revered characters: 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0987654321ا⌂⁒⁊⏕⏔⏖⌁~^‾⏒⏓⌀µ±⏑–⁄⁁º⁇‽&⁐‿ª⁈¿?⁀°⁔‼¡!✕_⁘⁝…:✓⁙⁖⁚‥⁏¬⁛⁞·;※⁂⁾⁽♪‱⁜⁑⁍⁌‣‰⁕⁎⁋¶•%‡†*⁗‷‴‟„”‶″‛‚’‘‵′¯¨‗‖⟯⟮¸‸⟭⟬⟫⟪´`⟧⟦⟨⟩⌋⌊»«{}⌉⌈›‹[⁆⁅><)(℗™№=—¦®℉÷×|©℃−+-§²é←→¥£€․∙⋅∘▪\'"/,]$#@';



// function reverses characters in a string for encryption and decryption, this help reduce errors and bugs and also increase effecient and corresponding character values..
const reverseString = (str) => {
	return str.split('').reverse().join('');
};

// seperated the characters so editing would be error and bug free.
// all primary symbols on keyboard, 
const $primarySymbols = "~!@#$%^&*()-_=+[{]}|;:,<.>/?\"'`\\";
const $revPrimarySymbols = reverseString($primarySymbols)

const $generalPunctuation = "§−℃©×÷℉®¦—№™℗⁅⁆‹›⌈⌉«»⌊⌋⟨⟩⟦⟧´⟪⟫⟬⟭‸¸⟮⟯‖‗¨¯′‵‘’‛″‶“”„‟‴‷⁗†‡•¶⁋⁎⁕‰‣⁌⁍⁑⁜‱♪⁽⁾⁂※·․⁞⁛¬⁏‥⁚⁖⁙✓…⁝⁘✕¡‼°⁔⁀¿⁈ª‿⁐‽⁇º⁁⁄–⏑±µ⁓⌀⏓⏒⏖⏔⏕⁊⁒⌂";
const $revGeneralPunctuation = reverseString($generalPunctuation)

const $currencySymbols = "¥฿₫₩֏€₹₪₺₡₦£₽₢₱৳₲₮₸₾₥៛₨₴₵₭؋૱¢﷼₣₿₼௹¤₳₯₤₷৹₰₠ℳ₶৻₻ƒ₧৲";
const $revCurrencySymbols = reverseString($currencySymbols)

const $latinSymbols = "ĀāǍǎĂăĄąÆæɐʙĆćɑɒɓɔĊċČčĐđĎďɗɖĈĉÐðʤʣĒēĚěĔĕĖėĘęɜʚɘGgĜɞɛəɠɡĞɝɚʩĠġĢĝɣHhɦʜğɤĤĥɥɪģʯĦħɧɩĪīǏǐĬĭİıĮįɨɫĴĵĸʞĲĳɟʝĶķĽľʟʪĹĺĻļɭɮĿŀŁłɬʫɱɰŃńŅņɯŉŇňŊŋṆṅŌōǑǒɳɴÓóÔôɲÒòÖöŎŏØøɸɹÕõŒœʠɺŐőɵɷɶŔŕɻʀʁʃŘřɼɽſßŖŗɾɿʅʂŚśŞşŦŧŠšŢţþÞŜŝʨʧʈʦŪūǓǔŬŭÛûŨũÙùÜüűŰǕǖǛǜʉʌǗǘŮůʋǙǚŲųʊʍÝýʎʏŴŵŶŷʬʭŸÿŹźŻżʒʕʖŽžʓʡʘʐʑʔʢ";


const $revLatinSymbols = reverseString($latinSymbols)


export { $primarySymbols, $revPrimarySymbols, $generalPunctuation, $revGeneralPunctuation, $currencySymbols, $revCurrencySymbols, $latinSymbols, $revLatinSymbols, }




// Check for duplicate characters and log out the duplicate and its location
const allCharacters = $primarySymbols + $generalPunctuation + $currencySymbols + $latinSymbols;
const characterMap = new Map();

for (let i = 0; i < allCharacters.length; i++) {
	const char = allCharacters[i];
	if (characterMap.has(char)) {
		console.error(`Duplicate character '${char}' found at index ${i} (first occurrence at index ${characterMap.get(char)})`);
	} else {
		characterMap.set(char, i);
	}
}

if (characterMap.size === allCharacters.length) {
	console.log("No duplicate characters found.");
}