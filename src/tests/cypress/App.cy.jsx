import React from 'react'
import App from '../../App'

describe('<App />', () => {
  it('Affichage', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />);
    cy.get('#titre-h1').contains('TOTO');
  })
})