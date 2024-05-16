import  { useEffect, useState, useCallback } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const mapContainerStyle = {
  width: "100%",
  height: "100vh",
};

const defaultCenter = {
  lat: -3.745,
  lng: -38.523,
};

const AutoshopsNearbyPage = () => {
  const [currentPosition, setCurrentPosition] = useState({ lat: 0, lng: 0 });
  const [shops, setShops] = useState<google.maps.places.PlaceResult[]>([]);
  const [selectedShop, setSelectedShop] =
    useState<google.maps.places.PlaceResult | null>(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_API_KEY,
    libraries: ["places"], 
  });

  const fetchNearbyShops = useCallback((lat: number, lng: number) => {
    if (!window.google) return;

    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );
    const request = {
      location: new google.maps.LatLng(lat, lng),
      radius: 5000,
      type: "car_repair",
    };

    service.nearbySearch(request, (results, status) => {
      if (
        status === window.google.maps.places.PlacesServiceStatus.OK &&
        results
      ) {
        console.log("Nearby auto shops:", results);
        setShops(results);
      } else {
        console.error("Error fetching nearby shops:", status);
      }
    });
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({ lat: latitude, lng: longitude });
          if (isLoaded) {
            fetchNearbyShops(latitude, longitude);
          }
        },
        (error) => {
          console.error("Error fetching geolocation:", error);
        }
      );
    }
  }, [isLoaded, fetchNearbyShops]);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading Maps</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={14}
      center={currentPosition.lat !== 0 ? currentPosition : defaultCenter}
    >
      {currentPosition.lat !== 0 && (
        <Marker position={currentPosition} title="Your Location" />
      )}
      {shops.map((shop) => (
        <Marker
          key={shop.place_id}
          position={{
            lat: shop.geometry?.location?.lat() ?? 0,
            lng: shop.geometry?.location?.lng() ?? 0,
          }}
          onClick={() => setSelectedShop(shop)}
        />
      ))}
      {selectedShop && (
        <InfoWindow
          position={{
            lat: selectedShop.geometry?.location?.lat() ?? 0,
            lng: selectedShop.geometry?.location?.lng() ?? 0,
          }}
          onCloseClick={() => setSelectedShop(null)}
        >
          <div style={{ maxWidth: "200px" }}>
            <h2 style={{ fontSize: "16px", margin: "0 0 8px" }}>
              {selectedShop.name}
            </h2>
            <p style={{ fontSize: "14px", margin: "0" }}>
              {selectedShop.vicinity}
            </p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default AutoshopsNearbyPage;
