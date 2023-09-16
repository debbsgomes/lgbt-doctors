const Person = require('./Person');

class Doctor extends Person {
  constructor(name, surname, cpf, address, cellphone, crmNumber, specialty) {
    super(name, surname, cpf, address, cellphone);
    this.crmNumber = crmNumber;
    this.specialty = specialty;
    this.availableSchedule = {
      days: [],
      hours: [],
    };
    this.examsRequested = [];
    this.patientsTreated = [];
  }

  prescribeMedication(patient, medication) {
    console.log(`${this.name} prescribed ${medication} to ${patient.name}`);
  }

  updateAvailableSchedule(days, hours) {
    this.availableSchedule = {
      days: [...this.availableSchedule.days, ...days],
      hours: [...this.availableSchedule.hours, ...hours],
    };
  }

  requestExam(patient, examName) {
    console.log(`${this.name} requested a ${examName} examination for ${patient.name}`);
    patient.doExam(examName);
    this.examsRequested.push(examName);
  }

  treatPatient(patient) {
    if (this.canTreatPatient(patient)) {
      console.log(`${this.name} is treating ${patient.name} as a doctor.`);
      this.patientsTreated.push(patient);
    } else {
      console.log(`${this.name} cannot treat ${patient.name} due to specialization mismatch.`);
    }
  }

  canTreatPatient(patient) {
    return patient.doctorSpecialization === this.specialty;
  }

  showAvailableSchedule() {
    console.log(`${this.name}'s available days: ${this.availableSchedule.days.join(', ')}`);
    console.log(`${this.name}'s available hours: ${this.availableSchedule.hours.join(', ')}`);
  }
}

module.exports = Doctor;





