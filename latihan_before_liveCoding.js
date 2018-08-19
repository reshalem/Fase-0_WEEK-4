// ANGKA PRIMA

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
			} else if (angka % i > 0) {
				isPrime = true;
			}
		}
	}

	return isPrime;
}

console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false


// FPB

function fpb(angka1, angka2) {
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

	var arr_faktorPersekutuan = [];

	for (var i = 0; i < factorial1.length; i++) {
		for (var j = 0; j < factorial2.length; j++) {
			if (factorial1[i] === factorial2[j]) {
				arr_faktorPersekutuan.push(factorial1[i]);
			}
		}
	}

	var max = 0;

	for (var i = 0; i < arr_faktorPersekutuan.length; i++) {
		if (arr_faktorPersekutuan[i] > max) {
			max = arr_faktorPersekutuan[i];
		}
	}

	return max;
}

console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1


// MEDIAN

function cariMedian(arr) {
	var median;
	var index_median;

	if (arr.length % 2 === 1) {
		index_median = (arr.length-1)/2;
		median = arr[index_median];
	} else if (arr.length % 2 === 0) {
		var index_genap_atas = arr.length/2;
		var index_genap_bawah = Math.floor((arr.length-1)/2);
		median = ( arr[index_genap_atas] + arr[index_genap_bawah] )/2;
	}

	return median;
}

console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5


// MODUS
// Liat file cari_modus.js


// UBAH HURUF

function ubahHuruf(kata) {
	var kamus = 'abcdefghijklmnopqrstuvwxyz';
	var result = [];
	var indexKamus;

	for (var i = 0; i < kata.length; i++) {
		for (var j = 0; j < kamus.length; j++) {
			if (kata[i] === kamus[j]) {
				if (kata[i] === 'z') {
					result.push(kamus[0]);
				} else {
					indexKamus = j;
					result.push(kamus[indexKamus+1]);
				}
			}
		}
	}

	var result_joined = result.join('');
	return result_joined;
}

console.log(ubahHuruf('zoz')); // apa
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu


// HITUNG HURUF
// Liat file hitung_huruf.js


// DIGIT PERKALIAN MINIMUM

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


// MENGURUTKAN ABJAD

function urutkanAbjad(str) {
	var kata_terurut = str.split('').sort().join('');

	return kata_terurut;
}

console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'


// TUKAR BESAR KECIL

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


// CHECK AB

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


// CHANGE ME

function changeMe(arr) {
	var bio = new Object();
	var bioData = ['firstName', 'lastName', 'gender', 'age'];
	var arr_bioData = [];

	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < bioData.length; j++) {
			if (j === 3) {
				if (arr[i][j] === undefined || arr[i][j] > 2018) {
					bio[bioData[j]] = 'Invalid Birth Year';
				} else {
					bio[bioData[j]] = 2018 - arr[i][j];
				}
			} else {
				bio[bioData[j]] = arr[i][j];
			}
		}

		arr_bioData.push(bio);
		bio = {};
	}

	var fullName = '';
	var opening = ''

	if (arr.length === 0) {
		console.log('');
	} else {
		for (var i = 0; i < arr_bioData.length; i++) {
			fullName = arr_bioData[i].firstName + ' ' + arr_bioData[i].lastName + ':';
			opening = (i + 1) + '. ' + fullName;

			console.log(opening);
			console.log(arr_bioData[i]);
		}
	}
}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""


// SHOPPING TIME

function shoppingTime(memberId, money) {
	var response;
	var product = [
	    ['Sepatu Stacattu', 1500000],
	    ['Baju Zoro', 500000],
	    ['Baju H&N', 250000],
	    ['Sweater Uniklooh', 175000],
	    ['Casing Handphone', 50000]
	];
	var obj = {
		memberId: '',
		money: 0,
		listPurchased: [],
		changeMoney: 0
	};

	if (memberId === '' || memberId === undefined) {
		response = 'Mohon maaf, toko X hanya berlaku untuk member saja';
	} else if (money < 50000) {
		response = 'Mohon maaf, uang tidak cukup';
	} else {
		obj.memberId = memberId;
		obj.money = money;

		for (var i = 0; i < product.length; i++) {
			if (obj.money - product[i][1] >= 0) {
				obj.money = obj.money - product[i][1];
				obj.listPurchased.push(product[i][0]);
				obj.changeMoney = obj.money;
			} else {
				obj.changeMoney = obj.money;
			}
		}

		obj.money = money;
		response = obj;
	}

	return response;
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); //Mohon maaf, toko X hanya berlaku untuk member saja


// TOKO X

function countProfit(shoppers) {
	var listBarang = [
		['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
	];

	var arr_objBarang = [];

	for (var i = 0; i < listBarang.length; i++) {
		var profit_data = {
			product: '',
			shoppers: [],
			leftOver: 0,
			totalProfit: 0
		}

		profit_data.product = listBarang[i][0];
		profit_data.leftOver = listBarang[i][2];

		for (var j = 0; j < shoppers.length; j++) {
			if (shoppers[j].product === profit_data.product) {
				if (shoppers[j].amount <= profit_data.leftOver) {
					profit_data.leftOver = profit_data.leftOver - shoppers[j].amount;
					profit_data.shoppers.push(shoppers[j].name);
					profit_data.totalProfit = profit_data.totalProfit + listBarang[i][1] * shoppers[j].amount;
				}
			}
		}

		arr_objBarang.push(profit_data);
	}

	if (shoppers.length === 0) {
		return '';
	} else {
		return arr_objBarang;
	}
}

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]