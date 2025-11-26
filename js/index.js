document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("buttonText").addEventListener("click", function() {
        localStorage.setItem("Dato", inputText.value);
    });});