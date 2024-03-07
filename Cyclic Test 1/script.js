document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formContainer form');

    form.addEventListener('submit', function(event) {
        const inputs = form.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"], select');
        let isEmpty = false;

        inputs.forEach(function(input) {
            if (input.value.trim() == '') {
                isEmpty = true;
                input.classList.add('error'); // Optional: Add a visual indication of the error
            } else {
                input.classList.remove('error'); // Optional: Remove any existing error indication
            }
        });

        if (isEmpty) {
            event.preventDefault(); // Prevent form submission if any input is empty
            alert('Please fill out all required fields.'); // Optional: Display an alert to inform the user
        }
    });
});
