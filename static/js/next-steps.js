// Next Steps JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Add hover effects to next step cards
  const nextStepCards = document.querySelectorAll('.next-step-card');
  
  nextStepCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
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
    
    card.addEventListener('mouseleave', function() {
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
