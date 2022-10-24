const Employee = require('../index.js');
const tests = require('../index.js');

//----Employee Test----

describe('Employee',() => {
    it('Should return with a property of name', () => {
        //Assert
        expect(Employee.name).toBe('name');
    });
    it('Should return with a property of id', () => {
        expect(Employee).toBe('id')
    });
    it('Should return with a method of getName', () => {
        expect(Employee).toBe()
    })
});