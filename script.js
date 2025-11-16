
const form = document.getElementById("contact-form");


form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    
    const prenom = document.getElementById("prenom").value.trim();
    const nom = document.getElementById("nom").value.trim();
    const sujet = document.getElementById("sujet").value.trim();
    const message = document.getElementById("message").value.trim();

    if (prenom === "" || nom === "" || sujet === "" || message === "") {
        alert(" Veuillez remplir tous les champs avant d'envoyer.");
        return;
    }


    alert(" Votre message a été envoyé avec succès !");
    
    
    form.reset();
});
