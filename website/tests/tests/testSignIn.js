module.exports = {
  tags: ["auth", "authentication", "login"],

  "Login to logout": function (browser) {
    const page = browser.page.landingPage();

    page
      // Go to home
      .navigate()
      .waitForElementVisible("@landingPage", 25000, "Let landing page load")

      // Open login modal
      .waitForElementVisible("@loginHeader", 25000, "Let nav load")
      .click("@loginHeader")

      // Find and fill form
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

      // Log back out
      .waitForElementVisible("#logout-tab", 25000, "Find new project button") // Not set
      .click("#logout-tab")

      // Back to home
      .waitForElementVisible("@landingPage", 25000, "Let landing page load");
  },

  "Login bad username": function (browser) {
    const page = browser.page.landingPage();

    page
      // Go to home
      .navigate()
      .waitForElementVisible("@landingPage", 25000, "Let landing page load")

      // Open login modal
      .waitForElementVisible("@loginHeader", 25000, "Let nav load")
      .click("@loginHeader")

      // Find and fill form
      .waitForElementVisible("@loginEmailInput", 25000, "Find email input")
      .waitForElementVisible(
        "@loginPasswordInput",
        25000,
        "Find password input"
      )
      .waitForElementVisible("@loginSubmitButton", 25000, "Find login button")

      // Attempt Login
      .set("@loginEmailInput", "alamorre@gmail.com")
      .set("@loginPasswordInput", "pass")
      .click("@loginSubmitButton")

      // Log back out
      .waitForElementVisible("@loginError", 25000, "Find login error text")
      .assertText(
        "@loginError",
        "Oops! These creds are not correct.",
        "Error message is correct"
      );
  },

  "Login bad password": function (browser) {
    const page = browser.page.landingPage();

    page
      // Go to home
      .navigate()
      .waitForElementVisible("@landingPage", 25000, "Let landing page load")

      // Open login modal
      .waitForElementVisible("@loginHeader", 25000, "Let nav load")
      .click("@loginHeader")

      // Find and fill form
      .waitForElementVisible("@loginEmailInput", 25000, "Find email input")
      .waitForElementVisible(
        "@loginPasswordInput",
        25000,
        "Find password input"
      )
      .waitForElementVisible("@loginSubmitButton", 25000, "Find login button")

      // Add to form
      .set("@loginEmailInput", "p")
      .set("@loginPasswordInput", "1234")
      .click("@loginSubmitButton")

      // Log back out
      .waitForElementVisible("@loginError", 25000, "Find login error text")
      .assertText(
        "@loginError",
        "Oops! These creds are not correct.",
        "Error message is correct"
      );
  },
};
