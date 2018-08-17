// PROBLEM

// Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string. 
// Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling besar. 
// Contoh: "Today, is the greatest day ever!" akan me-return "greatest" karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu. 
// Jika tidak ditemukan kalimat dengan kata yang memiliki huruf berulang, return -1.

function hitungHuruf(kalimat) { // diambil contoh kasus kalimat = 'Today, is the greatest day ever'
	var daftarKata = kalimat.split(' '); // daftarKata = ['Today,', 'is', 'the', 'greatest', 'day', 'ever']
	var arr_hurufDariKata = []; 

	for (var i = 0; i < daftarKata.length; i++) {
		arr_hurufDariKata.push(daftarKata[i].split(''));
	} // arr_hurufDariKata = [ ['T', 'o', 'd', 'a', 'y', ','],
  				  			// ['i', 's'],
  				  			// ['t', 'h', 'e'],
  				  			// ['g', 'r', 'e', 'a', 't', 'e', 's', 't'],
  				  			// ['d', 'a', 'y'],
  				  			// ['e', 'v', 'e', r'] ]

	// Menghapus karakter selain huruf di dalam array, dalam kasus ini hanya dibatasi pada tanda koma dan tanda titik.
	for (var i = 0; i < arr_hurufDariKata.length; i++) {
		for (var j = 0; j < arr_hurufDariKata[i].length; j++) {
			if (arr_hurufDariKata[i][j] === ',' || arr_hurufDariKata[i][j] === '.') {
				arr_hurufDariKata[i].splice(j, 1);
			}
		}
	} // arr_hurufDariKata = [ ['T', 'o', 'd', 'a', 'y'],
  				  			// ['i', 's'],
  				  			// ['t', 'h', 'e'],
  				  			// ['g', 'r', 'e', 'a', 't', 'e', 's', 't'],
  				  			// ['d', 'a', 'y'],
  				  			// ['e', 'v', 'e', r'] ]

	var referenceHuruf = [];

	for (var i = 0; i < arr_hurufDariKata.length; i++) {
		referenceHuruf.push([]);
		for (var j = 0; j < arr_hurufDariKata[i].length; j++) {
			if (referenceHuruf[i].indexOf(arr_hurufDariKata[i][j]) === -1) {
				referenceHuruf[i].push(arr_hurufDariKata[i][j]);
			}
		}
	} // referenceHuruf = [ ['T', 'o', 'd', 'a', 'y'],
  						 // ['i', 's'],
  						 // ['t', 'h', 'e'],
  						 // ['g', 'r', 'e', 'a', 't', 's'],
  						 // ['d', 'a', 'y'],
  						 // ['e', 'v', 'r'] ]

	var arr_kataBerulang = [];
	var joinedHuruf = '';

	for (var i = 0; i < referenceHuruf.length; i++) {
		for (var j = 0; j < arr_hurufDariKata.length; j++) {
			if ((i === j) && (arr_hurufDariKata[j].length > referenceHuruf[i].length)) {
				joinedHuruf = arr_hurufDariKata[j].join('')
				arr_kataBerulang.push(joinedHuruf);
			}
		}
	} // arr_kataBerulang = ['greatest', 'ever']

	var kataBerulang_split = [];

	for (var i = 0; i < arr_kataBerulang.length; i++) {
		kataBerulang_split.push(arr_kataBerulang[i].split(''));
	} // kataBerulang_split = [ [ 'g', 'r', 'e', 'a', 't', 'e', 's', 't' ],
  	  						 // [ 'e', 'v', 'e', 'r' ] ]

	var reference_kB = [];

	for (var i = 0; i < arr_kataBerulang.length; i++) {
		reference_kB.push([]);
		for (var j = 0; j < arr_kataBerulang[i].length; j++) {
			if (reference_kB[i].indexOf(arr_kataBerulang[i][j]) === -1) {
				reference_kB[i].push(arr_kataBerulang[i][j]);
			}
		}
	} // reference_kB = [ ['g', 'r', 'e', 'a', 't', 's'],
  					   // [ 'e', 'v', 'r' ] ]

	var temp_pembagianHuruf = [];
	var arr_pembagianHuruf = [];

	for (var i = 0; i < reference_kB.length; i++) {
		arr_pembagianHuruf.push([]);
		for (var j = 0; j < reference_kB[i].length; j++) {
			for (var k = 0; k < kataBerulang_split[i].length; k++) {
				if (kataBerulang_split[i][k] === reference_kB[i][j]) {
					temp_pembagianHuruf.push(kataBerulang_split[i][k]);
				}
			}

			arr_pembagianHuruf[i].push(temp_pembagianHuruf);
			temp_pembagianHuruf = [];
		}

		arr_pembagianHuruf[i].push(kataBerulang_split[i].join(''));
	} // arr_pembagianHuruf = [ [ ['g'], ['r'], ['e', 'e'], ['a'], ['t', 't'], ['s'], 'greatest'],
  							 // [ ['e', 'e'], ['v'], ['r'], 'ever'] ]

	var count_hurufBerulang = 0;

	for (var i = 0; i < arr_pembagianHuruf.length; i++) {
		for (var j = 0; j < arr_pembagianHuruf[i].length - 1; j++) {
			if (arr_pembagianHuruf[i][j].length > 1) {
				count_hurufBerulang = count_hurufBerulang + arr_pembagianHuruf[i][j].length;
			}
		}

		arr_pembagianHuruf[i].push(count_hurufBerulang);
		count_hurufBerulang = 0;
	} // arr_pembagianHuruf = [ [ ['g'], ['r'], ['e', 'e'], ['a'], ['t', 't'], ['s'], 'greatest', 4],
  							 // [ ['e', 'e'], ['v'], ['r'], 'ever' 2] ]

  	var maxCount = 0;
  	var fix_kataTerulang = '';

  	for (var i = 0; i < arr_pembagianHuruf.length; i++) {
  		for (var j = 0; j < arr_pembagianHuruf[i].length; j++) {
  			if (typeof arr_pembagianHuruf[i][j] === 'number') {
  				var nilaiPerulangan = arr_pembagianHuruf[i][j];
  				if (nilaiPerulangan > maxCount) {
	  				maxCount = nilaiPerulangan;
	  				fix_kataTerulang = arr_pembagianHuruf[i][j-1];
	  			}
  			}
  		}
  	} // max = 4
  	  // fix_kataTerulang = 'greatest'

	if (arr_kataBerulang.length === 0) {
		return -1
	} else {
		return fix_kataTerulang;
	}
}

console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau