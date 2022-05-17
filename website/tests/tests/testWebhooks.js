module.exports = {
  tags: ["projects", "webhooks", "webhook"],

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

  "Create, edit, and delete webhook": function (browser) {
    const projectPage = browser.page.projectPage();

    projectPage
      .waitForElementPresent(
        "#webhooks-section",
        25000,
        "Find Webhooks Section"
      )
      .click("#webhooks-section")
      .waitForElementPresent(
        "@addWebhookButton",
        25000,
        "Find Add Webhook button"
      )
      .getLocationInView("@addWebhookButton")
      .click("@addWebhookButton")
      .waitForElementVisible("@addWebhookUrl", 25000, "Find webhook url input")
      .waitForElementVisible(
        "@addWebhookSubmit",
        25000,
        "Find webhook submit button"
      )
      .set("@addWebhookUrl", "https://api")
      .click("@addWebhookSubmit")
      .pause(1000)

      // Create
      .waitForElementVisible(
        "@addWebhookUrl",
        25000,
        "Form didnt submit - bad url"
      )
      .set("@addWebhookUrl", ".chatengine.io/webhooks/test")
      .click("@addWebhookSubmit")
      .pause(1000)
      .waitForElementVisible(
        "@addWebhookEventTrigger",
        25000,
        "Form didnt submit - no trigger"
      )
      .click("#event_trigger-On-New-Message")
      .click("@addWebhookSubmit")
      .pause(1000)

      // Read
      .waitForElementVisible(
        "#webhook-details-On-New-Message-link",
        25000,
        "Find webhook details link"
      )
      .click("#webhook-details-On-New-Message-link")
      .pause(1000)
      .waitForElementVisible(
        "#webhook-event_trigger",
        25000,
        "Find webhook event trigger"
      )
      .waitForElementVisible("#webhook-secret", 25000, "Find webhook secret")
      .waitForElementVisible("#webhook-url", 25000, "Find webhook url")
      .click(".ant-modal-close-x")
      .pause(1000)

      // Update
      .getLocationInView("#edit-webhook-On-New-Message-link")
      .waitForElementPresent(
        "#edit-webhook-On-New-Message-link",
        25000,
        "Find new webhook in table"
      )
      .click("#edit-webhook-On-New-Message-link")
      .pause(1000)
      .waitForElementVisible(
        "@editWebhookUrl",
        25000,
        "Find edit webhook url input"
      )
      .set("@editWebhookUrl", "/")
      .click("@editWebhookSubmit")
      .pause(1000)

      // Delete
      .getLocationInView("#delete-On-New-Message-link")
      .waitForElementPresent(
        "#delete-On-New-Message-link",
        25000,
        "Find delete webhook in table"
      )
      .click("#delete-On-New-Message-link")
      .pause(1000)
      .waitForElementVisible(
        "@deleteWebhookEventTrigger",
        25000,
        "Find webhook submit button"
      )
      .set("@deleteWebhookEventTrigger", "On New Message")
      .click("@deleteWebhookSubmit")
      .waitForElementNotPresent(
        "#delete-On-New-Message-link",
        25000,
        "Find no webhook row in table"
      );
  },
};
