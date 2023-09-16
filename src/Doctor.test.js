const Doctor = require('./Doctor');

describe('Doctor class', () => {
  let doctor;

  beforeEach(() => {
    doctor = new Doctor('Dr. João', 'Dantas', '111111111', 'Rua Paulo Gustavo', '21998707035', '12345', 'Cardiologist');
  });

  it('should prescribe medication to a patient', () => {
    const patient = { name: 'Alice' };
    const medication = 'Aspirin';
    const expectedLog = 'Dr. João prescribed Aspirin to Alice';
    console.log = jest.fn();

    doctor.prescribeMedication(patient, medication);

    expect(console.log).toHaveBeenCalledWith(expectedLog);
  });

  it('should update available schedule', () => {
    const days = ['2023-09-20'];
    const hours = ['9:00 AM'];
    
    doctor.updateAvailableSchedule(days, hours);

    expect(doctor.availableSchedule.days).toEqual(['2023-09-20']);
    expect(doctor.availableSchedule.hours).toEqual(['9:00 AM']);
  });

  it('should request an exam for a patient', () => {
    const patient = { name: 'Roberto', doExam: jest.fn() };
    const examName = 'EKG';
    const expectedLog = 'Dr. João requested a EKG examination for Roberto';
    console.log = jest.fn();

    doctor.requestExam(patient, examName);

    expect(console.log).toHaveBeenCalledWith(expectedLog);
    expect(patient.doExam).toHaveBeenCalledWith(examName);
  });

  it('should treat a patient if specialization matches', () => {
    const patient = { name: 'Carlos', doctorSpecialization: 'Cardiologist' };
    const expectedLog = 'Dr. João is treating Carlos as a doctor.';
    console.log = jest.fn();

    doctor.treatPatient(patient);

    expect(console.log).toHaveBeenCalledWith(expectedLog);
    expect(doctor.patientsTreated).toContain(patient);
  });

  it('should not treat a patient if specialization does not match', () => {
    const patient = { name: 'David', doctorSpecialization: 'Dermatologist' };
    const expectedLog = 'Dr. João cannot treat David due to specialization mismatch.';
    console.log = jest.fn();

    doctor.treatPatient(patient);

    expect(console.log).toHaveBeenCalledWith(expectedLog);
    expect(doctor.patientsTreated).not.toContain(patient);
  });

  it('should check if it can treat a patient based on specialization', () => {
    const matchingPatient = { doctorSpecialization: 'Cardiologist' };
    const nonMatchingPatient = { doctorSpecialization: 'Dermatologist' };

    const canTreatMatchingPatient = doctor.canTreatPatient(matchingPatient);
    const canTreatNonMatchingPatient = doctor.canTreatPatient(nonMatchingPatient);

    expect(canTreatMatchingPatient).toBe(true);
    expect(canTreatNonMatchingPatient).toBe(false);
  });

  it('should show available schedule', () => {
    doctor.updateAvailableSchedule(['2023-09-20'], ['9:00 AM']);
    const expectedLog = "Dr. João's available days: 2023-09-20";
    console.log = jest.fn();

    doctor.showAvailableSchedule();

    expect(console.log).toHaveBeenCalledWith(expectedLog);
  });
});