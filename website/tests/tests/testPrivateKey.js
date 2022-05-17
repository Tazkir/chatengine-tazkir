module.exports = {
  tags: ["projects", "keys", "key", "private"],

  before: function (browser) {
    const page = browser.page.landingPage();

    page
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
  },

  after: function (browser) {
    const page = browser.page.landingPage();

    page
      .click("#logout-tab")
      .waitForElementVisible("@landingPage", 25000, "Logout");
  },

  "Create and delete project": function (browser) {
    const page = browser.page.projectsPage();

    page
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
        "#private-key",
        25000,
        "Find private key of project page"
      )
      .waitForElementVisible(
        "#show-key",
        25000,
        "Find show key of project page"
      )
      .waitForElementNotPresent(
        "#hide-key",
        25000,
        "Find no hide key of project page"
      )
      .click("#show-key")
      .waitForElementVisible(
        "#hide-key",
        25000,
        "Find hide key after clicking show key"
      )
      .waitForElementVisible("#copy-key", 25000, "Find copy key")
      .waitForElementNotPresent("#show-key", 25000, "Find no show key")
      .click("#hide-key")
      .waitForElementVisible(
        "#show-key",
        25000,
        "Find show key after clicking hide key"
      )

      .getLocationInView("#delete-project")
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
  },
};
