document.addEventListener('DOMContentLoaded', function() {
  //create helper function
  const $ = (selector) =>document.querySelector(selector);
  
  const fields ={
    fName:{
      input: $('.F-name input'),
      error:$('#fnameError'),
      container:$('.F-name')
    }
  }

  });
