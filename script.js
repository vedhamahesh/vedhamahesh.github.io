// Function to scroll to different sections
function scrollToSection(contentId) {
  const element = document.getElementById(contentId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Function to open experience modals
function openExperienceModal(modalId) {
  const modal = document.getElementById(modalId + '-modal');
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }
}

// Function to close experience modals
function closeExperienceModal(modalId) {
  const modal = document.getElementById(modalId + '-modal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
  }
}

// Close modals when clicking outside
window.onclick = function (event) {
  const modals = document.querySelectorAll('.experience-modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
}

// Close modals with Escape key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    const modals = document.querySelectorAll('.experience-modal');
    modals.forEach(modal => {
      if (modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  }
});

// Initialize mouse tracking for interactive background
function initMouseTracking() {
  document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
    document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
  });
}

// Initialize scroll animations
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe timeline items
  document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Set smooth scrolling behavior
  document.documentElement.style.scrollBehavior = 'smooth';

  // Initialize mouse tracking
  initMouseTracking();

  // Initialize scroll animations
  initScrollAnimations();

  // Optional: Add typewriter sound effect
  const typewriterSound = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
  typewriterSound.volume = 0.1;

  // Add parallax effect on scroll
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('html::before');
    if (parallax) {
      const speed = scrolled * 0.5;
      parallax.style.transform = `translateY(${speed}px)`;
    }
  });
});

// Modal functionality for projects
document.addEventListener('DOMContentLoaded', function () {
  // Get all modal elements
  const modals = document.querySelectorAll('.modal');
  const modalButtons = document.querySelectorAll('[id^="openModal"]');
  const closeButtons = document.querySelectorAll('.close');

  // Open modal
  modalButtons.forEach(button => {
    button.addEventListener('click', function () {
      const modalId = this.getAttribute('id').replace('openModal', '');
      const modal = document.getElementById(this.getAttribute('id').replace('openModal', 'modal-'));
      if (modal) {
        modal.style.display = 'block';
      }
    });
  });

  // Close modal
  closeButtons.forEach(button => {
    button.addEventListener('click', function () {
      const modal = this.closest('.modal');
      if (modal) {
        modal.style.display = 'none';
      }
    });
  });

  // Close modal when clicking outside
  window.addEventListener('click', function (event) {
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
});