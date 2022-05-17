var axios = require("axios");

var uuid = "";

module.exports = {
  tags: ["auth", "authentication", "reset", "forgot_password"],

  "Forgot password": function (browser) {
    const landingPage = browser.page.landingPage();

    landingPage
      .navigate()
      .waitForElementVisible("@landingPage", 25000, "Let landing page load")
      .waitForElementVisible("@loginHeader", 25000, "Let nav load")
      .click("@loginHeader")
      .waitForElementVisible(
        "#forgot-password-link",
        25000,
        "Find forgot passwork link"
      )
      .click("#forgot-password-link")

      .waitForElementVisible(
        "#forgot-password-email",
        25000,
        "Find forgot password input"
      )
      .waitForElementVisible(
        "#forgot-password-submit",
        25000,
        "Find forgot password submit button"
      )
      .set("#forgot-password-email", "alamorre@gmail.com")
      .click("#forgot-password-submit");
  },

  "Get uuid": async function (browser) {
    const response = await axios.post("http://127.0.0.1:8000/accounts/login/", {
      email: "alamorre@gmail.com",
      password: "Pass1234",
    });
    uuid = response.data.user.reset.uuid;
  },

  "Open reset link": function (browser) {
    const landingPage = browser.page.landingPage();

    landingPage
      .navigate(`http://localhost:3000/reset/${uuid}`)
      .waitForElementVisible(
        "#account-password",
        25000,
        "Find the edit password input"
      )
      .waitForElementVisible(
        "#account-confirm-password",
        25000,
        "Find the edit password confirm"
      )
      .waitForElementVisible(
        "#account-submit",
        25000,
        "Find the edit password submit"
      );
  },

  "Open expired link": function (browser) {
    const landingPage = browser.page.landingPage();

    landingPage
      .navigate(`http://localhost:3000/reset/${uuid}`)
      .waitForElementVisible(
        "#bad-reset-uuid",
        25000,
        "Find bad UUID message text"
      );
  },
};
