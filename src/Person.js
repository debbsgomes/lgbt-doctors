class Person {
    #cpf;
    #address;
    #cellphone;
  
    constructor(name, surname, cpf, address, cellphone) {
      this.name = name;
      this.surname = surname;
      this.#cpf = cpf;
      this.#address = address;
      this.#cellphone = cellphone;
    }
  
    get cpf() {
      return this.#cpf;
    }
  
    set cpf(newCpf) {
      this.#cpf = newCpf;
    }
  
    get address() {
      return this.#address;
    }
  
    set address(newAddress) {
      this.#address = newAddress;
    }
  
    get cellphone() {
      return this.#cellphone;
    }
  
    set cellphone(newCellphone) {
      this.#cellphone = newCellphone;
    }
  
    applyAsDoctor() {
      this.logRegistration("doctor");
      this.loginDoctorPage();
    }
  
    applyAsPatient() {
      this.logRegistration("patient");
      this.loginPatientPage();
    }
  
    logRegistration(role) {
      console.log(`${this.name} ${this.surname} has registered as a ${role}.`);
    }
  
    loginDoctorPage() {
      this.logLogin("doctor");
    }
  
    loginPatientPage() {
      this.logLogin("patient");
    }
  
    logLogin(role) {
      console.log(`${this.name} ${this.surname} is now logged in as a ${role}.`);
    }
  }
  
  module.exports = Person;
  