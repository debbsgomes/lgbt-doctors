const Person = require('./Person');
const Doctor = require('./Doctor');
const Patient = require ('./Patient');

const person1 = new Person("Diego", "Silva", "123456789", "Avenida Rio Branco", "21998707070");
person1.applyAsPatient();

const person2 = new Person("Jessica", "Santos", "987654321", "Avenida Paulista", "11997354105");
person2.applyAsPatient();

const person3 = new Person("João", "Dantas", "111111111", "Rua Paulo Gustavo", "21998707035");
person2.applyAsDoctor();

const patient1 = new Patient("Diego", "Silva", "123456789", "Avenida Rio Branco", "21998707070", "Hypertension", true);
const patient2 = new Patient("Jessica", "Santos", "987654321", "Avenida Paulista", "1997354105", "Diabetes", false);

console.log(patient1);
console.log(patient2);

console.log(patient1.isTransgenderPatient());
console.log(patient2.isTransgenderPatient());

const doctor1 = new Doctor("Dr. João", "Dantas", "111111111", "Rua Paulo Gustavo", "21998707035", "12345/RJ", "Cardiologist");
console.log(doctor1);;