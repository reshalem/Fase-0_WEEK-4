// PROBLEM

// Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator
// Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):
// 1. Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan 
// 	  menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)
// 2. Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord
// 3. Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya
// 4. Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

// NOTE
// Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator 
// dan return password-nya dari function itu juga.

function changeVocals (str) {
	var str_split = str.split('');
	var kamus  = 'abefijopuv';
	var result = ''

	for (var i = 0; i < str_split.length; i++) {
		for (var j = 0; j < kamus.length; j++) {
			if (str_split[i] === 'a' || str_split[i] === 'e' || str_split[i] === 'i' || str_split[i] === 'o' || str_split[i] === 'u') {
				var index_kamus = kamus.indexOf(str_split[i]);
				str_split.splice(i, 1, kamus[index_kamus + 1]);
			} else if (str_split[i] === 'A' || str_split[i] === 'E' || str_split[i] === 'I' || str_split[i] === 'O' || str_split[i] === 'U') {
				var index_kamus = kamus.indexOf(str_split[i].toLowerCase());
				var kamus_upper = kamus[index_kamus + 1].toUpperCase();
				str_split.splice(i, 1, kamus_upper);
			}
		}
	}

	var str_replaced = str_split.join('');
	return str_replaced;
}

function reverseWord (str) {
	var arrStr = str.split('');
	var reverseStr = arrStr.reverse().join('');
	return reverseStr;
}

function setLowerUpperCase(str) {
	var arrKata = str.split(' ');
	var arrHuruf = [];

	for (var i = 0; i < arrKata.length; i++) {
		arrHuruf.push(arrKata[i].split(''));
	}

	for (var i = 0; i < arrHuruf.length; i++) {
		for (var j = 0; j < arrHuruf[i].length; j++) {
			if (arrHuruf[i][j].toUpperCase() === arrHuruf[i][j]) {
				var lowerHuruf = arrHuruf[i][j].toLowerCase();
				arrHuruf[i].splice(j, 1, lowerHuruf);
			} else if (arrHuruf[i][j].toLowerCase() === arrHuruf[i][j]) {
				var upperHuruf = arrHuruf[i][j].toUpperCase();
				arrHuruf[i].splice(j, 1, upperHuruf);
			}
		}
	}

	var result = [];

	for (var i = 0; i < arrHuruf.length; i++) {
		result.push(arrHuruf[i].join(''));
	}

	var fix_result = result.join(' ');
	return fix_result;
}

function removeSpaces (str) {
	var arrStr = str.split('');

	for (var i = 0; i < arrStr.length; i++) {
		if (arrStr[i] === ' ') {
			arrStr.splice(i, 1);
		}
	}

	if (str.length < 5) {
		var space_removed = 'Minimal karakter yang diinputkan adalah 5 karakter';
	} else {
		var space_removed = arrStr.join('');
	}

	return space_removed;
}

function passwordGenerator (name) {
	var changedName = changeVocals(name);
	var reverseName = reverseWord(changedName);
	var lowerUpperName = setLowerUpperCase(reverseName);
	var noSpace_name = removeSpaces(lowerUpperName);

	return noSpace_name;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'