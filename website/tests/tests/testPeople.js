module.exports = {
  tags: ["projects", "people"],

  before: function (browser) {
    const landingPage = browser.page.landingPage();

    landingPage
      .navigate()
      .waitForElementVisible("@landingPage", 25000, "Let landing page load")
      .waitForElementVisible("@loginHeader", 25000, "Let nav load")
      .click("@loginHeader")
      .waitForElementVisible("@loginEmailInput", 25000, "Find email input")
      .waitForElementVisible(
        "@loginPasswordInput",
        25000,
        "Find password input"
      )
      .waitForElementVisible("@loginSubmitButton", 25000, "Find login button")
      .set("@loginEmailInput", "alamorre@gmail.com")
      .set("@loginPasswordInput", "Pass1234")
      .click("@loginSubmitButton")
      .waitForElementVisible("#logout-tab", 25000, "Login");

    const projectsPage = browser.page.projectsPage();

    projectsPage
      .navigate()
      .waitForElementVisible("@projectsTable", 25000, "Find projects table")
      .waitForElementVisible("@newProject", 25000, "Find new project CTA")
      .click("@newProject")
      .waitForElementVisible(
        "@newProjectTitle",
        25000,
        "Find new project title"
      )
      .waitForElementVisible(
        "@newProjectSubmit",
        25000,
        "Find new project submit"
      )
      .set("@newProjectTitle", "ex")
      .click("#goal-Learn-Javascript-📚")
      .click("@newProjectSubmit")
      .waitForElementVisible(
        "#public-key",
        25000,
        "Find public key of project page"
      );
  },

  after: function (browser) {
    const projectsPage = browser.page.projectsPage();

    projectsPage
      .navigate()
      .waitForElementVisible("#project-ex-settings", 25000, "Enter new project")
      .click("#project-ex-settings")
      .waitForElementVisible(
        "#delete-project",
        25000,
        "Find delete project section"
      )
      .click("#delete-project")
      .waitForElementVisible(
        "#delete-project-title",
        25000,
        "Find delete project input"
      )
      .waitForElementVisible(
        "#delete-project-button",
        25000,
        "Find delete project button"
      )
      .set("#delete-project-title", "ex")
      .click("#delete-project-button")
      .waitForElementVisible("@projectsTable", 25000, "Find projects table")
      .waitForElementNotPresent(
        "#project-ex-settings",
        25000,
        "Find no new project"
      );

    const landingPage = browser.page.landingPage();

    landingPage
      .click("#logout-tab")
      .waitForElementVisible("@landingPage", 25000, "Logout");
  },

  "Create, edit, and delete person": function (browser) {
    const projectPage = browser.page.projectPage();

    projectPage
      .waitForElementVisible("#users-section", 25000, "Find users section")
      .click("#users-section")
      // Create person
      .waitForElementVisible(
        "@addPersonButton",
        25000,
        "Find Add Person button"
      )
      .click("@addPersonButton")
      .waitForElementVisible(
        "@addPersonUsername",
        25000,
        "Find person username input"
      )
      .waitForElementVisible(
        "@addPersonSecret",
        25000,
        "Find person secret input"
      )
      .waitForElementVisible(
        "@addPersonConfirmSecret",
        25000,
        "Find person confirm secret input"
      )
      .waitForElementVisible(
        "@addPersonSubmit",
        25000,
        "Find person submit button"
      )
      .set("@addPersonUsername", "alamorre")
      .set("@addPersonSecret", "Pass1234")
      .set("@addPersonConfirmSecret", "Pass1234")
      .set("@addPersonEmail", "adam@lamorre.co")
      .set("@addPersonFirstName", "ada")
      .set("@addPersonLastName", "la morr")
      .click("@addPersonSubmit")
      .pause(1000)
      // Edit person username
      .waitForElementVisible(
        "#edit-person-alamorre-link",
        25000,
        "Find person row in table"
      )
      .click("#edit-person-alamorre-link")
      .waitForElementVisible(
        "@editPersonUsername",
        25000,
        "Find edit person username input"
      )
      .waitForElementVisible(
        "@editPersonSubmit",
        25000,
        "Find edit person submit button"
      )
      .set("@editPersonUsername", "e")
      .set("@editPersonEmail", "m")
      .set("@editPersonFirstName", "m")
      .set("@editPersonLastName", "e")
      .click("@editPersonSubmit")
      .pause(1000)
      // Edit person password
      .waitForElementVisible(
        "#edit-person-alamorree-link",
        25000,
        "Assert row is edited in table"
      )
      .click("#edit-person-alamorree-link")
      .waitForElementVisible(
        "@editPersonSecret",
        25000,
        "Find edit person secret input"
      )
      .waitForElementVisible(
        "@editPersonConfirmSecret",
        25000,
        "Find edit person confirm secret"
      )
      .set("@editPersonSecret", "Pass1234")
      .set("@editPersonConfirmSecret", "Pass")
      .click("@editPersonSubmit")
      .pause(1000)
      .waitForElementVisible(
        "@editPersonConfirmSecret",
        25000,
        "Form didnt submit - bad secrets"
      )
      .set("@editPersonConfirmSecret", "1234")
      .click("@editPersonSubmit")
      .waitForElementNotPresent(
        "@editPersonConfirmSecret",
        25000,
        "Assert form is gone"
      )
      // Delete person
      .waitForElementVisible(
        "#delete-alamorree-link",
        25000,
        "Find delete alamorree row in table"
      )
      .click("#delete-alamorree-link")
      .waitForElementVisible(
        "@deletePersonUsername",
        25000,
        "Find delete person username input"
      )
      .waitForElementVisible(
        "@deletePersonSubmit",
        25000,
        "Find delete person submit button"
      )
      .set("@deletePersonUsername", "alamorre")
      .click("@deletePersonSubmit")
      .pause(1000)
      .waitForElementVisible(
        "@deletePersonSubmit",
        25000,
        "Form didnt submit - bad username"
      )
      .set("@deletePersonUsername", "e")
      .click("@deletePersonSubmit")
      .waitForElementNotPresent(
        "#delete-alamorree-link",
        25000,
        "Assert row is deleted from table"
      );
  },
};
