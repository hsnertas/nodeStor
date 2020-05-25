// Require Dependencies and usage of api.js and generateMarkdown.js
const inquirer = require("inquirer");
const fs = require("fs");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

// Series of prompts using Inquirer
inquirer.prompt( [

    {
        type: "input",
        name: "username",
        message: "What is your Github username? (No @ needed)"
    },
    {
        type: "input",
        name: "repo",
        message: "What is the name of your Github repo?",
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please, write a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please, describe the steps required to install your project for the Installation section.",
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please, provide guidelines on how other developers can contribute to your project.",
    },
    {
        type: "input",
        name: "tests",
        message: "Please, provide any tests written for your application and provide examples on how to run them.",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project.",
        choices: ['MIT License', 'GNU General Public License v3', 'Apache License', 'Mozilla Public License 2.0'],
    },
    {
        type: "input",
        name: "questionsMessage",
        message: "_QUESTIONS__Write a message inviting readers to ask questions about your project:",
        default: "Feel free to contact us with any questions regarding this project!"
    },

    {
        type: "input",
        name: "email",
        message: "Enter your email for contact info:",
        default: "example@gmail.com"
    }

]).then( function(answers){
    console.log(answers);

// Retrieves GitHub username answer to pass it as a callback to api.js and invokes writeToFile function with written parameters
    api.getUser(answers.username, function(apiData) {
        writeToFile("README.md", answers, apiData);
    });

}).catch(function(err) {
    throw err;
})

// fs.writeFile a README.md file creation
function writeToFile(fileName, answers, apiData) {

    fs.writeFile(fileName, generateMarkdown(answers, apiData), err => {
        if (err) {
            throw err
        }
        console.log("README.md succesfully created!");
    })
}

