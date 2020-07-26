# Cypress
Cypress BDD Test

# Folder structure for Tests
Tests are written in BDD gherkin format: **cypress -> integration -> swag-labs.feature** \
Implementation of feature file is in: **cypress -> integration -> swaglabs-steps -> swag-labs.js** 
 
# Installation
Cypress and required libraries can be downloaded manually or by following command \
 **$ npm install cypress cucumber cypress-cucumber-preprocessor**
  
# Running tests
From the root folder of the project use following command \
 **$ npm run test** \
 Cypress opens new window which has Integration tests \
  Click on **swag-labs.feature** to run tests 
  
 # Note
 For tests to pass always the secret-user should have no items in the cart 
