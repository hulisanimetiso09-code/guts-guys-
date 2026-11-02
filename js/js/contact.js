document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const subject = document.getElementById('contact-subject').value;
        const message = document.getElementById('contact-message').value.trim();
        const statusDiv = document.getElementById('contact-status');

        if (!name || !email || !subject || !message) {
            statusDiv.style.display = 'block';
            statusDiv.style.backgroundColor = '#f8d7da';
            statusDiv.style.color = '#721c24';
            statusDiv.innerText = 'Please complete all required fields before submitting.';
            return;
        }

        const mailtoUri = `mailto:info@gutsandguys.co.za?subject=${encodeURIComponent(subject + ' - ' + name)}&body=${encodeURIComponent("Sender Name: " + name + "\nSender Email: " + email + "\n\nMessage:\n" + message)}`;

        statusDiv.style.display = 'block';
        statusDiv.style.backgroundColor = '#d4edda';
        statusDiv.style.color = '#155724';
        statusDiv.innerHTML = `<strong>Thank you, ${name}!</strong> Opening your email client to send message...`;

        setTimeout(() => {
            window.location.href = mailtoUri;
        }, 1200);

        contactForm.reset();
    });
});