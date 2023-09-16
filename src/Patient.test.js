const Patient = require ('./Patient');

describe('Patient class', () => {
  let patient;

  beforeEach(() => {
    patient = new Patient(
      'Alice',
      'Silva',
      '1234567890',
      'Avenida das Araras',
      '31987650123',
      'Medical history',
      true
    );
  });

  it('should create a patient object', () => {
    expect(patient instanceof Patient).toBeTruthy();
  });

  it('should check if the patient is transgender', () => {
    expect(patient.isTransgenderPatient()).toBe(true);
  });

  it('should choose doctor specialization', () => {
    const specialization = 'Cardiologist';
    patient.chooseDoctorSpecialization(specialization);
    expect(patient.doctorSpecialization).toBe(specialization);
  });

  it('should do an exam', () => {
    const examName = 'EKG';
    const expectedLog = 'Alice is undergoing a EKG examination.';
    console.log = jest.fn();
    patient.doExam(examName);
    expect(console.log).toHaveBeenCalledWith(expectedLog);
  });

  it('should get medical history', () => {
    expect(patient.getMedicalHistory()).toBe('Medical history');
  });

  it('should request an appointment for a transgender patient', () => {
    const patient = new Patient('Alice', 'Silva','1234567890', 'Avenida das Araras','31987650123', [], true);
    const doctor = { surname: 'Magalhães' };
    const date = '2023-09-20';
    const availableDays = ['2023-09-20'];
    const availableHours = ['9:00 AM'];

    console.log = jest.fn();
    patient.requestAppointment(doctor, date, availableDays, availableHours);

    expect(console.log).toHaveBeenCalledWith(`Alice requested an appointment with Dr. Magalhães on 2023-09-20.`);
  });

  it('should not request an appointment for a non-transgender patient', () => {
    const patient = new Patient('Roberto', 'Souza', '14361049887', 'Rua das Pedrinhas', '41990873456', [], false);
    const doctor = { surname: 'Magalhães' };
    const date = '2023-09-20';
    const availableDays = ['2023-09-20'];
    const availableHours = ['9:00 AM'];

    console.log = jest.fn();
    patient.requestAppointment(doctor, date, availableDays, availableHours);

    expect(console.log).toHaveBeenCalledWith(`Non-transgender patients are not eligible to request appointments.`);
  });
});
