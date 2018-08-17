// PROBLEM

// Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string. 
// Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya. 
// Spasi dan simbol diabaikan.

function tukarBesarKecil(kalimat) {
	var arrKata = kalimat.split(' ');
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

console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"