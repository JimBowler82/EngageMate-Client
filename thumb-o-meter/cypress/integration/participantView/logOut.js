/////
//logging out of the app

function LogOut() {
  describe("Log out of app", () => {
    it("Get the logout button by going through the nav bar and div elements checking them with their class names, confirm has 'Log Out' as text and then click the 'Log Out' button", () => {
      cy.wait(1500);
      // cy.get("div").should("have.class", "css-kzw5fa");
      cy.get("nav").should("have.class", "navBar_container__16Rem css-q1py9o");
      cy.get("div").should("have.class", "navBar_box__2huli css-ozv6cb");
      cy.get("div").should("have.class", "navBar_navigation__2KIo9 css-k008qs");
      cy.get("button")
        .should("have.class", "chakra-button logout_btn__1eIMF css-1sqhvct")
        .contains("Log Out")
        .click();
    });
  });
}

export default LogOut;
