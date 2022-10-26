class Employee {
    constructor(empName,id,email) {
        this.empName = empName;
        this.id = id;
        this.email = email;
        this.getName = () => {
            return empName
        };
        this.getId = () => {
            return id
        };
        this.getEmail = () => {
            return email
        };
        this.getRole = () => {
            return 'Employee'
        };
    }
}

// const newHire = new Employee(empName,id,email);

module.exports = Employee