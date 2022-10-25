const Employee = require('../lib/employee');




//----Employee Test----

describe('Employee',() => {
    it('Should return with a property of name', () => {
        //Assert
        expect(new Employee("Jack")).toBe('Jack');
    });
    it('Should return with a property of id', () => {
        expect(new Employee).toBe('id')
    });
    it('Should return with a property of email', () => {
        expect(Employee).toBe()
    })
});