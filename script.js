document.addEventListener("DOMContentLoaded", function() {
    function validateForm(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const name = document.getElementById('name').value.trim();
        const gender = document.getElementById('gender').value;
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();
        const city = document.getElementById('city').value.trim();
        const state = document.getElementById('state').value.trim(); 
        const pincode = document.getElementById('pincode').value.trim();
        const dob = document.getElementById('dob').value;
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();
        const medicalFile = document.getElementById('medicalFile').files[0];
        const photo = document.getElementById('photo').files[0];
        const emergencyContactPhone = document.getElementById('emergencyContactPhone').value.trim();

        // Regular Expressions for Validation
        const nameRegex = /^[A-Za-z][A-Za-z\s]*$/;
        const phoneRegex = /^\d{10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const pincodeRegex = /^\d{6}$/;
        const fileExtensionRegex = /\.(pdf|docx|jpg|jpeg|png)$/i;
        const photoExtensionRegex = /\.(jpg|jpeg|png)$/i;

        // Password strength criteria
        function getPasswordStrength(password) {
            let strength = 'weak';
            const lengthCriteria = /.{8,}/;
            const uppercaseCriteria = /[A-Z]/;
            const lowercaseCriteria = /[a-z]/;
            const numberCriteria = /\d/;
            const specialCharCriteria = /[@$!%*?&]/;

            if (lengthCriteria.test(password) &&
                uppercaseCriteria.test(password) &&
                lowercaseCriteria.test(password) &&
                numberCriteria.test(password) &&
                specialCharCriteria.test(password)) {
                strength = 'strong';
            } else if (lengthCriteria.test(password) &&
                    (uppercaseCriteria.test(password) || lowercaseCriteria.test(password)) &&
                    (numberCriteria.test(password) || specialCharCriteria.test(password))) {
                strength = 'normal';
            }
            return strength;
        }

        // Validation checks with alert boxes
        if (!nameRegex.test(name)) {
            alert("Please enter a valid name.");
            return false;
        }
        if (!phoneRegex.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return false;
        }
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        if (!pincodeRegex.test(pincode)) {
            alert("Please enter a valid 6-digit pincode.");
            return false;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }
        if (getPasswordStrength(password) === 'weak') {
            alert("Your password is too weak. Please create a stronger password.");
            return false;
        }
        if (!medicalFile) {
            alert("Please upload your medical records.");
            return false;
        } else if (!fileExtensionRegex.test(medicalFile.name)) {
            alert("Please upload a valid file (PDF, DOCX, JPG, JPEG, or PNG).");
            return false;
        }
        if (!photo) {
            alert("Please upload a photo.");
            return false;
        } else if (!photoExtensionRegex.test(photo.name)) {
            alert("Please upload a valid photo (JPG, JPEG, or PNG).");
            return false;
        }
        if (!phoneRegex.test(emergencyContactPhone)) {
            alert("Please enter a valid 10-digit emergency contact phone number.");
            return false;
        }

        // Registration successful
        alert("Registration Successful!");
        console.log("Registration successful.");

        // Submit the form programmatically if required
        document.getElementById("registrationForm").submit(); 
        
        return true;
    }

    // Bind the validation function to form submit event
    document.getElementById("registrationForm").addEventListener("submit", validateForm);
});
