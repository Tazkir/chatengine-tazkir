module.exports = {
  url: 'http://localhost:3000',
  elements: {
    // Page
    landingPage: '#home-section',
    // Login
    loginHeader: '#login-tab',
    loginEmailInput: '#login-email',
    loginPasswordInput: '#login-password',
    loginSubmitButton: '#login-submit',
    loginError: '#login-error',
    // Register
    registerHeader: '#sign-up-tab',
    registerEmailInput: '#sign-up-email',
    registerPasswordInput: '#sign-up-password',
    registerComfirmPasswordInput: '#sign-up-confirm-password',
    registerSubmitButton: '#sign-up-submit',
    registerError: '#sign-up-error',
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