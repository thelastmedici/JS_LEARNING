document.addEventListener('DOMContentLoaded', function() {
    const mail = document.getElementById('email');
    const errorMsg = document.getElementById('emailError');
    const notifyBtn = document.querySelector('.notifyBtn');
    notifyBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        let isValid = True;
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
     if(!email.value.match(emailPattern)){
      errorMsg.innerHTML = "<p>Please enter a valid email address</p>";
      email.classList.add('input-error');
      isValid = false;
     }
    });
} );