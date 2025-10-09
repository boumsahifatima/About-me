function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    

    emailjs.send("service_a7w3d46","template_fqwf28y",parms).then(alert("Your email is send !"))

}
