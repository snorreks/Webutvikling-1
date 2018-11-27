function validateName(x) {
    if (x == "") return false;
    if (!x.match(/^[A-Za-zøæåØÆÅ]+$/)) {
        alert("Du kan ikke ha tall i fornavn eller etternavn");
        return false;
    }
}

function validateAge() {
    let userDate = document.forms['formHorse']['age'].value;
    let dateNow = new Date();
    if (new Date(userDate).getTime() >= dateNow.getTime()) {
        alert("Du ble ikke født i går");
        return false;
    }
}


function validateUsername(x) {
    if (x == "") return false;
    if (x.length < 5) {
        alert("Du må ha lengere brukernavn");
        return false;
    }
}

function validatePassword() {
    if (document.forms['formHorse']['password'].value !== document.forms['formHorse']['confpassword'].value) {
        alert("Passord er ikke likt");
        return false;
    }

}


function getDate() {
    let d = new Date();
    let mm = d.getMonth() + 1;
    let dd = d.getDay();
    document.getElementById("test").innerHTML =
        [d.getFullYear(), (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join('-');
    return ("" + d.getFullYear() + "-" + mm + "-" + dd);
}

