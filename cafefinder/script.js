let map;

function initMap() {
  // Default location (Mumbai)
  const location = { lat: 19.0760, lng: 72.8777 };

  map = new google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom: 14,
  });

  // Marker for center
  new google.maps.Marker({
    position: location,
    map: map,
    title: "You are here",
  });

  findCafes(location);
}

function findCafes(location) {
  const service = new google.maps.places.PlacesService(map);

  const request = {
    location: location,
    radius: 2000, // meters
    type: ["cafe"],
  };

  service.nearbySearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      results.forEach((place) => {
        createMarker(place);
      });
    }
  });
}

function createMarker(place) {
  const marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    title: place.name,
  });

  const infoWindow = new google.maps.InfoWindow({
    content: `<strong>${place.name}</strong><br>${place.vicinity || ""}`,
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
}
