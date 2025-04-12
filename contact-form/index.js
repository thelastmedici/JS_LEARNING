document.addEventListener('DOMContentLoaded', function() {
  //create helper function
  const $ = (selector) =>document.querySelector(selector);
  
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
      error:$('#emialError'),
    },
    message:{
      input:$('.message textarea'),
      error:$('#msgError'),
    },
    consent:{
      input:$('input[type="checkbox"]'),
      error:$('#consentError'),
    }
  }

  });
