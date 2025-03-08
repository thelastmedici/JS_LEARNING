document.addEventListener('DOMContentLoaded', function() {
    const mail = document.getElementById('email');
    const errorMsg = document.getElementById('emailError');
    const notifyBtn = document.querySelector('.notifyBtn');
    notifyBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        console.log(" add email");
    });
} );