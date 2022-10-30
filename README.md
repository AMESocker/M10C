# Team Profile Generator
M10C
A node.js content creator with verification tests.

## Demo of Application

[Video Demo](https://app.castify.com/watch/386f19c5-1c22-4eca-bc11-201e8d84f30e)

## Required Installation

[Inquirer Package](https://www.npmjs.com/package/inquirer/v/8.2.4)

[Jest](https://www.npmjs.com/package/jest)

## User Stories

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria


```md
GIVEN a command-line application that accepts user input

WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input

WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address

WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab


WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

```
