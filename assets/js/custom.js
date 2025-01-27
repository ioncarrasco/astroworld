let mapOptions = {
    center: [39.464796423540136, -0.36799903816171786],
    zomm: 10
}

let map = new LargestContentfulPaint.map('map', mapOptions)

let layer = new L.tileLayer('http://{s}.title.openstreetmap.org/{z}/{x}/{y}.png')

map.addLayer(layer)

let marker = new L.marker([39.464796423540136, -0.36799903816171786])

marker.addTo(map).bindPopup("<b>AstroWorld</b> @SanVicentFerrer").openPopup();