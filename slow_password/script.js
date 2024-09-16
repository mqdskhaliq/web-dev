document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  const messageElement = document.getElementById("message");
  const checkButton = document.getElementById("check-strength");

  function getPasswordStrength(password) {
    let strength = 0;
    if (password.length > 7) strength += 1;
    if (password.match(/[a-z]/)) strength += 1;
    if (password.match(/[A-Z]/)) strength += 1;
    if (password.match(/[0-9]/)) strength += 1;
    if (password.match(/[\W_]/)) strength += 1;
    return strength;
  }

  function updateMessage(strength) {
    switch (strength) {
      case 0:
        messageElement.textContent = "Password is too short";
        messageElement.style.color = "#ff0000";
        break;
      case 1:
        messageElement.textContent = "Weak password";
        messageElement.style.color = "#ff0000";
        break;
      case 2:
        messageElement.textContent = "Moderate password";
        messageElement.style.color = "#ff9900";
        break;
      case 3:
        messageElement.textContent = "Strong password";
        messageElement.style.color = "#33cc33";
        break;
      case 4:
        messageElement.textContent = "Very strong password";
        messageElement.style.color = "#00cc99";
        break;
      default:
        messageElement.textContent = "Password is too short";
        messageElement.style.color = "#ff0000";
        break;
    }
  }

  checkButton.addEventListener("click", () => {
    const password = passwordInput.value;
    const strength = getPasswordStrength(password);
    updateMessage(strength);
  });
});
