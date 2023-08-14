document.getElementById("submit-btn").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  if (email === "user@email.com" && password === "secret") {
    window.location.href = "bank.html";
  } else {
    alert("wrong info");
  }
});
