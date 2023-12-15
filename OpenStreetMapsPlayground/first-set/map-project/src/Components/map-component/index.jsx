import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import deliveryBoyIcon from "./resources/delivery-boy.svg";
import "leaflet/dist/leaflet.css";
import useGeolocation from "../../useGeoLocation";
import { useEffect, useRef, useState } from "react";
// import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import L, { Icon } from "leaflet";

const mapMarker = new Icon({
  iconUrl: deliveryBoyIcon,
  iconSize: [35, 45],
  // iconAnchor: [100, 110], //[left/right,top/bottom]
  // popupAnchor: [-3, 17],
});

export default function MapComponent() {
  const location = useGeolocation();

  // useEffect(() => {
  //   if (location.isLoaded && !location.error) {
  //     let origin = location.coordinates.join();
  //     console.log("origin", origin);
  //     let destination = "12.9297629,77.5887346";
  //     fetch(
  //       `https://router.project-osrm.org/route/v1/driving/${origin};${destination}`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("data", data);
  //         setRoute(data);
  //       });
  //   }
  // }, [location]);
  // const [map, setMap] = useState({ current: null });
  // const map = useMap();
  // const mapRef = useRef();
  // useEffect(() => {
  //   if (location.isLoaded && !location.error && mapRef.current) {
  //     console.log("mapRef", map);
  //     map.current.leafletElement.flyTo(location.coordinates, 9, {
  //       animate: true,
  //     });
  //   }
  // }, [map.current]);

  function MapController() {
    const map = useMap();
    console.log("map");

    useEffect(() => {
      console.log("mapRef", map);
      map.flyTo(location.coordinates, 18, {
        animate: true,
      });
    }, []);

    useEffect(() => {
      const route = L.Routing.control({
        waypoints: [
          L.latLng(location.coordinates[0], location.coordinates[1]),
          L.latLng(12.9346245, 77.6138175),
          L.latLng(12.9297681, 77.5861597),
        ],
        createMarker: function () {
          return null;
        },

        routeWhileDragging: false,
        show: false, // This prevents the instructions from being shown
        lineOptions: {
          styles: [{ color: "black", opacity: 0.6, weight: 4 }],
        },
      }).addTo(map);

      return route.remove;
    }, [location]);

    // L.routing.control.
    // if (location.isLoaded) {
    //   route.setWaypoints([
    //     L.latLng(location.coordinates[0], location.coordinates[1]),
    //     L.latLng(12.9346245, 77.6138175),
    //     L.latLng(12.9297681, 77.5861597),
    //   ]);
    // }
  }
  return (
    <>
      <div>
        <MapContainer
          center={[12.9716, 77.5946]}
          zoom={13}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          ></TileLayer>
          {!location.error && location.isLoaded && (
            <div>
              <MapController />
              <Marker position={location.coordinates} icon={mapMarker}>
                <Popup>
                  <b>Driver</b>
                </Popup>
              </Marker>
              <Marker position={[12.9297681, 77.5861597]} icon={mapMarker}>
                <Popup>
                  <b>Driver</b>
                </Popup>
              </Marker>
              <Marker position={[12.9346245, 77.6138175]} icon={mapMarker}>
                <Popup>
                  <b>Driver</b>
                </Popup>
              </Marker>
            </div>
          )}
        </MapContainer>
      </div>
    </>
  );
}
