import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import {
  APIProvider,
  Map as GoogleMap,
  useMap,
} from "@vis.gl/react-google-maps";
import serviceArea from "../../../scripts/service-area.json";

// Pre-merged service-area polygon (see scripts/build-service-area.mjs).
// One shape, so only the perimeter is stroked — no internal borders.
// green.600 fill, green.700 border.
const AREA_STYLE: google.maps.Data.StyleOptions = {
  strokeColor: "#116932",
  strokeOpacity: 1.0,
  strokeWeight: 2.0,
  fillColor: "#16a34a",
  fillOpacity: 0.55,
  clickable: false,
};

const ServiceAreaLayer = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const features = map.data.addGeoJson(serviceArea as GeoJSON.FeatureCollection);
    map.data.setStyle(AREA_STYLE);

    return () => {
      features.forEach((feature) => map.data.remove(feature));
    };
  }, [map]);

  return null;
};

const ServiceAreaMaps = () => {
  const defaultCenter = { lat: -37.73, lng: 144.99 };

  return (
    <Box height={"100%"} width={"100%"}>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ""}>
        <GoogleMap
          mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID}
          defaultZoom={11}
          defaultCenter={defaultCenter}
          gestureHandling={"cooperative"}
          disableDefaultUI={false}
        >
          <ServiceAreaLayer />
        </GoogleMap>
      </APIProvider>
    </Box>
  );
};
export default ServiceAreaMaps;
