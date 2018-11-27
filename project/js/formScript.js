// Funksjon som stopper sumbit og viser feilmelding i formen
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Henter alle formene med classe navn 'needs-validation'
        var forms = document.getElementsByClassName('needs-validation');

        // Går gjennom alle inputs og stopper submit hvis noen ikke er valid
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {

                if (form.checkValidity() === false || !isValid()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();


let validFornavn = 1, validEtterNavn = 1, validBrukernavn = 1, validTelefon = 1, validpassord = 1;

function isValid() {
    return (validBrukernavn && validFornavn && validEtterNavn && validpassord && validTelefon);
}

function validateFornavn() {
    let fornavn = document.getElementById("fornavn");
    let feilfornavn = document.getElementById("feilfornavn");

    if (!fornavn.value.match(/^[A-Za-zøæåØÆÅ]+$/)) {
        feilfornavn.style.display = "block";
        fornavn.style.border = "1px solid red";
        validFornavn = 0;
    } else {
        feilfornavn.style.display = "none";
        fornavn.style.border = "1px solid green";
        validFornavn = 1;
    }
}

function validateEtternavn() {
    let etternavn = document.getElementById("etternavn");
    let feiletternavn = document.getElementById("feiletternavn");

    if (!etternavn.value.match(/^[A-Za-zøæåØÆÅ]+$/)) {
        feiletternavn.style.display = "block";
        etternavn.style.border = "1px solid red";
        validEtterNavn = 0;
    } else {
        feiletternavn.style.display = "none";
        etternavn.style.border = "1px solid green";
        validEtterNavn = 1;
    }
}

function validateBrukernavn() {
    let brukernavn = document.getElementById("brukernavn");
    let feilbrukernavn = document.getElementById("feilbrukernavn");

    if (brukernavn.value.length < 5 || brukernavn.value.length > 20) {
        feilbrukernavn.style.display = "block";
        brukernavn.style.border = "1px solid red";
        validBrukernavn = 0;
    } else {
        feilbrukernavn.style.display = "none";
        brukernavn.style.border = "1px solid green";
        validBrukernavn = 1;
    }
}


function validateTelefon() {
    let telefon = document.getElementById("telefon");
    let feilTelefon = document.getElementById("feiltelefon");

    /* Siden telefon er frivilig så er det true, hvis brukeren ikke har skrevet noe */
    if ((isNaN(telefon.value) || telefon.value.length != 8) && telefon.value.length != 0) {
        feilTelefon.style.display = "block";
        telefon.style.border = "1px solid red";
        validTelefon = 0;
    } else {
        feilTelefon.style.display = "none";
        telefon.style.border = "1px solid green";
        validTelefon = 1;
    }
}

function validatePassord() {
    let password = document.getElementById("passord");
    let confirm_password = document.getElementById("gjentaPassord");
    let feilpassord = document.getElementById("feilpassord");

    if (password.value !== confirm_password.value) {
        feilpassord.style.display = "block";
        confirm_password.style.border = "1px solid red";
        validpassord = 0;
    } else {
        feilpassord.style.display = "none";
        confirm_password.style.border = "1px solid green";
        validpassord = 1;
    }
}
