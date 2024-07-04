let from_name = document.getElementById("from_name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let btn_enviar = document.getElementById("btn_enviar");
let form = document.getElementById("form");



form.addEventListener("submit", function (event) {
    event.preventDefault();

    btn_enviar.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_1yj8rvn';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
        btn_enviar.value = 'Send Email';
        alert('Sent!');
        }, (err) => {
        alert(JSON.stringify(err));
    });
    
});