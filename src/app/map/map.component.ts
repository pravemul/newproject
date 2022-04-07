import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  ngOnInit(): void {

    // This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

    // const loader = new Loader({
    //   apiKey: "AIzaSyBnlLIYM8tdSWIj2HSbXPh4op11MuepEpI",
    //   version: "weekly"
    // });

function initAutocomplete() {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      center: { lat: -33.8688, lng: 151.2195 },
      zoom: 13,
      mapTypeId: "roadmap",
    }
  );

  // Create the search box and link it to the UI element.
  const input = document.getElementById("pac-input") as HTMLInputElement;
  const searchBox = new google.maps.places.SearchBox(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds() as google.maps.LatLngBounds);
  });

  let markers: google.maps.Marker[] = [];

  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", () => {
     const places = searchBox.getPlaces();

    if (places?.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    const bounds = new google.maps.LatLngBounds();

    places?.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }

      const icon = {
        url: place.icon as string,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };

      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location,
        })
      );

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });

}

initAutocomplete();

  //   let map: google.maps.Map, infoWindow: google.maps.InfoWindow;

  //   function initMap(): void {
  //     map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
  //       center: { lat: 0, lng: 0},
  //       zoom: 16,
  //     });
      
  //     infoWindow = new google.maps.InfoWindow();

  //     const locationButton = document.createElement("button");

  //     locationButton.textContent = "Pan to Current Location";
  //     locationButton.classList.add("custom-map-control-button");

  //     map.controls[google.maps.ControlPosition.BOTTOM_RIGHT].push(locationButton);

  //     locationButton.addEventListener("click", () => {
  //       // Try HTML5 geolocation.
  //       if (navigator.geolocation) {
  //         navigator.geolocation.getCurrentPosition(
  //           (position: GeolocationPosition) => {
  //             const pos = {
  //               lat: position.coords.latitude,
  //               lng: position.coords.longitude,
  //             };

  //             infoWindow.setPosition(pos);
  //             infoWindow.setContent("Location found.");
  //             infoWindow.open(map);
  //             map.setCenter(pos);
  //           },
  //           () => {
  //             handleLocationError(true, infoWindow, map.getCenter()!);
  //           }
  //         );
  //       } else {
  //         // Browser doesn't support Geolocation
  //         handleLocationError(false, infoWindow, map.getCenter()!);
  //       }
  //     });
  //   }

  //   function handleLocationError(
  //     browserHasGeolocation: boolean,
  //     infoWindow: google.maps.InfoWindow,
  //     pos: google.maps.LatLng
  //   ) {
  //     infoWindow.setPosition(pos);
  //     infoWindow.setContent(
  //       browserHasGeolocation
  //         ? "Error: The Geolocation service failed."
  //         : "Error: Your browser doesn't support geolocation."
  //     );
  //     infoWindow.open(map);
  //   }

  //   // Get map API from Google
  //   const loader = new Loader({
  //     apiKey: "AIzaSyBnlLIYM8tdSWIj2HSbXPh4op11MuepEpI",
  //     version: "weekly"
  //   });

  //   loader.load().then(() => {
  //     new google.maps.Map(document.getElementById("map") as HTMLElement, {
  //       center: { lat: -34.397, lng: 150.644 },
  //       zoom: 8
  //     })
      
  //     initMap()

  //   })

  // }
  }
}
