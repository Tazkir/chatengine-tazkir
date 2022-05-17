module.exports = {
    url: 'http://localhost:3000/projects',
    elements: {
      projectsTable: '#projects-table',
      newProject: '#new-project',
      newProjectTitle: '#project-title-input',
      newProjectSubmit: '#project-submit',
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