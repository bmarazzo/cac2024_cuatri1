function resetErrorMessages() {
    console.log("voy a limpiar los divs");
    let errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element)=> {
        element.innerText = "";
    });
    console.log("ya limpie los divs");
}
function displayErrorMessage(elementId, message) {
    let errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
}


document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById("formularioInicio");
    console.log(form);
    form.addEventListener("submit", (event)=>{
        // Evitar que se envíe el formulario automáticamente
        event.preventDefault();

        resetErrorMessages();

        // Validacion
        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();
        let isValid = true;

        if (username.length  < 4 || username.length > 16 ) {
            displayErrorMessage("usernameError", "El usuario debe tener entre 4 y 16 caracteres.");
            isValid = false;
        }
      
        if (password.length < 8) {
            displayErrorMessage("passwordError", "La contraseña debe tener al menos 8 caracteres.");
            isValid = false;
        }

        if (isValid) {
            alert("¡Formulario enviado correctamente!");
            
        }
    });
} );
