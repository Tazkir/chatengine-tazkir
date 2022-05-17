module.exports = {
    url: 'http://localhost:3000/projects',
    elements: {
      addPersonButton: '#add-person-button',
      addPersonUsername: '#add-person-username',
      addPersonSecret: '#add-person-secret',
      addPersonConfirmSecret: '#add-person-confirm-secret',
      addPersonEmail: '#add-person-email',
      addPersonFirstName: '#add-person-first-name',
      addPersonLastName: '#add-person-last-name',
      addPersonSubmit: '#add-person-submit',
      newPersonError: '#new-person-error',
      deletePersonUsername: '#delete-person-username',
      deletePersonSubmit: '#delete-person-submit',
      editPersonUsername: '#edit-person-username',
      editPersonSecret: '#edit-person-secret',
      editPersonConfirmSecret: '#edit-person-confirm-secret',
      editPersonEmail: '#edit-person-email',
      editPersonFirstName: '#edit-person-first-name',
      editPersonLastName: '#edit-person-last-name',
      editPersonSubmit: '#edit-person-submit',
      addChatButton: '#add-chat-button',
      addChatTitle: '#add-chat-title',
      addChatAdmin: '#add-chat-admin',
      addChatSubmit: '#add-chat-submit',
      editChatTitle: '#edit-chat-title',
      editChatAdmin: '#edit-chat-admin',
      editChatSubmit: '#edit-chat-submit',
      deleteChatTitle: '#delete-chat-title',
      deleteChatSubmit: '#delete-chat-submit',
      addInviteButton: '#add-invite-button',
      addInviteEmail: '#add-invite-email',
      addInviteSubmit: '#add-invite-submit',
      editInviteSubmit: '#edit-invite-submit',
      deleteInviteEmail: '#delete-invite-email',
      deleteInviteSubmit: '#delete-invite-submit',
      addWebhookButton: '#add-webhook-button',
      addWebhookEventTrigger: '#add-webhook-event-trigger',
      addWebhookUrl: '#add-webhook-url',
      addWebhookSubmit: '#add-webhook-submit',
      editWebhookEventTrigger: '#edit-webhook-event-trigger',
      editWebhookUrl: '#edit-webhook-url',
      editWebhookSubmit: '#edit-webhook-submit',
      deleteWebhookEventTrigger: '#delete-webhook-event-trigger',
      deleteWebhookSubmit: '#delete-webhook-submit',
      addMemberButton: '#add-member-button',
      groupMembersSubmit: '#group-members-submit',
      newPersonStepButton: '#new-person-step-button',
      newChatStepButton: '#new-chat-step-button',
      embedChatEngineStepButton: '#embed-chat-engine-step-button',
      embedUsernameInput: '#embed-username-input',
      embedSecretInput: '#embed-secret-input',
      embedCodeSection: '#embed-code-section',
      notificationsButton: '#edit-notifications-button',
      notificationsEmailSender: '#notifications-email-sender',
      notificationsEmailLink: '#notifications-email-link',
      notificationsEmailCompanyName: '#notifications-email-company-name',
      notificationsSubmit: '#notifications-submit',
      notificationsDisableButton: '#notifications-disable-button',
    },
    commands: [{
      assertText(element, expectedText, assertText){
        return this
          .getText(element, function(result) {
            this.assert.equal(
              result.value,
              expectedText,
              assertText
            );
          })
      },
      set(element, value){
        return this
          .click(element)
          .clearValue(element)
          .setValue(element, value)
      }
    }]
  }