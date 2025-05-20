// FAQ Page Functionality

document.addEventListener('DOMContentLoaded', function() {
  // Initialize FAQ items
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', function() {
      // Toggle active class on the clicked item
      item.classList.toggle('active');
      
      // Close other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
    });
  });
  
  // Add copy functionality to code blocks
  const codeBlocks = document.querySelectorAll('.faq-code-block');
  
  codeBlocks.forEach(block => {
    const copyButton = block.querySelector('.copy-button');
    if (copyButton) {
      copyButton.addEventListener('click', function() {
        const codeContent = block.querySelector('code').textContent;
        
        // Copy to clipboard
        navigator.clipboard.writeText(codeContent)
          .then(() => {
            // Show success feedback
            const originalText = copyButton.textContent;
            copyButton.textContent = 'Copied!';
            copyButton.classList.add('copied');
            
            // Reset after 2 seconds
            setTimeout(() => {
              copyButton.textContent = originalText;
              copyButton.classList.remove('copied');
            }, 2000);
          })
          .catch(err => {
            console.error('Failed to copy text: ', err);
          });
      });
    }
  });
  
  // Add smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
        
        // If target is a FAQ item, open it
        const parentFaqItem = targetElement.closest('.faq-item');
        if (parentFaqItem && !parentFaqItem.classList.contains('active')) {
          parentFaqItem.classList.add('active');
        }
      }
    });
  });
  
  // Add table of contents highlighting
  const tocLinks = document.querySelectorAll('.faq-toc a');
  const faqCategories = document.querySelectorAll('.faq-category');
  
  if (tocLinks.length > 0 && faqCategories.length > 0) {
    // Function to update active TOC link
    function updateActiveTocLink() {
      let activeCategory = null;
      
      // Find the current visible category
      faqCategories.forEach(category => {
        const rect = category.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          activeCategory = category;
        }
      });
      
      // Update TOC links
      if (activeCategory) {
        const categoryId = activeCategory.id;
        
        tocLinks.forEach(link => {
          link.classList.remove('active');
          
          if (link.getAttribute('href') === `#${categoryId}`) {
            link.classList.add('active');
          }
        });
      }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', updateActiveTocLink);
    
    // Initial update
    updateActiveTocLink();
  }
});
