function checkInfo() {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  if (email === "user@email.com" && password === "secret") {
    window.location.href = "bank.html";
  } else {
    alert("wrong info");
  }
}

document.getElementById("submit-btn").addEventListener("click", checkInfo);
document.getElementById("submit-btn").addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    checkInfo();
  }
});
