// Function to Generate Markdown File based on Inquirer prompt answers and GitHub API data

function generateMarkdown(answers, apiData) { 

  let { license } = answers;
  // switch statement to insert badge based on user selected license
  switch (license) {
    case "MIT License":
      answers.license =
        "![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)";
      break;
    case "GNU General Public License v3":
      answers.license =
        "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      break;
    case "Apache License":
      answers.license =
        "![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
      break;
    case "Mozilla Public License 2.0":
      answers.license =
        "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
      break;
  }

  
  return `  
  # ${answers.title} 
  `
+
` ![GitHub top language](https://img.shields.io/github/languages/top/${answers.username}/${answers.repo}?logo=GitHub&logoColor=blue)
  ![GitHub last commit](https://img.shields.io/github/last-commit/${answers.username}/${answers.repo}?logo=github&logoColor=green) 
  ![GitHub repo size](https://img.shields.io/github/repo-size/${answers.username}/${answers.repo}?logo=github&logoColor=blue) 
   `
+
  `
  ## 💬 Description 
  ${answers.description}
  ## 📦 Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contributing](#contributing)
  * [License](#license)
  * [Questions](#questions)
  * [Contact](#contact)
  ## 💽 Installation  
  ${answers.installation}
  ## 🚀 Usage  
  ${answers.usage} 

  <img src="./readme.gif">

  ## ✅ Tests 
  ${answers.tests}
  ## 🤝 Contributing 
  ${answers.contributing} 
  ## 📝 License 
  ${answers.license}
  ## Questions ❓
  ${answers.questionsMessage} 
  ## #️⃣ Contact
  ![GitHub Profile Image:](${apiData.data.avatar_url})
  * GitHub:[@${answers.username}](${apiData.data.html_url})
  * Email: ${answers.email} 
  ---
  _This **README** was generated with ❤️ by [readme-md-generator](https://github.com/hsnertas/nodeStor)_
  
  `;
  }
  

  module.exports = generateMarkdown;