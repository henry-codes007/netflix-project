// Select elements from the DOM
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passwordCheckInput = document.getElementById('passwordCheck');
const passwordToggle = document.getElementById('password-toggle');
const confirmToggle = document.getElementById('confirm-toggle');
const passwordStrengthBar = document.getElementById('strength-bar');
const strengthText = document.getElementById('strength-text');
const signupForm = document.getElementById('signup-form');

// Function to check if input has content and add/remove 'has-value' class
function checkHasContent(input) {
    // If the input has a length greater than 0, add the 'has-value' class
    if (input.value.length > 0) {
        input.classList.add('has-value');
    } else {
        // Otherwise, remove the 'has-value' class
        input.classList.remove('has-value');
    }
}

// Add event listeners to inputs to check content
emailInput.addEventListener('input', function() {
    checkHasContent(emailInput); // Check for email input
});

passwordInput.addEventListener('input', function() {
    checkHasContent(passwordInput); // Check for password input
    calculatePasswordStrength(passwordInput.value); // Calculate password strength
});

passwordCheckInput.addEventListener('input', function() {
    checkHasContent(passwordCheckInput); // Check for password confirmation input
});

// Toggle Password Visibility
function togglePasswordVisibility(input, toggleButton) {
    // Check the current type of the input field
    if (input.type === 'password') {
        input.type = 'text'; // Change type to text to show password
        toggleButton.textContent = 'Hide'; // Update toggle button text
    } else {
        input.type = 'password'; // Change type to password to hide password
        toggleButton.textContent = 'Show'; // Update toggle button text
    }
}

// Event listeners for toggling visibility
passwordToggle.addEventListener('click', function() {
    togglePasswordVisibility(passwordInput, passwordToggle); // Toggle password visibility
});

confirmToggle.addEventListener('click', function() {
    togglePasswordVisibility(passwordCheckInput, confirmToggle); // Toggle password confirmation visibility
});

// Password Strength Indicator
function calculatePasswordStrength(password) {
    let strength = 0; // Initialize strength score
    let strengthColor = 'red'; // Default strength color

    // Increment strength score based on conditions
    if (password.length >= 6) strength += 25; // Length condition
    if (/[a-z]/.test(password)) strength += 25; // Check for lowercase letters
    if (/[A-Z]/.test(password)) strength += 25; // Check for uppercase letters
    if (/\d/.test(password)) strength += 15; // Check for digits (0-9)
    if (/[\W]/.test(password)) strength += 10; // Check for non-word characters (symbols)

// Explanation of regex patterns used:
// - /[a-z]/: This pattern checks for the presence of at least one lowercase letter (a-z) in the password.
// - /[A-Z]/: This pattern checks for the presence of at least one uppercase letter (A-Z) in the password.
// - /\d/: This pattern checks for at least one digit (0-9) in the password.
// - /[\W]/: This pattern checks for the presence of at least one non-word character, which includes special characters (e.g., !@#$%^&*).

    // Determine strength level and color based on the score
    if (strength <= 50) {
        strengthColor = 'red'; // Weak strength
        strengthText.textContent = 'Weak'; // Update strength text
    } else if (strength <= 75) {
        strengthColor = 'orange'; // Medium strength
        strengthText.textContent = 'Medium'; // Update strength text
    } else {
        strengthColor = 'green'; // Strong strength
        strengthText.textContent = 'Strong'; // Update strength text
    }

    // Update the strength bar's width and color based on the calculated strength
    passwordStrengthBar.style.width = strength + '%'; // Set width based on strength
    passwordStrengthBar.style.backgroundColor = strengthColor; // Set color based on strength
}

// Form submission and sign-up logic
signupForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission behavior

    const email = emailInput.value; // Get email input value
    const password = passwordInput.value; // Get password input value
    const passwordCheck = passwordCheckInput.value; // Get password confirmation input value

    // Check if password and confirmation match
    if (password !== passwordCheck) {
        alert('Passwords do not match!'); // Alert user if they don't match
        return; // Exit function if passwords don't match
    }

    // Firebase sign-up (Assuming Firebase is set up in your project)
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Success: user has been signed up
            const user = userCredential.user; // Get user info from credential
            console.log('Signed up: ', user); // Log user info to console
            // Redirect or handle success (e.g., navigate to another page)
            window.location.href = '/movies.html';
        })
        .catch((error) => {
            // Handle Errors
            console.error(error.message); // Log error message to console
            alert('Error: ' + error.message); // Alert user with error message
        });
});
