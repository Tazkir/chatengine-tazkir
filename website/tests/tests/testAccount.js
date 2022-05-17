var axios = require("axios");

module.exports = {
  tags: ["auth", "authentication", "register", "edit", "delete"],

  "Create account improper input": function (browser) {
    const page = browser.page.landingPage();

    page
      .navigate()
      .waitForElementVisible("@landingPage", 25000, "Let landing page load")

      .waitForElementVisible("@registerHeader", 25000, "Let nav load")
      .click("@registerHeader")

      .waitForElementVisible("@registerEmailInput", 25000, "Find email input")
      .waitForElementVisible(
        "@registerPasswordInput",
        25000,
        "Find password input"
      )
      .waitForElementVisible(
        "@registerComfirmPasswordInput",
        25000,
        "Find login button"
      )
      .waitForElementVisible(
        "@registerSubmitButton",
        25000,
        "Find login button"
      )
      .set("@registerEmailInput", "alamorre")
      .set("@registerPasswordInput", "Pass")
      .set("@registerComfirmPasswordInput", "Pass")
      .click("@registerSubmitButton")

      .waitForElementVisible(
        "@landingPage",
        25000,
        "Assert register did not work"
      );
  },

  "Create account email used": function (browser) {
    const page = browser.page.landingPage();

    page
      .navigate()
      .waitForElementVisible("@landingPage", 25000, "Let landing page load")

      .waitForElementVisible("@registerHeader", 25000, "Let nav load")
      .click("@registerHeader")

      .waitForElementVisible("@registerEmailInput", 25000, "Find email input")
      .waitForElementVisible(
        "@registerPasswordInput",
        25000,
        "Find password input"
      )
      .waitForElementVisible(
        "@registerComfirmPasswordInput",
        25000,
        "Find login button"
      )
      .waitForElementVisible(
        "@registerSubmitButton",
        25000,
        "Find login button"
      )
      .set("@registerEmailInput", "@gmail.com")
      .set("@registerPasswordInput", "1234")
      .set("@registerComfirmPasswordInput", "1234")
      .click("@registerSubmitButton")

      .waitForElementVisible(
        "@registerError",
        25000,
        "Find register error text"
      )
      .assertText(
        "@registerError",
        "That email is already used",
        "Error message is correct"
      );
  },

  "Create account and delete": function (browser) {
    const page = browser.page.landingPage();

    page
      .navigate()
      .pause(1000)
      .click("@registerHeader")
      .pause(1000)
      .set("@registerEmailInput", "p")
      .pause(1000)
      .click("@registerSubmitButton")
      .pause(1000)

      // Change password
      .waitForElementVisible("#account-tab", 25000, "See and click account tab")
      .click("#account-tab")
      .waitForElementVisible(
        "#account-password",
        25000,
        "See new account password"
      )
      .waitForElementVisible(
        "#account-confirm-password",
        25000,
        "See new account confirm password"
      )
      .set("#account-password", "Pass1234")
      .set("#account-confirm-password", "Pass1234")
      .click("#account-submit")

      // Logout
      .waitForElementVisible("#logout-tab", 25000, "Assert registered in")
      .pause(1000)
      .click("#logout-tab")
      .waitForElementVisible("@landingPage", 25000, "Assert logged back out")

      // Login with new password
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
      .set("@loginEmailInput", "alamorre@gmail.comp")
      .set("@loginPasswordInput", "Pass1234")
      .click("@loginSubmitButton")
      .waitForElementVisible("#logout-tab", 25000, "Login")

      // Delete account
      .waitForElementVisible("#account-tab", 25000, "See and click account tab")
      .click("#account-tab")
      .waitForElementVisible(
        "#delete-account-button",
        25000,
        "See and click Delete Account button"
      )
      .click("#delete-account-button")
      .waitForElementVisible(
        "#confirm-delete-account-button",
        25000,
        "See and click Confirm Delete Account button"
      )
      .click("#confirm-delete-account-button")

      // Assert logged out and cannot login
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
      .set("@loginEmailInput", "alamorre@gmail.comp")
      .set("@loginPasswordInput", "Pass1234")
      .click("@loginSubmitButton")
      .pause(1000)
      .waitForElementVisible("@landingPage", 25000, "Let landing page load");
  },
};
