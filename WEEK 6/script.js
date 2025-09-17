// Part 1: Event Handling
const alertButton = document.getElementById('alertButton');
const messageDiv = document.getElementById('message');

alertButton.addEventListener('click', () => {
  messageDiv.textContent = 'Button was clicked!';
});

// Part 2: Light/Dark Mode Toggle
const toggleButton = document.getElementById('toggleMode');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
});

// Initialize with light mode
document.body.classList.add('light');

// Part 3: Form Validation
const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', (event) => {
  // Clear previous errors
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';

  let valid = true;

  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    valid = false;
  }

  // Simple email regex validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email.';
    valid = false;
  }

  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    valid = false;
  }

  if (!valid) {
    event.preventDefault(); // Prevent form submission if invalid
  }
});
