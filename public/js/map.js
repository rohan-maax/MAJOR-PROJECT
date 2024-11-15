
mapboxgl.accessToken=mapToken;
    if(listing.geometry.coordinates.length==0){
        listing.geometry.coordinates=[79.1,28.9];
    }

        const map=new mapboxgl.Map({
            container: "map", // Container ID
            style: "mapbox://styles/mapbox/streets-v12", // Style URL
            center: listing.geometry.coordinates, // Starting position [lng, lat]
            zoom: 9 // Starting zoom
        });

        const marker= new mapboxgl.Marker({color : "red"})
        .setLngLat(listing.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({offset :25,}).setHTML(
                `<h4> ${listing.title} Exact location provided after booking </h4>`
            )
        ) // listing.geometry.coordinates
        .addTo(map);