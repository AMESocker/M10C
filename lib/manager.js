const Employee = require('./employee')

class Manager extends Employee{
    constructor(empName,id,email,office) {
        super(empName, id, email)
        this.office= office
        
        this.getRole = () => {
            return 'Intern'
        };
    };
}
module.exports = Manager