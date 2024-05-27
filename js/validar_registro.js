function resetErrorMessages() {
    console.log("voy a limpiar los divs");
    let errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element) => {
        element.innerText = "";
    });
    console.log("ya limpie los divs");
}

function displayErrorMessage(elementId, message) {
    let errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
}

function isValidEmail(email) {
    // Utilizamos una expresión regular para validar el formato del correo electrónico
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // estructura texto@texto.texto
    return emailPattern.test(email);
}


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formularioRegistro");
    console.log(form);
    form.addEventListener("submit", (event) => {
        // Evitar que se envíe el formulario automáticamente
        event.preventDefault();

        resetErrorMessages();

        // Validacion
        let nombre = document.getElementById("nombre").value.trim();
        let apellido = document.getElementById("apellido").value.trim();
        let email = document.getElementById("email").value.trim();
        let fechaNacimiento = document.getElementById("fechaNacimiento").value.trim();
        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();
        let password2 = document.getElementById("password2").value.trim();
        let pais = document.querySelector(".form-select").value;
        let isValid = true;

        if (nombre.length < 1) {
            displayErrorMessage("nombreError", "El nombre debe tener al menos un caracter.");
            isValid = false;
        }

        if (apellido.length < 1) {
            displayErrorMessage("apellidoError", "El apellido debe tener al menos un caracter.");
            isValid = false;
        }

        if (!isValidEmail(email)) {
            displayErrorMessage("emailError", "Ingrese un email válido.");
            isValid = false;
        }
      
        if (username.length < 4 || username.length > 16) {
            displayErrorMessage("usernameError", "El usuario debe tener entre 4 y 16 caracteres.");
            isValid = false;
        }

        if (password.length < 8) {
            displayErrorMessage("passwordError", "La contraseña debe tener al menos 8 caracteres.");
            isValid = false;
        }

        if (password !== password2) {
            displayErrorMessage("password2Error", "Las contraseñas no coinciden.");
            isValid = false;
        }

        if (pais === "País") {
            displayErrorMessage("paisError", "Seleccione un país:");
            isValid = false;
        }

        if (isValid) {
            alert("¡Formulario enviado correctamente!");
        }
    });
});
