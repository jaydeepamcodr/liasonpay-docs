// Testing Environments JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Add copy functionality to code blocks
  const copyButtons = document.querySelectorAll('.copy-button');
  
  copyButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Find the code block container
      const codeBlockContainer = this.closest('.environment-code-example');
      
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
  
  // Add hover effects to environment cards
  const environmentCards = document.querySelectorAll('.testing-environment-card');
  
  environmentCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.borderColor = 'var(--ifm-color-primary-lighter)';
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.borderColor = 'var(--ifm-color-emphasis-300)';
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.05)';
    });
  });
});
