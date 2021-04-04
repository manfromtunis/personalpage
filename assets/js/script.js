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
            $.ajax({
                url : "https://docs.google.com/forms/u/2/d/e/1FAIpQLSeTqPBSWRxrrpHOCev8O-f3iq9C_8OmScf-mm1tAjM0vbe9dQ/formResponse",
                data : $("#contact-form").serialize(),
                type: "POST",
                dataType: "json",
                statusCode : {
                    0: function(data) {
                        $("#form-success").text('Hooray');
                    },
                    200: function(data) {
                        $("#form-success").text('Hooray');
                    },
                    403: function(data) {
                        alert('Oh no ! Error on submission')
                    }
                }
            })
        })
    }) 
})
