// PROBLEM

// Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. 
// Function akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya. 
// Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.

function ubahHuruf(kata) {
	var kamus = 'abcdefghijklmnopqrstuvwxyz';
	var indexHuruf;
	var result = [];

	for (var i = 0; i < kata.length; i++) {
		for (var j = 0; j < kamus.length; j++) {
			if (kata[i] === kamus[j]) {
				if (kata[i] === 'z') {
					result.push(kamus[0]);
				} else {
					indexHuruf = j;
					result.push(kamus[indexHuruf+1]);
				}
			}
		}
	}
	
	var fix_result = result.join('');
	return fix_result;	
}

console.log(ubahHuruf('zoz')); // apa
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu