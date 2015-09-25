navigator.geolocation.getCurrentPosition(function(position){
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude
    alert([latitude, longitude]); console.log([latitude, longitude]);

    var map = L.map('map').setView([latitude, longitude], 15);

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; Contributors',
        maxZoom: 18,
    }).addTo(map);

    L.marker([latitude, longitude])
        .addTo(map)
        .bindPopup("Hello world!")
        .openPopup();
});
