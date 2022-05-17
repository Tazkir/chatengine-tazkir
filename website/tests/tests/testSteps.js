module.exports = {
  tags: ["projects", "steps", "step"],

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

  "Complete the steps provided": function (browser) {
    const projectPage = browser.page.projectPage();

    projectPage
      // Find all steps are present
      .waitForElementVisible(
        "@newPersonStepButton",
        25000,
        "Find new person step"
      )
      .waitForElementVisible("@newChatStepButton", 25000, "Find new chat step")
      .waitForElementVisible(
        "@embedChatEngineStepButton",
        25000,
        "Find embed chat step"
      )
      // Create a user
      .getLocationInView("@newPersonStepButton")
      .click("@newPersonStepButton")
      .waitForElementVisible(
        "@addPersonUsername",
        25000,
        "Find person username input"
      )
      .set("@addPersonUsername", "alamorre")
      .set("@addPersonSecret", "Pass1234")
      .set("@addPersonConfirmSecret", "Pass1234")
      .click("@addPersonSubmit")
      .waitForElementVisible("#users-section", 25000, "Find users section")
      .click("#users-section")
      .waitForElementVisible(
        "#edit-person-alamorre-link",
        25000,
        "Find person row in table"
      )
      .waitForElementNotPresent(
        "@newPersonStepButton",
        25000,
        "No more new person step"
      )
      // Create a chat
      .getLocationInView("@newChatStepButton")
      .click("@newChatStepButton")
      .waitForElementVisible("@addChatTitle", 25000, "Find chat title input")
      .set("@addChatTitle", "test")
      .set("@addChatAdmin", "alamorre")
      .click("@addChatSubmit")
      .waitForElementPresent("#chats-section", 25000, "Open chats section")
      .click("#chats-section")
      .waitForElementPresent(
        "#edit-chat-test-link",
        25000,
        "Find new chat in table"
      )
      .waitForElementNotPresent(
        "@newChatStepButton",
        25000,
        "No more new chat step"
      )
      // Fill the Embed Chat Form
      .getLocationInView("@embedChatEngineStepButton")
      .click("@embedChatEngineStepButton")
      .waitForElementVisible(
        "@embedUsernameInput",
        25000,
        "Find embed username input"
      )
      .waitForElementVisible(
        "@embedSecretInput",
        25000,
        "Find embed secret input"
      )
      .set("@embedUsernameInput", "alamorre")
      .set("@embedSecretInput", "Pass1234")
      .waitForElementVisible(
        "@embedCodeSection",
        25000,
        "Find embed secret input"
      );
  },
};
