// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  --Description of application

  - ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Licenses](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  --Necessary installs for application:

  - ${data.installations}

  ## Usage
  --How to use the application:

  - ${data.usage}

  ## License
  --Licenses used in this application:

  - ${data.licensing}


  ## Contributing
  --Guidelines for contributing:

  - ${data.contribution}


  ## Tests
  --How to test application:

  - ${data.test}


  ## Questions
  --If you have any questions you can contact me!

  - GitHub username with deployed link: [${data.username}](https://github.com/${data.username})
  - Email : ${data.email}
`;
}

module.exports = generateMarkdown;
