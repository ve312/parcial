document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let usuario = document.getElementById("username").value;
    let clave = document.getElementById("password").value;
    console.log("Usuario:", usuario);
    console.log("Clave:", clave);
});

function redirectToSignUp() {
    window.location.href = "sign.html"; 
}


function redirectToHome() {
    window.location.href = "index.html"; 
}
