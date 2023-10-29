// Function to toggle password visibility
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("myInput");
    var eyeIcon = document.getElementById("eyeIcon");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.src = "Icon melek.svg"; 
    } else {
      passwordInput.type = "password";
      eyeIcon.src = "Icon.svg"; 
    }
  }
  
  function masuk() {
    var usernameEmailInput = document.querySelector(".input-email");
    var passwordInput = document.getElementById("myInput");
  
    var usernameEmail = usernameEmailInput.value;
    var password = passwordInput.value;
  
    if (usernameEmail.trim() === "" || password.trim() === "") {
      alert("Mohon isi dengan lengkap untuk login.");
    } else {
      var isLoginSuccessful = true; 
  
      if (isLoginSuccessful) {
        alert("Login berhasil!");
      } else {
        alert("Login gagal. Periksa username dan kata sandi Anda.");
      }
    }
  }
  