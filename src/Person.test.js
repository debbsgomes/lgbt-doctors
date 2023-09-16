const Person = require ('./Person');

describe('Person class', () => {
    let person;
  
    beforeEach(() => {
      person = new Person('João', 'Neves', '123456789', 'Rua Bin Laden', '21997561234');
      console.log = jest.fn(); // Mock console.log
    });
  
    it('should create a Person object', () => {
      expect(person.name).toBe('João');
      expect(person.surname).toBe('Neves');
      expect(person.cpf).toBe('123456789');
      expect(person.address).toBe('Rua Bin Laden');
      expect(person.cellphone).toBe('21997561234');
    });
  
    it('should get and set the cpf', () => {
      person.cpf = '123456789';
      expect(person.cpf).toBe('123456789');
    });
  
    it('should get and set the address', () => {
      person.address = 'Rua Bin Laden';
      expect(person.address).toBe('Rua Bin Laden');
    });
  
    it('should get and set the cellphone', () => {
      person.cellphone = '21997561234';
      expect(person.cellphone).toBe('21997561234');
    });
  
    it('should log registration as a doctor', () => {
      person.applyAsDoctor();
      expect(console.log).toHaveBeenCalledWith('João Neves has registered as a doctor.');
      expect(console.log).toHaveBeenCalledWith('João Neves is now logged in as a doctor.');
    });
  
    it('should log registration as a patient', () => {
      person.applyAsPatient();
      expect(console.log).toHaveBeenCalledWith('João Neves has registered as a patient.');
      expect(console.log).toHaveBeenCalledWith('João Neves is now logged in as a patient.');
    });
  });