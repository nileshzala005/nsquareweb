// Basic JS: can be expanded for analytics or form handling.
document.addEventListener('DOMContentLoaded', function(){
  // Example: smooth scroll for same-page anchors (not strictly needed for current pages)
  document.querySelectorAll('a[href^="#"]').forEach(function(link){
    link.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth'});
    });
  });
});
