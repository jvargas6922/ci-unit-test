describe("Testing the view", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Buscador");
  });
  it("Renders empty input at start'", () => {
    cy.get("#pokemon");
  });
});
