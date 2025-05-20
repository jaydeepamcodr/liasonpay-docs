// Authentication Page Tab Functionality

document.addEventListener('DOMContentLoaded', function () {
  // Code tabs functionality
  const codeTabHeaders = document.querySelectorAll('.code-tab-header');

  codeTabHeaders.forEach(tab => {
    tab.addEventListener('click', function () {
      // Find the parent container
      const tabsContainer = this.closest('.code-tabs');

      // Remove active class from all tabs
      tabsContainer.querySelectorAll('.code-tab-header').forEach(t => {
        t.classList.remove('active');
      });

      // Add active class to clicked tab
      this.classList.add('active');

      // Get the index of the clicked tab
      const tabIndex = Array.from(tabsContainer.querySelectorAll('.code-tab-header')).indexOf(this);

      // Hide all content panels
      tabsContainer.querySelectorAll('.code-tab-content').forEach(panel => {
        panel.classList.remove('active');
      });

      // Show the corresponding content panel
      const contentPanels = tabsContainer.querySelectorAll('.code-tab-content');
      if (contentPanels[tabIndex]) {
        contentPanels[tabIndex].classList.add('active');
      }
    });
  });

  // Copy to clipboard functionality
  const copyButtons = document.querySelectorAll('.copy-button');

  copyButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Find the code block container
      const codeBlockContainer = this.closest('.code-block-container');

      // Get the code text (excluding the markdown code fence)
      const codeBlock = codeBlockContainer.querySelector('.code-block');
      const codeText = codeBlock.textContent
        .replace(/^```\w+\n/, '') // Remove opening code fence
        .replace(/```$/, '')      // Remove closing code fence
        .trim();

      // Copy to clipboard
      navigator.clipboard.writeText(codeText)
        .then(() => {
          // Show success feedback
          const originalIcon = this.innerHTML;
          this.innerHTML = '<span class="copy-icon">✓</span>';
          this.title = 'Copied!';

          // Reset after 2 seconds
          setTimeout(() => {
            this.innerHTML = originalIcon;
            this.title = 'Copy to clipboard';
          }, 2000);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);

          // Show error feedback
          const originalIcon = this.innerHTML;
          this.innerHTML = '<span class="copy-icon">❌</span>';
          this.title = 'Failed to copy';

          // Reset after 2 seconds
          setTimeout(() => {
            this.innerHTML = originalIcon;
            this.title = 'Copy to clipboard';
          }, 2000);
        });
    });
  });

  // Add hover effects to security items
  const securityItems = document.querySelectorAll('.security-item');

  securityItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
      this.style.borderColor = 'var(--ifm-color-primary-lighter)';
      const iconWrapper = this.querySelector('.security-icon-wrapper');
      if (iconWrapper) {
        iconWrapper.style.backgroundColor = 'var(--ifm-color-primary)';
        const icon = iconWrapper.querySelector('.security-icon');
        if (icon) {
          icon.style.color = 'white';
        }
      }
    });

    item.addEventListener('mouseleave', function () {
      this.style.borderColor = 'var(--ifm-color-emphasis-300)';
      const iconWrapper = this.querySelector('.security-icon-wrapper');
      if (iconWrapper) {
        iconWrapper.style.backgroundColor = 'var(--ifm-color-primary-lightest)';
        const icon = iconWrapper.querySelector('.security-icon');
        if (icon) {
          icon.style.color = 'var(--ifm-color-primary)';
        }
      }
    });
  });

  // Add hover effects to next step cards
  const nextStepCards = document.querySelectorAll('.next-step-card');

  nextStepCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      // Enhance the icon
      const iconWrapper = this.querySelector('.next-step-icon-wrapper');
      if (iconWrapper) {
        iconWrapper.style.backgroundColor = 'var(--ifm-color-primary-lightest)';
        const icon = iconWrapper.querySelector('.next-step-icon');
        if (icon) {
          icon.style.transform = 'scale(1.1)';
          icon.style.transition = 'transform 0.3s ease';
        }
      }

      // Enhance the button
      const button = this.querySelector('.button--primary');
      if (button) {
        button.style.backgroundColor = 'var(--ifm-color-primary-darker)';
        const buttonIcon = button.querySelector('.button-icon');
        if (buttonIcon) {
          buttonIcon.style.transform = 'translateX(4px)';
          buttonIcon.style.transition = 'transform 0.3s ease';
        }
      }
    });

    card.addEventListener('mouseleave', function () {
      // Reset the icon
      const iconWrapper = this.querySelector('.next-step-icon-wrapper');
      if (iconWrapper) {
        iconWrapper.style.backgroundColor = 'white';
        const icon = iconWrapper.querySelector('.next-step-icon');
        if (icon) {
          icon.style.transform = 'scale(1)';
        }
      }

      // Reset the button
      const button = this.querySelector('.button--primary');
      if (button) {
        button.style.backgroundColor = 'var(--ifm-color-primary)';
        const buttonIcon = button.querySelector('.button-icon');
        if (buttonIcon) {
          buttonIcon.style.transform = 'translateX(0)';
        }
      }
    });
  });

  // Add animation to progress steps
  const progressSteps = document.querySelectorAll('.progress-step');

  progressSteps.forEach((step, index) => {
    // Add a delay to each step for a staggered animation
    setTimeout(() => {
      step.style.opacity = '0';
      step.style.transform = 'translateY(20px)';
      step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

      // Trigger animation
      setTimeout(() => {
        step.style.opacity = '1';
        step.style.transform = 'translateY(0)';
      }, 100);
    }, index * 300);
  });
});
