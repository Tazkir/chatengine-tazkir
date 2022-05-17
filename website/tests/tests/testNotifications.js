module.exports = {
  tags: ["projects", "notifications"],

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
      .pause(1000)
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
      .pause(1000)
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

  "Enable, edit, and disable notifications": function (browser) {
    const projectPage = browser.page.projectPage();

    projectPage
      // Create notifications
      .waitForElementVisible(
        "#notifications-section",
        25000,
        "Open webhooks section"
      )
      .click("#notifications-section")
      .waitForElementVisible(
        "@notificationsButton",
        25000,
        "Find Notifications button"
      )
      .getLocationInView("@notificationsButton")
      .click("@notificationsButton")

      // Wait for form + enable
      .waitForElementVisible(
        "@notificationsEmailSender",
        25000,
        "Find email sender"
      )
      .waitForElementVisible(
        "@notificationsEmailLink",
        25000,
        "Find email link"
      )
      .waitForElementVisible(
        "@notificationsSubmit",
        25000,
        "Find Notifications submit"
      )
      .waitForElementVisible(
        "@notificationsEmailCompanyName",
        25000,
        "Find email company name"
      )
      .set("@notificationsEmailSender", "no_reply@")
      .set("@notificationsEmailLink", "https://")
      .set("@notificationsEmailCompanyName", "Test Co")
      .click("@notificationsSubmit")
      .set("@notificationsEmailSender", "example.co")
      .set("@notificationsEmailLink", "example.co")
      .click("@notificationsSubmit")

      // See if form submitted
      .click("@notificationsButton")

      // Change Notifications
      .waitForElementVisible(
        "@notificationsEmailSender",
        25000,
        "Find email sender"
      )
      .waitForElementVisible(
        "@notificationsEmailLink",
        25000,
        "Find email link"
      )
      .waitForElementVisible(
        "@notificationsSubmit",
        25000,
        "Find Notifications submit"
      )
      .waitForElementVisible(
        "@notificationsDisableButton",
        25000,
        "Disable button is visible"
      )
      .set("@notificationsEmailSender", "m")
      .set("@notificationsEmailLink", "m")
      .set("@notificationsEmailCompanyName", "mpany")
      .pause(1000)
      .click("@notificationsSubmit")

      // See if form submitted
      .pause(1000)
      .click("@notificationsButton")

      // Disable Notifications
      .pause(1000)
      .click("@notificationsDisableButton");
  },
};
