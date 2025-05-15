/**
 * Custom JavaScript for the LiasonPay documentation site
 */

document.addEventListener('DOMContentLoaded', function() {
  // Code example tabs
  const codeExampleTabs = document.querySelectorAll('.code-example-tab');
  codeExampleTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const language = this.getAttribute('data-language');
      const tabsContainer = this.closest('.code-examples');
      
      // Update active tab
      tabsContainer.querySelectorAll('.code-example-tab').forEach(t => {
        t.classList.remove('active');
      });
      this.classList.add('active');
      
      // Update active panel
      tabsContainer.querySelectorAll('.code-example-panel').forEach(panel => {
        panel.classList.remove('active');
      });
      tabsContainer.querySelector(`.code-example-panel[data-language="${language}"]`).classList.add('active');
    });
  });
  
  // Error example tabs
  const errorExampleTabs = document.querySelectorAll('.error-example-tab');
  errorExampleTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const error = this.getAttribute('data-error');
      const tabsContainer = this.closest('.error-examples');
      
      // Update active tab
      tabsContainer.querySelectorAll('.error-example-tab').forEach(t => {
        t.classList.remove('active');
      });
      this.classList.add('active');
      
      // Update active panel
      tabsContainer.querySelectorAll('.error-example-panel').forEach(panel => {
        panel.classList.remove('active');
      });
      tabsContainer.querySelector(`.error-example-panel[data-error="${error}"]`).classList.add('active');
    });
  });
});
