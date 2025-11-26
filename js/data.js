let dato = localStorage.getItem('Dato') 
document.getElementById("data").textContent = dato;

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("volver").addEventListener("click", function() {
        localStorage.removeItem("Dato");
    });});