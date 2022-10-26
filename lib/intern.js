const Employee = require('./employee')

class Intern extends Employee{
    constructor(empName,id,email,school) {
        super(empName, id, email)
        this.school= school
        
        this.getRole = () => {
            return 'Intern'
        };
    };
}
module.exports = Intern