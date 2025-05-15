// API Reference Page JavaScript

// Function to handle tab switching for code examples
function setupCodeExampleTabs() {
  const codeExampleTabs = document.querySelectorAll('.code-example-tab');
  
  codeExampleTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const language = tab.getAttribute('data-language');
      const tabsContainer = tab.closest('.code-examples');
      
      // Remove active class from all tabs
      tabsContainer.querySelectorAll('.code-example-tab').forEach(t => {
        t.classList.remove('active');
      });
      
      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Hide all panels
      tabsContainer.querySelectorAll('.code-example-panel').forEach(panel => {
        panel.classList.remove('active');
      });
      
      // Show panel for selected language
      tabsContainer.querySelector(`.code-example-panel[data-language="${language}"]`).classList.add('active');
    });
  });
}

// Function to handle tab switching for error examples
function setupErrorExampleTabs() {
  const errorExampleTabs = document.querySelectorAll('.error-example-tab');
  
  errorExampleTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const errorType = tab.getAttribute('data-error');
      const tabsContainer = tab.closest('.error-examples');
      
      // Remove active class from all tabs
      tabsContainer.querySelectorAll('.error-example-tab').forEach(t => {
        t.classList.remove('active');
      });
      
      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Hide all panels
      tabsContainer.querySelectorAll('.error-example-panel').forEach(panel => {
        panel.classList.remove('active');
      });
      
      // Show panel for selected error type
      tabsContainer.querySelector(`.error-example-panel[data-error="${errorType}"]`).classList.add('active');
    });
  });
}

// Initialize all interactive elements when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  setupCodeExampleTabs();
  setupErrorExampleTabs();
});

// Re-initialize when the route changes (for single-page applications)
if (typeof window !== 'undefined') {
  const originalPushState = window.history.pushState;
  window.history.pushState = function() {
    originalPushState.apply(this, arguments);
    
    // Wait for the DOM to update
    setTimeout(() => {
      setupCodeExampleTabs();
      setupErrorExampleTabs();
    }, 300);
  };
  
  window.addEventListener('popstate', () => {
    // Wait for the DOM to update
    setTimeout(() => {
      setupCodeExampleTabs();
      setupErrorExampleTabs();
    }, 300);
  });
}
