const Employee = require('./employee')

class Engineer extends Employee{
    constructor(empName,id,email,github) {
        super(empName, id, email)
        this.github = github
        
        this.getRole = () => {
            return 'Engineer'
        };
    };
}
module.exports = Engineer