const inquirer = require('inquirer');
// const Employee = require('./lib/employee.js')
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
    .then((dataMan) => {
        // console.log(dataMan);
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
        // console.log(data);
        if (data.menu === 'Engineer') {
            promptEngineer()
        }else if (data.menu === 'Intern' ) {
            promptIntern()
        }else if (data.menu === 'Finish') {
            // generateHtml(data);
            console.log(data);
            console.log(dataMan);
            fs.writeFile('GenerateHtml.html', generateHtml(data), (err)=> {
                err ? console.error(err) : console.log("Christmas Town?")
            })
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
        // console.log(dataEng);
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
        // console.log(data);
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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    </head>
    <body style="background-color:rgb(250, 249, 215)">
        <header style="background-color:rgb(92, 163, 240);"><h1>Team</h1>
    
        </header>
        <main>
            <div class="card" style="width: 18rem; margin: 40px;">
                <div class="card-header">
                  Featured
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
              </div>
            </table>
        </main>
    </body>
    </html>`;
}
// module.exports = Employee;