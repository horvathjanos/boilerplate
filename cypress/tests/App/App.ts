import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('I go to the App', () => {
    cy.visit('/');
});
