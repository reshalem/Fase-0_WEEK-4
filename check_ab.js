// PROBLEM

// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. 
// Function tersebut mengembalikan nilai true jika di dalam string tersebut 
// terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. 
// Jika tidak ditemukan sama sekali, kembalikan nilai false.

function checkAB(str) {
	var response = false;
	var arrStr = str.split('');
	var jarak_ab = 0;
	var jarak_ba = 0;

	outerloop: for (var i = 0; i < arrStr.length; i++) {
		if (arrStr[i] === 'a') {
			for (var j = 0; j < arrStr.length; j++) {
				if (arrStr[j] === 'b') {
					jarak_ab = Math.abs(j - i);

					if (jarak_ab === 4) {
						response = true;
						break outerloop;
					}
				}
			}
		} else if (arrStr[i] === 'b') {
			for (var j = 0; j < arrStr.length; j++) {
				if (arrStr[j] === 'a') {
					jarak_ba = Math.abs(j - i);

					if (jarak_ba === 4) {
						response = true;
						break outerloop;
					}
				}
			}
		}
	}

	return response;
}

console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false