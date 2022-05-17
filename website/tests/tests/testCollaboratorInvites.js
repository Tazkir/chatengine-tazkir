var axios = require("axios");
let inviteKey = "";

module.exports = {
  tags: ["projects", "collaborators", "invites", "invite"],

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

  "Create, edit, and delete collaborator": function (browser) {
    const projectPage = browser.page.projectPage();

    projectPage
      .waitForElementPresent(
        "#collaborators-section",
        25000,
        "Find Collaborators Section"
      )
      .click("#collaborators-section")

      // Assert 1 collaborator
      .waitForElementPresent(
        ".edit-collaborator-link",
        25000,
        "Find Edit Collaborator button"
      )
      .waitForElementPresent(
        ".collaborator-role-admin",
        25000,
        "Find Collaborator admin role"
      )
      .waitForElementPresent(
        ".delete-collaborator-link",
        25000,
        "Find Delete Collaborator button"
      )

      // Create Invite
      .waitForElementPresent(
        "@addInviteButton",
        25000,
        "Find Add Webhook button"
      )
      .getLocationInView("@addInviteButton")
      .click("@addInviteButton")
      .waitForElementVisible("@addInviteEmail", 25000, "Find invite url input")
      .waitForElementVisible(
        "@addInviteSubmit",
        25000,
        "Find invite submit button"
      )
      .set("@addInviteEmail", "jack@lamorre.co")
      .click("#role-member")
      .pause(500)
      .click("@addInviteSubmit")
      .pause(1000)

      // Assert 1 invite
      .waitForElementPresent(
        ".copy-invite-link",
        25000,
        "Find Copy Invite button"
      )
      .waitForElementPresent(
        ".edit-invite-link",
        25000,
        "Find Edit Invite button"
      )
      .waitForElementPresent(
        ".delete-invite-link",
        25000,
        "Find Delete Invite button"
      )
      .waitForElementPresent(
        ".invite-role-member",
        25000,
        "Find Invite member role"
      )

      // Edit invite
      .click(".edit-invite-link")
      .waitForElementVisible(
        "@editInviteSubmit",
        25000,
        "Find edit invite submit button"
      )
      .click("#role-admin")
      .pause(500)
      .click("@editInviteSubmit")
      .pause(1000)
      .waitForElementPresent(
        ".invite-role-admin",
        25000,
        "Find Invite admin role"
      )

      // Delete Invite
      .click(".delete-invite-link")
      .waitForElementVisible(
        "@deleteInviteEmail",
        25000,
        "Find delete invite submit button"
      )
      .set("@deleteInviteEmail", "jack@lamorre.co")
      .click("@deleteInviteSubmit")
      .pause(1000)
      .waitForElementNotPresent(
        ".invite-role-admin",
        25000,
        "Find No Invite admin role"
      )

      // Create Invite AGAIN
      .waitForElementPresent(
        "@addInviteButton",
        25000,
        "Find Add Webhook button"
      )
      .getLocationInView("@addInviteButton")
      .click("@addInviteButton")
      .waitForElementVisible("@addInviteEmail", 25000, "Find invite url input")
      .waitForElementVisible(
        "@addInviteSubmit",
        25000,
        "Find invite submit button"
      )
      .set("@addInviteEmail", "jack@lamorre.co")
      .click("#role-member")
      .pause(500)
      .click("@addInviteSubmit")
      .pause(1000)

      // Logout so Jack can come in
      .waitForElementVisible("#logout-tab", 25000, "See if you're in now")
      .click("#logout-tab");
  },

  "Get Invite Key": async function (browser) {
    const response = await axios.get("http://127.0.0.1:8000/projects/", {
      headers: {
        Authorization: `Token 19f6e615b60badea7f707dcd041e81935f3c96c6`,
      },
    });

    let projectID = "";
    response.data.map((project) => {
      if (project.title === "ex") {
        projectID = project.public_key;
      }
    });
    console.log("response.data", response.data);
    const response_invites = await axios.get(
      `http://127.0.0.1:8000/projects/${projectID}/invites/`,
      {
        headers: {
          Authorization: `Token 19f6e615b60badea7f707dcd041e81935f3c96c6`,
        },
      }
    );

    response_invites.data.map((invite) => {
      if (invite.to_email === "jack@lamorre.co") {
        inviteKey = invite.access_key;
      }
    });
    console.log("response_invites.data", response_invites.data);
  },

  "Come in as a new member": function (browser) {
    const landingPage = browser.page.landingPage();
    landingPage
      .navigate(`http://localhost:3000/invite/${inviteKey}`)
      .waitForElementVisible("#login-email", 25000, "Find login email")
      .waitForElementVisible("#login-password", 25000, "Find login password")
      .set("#login-email", "jack@lamorre.co")
      .set("#login-password", "Pass1234")
      .click("#login-submit")

      // Logout as jack and back in as adam
      .waitForElementVisible("#logout-tab", 25000, "See if you're in now")
      .click("#logout-tab")
      .waitForElementVisible("@landingPage", 25000, "Logout")
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
};
