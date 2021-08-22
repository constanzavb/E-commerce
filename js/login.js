var mail = document.forms['form']['mail'];
var contraseña  = document.forms['form']['contraseña']

var mail_error = document.getElementById('mail_error');
 
function validated(){
    if(mail.value.length < 1) {
        mail_error.style.display = "block";
        mail.focus ();
        return false;
    }
    if(contraseña.value.length < 1) {
        contra_error.style.display = "block";
        contraseña.focus ();
        return false;
    }
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    function mail_verify(){
        if(mail.value.lenthg >=1)
            mail_error.style.display = "none";
            return true;  
        }
        function contraseña_verify(){
            if(contraseña.value.lenthg >=1)
            mail_error.style.display = "none";
            return true;    
        }
});