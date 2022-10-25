const inquirer = require('inquirer');
// == require('./lib/employee.js')
const fs = require("fs");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the name of the employee?",
            name: "employeeName",
        },{
            name: "id",
            message: "What is the id?",
            type: "input"
        }
    ])
    .then((answer) => {
            console.log(answer);
        })
    .catch((error)=> {
        if (error.isTtyError){
        console.log('Could not be rendered')
        }else{
        console.log('Something else went wrong')
        }
    });    

function generateHtml(data) {
    return
    `<!DOCTYPE html>
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
module.exports = Employee;