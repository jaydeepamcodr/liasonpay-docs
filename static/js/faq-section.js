// FAQ Section JavaScript

document.addEventListener('DOMContentLoaded', function () {
  // Initialize FAQ items
  const faqItems = document.querySelectorAll('.faq-section .faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('h3');

    if (question) {
      question.addEventListener('click', function () {
        // Toggle active class on the clicked item
        item.classList.toggle('active');

        // Close other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
          }
        });
      });
    }
  });

  // Add smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
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
});
