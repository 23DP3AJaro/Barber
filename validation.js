const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const emailName = document.getElementById("name");
const emailMessage = document.getElementById("message");
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
const submitButton = document.getElementById("contact-submit");
const formStatus = document.getElementById("Form-status");

function showError() {
  emailError.hidden = false;
}

function hideError() {
  emailError.hidden = true;
  emailInput.value = "";
  emailName.value = "";
  emailMessage.value = "";
}

function validateEmail() {
  const value = emailInput.value.trim();

  if (!regex.test(value)) {
    showError();
    return false;
  }
  hideError();
  return true;
}

function formValidation() {
  if (emailName.value == "") {
    emailName.focus();
    emailName.style.borderBottom = "2px solid red";
    return false;
  } else if (emailMessage.value == "") {
    emailMessage.focus();
    emailMessage.style.borderBottom = "2px solid red";
    return false;
  } else if (validateEmail()) {
    emailName.style.borderBottom = "2px solid #bebed2";
    emailMessage.style.borderBottom = "2px solid #bebed2";
    formStatus.style.color = "green";
    formStatus.textContent = "Form submitted successfully!";
    return true;
  }

  validateEmail();
}

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  formValidation();
});
