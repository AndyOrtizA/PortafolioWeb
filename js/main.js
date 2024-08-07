let from_name = document.getElementById("from_name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let btn_enviar = document.getElementById("btn_enviar");
let form = document.getElementById("form");
let alertValidaciones =document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertEnviado = document.getElementById("alertEnviado");
let alertEnviadoTexto = document.getElementById("alertEnviadoTexto");

function validarNombre() {

    if (from_name.value.length>3){
        return true;
    }else{
        from_name.focus();
        alertValidacionesTexto.innerHTML+= "Verifica que tu nombre sea correcto<br>";
        alertValidaciones.style.display="block";
        return false;
    }//if expresión regular 
    
}//validarNombre()
function validarEmail() {
    let expReg = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

    if (expReg.test(email.value)){
        return true;
    }else{
        email.focus();
        alertValidaciones.style.display="block";
        alertValidacionesTexto.innerHTML+= "Verifica que tu email sea correcto<br>";
        return false;
    }//if expresión regular 
    
}//validarEmail
function validarMensaje() {
    
    if (message.value.trim().length>10){
        
        return true;
    }else{
        message.focus();
        alertValidaciones.style.display="block";
        alertValidacionesTexto.innerHTML+= "Verifica que hay un mensaje <br>";
        
        return false;
    }//if expresión regular
}//validarMensaje


form.addEventListener("submit", function (event) {
    event.preventDefault();
    alertValidacionesTexto.innerHTML= "";
    alertValidaciones.display="none";
    alertEnviadoTexto.innerHTML="";
    alertEnviado.display="none";
    

    if (validarNombre() && validarEmail() && validarMensaje()) {
        const serviceID = 'default_service';
        const templateID = 'template_1yj8rvn';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                from_name.value="";
                email.value="";
                message.value="";
                alertEnviado.style="block";
                alertEnviadoTexto.innerHTML="El mensaje fue enviado con éxito <br> Pronto recibiras una respuesta ";
                

            }, (err) => {
                alert(JSON.stringify(err));
            });//then
    }//if validaciones


});



// Frase del footer 
let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1500)
  .typeString('Trazando mi propia ruta')
  .pauseFor(300)
  .deleteAll()
  .typeString('< Soy Desarrolladora de Software >')
  .pauseFor(1000)
  .start();