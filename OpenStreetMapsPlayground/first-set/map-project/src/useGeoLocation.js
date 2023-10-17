import { useEffect, useState } from "react";

function useGeolocation() {
  const [location, setLocation] = useState({
    isLoaded: false,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const { latitude, longitude } = position.coords;
          setLocation({
            isLoaded: true,
            coordinates: [latitude, longitude],
          });
        },
        function (error) {
          setLocation({
            isLoaded: true,
            error: error.message,
          });
        }
      );
    } else {
      setLocation({
        isLoaded: true,
        error: "Geolocation is not supported in this browser.",
      });
    }
  }, []);

  return location;
}

export default useGeolocation;
