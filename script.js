const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');

const confirmPasswordListener = () => {
  if (confirmPassword.value !== password.value) {
    confirmPassword.setCustomValidity('Passwords do not match!');
  } else confirmPassword.setCustomValidity('');
};

password.addEventListener('input', confirmPasswordListener);
confirmPassword.addEventListener('input', confirmPasswordListener);
