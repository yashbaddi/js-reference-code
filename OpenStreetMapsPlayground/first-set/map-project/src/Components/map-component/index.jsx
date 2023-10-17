import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import deliveryBoyIcon from "./resources/delivery-boy.svg";

import "leaflet/dist/leaflet.css";
import useGeolocation from "../../useGeoLocation";
import { useEffect, useRef, useState } from "react";

const mapMarker = new Icon({
  iconUrl: deliveryBoyIcon,
  iconSize: [35, 45],
  // iconAnchor: [100, 110], //[left/right,top/bottom]
  // popupAnchor: [-3, 17],
});

export default function MapComponent() {
  const location = useGeolocation();
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
  }
  return (
    <>
      <div id="map">
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
            </div>
          )}
        </MapContainer>
      </div>
    </>
  );
}
