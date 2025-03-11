document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío real del formulario
    
    let nombres = document.getElementById("nombres").value.trim();
    let apellidos = document.getElementById("apellidos").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let estrato = document.getElementById("estrato").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let grupoSanguineo = document.getElementById("grupoSanguineo").value;
    let genero = document.querySelector('input[name="genero"]:checked')?.value || "No seleccionado";
    let actividades = Array.from(document.querySelectorAll('input[name="actividades"]:checked')).map(el => el.value).join(", ") || "Ninguna";
    
    // Validaciones con expresiones regulares
    let nombreRegex = /^[a-zA-ZñÑ\s]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let telefonoRegex = /^[0-9]{7,10}$/;
    
    if (!nombreRegex.test(nombres) || !nombreRegex.test(apellidos)) {
        alert("Los nombres y apellidos solo pueden contener letras y espacios.");
        return;
    }
    if (!emailRegex.test(email)) {
        alert("Ingrese un correo electrónico válido.");
        return;
    }
    if (!telefonoRegex.test(telefono)) {
        alert("El teléfono debe contener entre 7 y 10 dígitos numéricos.");
        return;
    }
    
    alert(`Registro exitoso:\n\nNombres: ${nombres}\nApellidos: ${apellidos}\nEmail: ${email}\nTeléfono: ${telefono}\nEstrato: ${estrato}\nFecha de Nacimiento: ${fechaNacimiento}\nGrupo Sanguíneo: ${grupoSanguineo}\nGénero: ${genero}\nActividades: ${actividades}`);
    });
    
    



    