// $(document).ready(function() {
//     $('a[href*="#"]').on('click', function(event) {
//       event.preventDefault();
//       $('html, body').animate({
//         scrollTop: $($(this).attr('href')).offset().top
//       }, 500);
//     });
//   });
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simple form submission handling (for demonstration purposes)
    alert('Your message has been sent!');
    
    // Clear form fields
    document.getElementById('contactForm').reset();
});
