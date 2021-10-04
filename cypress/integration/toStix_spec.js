describe("To STIX", function () {
  it("add object", function () {
    cy.visit("/");
    cy.contains("To STIX").click();
    cy.get(":nth-child(4) > .bx--col > .bx--btn").click();
    cy.get("#new-object-name").click();
    cy.get("#new-object-name").clear();
    cy.get("#new-object-name").type("useraccount");
    cy.get(
      "#StixObjects__panel > .is-visible > .bx--modal-container > .bx--modal-footer > .bx--btn--primary"
    ).click();
    cy.get(":nth-child(3) > .bx--col-sm-4").should(
      "have.text",
      "Official VS Custom STIX fieldsOfficial STIX fields0%0 STIX fields0 STIX objectsCustom STIX fields0%0 STIX fields0 STIX objects"
    );
  });

  it("add field to object", function () {
    cy.get('[style="margin-right: 0.5rem;"]').click();
    cy.get("[data-cy=useraccount]").type("username");
    cy.get(".bx--col-md-1 > .to_stix_object_item__btn__mEa_v").click();
    cy.get(":nth-child(2) > .to_stix_object_item__btn__mEa_v").click();
    cy.get(
      ":nth-child(15) > .bx--accordion__heading > .bx--accordion__title"
    ).click();
    cy.contains("user_id").click();
    cy.get(":nth-child(3) > .bx--col-sm-4").should(
      "have.text",
      "Official VS Custom STIX fieldsOfficial STIX fields100%1 STIX fields1 STIX objectsCustom STIX fields0%0 STIX fields0 STIX objects"
    );
  });

  it("add second field to object", function () {
    cy.get(".bx--col-md-1 > .to_stix_object_item__btn__mEa_v").click();
    cy.get(
      ":nth-child(3) > .to_stix_object_item__field__c6qbN > .bx--col-md-3 > .bx--row > :nth-child(2) > .to_stix_object_item__btn__mEa_v"
    ).click();
    cy.get(
      ":nth-child(15) > .bx--accordion__heading > .bx--accordion__title"
    ).click();
    cy.contains("account_type").click();
    cy.get(":nth-child(3) > .bx--col-sm-4").should(
      "have.text",
      "Official VS Custom STIX fieldsOfficial STIX fields100%2 STIX fields1 STIX objectsCustom STIX fields0%0 STIX fields0 STIX objects"
    );
  });

  it("add second object", function () {
    cy.get(":nth-child(4) > .bx--col > .bx--btn").click();
    cy.get("#new-object-name").clear();
    cy.get("#new-object-name").click();
    cy.get("#new-object-name").type("x-qradar");
    cy.get("#new-object-name").click();
    cy.get(
      "#StixObjects__panel > .is-visible > .bx--modal-container > .bx--modal-footer > .bx--btn--primary"
    ).click();
  });

  it("add custom field to object", function () {
    cy.get(
      '#x-qradar > .to_stix_object__item_box__3rr3c > .to_stix_object__item_content__1bWt0 > :nth-child(1) > [style="text-align: right;"] > [style="margin-right: 0.5rem;"]'
    ).click();
    cy.get("[data-cy=x-qradar]").type("categoryid");
    cy.get(".bx--col-md-1 > .to_stix_object_item__btn__mEa_v:last").click();
    cy.get("[data-cy=field_x-qradar]").type("x-qradar:category_id");
  });

  it("add transformer to object", function () {
    cy.get(
      "#x-qradar > .to_stix_object__item_box__3rr3c > .to_stix_object__item_content__1bWt0 > .to_stix_object_item__map__11qL1 > :nth-child(2) > .bx--col-sm-4 > :nth-child(2) > .to_stix_object_item__field__c6qbN > :nth-child(2) > .bx--list-box__wrapper > .bx--combo-box > .bx--list-box__field > .bx--list-box__menu-icon > svg"
    ).click();
    cy.get("#downshift-5-item-7 > .bx--list-box__menu-item__option").click();
    cy.get(":nth-child(3) > .bx--col-sm-4").should(
      "have.text",
      "Official VS Custom STIX fieldsOfficial STIX fields66.67%2 STIX fields1 STIX objectsCustom STIX fields33.33%1 STIX fields1 STIX objects"
    );
  });

  it("add third object", function () {
    cy.get(":nth-child(4) > .bx--col > .bx--btn").click();
    cy.get("#new-object-name").clear();
    cy.get("#new-object-name").click();
    cy.get("#new-object-name").type("finding");
    cy.get(
      "#StixObjects__panel > .is-visible > .bx--modal-container > .bx--modal-footer > .bx--btn--primary"
    ).click();
    cy.get(
      '#finding > .to_stix_object__item_box__3rr3c > .to_stix_object__item_content__1bWt0 > :nth-child(1) > [style="text-align: right;"] > [style="margin-right: 0.5rem;"]'
    ).click();
    cy.get('[style="margin-bottom: 0.75rem;"] > :nth-child(2)').should(
      "have.text",
      "Custom STIX fields33.33%1 STIX fields1 STIX objects"
    );
  });

  it("change object name", function () {
    cy.get(
      "#useraccount > .to_stix_object__item_box__3rr3c > .to_stix_object__item_content__1bWt0 > :nth-child(1) > .to_stix_object_item__title__2EOEa > .bx--btn > .bx--btn__icon"
    ).click();
    cy.get("#true__useraccount").clear();
    cy.get("#true__useraccount").type("user_account");
    cy.get(
      ".to_stix_object__item_content__1bWt0 > :nth-child(1) > .bx--row > :nth-child(2)"
    ).click();
  });

  it("minimap", function () {
    cy.contains("finding").click();
    cy.contains("user_account").click();
    cy.get(
      "#user_account > .to_stix_object__item_box__3rr3c > .to_stix_object__item_content__1bWt0"
    ).should("be.visible");
    cy.get("#link_user_account > a > .to_stix_minimap__tile__31M0e").should(
      "have.class",
      "to_stix_minimap__activeTile__3Qr1D"
    );
  });
  it("delete", function () {
    cy.get(
      "#user_account > .to_stix_object__item_box__3rr3c > .to_stix_object__item_content__1bWt0 > .to_stix_object_item__map__11qL1 > :nth-child(2) > .bx--col-sm-4 > :nth-child(2) > .to_stix_object_item__field__c6qbN > :nth-child(4) > .to_stix_object_item__btn__mEa_v"
    ).click();
    cy.get(
      "#user_account > .to_stix_object__item_box__3rr3c > .to_stix_object__item_content__1bWt0 > .to_stix_object_item__map__11qL1 > :nth-child(2) > .bx--col-sm-4 > :nth-child(2) > .to_stix_object_item__field__c6qbN > :nth-child(4) > .to_stix_object_item__btn__mEa_v"
    ).click();
    cy.get(
      '#user_account > .to_stix_object__item_box__3rr3c > .to_stix_object__item_content__1bWt0 > :nth-child(1) > [style="text-align: right;"] > :nth-child(2) > path'
    ).click();
    cy.get(
      '#x-qradar > .to_stix_object__item_box__3rr3c > .to_stix_object__item_content__1bWt0 > :nth-child(1) > [style="text-align: right;"] > :nth-child(2) > path'
    ).click();
    cy.get('[style="text-align: right;"] > :nth-child(2) > path').click();
    cy.get(":nth-child(5) > .bx--col > p").should(
      "have.text",
      "There are currently no objects to show. Click the “New object” button to start mapping or load configuration."
    );
    cy.get(":nth-child(3) > .bx--col-sm-4").should(
      "have.text",
      "Official VS Custom STIX fieldsOfficial STIX fields0%0 STIX fields0 STIX objectsCustom STIX fields0%0 STIX fields0 STIX objects"
    );
  });
});
