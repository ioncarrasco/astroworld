let mapOptions = {
    center: [39.464796423540136, -0.36799903816171786],
    zoom: 20
}

let map = new L.map('map', mapOptions)

let layer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')

map.addLayer(layer)

let marker = new L.marker([39.464796423540136, -0.36799903816171786])

marker.addTo(map).bindPopup("<b><strong>AstroWorld</strong></b> @ 4D-IES SanVicentFerrer").openPopup();