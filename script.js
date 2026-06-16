// Waiting for the DOM to load properly
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    // Executed only if the form exists on the current page
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Preventing the browser from reloading the page
            event.preventDefault();

            // Displaying a clean browser alert message
            alert('Message Sent Successfully! Thank you for reaching out.');
            
            // Resetting all form input values
            contactForm.reset();
        });
    }
});