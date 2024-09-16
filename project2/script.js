document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if(name && email && message) {
        alert('Thank you for your message!');
        // Here you would typically send the form data to your server or email service
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
