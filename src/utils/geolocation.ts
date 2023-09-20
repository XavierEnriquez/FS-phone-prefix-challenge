import { GEO_URL, TIMEOUT_SEC } from '$utils/config';
import { timeout } from '$utils/timeout';

/**
 * Gets user's browser latitude and longitude coords, passed on to reverse geolocation API
 * @returns user's alpha-2 country code
 */
export const getGeolocation = async () => {
  try {
    const getLatLong = async () => {
      return new Promise<GeolocationPosition>(function (latlong) {
        navigator.geolocation.getCurrentPosition(latlong);
      });
    };

    const latLong: { coords: { latitude: number; longitude: number } } = await getLatLong();

    if (!latLong) return;

    const { latitude: lat, longitude: lng } = latLong.coords;

    const fetchPromise = await fetch(`${GEO_URL}${lat},${lng}`);
    const response = await Promise.race([fetchPromise.json(), timeout(TIMEOUT_SEC)]);

    return response.results[0].locations[0].adminArea1;
  } catch (error) {
    return [];
  }
};
