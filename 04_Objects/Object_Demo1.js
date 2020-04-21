// let student = new Object();
// // two ways to create properties in an object
// student.name = "Savannah";
// student['id'] = 1234;
// student['courseCode'] = "QAJSFUND!";
// student.name = "Nick"; // can't override existing key/property!
// console.log(student);

let student = { name: "Sav", id: 123, courseCode: 'JSFUND' };
let nick = student;
nick.name = "nick";
console.log(nick);

console.log(student.name);
console.log(student['name']);

for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

let classroom = [
    { name: 'Sav', id: 1234, courseCode: 'JSFUND' },
    { name: 'Dev', id: 2134, courseCode: 'JSFUND' },
    { name: 'Tom', id: 1244, courseCode: 'JSFUND' },
    { name: 'Molly', id: 4566, courseCode: 'JSFUND' }
]
console.log(classroom);
for (let i = 0; i < classroom.length; i++) {
    console.log(classroom[i]);
    for (let key in classroom[i]) {
        console.log(`Key: ${classroom[i][key]}`);
    }
}

