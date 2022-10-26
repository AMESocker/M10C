const Employee = require('../lib/employee');

describe('Employee',() => {
    it('Should return with a property of name', () => {
        //Assert
        
        expect(Employee.name('Jack')).toBe('Jack');
    });
    it('Should return with a property of id', () => {
        expect(new Employee).toBe('id')
    });
    it('Should return with a property of email', () => {
        expect(Employee).toBe()
    })
});