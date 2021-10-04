describe("To STIX - metadata", function () {
  it("add field", function () {
    cy.visit("/");
    cy.contains("To STIX").click();
    cy.contains("Metadata").click();
    cy.get("#Metadata__panel > :nth-child(2) > .bx--col > .bx--btn").click();
    cy.get("#new-field-name").click();
    cy.get("#new-field-name").clear();
    cy.get("#new-field-name").type("eventcount");
  });

  it("add key to field", function () {
    cy.get(
      "#Metadata__panel > .bx--modal > .bx--modal-container > .bx--modal-footer > .bx--btn--primary"
    ).click();
    cy.get(".bx--col-md-1 > .to_stix_object_item__btn__mEa_v").click();
    cy.get("[data-cy=field_eventcount]").click();
    cy.get("[data-cy=field_eventcount]").clear();
    cy.get("[data-cy=field_eventcount]").type("number_observed");
  });

  it("add transformer to field", function () {
    cy.get(
      ".bx--col-md-2 > .bx--list-box__wrapper > .bx--combo-box > .bx--list-box__field > .bx--list-box__menu-icon > svg"
    ).click();
    cy.get("#downshift-1-item-7 > .bx--list-box__menu-item__option").click();
  });

  it("add second key to field", function () {
    cy.get(".bx--col-md-1 > .to_stix_object_item__btn__mEa_v").click();
    cy.get(
      ":nth-child(3) > .to_stix_object_item__field__c6qbN > .bx--col-md-3 > .bx--row > .bx--col > .bx--form-item > .bx--text-input__field-outer-wrapper > .bx--text-input__field-wrapper > [data-cy=field_eventcount]"
    ).clear();
    cy.get(
      ":nth-child(3) > .to_stix_object_item__field__c6qbN > .bx--col-md-3 > .bx--row > .bx--col > .bx--form-item > .bx--text-input__field-outer-wrapper > .bx--text-input__field-wrapper > [data-cy=field_eventcount]"
    ).type("number_observed2");
  });

  it("add second field", function () {
    cy.get("#Metadata__panel > :nth-child(2) > .bx--col > .bx--btn").click();
    cy.get("#new-field-name").clear();
    cy.get("#new-field-name").click();
    cy.get("#new-field-name").type("starttime");
    cy.get(
      "#Metadata__panel > .bx--modal > .bx--modal-container > .bx--modal-footer > .bx--btn--primary"
    ).click();
    cy.get(
      "#starttime > .to_stix_object__item_box__3rr3c > .to_stix_object__item_content__1bWt0 > .to_stix_object_item__field__c6qbN > .bx--col-sm-4 > .bx--row > .bx--col-md-1 > .to_stix_object_item__btn__mEa_v"
    ).click();
    cy.get("[data-cy=field_starttime]").click();
    cy.get("[data-cy=field_starttime]").clear();
    cy.get("[data-cy=field_starttime]").type("first_observed");
    cy.get(
      "#starttime > .to_stix_object__item_box__3rr3c > .to_stix_object__item_content__1bWt0 > :nth-child(2) > .bx--col-sm-4 > :nth-child(2) > .to_stix_object_item__field__c6qbN > .bx--col-md-2 > .bx--list-box__wrapper > .bx--combo-box > .bx--list-box__field > .bx--list-box__menu-icon > svg"
    ).click();
    cy.get("#downshift-4-item-2 > .bx--list-box__menu-item__option").click();
  });

  it("add third field", function () {
    cy.get("#Metadata__panel > :nth-child(2) > .bx--col > .bx--btn").click();
    cy.get("#new-field-name").clear();
    cy.get("#new-field-name").click();
    cy.get("#new-field-name").type("endtime");
    cy.get(
      "#Metadata__panel > .bx--modal > .bx--modal-container > .bx--modal-footer > .bx--btn--primary"
    ).click();
    cy.get(
      "#endtime > .to_stix_object__item_box__3rr3c > .to_stix_object__item_content__1bWt0 > .to_stix_object_item__field__c6qbN > .bx--col-sm-4 > .bx--row > .bx--col-md-1 > .to_stix_object_item__btn__mEa_v"
    ).click();
    cy.get("[data-cy=field_endtime]").clear();
    cy.get("[data-cy=field_endtime]").type("last_observed");
    cy.get(
      "#endtime > .to_stix_object__item_box__3rr3c > .to_stix_object__item_content__1bWt0 > :nth-child(2) > .bx--col-sm-4 > .to_stix_object_item_field__header__3uGd8 > .bx--col-md-1 > .to_stix_object_item__btn__mEa_v"
    ).click();
    cy.get(
      "#endtime > .to_stix_object__item_box__3rr3c > .to_stix_object__item_content__1bWt0 > :nth-child(2) > .bx--col-sm-4 > .to_stix_object_item_field__header__3uGd8 > .bx--col-md-1 > .to_stix_object_item__btn__mEa_v"
    ).click();
  });

  it("minimap", function () {
    cy.get("#link_endtime > a > .to_stix_minimap__tile__31M0e").click();
    cy.get("#link_starttime > a > .to_stix_minimap__tile__31M0e").click();
    cy.get(
      "#endtime > .to_stix_object__item_box__3rr3c > .to_stix_object__item_content__1bWt0"
    ).should("be.visible");
    cy.get(".active > .to_stix_minimap__tile__31M0e").should(
      "have.class",
      "to_stix_minimap__activeTile__3Qr1D"
    );
  });

  it("change field name", function () {
    cy.get(
      "#eventcount > .to_stix_object__item_box__3rr3c > .to_stix_object__item_content__1bWt0 > :nth-child(1) > .to_stix_object_item__title__2EOEa > .bx--btn > .bx--btn__icon"
    ).click();
    cy.get("#false__eventcount").click();
    cy.get("#false__eventcount").clear();
    cy.get("#false__eventcount").type("event_count");
    cy.get(
      ".to_stix_object__item_content__1bWt0 > :nth-child(1) > .bx--row > :nth-child(2)"
    ).click();
  });

  it("delete", function () {
    cy.get(
      "#event_count > .to_stix_object__item_box__3rr3c > .to_stix_object__item_content__1bWt0 > :nth-child(2) > .bx--col-sm-4 > :nth-child(2) > .to_stix_object_item__field__c6qbN > :nth-child(3) > .to_stix_object_item__btn__mEa_v"
    ).click();
    cy.get(
      "#event_count > .to_stix_object__item_box__3rr3c > .to_stix_object__item_content__1bWt0 > :nth-child(2) > .bx--col-sm-4 > :nth-child(2) > .to_stix_object_item__field__c6qbN > :nth-child(3) > .to_stix_object_item__btn__mEa_v"
    ).click();
    cy.get(
      '#event_count > .to_stix_object__item_box__3rr3c > .to_stix_object__item_content__1bWt0 > :nth-child(1) > [style="text-align: right;"] > .to_stix_object_item__btn__mEa_v > path'
    ).click();
    cy.get(
      "#starttime > .to_stix_object__item_box__3rr3c > .to_stix_object__item_content__1bWt0 > :nth-child(2) > .bx--col-sm-4 > :nth-child(2) > .to_stix_object_item__field__c6qbN > :nth-child(3) > .to_stix_object_item__btn__mEa_v"
    ).click();
    cy.get(
      '#starttime > .to_stix_object__item_box__3rr3c > .to_stix_object__item_content__1bWt0 > :nth-child(1) > [style="text-align: right;"] > .to_stix_object_item__btn__mEa_v'
    ).click();
    cy.get(
      ":nth-child(3) > .to_stix_object_item__field__c6qbN > :nth-child(3) > .to_stix_object_item__btn__mEa_v"
    ).click();
    cy.get(
      '.to_stix_object__item_content__1bWt0 > :nth-child(1) > [style="text-align: right;"] > .to_stix_object_item__btn__mEa_v'
    ).click();
    cy.get(":nth-child(3) > .bx--col > p").should(
      "have.text",
      "There are currently no fields to show. Click the “New field” button to start mapping or load configuration."
    );
  });
});
