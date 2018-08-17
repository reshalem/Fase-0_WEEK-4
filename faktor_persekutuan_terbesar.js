// PROBLEM

// Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. 
// Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). 
// FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.

function fpb(angka1, angka2) {
	var fpb;
	var factorial1 = [];
	var factorial2 = [];

	for (var i = 1; i <= angka1; i++) {
		if (angka1 % i === 0) {
			factorial1.push(i);
		}
	}

	for (var i = 1; i <= angka2; i++) {
		if (angka2 % i === 0) {
			factorial2.push(i);
		}
	}

	var faktor_persekutuan = [];

	for (var i = 0; i < factorial1.length; i++) {
		for (var j = 0; j < factorial2.length; j++) {
			if (factorial1[i] === factorial2[j]) {
				faktor_persekutuan.push(factorial1[i]);
			}
		}
	}

	var max = 0;

	for (var i = 0; i < faktor_persekutuan.length; i++) {
		if (faktor_persekutuan[i] > max) {
			max = faktor_persekutuan[i];
		}
	}

	return max;
}

console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1