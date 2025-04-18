// Register User
document.addEventListener("DOMContentLoaded", () => {
    const regForm = document.getElementById("registerForm");
    if (regForm) {
      regForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
  
        const user = { username, email, password };
        localStorage.setItem("user", JSON.stringify(user));
        alert("Registration Successful! Please Login.");
        window.location.href = "index.html";
      });
    }
  
    // Login User
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
  
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.email === email && user.password === password) {
          localStorage.setItem("isLoggedIn", "true");
          window.location.href = "user-dashboard.html";
        } else {
          alert("Invalid credentials!");
        }
      });
    }
  });
  