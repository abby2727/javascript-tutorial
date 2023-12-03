const students = [
	{
		fName: 'Alex',
		lName: 'Gonzaga',
		age: 20,
		hobbies: ['singing', 'dancing', 'sleeping'],
		gender: 'female',
		isKind: true
	},
	{
		fName: 'Rosden',
		lName: 'Hingpit',
		age: 20,
		hobbies: ['studying', 'shopping', 'reading'],
		gender: 'female',
		isKind: true
	},
	{
		fName: 'Abdul',
		lName: 'Pangandaman',
		age: 20,
		hobbies: ['playing games', 'sleeping', 'chess'],
		gender: 'male',
		isKind: false
	}
];

// * Display hobbies of each students
/*
students.forEach((student) => {
	console.log(`Hobbies of ${student.fName}: `);
	for (h of student.hobbies) {
		console.log(h);
	}
});
*/

// * Display hobbies of Abdul
/*
const findStudent = students.find((s) => s.fName === 'Abdul');
console.log('Hobbies of Abdul: ');
for (h of findStudent.hobbies) {
	console.log(h);
}
*/

// * Check who is adult and who is young (adult >= 21)
// * if all are adults display "ALL are adults"
// * if all are young display "ALL are young"
/*
const allAdultStudent = students.filter((s) => s.age >= 21);
console.log('Students who are adults: ');
if (allAdultStudent.length === 0) {
	console.log('No adult students.');
} else {
	allAdultStudent.forEach((s) => {
		console.log(s.fName);
	});
}

const allYoungStudent = students.filter((s) => s.age < 21);
console.log('Students who are young: ');
if (allYoungStudent.length === 0) {
	console.log('No young students.');
} else {
	allYoungStudent.forEach((s) => {
		console.log(s.fName);
	});
}

console.log('');

const allAreAdults = students.every((s) => s.age >= 21);
if (allAreAdults) {
	console.log('ALL are adults.');
}

const allAreYoung = students.every((s) => s.age < 21);
if (allAreYoung) {
	console.log('ALL are young.');
}
*/

// * Modify age of Abdul
const findAbdul = students.find((s) => s.fName === 'Abdul');
findAbdul.age = 24;
console.log(findAbdul);

// * Modify age of each students
students.forEach((s) => {
	s.age = 30;
});
console.log(students);
