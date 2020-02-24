let form = document.querySelector('.form');
let formInput = document.querySelectorAll(".form-input");

document.addEventListener("DOMContentLoaded", function() {
  formInput.forEach(function(input) {
    //clear on page reload or Document load
    input.className = input.className.replace(/form-input-error ?/, "");
    input.addEventListener("input", function() {
        //clear on input
      input.className = input.className.replace(/form-input-error ?/, "");
    });
  });
});

//add class if no value in the input
form.addEventListener('submit', (e) => {
    e.preventDefault();
    formInput.forEach((input) => {
        if(input.value.length === 0){
            input.classList.add('form-input-error')
        }
    })
})