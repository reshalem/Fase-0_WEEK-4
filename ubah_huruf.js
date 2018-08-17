// PROBLEM

// Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. 
// Function akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya. 
// Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.

function ubahHuruf(kata) {
	var kamus = 'abcdefghijklmnopqrstuvwxyz';
	var arrKamus = kamus.split('');
	var kata_split = kata.split('');
	var indexHuruf;
	var result = [];

	for (var i = 0; i < kata_split.length; i++) {
		for (var j = 0; j < arrKamus.length; j++) {
			if (kata_split[i] === arrKamus[j]) {
				if (kata_split[i] === 'z') {
					result.push(arrKamus[0]);
				} else {
					indexHuruf = j;
					result.push(arrKamus[indexHuruf+1]);
				}
			}
		}
	}
	
	var fix_result = result.join('');
	return fix_result;	
}

console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu