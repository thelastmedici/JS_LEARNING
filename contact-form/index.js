document.addEventListener('DOMContentLoaded', function() {
  const fName = document.querySelector('.F-name');
  const fNameInput = fName.querySelector('input');


  const lName = document.querySelector('.L-name');
  const lNameInput = lName.querySelector('input');

  const emailInput = document.querySelector('input[type="email"]');
  const radio1 = document.querySelector('.radio1');
  const radio2 = document.querySelector('.radio2');
  const messageTextarea = document.querySelector('.message textarea');
  const consentChheck = document.querySelector('input[type="checkbox"]');

  const fNameError = document.getElementById("fnameError");
  const lNameError = document.getElementById("lnameError");
  const emailError = document.getElementById("emailError");
  const msgError = document.getElementById('msgError');
  const consentError = document.getElementById('consentError');
  

  
  const submitBtn = document.querySelector('button');
  submitBtn.addEventListener('click', function(e){
  e.preventDefault();
  [fNameError,lNameError,emailError,msgError, consentError].forEach(error => error.textContent= "");
  [fName,lName,emailInput,radio1,radio2,messageTextarea,consentChheck].forEach(input => input.classList.remove('input-error'))
  
  let isvalid = true;

  if(fNameInput.value.trim() === ""){
    fNameInput.classList.add('input-error');
    fNameError.textContent = "This field is required ";
    isvalid = false;
  }

  if(lNameInput.value.trim() === ""){
    lNameInput.classList.add('input-error');
    fNameError.textContent = "This field is required";
    isvalid = false;
  }

  });

   

});