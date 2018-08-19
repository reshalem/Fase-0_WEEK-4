// PROBLEM

// Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. 
// Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut. 
// Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. 
// Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

function digitPerkalianMinimum(angka) {
	var result = [];
	var tempHasilBagi = 0;
	var str_tempHasilBagi = '';
	var digit_perkalian = 0;

	for (var i = 1; i <= angka; i++) {
		if (angka % i === 0) {
			tempHasilBagi = angka/i;
			iString = i.toString();
			str_tempHasilBagi = tempHasilBagi.toString();
			digit_perkalian = iString.length + str_tempHasilBagi.length;

			result.push(digit_perkalian);
		}
	}

	var min = result[0];

	for (var i = 0; i < result.length; i++) {
		if (result[i] < min) {
			min = result[i];
		}
	}

	return result;
}

console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2