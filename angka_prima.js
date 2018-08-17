// PROBLEM

// Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka. 
// Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.

function angkaPrima(angka) {
	var isPrime;

	if (angka === 2) {
		isPrime = true;
	} else if (angka === 1) {
		isPrime = false;
	} else {
		for (var i = 2; i <= angka-1; i++) {
			if (angka % i === 0) {
				isPrime = false;
				break;
			} else if (angka % i !== 0) {
				isPrime = true;
			}
		}
	}

	return isPrime;
}

console.log(angkaPrima(2)); // true
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false