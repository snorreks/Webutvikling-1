$(function () {
    $("#nav-placeholder").load("../navbar.html");
    $("#footer-placeholder").load("../footer.html");
});

function bestill(sted, reise, boPris, reisePris) {
    localStorage.setItem("bestillSted", sted);
    localStorage.setItem("bestillReise", reise);
    localStorage.setItem("bestillReisePris", reisePris);
    localStorage.setItem("bestillStedPris", boPris);
    window.location.href = '../checkout.html';
}