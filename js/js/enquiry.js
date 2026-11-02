document.addEventListener('DOMContentLoaded', () => {
    const enquiryForm = document.querySelector('.enquiry-form');
    if (!enquiryForm) return;

    enquiryForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const serviceType = document.getElementById('service-type').value;
        const urgency = document.getElementById('urgency').value;

        // South African Phone Number Regex Validation
        const saPhoneRegex = /^(\+27|0)[6-8][0-9]{8}$/;
        if (!saPhoneRegex.test(phone.replace(/\s+/g, ''))) {
            alert('Please enter a valid South African phone number (e.g., 015 291 0000 or 082 123 4567).');
            return;
        }

        let priceRange = "R 0.00";
        let leadTime = "1-2 Weeks";

        switch (serviceType) {
            case 'bespoke-suit':
                priceRange = "R 4,500.00 – R 8,500.00";
                leadTime = urgency === 'urgent' ? '48 Hours (Express Fitting)' : '7–10 Days';
                break;
            case 'wedding-groomsmen':
                priceRange = "R 12,000.00+ (Package Deal)";
                leadTime = '2–3 Weeks';
                break;
            case 'streetwear-bulk':
                priceRange = "R 1,800.00 – R 3,500.00";
                leadTime = '3–5 Days';
                break;
            case 'footwear':
                priceRange = "R 1,200.00 – R 2,800.00";
                leadTime = '1–2 Days';
                break;
            default:
                priceRange = "Subject to direct evaluation";
                leadTime = "24–48 Hours";
        }

        const responseCard = document.getElementById('enquiry-response');
        responseCard.style.display = 'block';
        responseCard.innerHTML = `
            <div style="background-color: #eef9f2; border: 2px solid #27ae60; padding: 20px; border-radius: 8px; margin-top: 20px;">
                <h3 style="color: #27ae60; margin-top:0;">Fitting Enquiry Successfully Processed</h3>
                <p><strong>Thank you, ${name}!</strong> We have received your order request.</p>
                <ul>
                    <li><strong>Service Selected:</strong> ${serviceType.replace('-', ' ').toUpperCase()}</li>
                    <li><strong>Estimated Price Range:</strong> ${priceRange}</li>
                    <li><strong>Estimated Turnaround Time:</strong> ${leadTime}</li>
                    <li><strong>Confirmation Sent To:</strong> ${email}</li>
                </ul>
                <p>Our tailoring team will contact you shortly on <strong>${phone}</strong> to finalize your appointment.</p>
            </div>
        `;
        enquiryForm.reset();
    });
});