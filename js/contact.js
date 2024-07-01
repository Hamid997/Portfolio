export function setContact(element) {
    element.innerHTML = `
    <div class="contact-container">
        <h2 class="heading contact-heading">Contact Me</h2>
        <p class="contact-paragraph">Feel free to get in touch with me using the form below.</p>
        <form class="contact-form" id="contact-form">
            <input type="text" class="form-input" id="name" name="name" placeholder="Your Name" required>
            <input type="email" class="form-input" id="email" name="email" placeholder="Your Email" required>
            <textarea class="form-input" id="message" name="message" rows="8" style="resize: none;" placeholder="Your Message" required></textarea>
            <input type="submit" class="form-input" value="Send Message">
        </form>
    </div>
    `;

    // JavaScript for handling form submission
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // You can add code here to handle form submission, like sending the data to a server or displaying a confirmation message.
        
        // For example, you can access form data like this:
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // You can then use this data to perform actions, like sending an email or storing it in a database.

        // For now, let's just display an alert as a placeholder:
        alert(`Message sent! Name: ${name}, Email: ${email}, Message: ${message}`);
        
        // You can customize this alert or replace it with your desired functionality.
    });
}


// export function setContact(element) {
//     // Create the main contact div
//     const contactContainer = document.createElement('div');
//     contactContainer.classList.add('contact-container');

//     // Create the contact heading
//     const contactHeading = document.createElement('h1');
//     contactHeading.classList.add('contact-heading');
//     contactHeading.textContent = 'Contact Me';

//     // Create the contact paragraph
//     const contactParagraph = document.createElement('p');
//     contactParagraph.classList.add('contact-paragraph');
//     contactParagraph.textContent = 'Feel free to get in touch with me using the form below.';

//     // Create the contact form
//     const contactForm = document.createElement('form');
//     contactForm.classList.add('contact-form');
//     contactForm.id = 'contact-form';

//     // Create form inputs
//     const nameInput = document.createElement('input');
//     nameInput.type = 'text';
//     nameInput.classList.add('form-input');
//     nameInput.id = 'name';
//     nameInput.name = 'name';
//     nameInput.placeholder = 'Your Name';
//     nameInput.required = true;

//     const emailInput = document.createElement('input');
//     emailInput.type = 'email';
//     emailInput.classList.add('form-input');
//     emailInput.id = 'email';
//     emailInput.name = 'email';
//     emailInput.placeholder = 'Your Email';
//     emailInput.required = true;

//     const messageInput = document.createElement('textarea');
//     messageInput.classList.add('form-input');
//     messageInput.id = 'message';
//     messageInput.name = 'message';
//     messageInput.rows = 4;
//     messageInput.placeholder = 'Your Message';
//     messageInput.required = true;

//     const submitButton = document.createElement('input');
//     submitButton.type = 'submit';
//     submitButton.classList.add('form-input');
//     submitButton.value = 'Send Message';

//     // Append form inputs to the contact form
//     contactForm.appendChild(nameInput);
//     contactForm.appendChild(emailInput);
//     contactForm.appendChild(messageInput);
//     contactForm.appendChild(submitButton);

//     // Append elements to the main contact div
//     contactContainer.appendChild(contactHeading);
//     contactContainer.appendChild(contactParagraph);
//     contactContainer.appendChild(contactForm);

//     // Append the main contact div to the provided element
//     element.appendChild(contactContainer);

//     // JavaScript for handling form submission
//     contactForm.addEventListener('submit', function (event) {
//         event.preventDefault();

//         // You can add code here to handle form submission, like sending the data to a server or displaying a confirmation message.
        
//         // For example, you can access form data like this:
//         const formData = new FormData(contactForm);
//         const name = formData.get('name');
//         const email = formData.get('email');
//         const message = formData.get('message');

//         // You can then use this data to perform actions, like sending an email or storing it in a database.

//         // For now, let's just display an alert as a placeholder:
//         alert(`Message sent! Name: ${name}, Email: ${email}, Message: ${message}`);
        
//         // You can customize this alert or replace it with your desired functionality.
//     });
// }

// Usage: Call setContact and pass in the element where you want to create the contact section.
// For example:
// setContact(document.getElementById('contact-container'));
