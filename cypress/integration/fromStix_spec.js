describe("From STIX", function () {
  it("add field", function () {
    cy.visit("/");
    cy.contains("From STIX").click();
    cy.contains("Artifact").click();
    cy.contains("payload_bin").click();
    cy.get('[style="margin-right: 0.5rem;"]').click();
    cy.get("[data-cy=coverage_percent]").should("have.text", "0%");
    cy.get("[data-cy=artifact-payload_bin]").type("eventpayload");
    cy.contains("payload_bin").should("have.class", "stix_colored__3Ifb3");
    cy.get("[data-cy=coverage_percent]").should("have.text", "1.47%");
    cy.get(".bx--col > :nth-child(3)").should(
      "have.text",
      "1 of 68 STIX fields"
    );
  });

  it("add second value for the same field", function () {
    cy.get('[style="margin-right: 0.5rem;"]').click();
    cy.get("[data-cy=artifact-payload_bin]:last").type("eventpayload2");
    cy.get("[data-cy=coverage_percent]").should("have.text", "1.47%");
    cy.get(".bx--col > :nth-child(3)").should(
      "have.text",
      "1 of 68 STIX fields"
    );
  });

  it("add required field", function () {
    cy.contains("Directory").click();
    cy.contains("path").click();
    cy.get(
      ':nth-child(2) > .bx--row > .bx--col-sm-1 > [style="margin-right: 0.5rem;"]'
    ).click();
    cy.get("[data-cy=directory-path]").type("filepath");
    // cy.get("#accordion-item-4 > .stix_colored__3Ifb3").should(
    cy.contains("path").should("have.class", "stix_colored__3Ifb3");
  });

  it("filter field", function () {
    cy.get("#mappings-filter-input").type("ar");
    cy.get(".bx--col-sm-2 > :nth-child(3) > .bx--col").should(
      "not.have.text",
      "directory:path"
    );
    cy.get("#mappings-filter-input").clear();
  });

  it("delete values and fields", function () {
    cy.get("[data-cy=statistics__col]").should(
      "have.text",
      "Official STIX Coverage2.94%2 of 68 STIX fields1 of 12 required STIX fields"
    );
    cy.get(".bx--col-sm-2 > :nth-child(1) > .bx--col > .section-title").should(
      "have.text",
      "2 Total Fields (Clear)"
    );
    cy.get(
      "[data-cy=directory-path] > .bx--col-sm-1 > .from_stix_mapping_item__btn__2F3K3"
    ).click();
    cy.get("#accordion-item-4 > :nth-child(1)").should(
      "have.class",
      "stix_hover__YWNMC"
    );
    cy.get("[data-cy=statistics__col]").should(
      "have.text",
      "Official STIX Coverage1.47%1 of 68 STIX fields0 of 12 required STIX fields"
    );
    cy.get(".bx--col-sm-2 > :nth-child(1) > .bx--col > .section-title").should(
      "have.text",
      "2 Total Fields (Clear)"
    );
    cy.get(":nth-child(2) > .bx--row > .bx--col-sm-1 > :nth-child(2)").click();
    cy.get(".bx--col-sm-2 > :nth-child(1) > .bx--col > .section-title").should(
      "have.text",
      "1 Total Fields (Clear)"
    );
    cy.get(
      "[data-cy=artifact-payload_bin]:last > .bx--col-sm-1 > .from_stix_mapping_item__btn__2F3K3"
    ).click();
    cy.get("[data-cy=statistics__col]").should(
      "have.text",
      "Official STIX Coverage1.47%1 of 68 STIX fields0 of 12 required STIX fields"
    );
    cy.get(
      "[data-cy=artifact-payload_bin] > .bx--col-sm-1 > .from_stix_mapping_item__btn__2F3K3"
    ).click();
    cy.get("[data-cy=statistics__col]").should(
      "have.text",
      "Official STIX Coverage0%0 of 68 STIX fields0 of 12 required STIX fields"
    );
    cy.get(".bx--col-sm-2 > :nth-child(1) > .bx--col > .section-title").should(
      "have.text",
      "1 Total Fields (Clear)"
    );
    cy.get(
      ".from_stix_mapping__item__2zbU- > .bx--row > .bx--col-sm-1 > :nth-child(2)"
    ).click();
    cy.get(".bx--col-sm-2 > :nth-child(1) > .bx--col > .section-title").should(
      "have.text",
      "0 Total Fields (Clear)"
    );
  });

  it("add custom field", function () {
    cy.visit("/from_stix");
    cy.contains("Custom Field").click();
    cy.get("#customField").type("x-oca-event:category_id");
    cy.get(".bx--modal-footer > .bx--btn--primary").click();
    cy.get('[style="margin-right: 0.5rem;"] > path').click();
    cy.get("[data-cy=x-oca-event-category_id]").type("categoryid");
    cy.get(".bx--col-sm-2 > :nth-child(3) > .bx--col").click();
    cy.get("[data-cy=coverage_percent]").should("have.text", "0%");
  });
  it("change version", function () {
    cy.visit("/from_stix");
    cy.get(".bx--col > :nth-child(3)").should(
      "have.text",
      "0 of 68 STIX fields"
    );
    cy.get(".bx--col > :nth-child(4)").should(
      "have.text",
      "0 of 12 required STIX fields"
    );
    cy.contains("STIX version").click();
    cy.contains("STIX version 2.1").click();
    cy.get(".bx--col > :nth-child(3)").should(
      "have.text",
      "0 of 117 STIX fields"
    );
    cy.get(".bx--col > :nth-child(4)").should(
      "have.text",
      "0 of 13 required STIX fields"
    );
    cy.contains("STIX version").click();
    cy.contains("STIX version 2.0").click();
    cy.get(".bx--col > :nth-child(3)").should(
      "have.text",
      "0 of 68 STIX fields"
    );
    cy.get(".bx--col > :nth-child(4)").should(
      "have.text",
      "0 of 12 required STIX fields"
    );
  });
  it("clear mapping", function () {
    cy.visit("/from_stix");
    cy.get(".from_stix_mappings_clear__btn__2uZYz").click();
    cy.get("#accordion-item-4 > :nth-child(1)").should(
      "have.class",
      "stix_hover__YWNMC"
    );
    cy.get("#accordion-item-2 > :nth-child(2)").should(
      "have.class",
      "stix_hover__YWNMC"
    );
    cy.get("[data-cy=coverage_percent]").should("have.text", "0%");
  });
});
