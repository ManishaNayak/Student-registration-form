function verify() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var valid = true;

    if (email.value.length == 0) {
        email.nextElementSibling.innerHTML="Enter the valid email";
        valid= false;
    }
    if (password.value.length == 0) {
        password.nextElementSibling.innerHTML="Enter the valid password";
        valid= false;
    }
    return valid;
    
} 