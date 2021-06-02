function sendEmail(email) {
    emailjs.send("service_48yh5zj", "template_ttrx2c6", {
        "from_name": email.name.value, 
        "from_email": email.emailaddress.value,
        "body": email.body.value,
        "reply_to": email.emailaddress.value
    })
    .then(
        function(response) {
                document.getElementById("sideNav").insertAdjacentHTML("afterend", '<div class="alert alert-success d-flex alert-dismissible fade show" role="alert"><svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg> Success! I will be reaching out shortly! <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>')
        },
        function(error) {
                document.getElementById("sideNav").insertAdjacentHTML("afterend", '<div class="alert alert-danger d-flex alert-dismissible fade show" role="alert"><svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg> Uh-oh, something went wrong. Try again later. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>')
        },
    )
    return false;
}