// PROBLEM

// Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi 
// dimana array tersebut berisi value (pasti berurut dari kiri ke kanan) First Name, Last Name, Gender dan Birth Year. 
// Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age. 
// Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. 
// Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year'.

// Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] maka output:
// Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
// John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }

function changeMe(arr) {
	var bio = new Object();
	var bioData = ['firstName', 'lastName', 'gender', 'age'];
	var arrBio = [];

	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < bioData.length; j++) {
			if (j === 3) {
				if (arr[i][j] === undefined || arr[i][j] > 2018) {
					var realAge = 'Invalid Birth Year';
				} else {
					var realAge = 2018 - arr[i][j];
				}
				bio[bioData[j]] = realAge;
			} else {
				bio[bioData[j]] = arr[i][j];
			}
		}

		arrBio.push(bio);
		bio = {};
	}

	var sentence = '';
	var fullName = '';

	if (arr.length === 0) {
		console.log('');
	} else {
		for (var i = 0; i < arrBio.length; i++) {
			fullName = arrBio[i].firstName + ' ' + arrBio[i].lastName;
			sentence = (i + 1) + '. ' + fullName + ':';
			console.log(sentence);
			console.log(arrBio[i]);
		}
	}
}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
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