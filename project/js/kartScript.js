let map;
let infowindow = null;
let markers = [];
let myStyles = [
    {
        featureType: "poi",
        stylers: [{visibility: "off"}]
    },
    {
        featureType: "transit.station",
        stylers: [{visibility: "off"}]
    }
];

function placeAllMarkers() {
    placeMarker(1, 'Alicante spa & resort', 'Paseo de Gomiz', {
        lat: 38.348669,
        lng: -0.473283
    }, 'Hotell: &#9733;&#9733;&#9733;&#9733;', 'hotell-leilighet/alicanteHotell.html');
    placeMarker(2, 'Alicante apartments', 'Paseo de Gomiz', {
        lat: 38.200414,
        lng: -0.570938
    }, 'Leilighet: &#9733;&#9733;&#9733;&#9733;', 'hotell-leilighet/alicanteLeilighet.html');
    placeMarker(3, 'Antalya spa & resort', 'Güzeloba Mahallesi', {
        lat: 36.853976,
        lng: 30.791201
    }, 'Hotell: &#9733;&#9733;&#9733;&#9733;', 'hotell-leilighet/antalyaHotell.html');
    placeMarker(4, 'Antalya apartments', 'Güzeloba Mahallesi', {
        lat: 36.853976,
        lng: 30.791201
    }, 'Leilighet: &#9733;&#9733;&#9733;&#9733;', 'hotell-leilighet/antalyaLeilighet.html');
    placeMarker(5, 'Barcelona apartments', 'Passeig de Garcia Fária', {
        lat: 41.402221,
        lng: 2.211718
    }, 'Leilighet: &#9733;&#9733;&#9733;&#9733;', 'hotell-leilighet/barcelonaLeilighet.html');
    placeMarker(6, 'Agia Marina apartments', 'Chania', {
        lat: 35.519491,
        lng: 23.929737
    }, 'Leilighet: &#9733;&#9733;&#9733;&#9733;', 'hotell-leilighet/chaniaLeilighet.html');
    placeMarker(7, 'Kos apartments', 'Akti Kountouriotou', {
        lat: 36.8945864,
        lng: 27.289284
    }, 'Leilighet: &#9733;&#9733;&#9733;&#9733;', 'hotell-leilighet/kosLeilighet.html');
    placeMarker(8, 'Marbella spa & resort', 'Calle Rafaela Aparicio', {
        lat: 36.507438,
        lng: -4.883374
    }, 'Hotell: &#9733;&#9733;&#9733;&#9733;', 'hotell-leilighet/marbellaHotell.html');
    placeMarker(9, 'Mykonos spa & resort', 'Polikandrioti', {
        lat: 37.448955,
        lng: 25.330012
    }, 'Hotell: &#9733;&#9733;&#9733;&#9733;', 'hotell-leilighet/mykonosHotell.html');
    placeMarker(10, 'Réthymnon spa & resort', 'Ari Velouchioti', {
        lat: 35.367521,
        lng: 24.498041
    }, 'Leilighet: &#9733;&#9733;&#9733;&#9733;', 'hotell-leilighet/rethymnonHotell.html');
    placeMarker(11, 'Roma apartments', 'Passeggiata del Gianicolo', {
        lat: 41.894370,
        lng: 12.460527
    }, 'Leilighet: &#9733;&#9733;&#9733;&#9733;', 'hotell-leilighet/romaLeilighet.html');
    placeMarker(12, 'Sardinia spa & resort', 'Olbia', {
        lat: 40.941059,
        lng: 9.502482
    }, 'Hotell: &#9733;&#9733;&#9733;&#9733;', 'hotell-leilighet/sardiniaHotell.html');
    placeMarker(13, 'Sicilia spa & resort', 'Castellammare', {
        lat: 38.1203159,
        lng: 13.366398
    }, 'Hotell: &#9733;&#9733;&#9733;&#9733;', 'hotell-leilighet/siciliaHotell.html');
    placeMarker(14, 'Side spa & resor', 'AÜ Sağlık Spor Kültür Mrk.', {
        lat: 36.814944,
        lng: 31.311698
    }, 'Hotell: &#9733;&#9733;&#9733;&#9733;', 'hotell-leilighet/sideHotell.html');
    placeMarker(15, 'Side apartments', 'AÜ Sağlık Spor Kültür Mrk.', {
        lat: 36.764509,
        lng: 31.389004
    }, 'Leilighet: &#9733;&#9733;&#9733;&#9733;', 'hotell-leilighet/sideLeilighet.html');
    placeMarker(16, 'Venezia apartments', 'Piazza Coriolano', {
        lat: 45.440950,
        lng: 12.331890
    }, 'Leilighet: &#9733;&#9733;&#9733;&#9733;', 'hotell-leilighet/veneziaLeilighet.html');
}


function showMarker(name) {
    switch (name) {
        case 'Alicante spa & resort':
            showMark(1, 'Alicante spa & resort', 'Paseo de Gomiz', {
                lat: 38.348669,
                lng: -0.473283
            }, 'Hotell: &#9733;&#9733;&#9733;&#9733;', 'hotell-leilighet/alicantehotell.html');
            break;
        case 'Portugal Leilighet':
            showMark(2, 'Portugal Leilighet', 'Aresse', portugal, '4');
            break;
        case 'Portugal Leilighet':
            showMark(3, 'Roma hotel', 'Aresse', roma, '3');
            break;
        case 'Hellas hote':
            showMark(4, 'Hellas hotel', 'Aresse', hellas, '6');
            break;
        default:
            window.alert("No name matches the marker");
    }
}


function initMap() {
    let center = {lat: 39.462878, lng: 10.219802};

    infowindow = new google.maps.InfoWindow();

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: center,
        //disableDefaultUI: true,
        styles: myStyles
    });
    google.maps.event.addDomListener(window, 'load', initMap);
    placeAllMarkers();
}

function placeMarker(id, name, address, pos, score, link) {
    let mark = new google.maps.Marker({
        position: pos,
        map: map,
        id: id
    });
    google.maps.event.addListener(mark, 'click', function () {
        infowindow.close();
        infowindow.setContent(
            '<div id="infoWindow" class="container-fluid">' +
            '<h3>' + name + '</h3>' +
            '<h4>' + address + '</h4>' +
            '<h4>' + score.toString() + '</h4>' +
            '<a href="' + link + '"><img class="rounded-circle" src="../res/h.jpg" alt="hotell"></a>' +
            '</div>');
        infowindow.open(map, mark);
    });
    markers.push(mark);
}


function showMark(id, name, address, pos, score, link) {
    for (let i = 0; i < markers.length; i++) {
        if (markers[i].id == id) {
            infowindow.setContent(
                '<div id="infoWindow" class="container-fluid rounded">' +
                '<h3>' + name + '</h3>' +
                '<h4>' + address + '</h4>' +
                '<h4>' + score.toString() + '</h4>' +
                '<a href="' + link + '"><img class="rounded-circle" src="../res/h.jpg" ></a>' +
                '</div>');
            infowindow.open(map, markers[i]);
            return;
        }
    }
}