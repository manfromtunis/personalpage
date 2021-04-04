document.addEventListener("DOMContentLoaded", function() {
    // Email validation function for contact form 
    // contact form in contact.html submission handling
    $(function() 
    {
        $("#contact-form").submit(function(e) {
            e.preventDefault();
            // AJAX request 
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test($("#validationCustom03")[0].value))
            {
                // pass on true
            } else {
                alert("Invalid Email");
                return false;
            }
            $.ajax({ // code from https://edcupaioli.com/blog/google-form-front-end/
                url : "https://docs.google.com/forms/u/2/d/e/1FAIpQLSeTqPBSWRxrrpHOCev8O-f3iq9C_8OmScf-mm1tAjM0vbe9dQ/formResponse", //The public Google Form url, but replace /view with /formResponse
                data : $("#contact-form").serialize(), //Nifty jquery function that gets all the input data
                type: "POST", //tells ajax to post the data to the url
                dataType: "json",
                statusCode : { //the status code from the POST request
                    0: function(data) { //0 is when Google gives a CORS error, don't worry it went through
                        //success
                        $("#form-success").text('Hooray');
                    },
                    200: function(data) { //200 is a success code. it went through!
                        $("#form-success").text('Hooray');
                    }, //success
                    403: function(data) {
                        //error
                        alert('Oh no ! Error on submission')
                    }
                }
            })
        })
    }) 
})
