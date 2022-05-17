module.exports = {
  tags: ["projects", "chats", "chat"],

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

  "Create, edit, and delete chat": function (browser) {
    const projectPage = browser.page.projectPage();

    projectPage
      // Create alamorre
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
      .click("@addPersonSubmit")
      .pause(1000)
      // Create alamorree
      .waitForElementVisible("#users-section", 25000, "Open users section")
      .click("#users-section")
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
      .set("@addPersonUsername", "alamorree")
      .set("@addPersonSecret", "Pass1234")
      .set("@addPersonConfirmSecret", "Pass1234")
      .click("@addPersonSubmit")
      .pause(1000)
      // Create chat
      .waitForElementVisible("#chats-section", 25000, "Open chats section")
      .click("#chats-section")
      .waitForElementPresent("@addChatButton", 25000, "Find Add Chat button")
      .getLocationInView("@addChatButton")
      .click("@addChatButton")
      .waitForElementVisible("@addChatTitle", 25000, "Find chat title input")
      .waitForElementVisible("@addChatAdmin", 25000, "Find chat admin input")
      .waitForElementVisible("@addChatSubmit", 25000, "Find chat submit button")
      .set("@addChatTitle", "test")
      .set("@addChatAdmin", "alamorr")
      .click("@addChatSubmit")
      .pause(1000)
      .waitForElementVisible(
        "@addChatAdmin",
        25000,
        "Form didnt submit - bad admin"
      )
      .set("@addChatAdmin", "e")
      .click("@addChatSubmit")
      .waitForElementPresent(
        "#edit-chat-test-link",
        25000,
        "Find new chat in table"
      )
      // Edit chat title and admin
      .getLocationInView("#edit-chat-test-link")
      .click("#edit-chat-test-link")
      .waitForElementVisible(
        "@editChatTitle",
        25000,
        "Find edit chat title input"
      )
      .waitForElementVisible(
        "@editChatAdmin",
        25000,
        "Find edit chat admin input"
      )
      .set("@editChatTitle", "1")
      .set("@editChatAdmin", "e")
      .click("@editChatSubmit")
      .waitForElementVisible(
        "#edit-chat-test1-link",
        25000,
        "Find new chat in table"
      )
      // Add and remove members
      .waitForElementVisible(
        "#group-memeber-chat-test1-link",
        25000,
        "Find members in table"
      )
      .click("#group-memeber-chat-test1-link")
      .waitForElementVisible(
        "@addMemberButton",
        25000,
        "Find add member button"
      )
      .waitForElementVisible(
        "@groupMembersSubmit",
        25000,
        "Find members submit button"
      )
      .click("@addMemberButton")
      .waitForElementVisible(
        "#group-member-1-input",
        25000,
        "Find new member input"
      )
      .set("#group-member-1-input", "alamorree")
      .click("@groupMembersSubmit")
      // Delete chat
      .waitForElementVisible(
        "#delete-chat-test1-link",
        25000,
        "Find delete chat in table"
      )
      .click("#delete-chat-test1-link")
      .waitForElementVisible(
        "@deleteChatTitle",
        25000,
        "Find delete chat title input"
      )
      .waitForElementVisible(
        "@deleteChatSubmit",
        25000,
        "Find delete chat submit button"
      )
      .set("@deleteChatTitle", "test")
      .click("@deleteChatSubmit")
      .pause(1000)
      .waitForElementVisible(
        "@deleteChatTitle",
        25000,
        "Form didnt submit - bad title"
      )
      .set("@deleteChatTitle", "1")
      .click("@deleteChatSubmit")
      .waitForElementNotPresent(
        "#edit-chat-test1-link",
        25000,
        "Find new chat in table"
      );
  },
};
