document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Here, you can add code to handle the form submission, such as sending the data to a server.
    // You may use AJAX, fetch API, or any other method that suits your needs.

    // For example, you can log the form data to the console:
    const formData = new FormData(this);
    for (const [name, value] of formData) {
        console.log(`${name}: ${value}`);
    }
});
