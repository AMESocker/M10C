const inquirer = require('inquirer');
// == require('./lib/employee.js')
const fs = require("fs");

//----
function promptEmployee(){inquirer
    .prompt([ {
        type: 'input',
        message: 'What is the name of the employee?',
        name: 'employeeName',
    },{
        type: 'input',
        message: 'What is the id?',
        name: 'id',
    },{
        type: 'input',
        message: 'What is the email address?',
        name: 'email',
    },{
        type: 'list',
        message:'What is the role of the employee?',
        name: 'role',
        choices:['Manager','Engineer','Intern']
    },
    ])
    .then((data) => {
        console.log(data);
        if (data.role === 'Manager') {
            promptManager()
        }else if (data.role === 'Engineer') {
            promptEngineer()
        }else if (data.role === 'Intern') {
            promptIntern()
        }
    })
    .catch((error)=> {
        if (error.isTtyError){
            console.log('Could not be rendered')
        }else{
            console.log('Something else went wrong')
        }
    });  
};

function promptManager(){inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the office number?',
            name: 'officeNum'
        },
        {
            type: 'confirm',
            message:'Would you like to add another employee?',
            name: 'addAnother',
        }
    ])
    .then((data) => {
        console.log(data);
        if (data.addAnother === true) {
            promptEmployee()
        }
    })
    .catch((error)=> {
        if (error.isTtyError){
            console.log('Could not be rendered')
        }else{
            console.log('Something else went wrong')
        }
    });
};

function promptEngineer(){inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the gitHub account?',
            name: 'githubAcc'
        },
        {
            type: 'confirm',
            message:'Would you like to add another employee?',
            name: 'addAnother',
        }
    ])
    .then((data) => {
        console.log(data);
        if (data.addAnother === true) {
            promptEmployee()
        }
    })
    .catch((error)=> {
        if (error.isTtyError){
            console.log('Could not be rendered')
        }else{
            console.log('Something else went wrong')
        }
    });
};

function promptIntern(){inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the school name?',
            name: 'schoolName'
        },
        {
            type: 'confirm',
            message:'Would you like to add another employee?',
            name: 'addAnother',
        }
    ])
    .then((data) => {
        console.log(data);
        if (data.addAnother === true) {
            promptEmployee()
        }
    })
    .catch((error)=> {
        if (error.isTtyError){
            console.log('Could not be rendered')
        }else{
            console.log('Something else went wrong')
        }
    });
};
promptEmployee()   
const inqProMan =  
// const inqProEng =   ;
// const inqProInt =   ;

//----
function generateHtml(data) {
    return`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Data</title>
    </head>
    <body>
        
    </body>
    </html>`;
}
// module.exports = Employee;