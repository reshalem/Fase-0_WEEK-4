// PROBLEM

// Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. 
// Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. 
// Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.

function urutkanAbjad(str) {
	var kata_terurut = str.split('').sort().join('');

	return kata_terurut;
}

console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'