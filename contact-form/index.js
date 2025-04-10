document.addEventListener('DOMContentLoaded', function() {
  const fName = document.querySelector('.F-name');
  const lName = document.querySelector('.L-name');
  const emailInput = document.querySelector('input[type="email"]');
  const radio1 = document.querySelector('.radio1');
  const radio2 = document.querySelector('.radio2');

  const fNameError = document.getElementById("#fnameError");
  const lNameError = document.getElementById("#lnameError");
  const emailError = document.getElementById("#emailError");
  

   const submitBtn = document.querySelector('button');
   submitBtn.addEventListener('click', function(e){
   e.preventDefault();
   if(fName.value.trim() === "")
  

  });

   

});