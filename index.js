const inquirer = require('inquirer');
// == require('./lib/employee.js')
const fs = require("fs");

//----
function promptManager(){inquirer
    .prompt([
        {
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
        },
        {
            type: 'input',
            message: 'What is the office number?',
            name: 'officeNum'
        },
    ])
    .then((data) => {
        console.log(data);
        promptMenu()   
    })
    .catch((error)=> {
        if (error.isTtyError){
            console.log('Could not be rendered')
        }else{
            console.log('Something else went wrong')
        }
    });
};

function promptMenu(){inquirer
    .prompt([ 
    {
        type: 'list',
        message:'Would you like to ad another employee?',
        name: 'menu',
        choices:['Engineer','Intern','Finish' ]
    },
    ])
    .then((data) => {
        console.log(data);
        if (data.menu === 'Engineer') {
            promptEngineer()
        }else if (data.menu === 'Intern' ) {
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



function promptEngineer(){inquirer
    .prompt([
        {
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
        },
        {
            type: 'input',
            message: 'What is the gitHub account?',
            name: 'githubAcc'
        },
    ])
    .then((data) => {
        console.log(data);
        promptMenu()
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
        },
        {
            type: 'input',
            message: 'What is the school name?',
            name: 'schoolName'
        },
    ])
    .then((data) => {
        console.log(data);
        promptMenu();
    })
    .catch((error)=> {
        if (error.isTtyError){
            console.log('Could not be rendered')
        }else{
            console.log('Something else went wrong')
        }
    });
};
promptManager();   

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