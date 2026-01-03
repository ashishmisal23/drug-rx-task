import { FC, useEffect, useRef, useState } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  useJsApiLoader,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const OFFICE_LOCATION = { lat: 18.5204, lng: 73.8567 }; // Pune
const CLIENT_LOCATION = { lat: 18.5314, lng: 73.8446 };

const MapSection: FC = () => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  useEffect(() => {
    if (!isLoaded) return;

    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: OFFICE_LOCATION,
        destination: CLIENT_LOCATION,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
        }
      }
    );
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center">
        Loading map...
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl overflow-hidden">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={OFFICE_LOCATION}
        zoom={13}
        onLoad={(map) => (mapRef.current = map)}
        options={{
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        {/* Default Google Markers */}
        <Marker position={OFFICE_LOCATION} />
        <Marker position={CLIENT_LOCATION} />

        {/* Directions API usage */}
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </div>
  );
};

export default MapSection;
