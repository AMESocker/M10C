const Employee = require('../lib/employee');

describe('Employee',() => {
    it('Should return with a property of name, id and email', () => {
        //Assert
        const employee = new Employee('Jack','103193','Jack@pumpkin.king');

        expect(employee.empName).toBe('Jack');
        expect(employee.id).toBe('103193');
        expect(employee.email).toBe('Jack@pumpkin.king')

   
    });
});