describe('ui: Header component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=header--primary&knob-title=BoardGame'));
    
    it('should render the component', () => {
      cy.get('.navbar-brand').contains("BoardGame")
    });
});
