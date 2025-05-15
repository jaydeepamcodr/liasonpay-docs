// Homepage JavaScript

// Function to handle tab switching for code examples
function setupCodeExampleTabs() {
  // Find all tabs by looking for buttons with data-language attribute
  const codeExampleTabs = document.querySelectorAll('button[data-language]');

  codeExampleTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const language = tab.getAttribute('data-language');

      // Find the container - we need to go up a few levels to find the common parent
      const container = tab.closest('.codeExampleContainer') || tab.closest('section');

      if (!container) return;

      // Get the CSS module class names from the first tab
      const tabClassNames = tab.className.split(' ');
      const activeTabClass = tabClassNames.find(className => className.includes('activeTab')) || 'activeTab';
      const tabClass = tabClassNames.find(className => className.includes('codeExampleTab')) || 'codeExampleTab';

      // Find all tabs in this container
      const allTabs = container.querySelectorAll(`button[data-language]`);

      // Remove active class from all tabs
      allTabs.forEach(t => {
        t.classList.remove(activeTabClass);
      });

      // Add active class to clicked tab
      tab.classList.add(activeTabClass);

      // Find all panels in this container
      const allPanels = container.querySelectorAll(`[data-language]`);
      const panelClassNames = Array.from(allPanels)
        .find(panel => panel !== tab && panel.hasAttribute('data-language'))?.className.split(' ') || [];

      const activePanelClass = panelClassNames.find(className => className.includes('activePanel')) || 'activePanel';
      const panelClass = panelClassNames.find(className => className.includes('codeExamplePanel')) || 'codeExamplePanel';

      // Hide all panels
      allPanels.forEach(panel => {
        if (panel !== tab && panel.hasAttribute('data-language')) {
          panel.classList.remove(activePanelClass);
        }
      });

      // Show panel for selected language
      const targetPanel = container.querySelector(`[data-language="${language}"]:not(button)`);
      if (targetPanel) {
        targetPanel.classList.add(activePanelClass);
      }
    });
  });
}

// Initialize all interactive elements when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  setupCodeExampleTabs();
});

// Re-initialize when the route changes (for single-page applications)
if (typeof window !== 'undefined') {
  const originalPushState = window.history.pushState;
  window.history.pushState = function () {
    originalPushState.apply(this, arguments);

    // Wait for the DOM to update
    setTimeout(() => {
      setupCodeExampleTabs();
    }, 300);
  };

  window.addEventListener('popstate', () => {
    // Wait for the DOM to update
    setTimeout(() => {
      setupCodeExampleTabs();
    }, 300);
  });
}
