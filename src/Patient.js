const Person = require('./Person');

class Patient extends Person {
    #medicalHistory

  constructor(name, surname, cpf, address, cellphone, medicalHistory, isTransgender) {
    super(name, surname, cpf, address, cellphone);
    this.#medicalHistory = medicalHistory;
    this.doctorSpecialization = null;
    this.appointments = [];
    this.isTransgender = isTransgender;
  }

  isTransgenderPatient() {
    return this.isTransgender;
  }

  chooseDoctorSpecialization(specialization) {
    this.doctorSpecialization = specialization;
    this.logSpecializationChoice();
  }

  doExam(examName) {
    this.logExamUndergoing(examName);
  }

  getMedicalHistory() {
    return this.#medicalHistory;
  }

  requestAppointment(doctor, date, availableDays, availableHours) {
    if (this.isTransgenderPatient()) {
        if (this.isDateAvailable(date, availableDays, availableHours)) {
        return;
    }

    const appointment = {
      doctor: doctor,
      date: date,
    };

    this.appointments.push(appointment);
    this.logAppointmentRequest(doctor, date);
    } else {
    console.log("Non-transgender patients are not eligible to request appointments.");
    }

  }

  isDateAvailable(date, availableDays, availableHours) {
    if (!availableDays.includes(date) || !availableHours.includes(date)) {
      console.log(`Sorry, ${date} is not available for appointments.`);
      return false;
    }
    return true;
  }

  logSpecializationChoice() {
    console.log(`${this.name} has chosen ${this.doctorSpecialization} as their preferred doctor's specialization.`);
  }

  logExamUndergoing(examName) {
    console.log(`${this.name} is undergoing a ${examName} examination.`);
  }

  logAppointmentRequest(doctor, date) {
    console.log(`${this.name} requested an appointment with Dr. ${doctor.surname} on ${date}.`);
  }
}

module.exports = Patient;
