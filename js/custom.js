$(document).ready(function(){
    
    $("#name").keyup(function() {
        var name = $("#name").val();
        if (name === '') {
            $("#name").css("border", "2px solid red");
        }
    });
});


function errorMessage(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function successMessage(input) {
    const formControl = input.parentElement;

    //add error class
    formControl.className = 'form-control success';
}