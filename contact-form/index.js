document.addEventListener('DOMContentLoaded', function() {
  //create helper function
  const $ = (selector) => document.querySelector(selector);
  
  const fields = {
      fName:{
        input: $('.F-name input'),
        error:$('#fnameError'),
        container:$('.F-name')
      },

      lName:{
        input:$('.L-name input'),
        error:$('#lnameError'),
        container:$('.L-name'),
      },
      
      email:{
        input:$('input[type="email"]'),
        error:$('#emailError'),
      },
      message:{
        input:$('.message textarea'),
        error:$('#msgError'),
      },
      consent:{
        input:$('input[type="checkbox"]'),
        error:$('#consentError'),
      }
  };
  const radios = [$('.radio1'), $('.radio2')];

  const clearErrors = () =>{
    Object.values(fields).forEach(({ input, error, container }) => {
      if (error) error.textContent = '';
      if (input) input.classList.remove('input-error');
      if (container) container.classList.remove('input-error');
    });

    radios.forEach(radio=> radio.classList.remove('.input-error'));

  };
  //validate required fields
   const validationRequired = (fieldKey, message= "This field is required") => {
    const {input, error, container} =fields[fieldKey];
    if(input && input.value.trim() === ""){
      if(error) error.textContent = message;
      if(input) input.classList.add('input-error');
      // if(container) container.classList.add('input-error');
      return false;
    }
    return true;
   };
   //validate email
    const validateEmail = () => {
      const { input, error} = fields.email;
      const emailValue = input.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(emailValue === "" || !emailPattern.test(emailValue)){
        error.textContent = "Please enter a valid email address"
        input.classList.add("input-error");
        return false;
      }
      return true;
    };

   $('button').addEventListener('click', function(e){
    e.preventDefault();
    clearErrors();

    let isValid = true;

    ['fName', 'lName'].forEach(field =>{
      if(!validationRequired(field)){
        isValid = false;
      }
    });

     if(!validateEmail()){
      isValid = false;
     }
   })


  });
