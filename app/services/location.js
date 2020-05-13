import {PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export const getLocation = async () => {
  let location;
  const permissionGranted = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );
  if (permissionGranted) {
    await new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        (success) => {
          location = success;
          resolve();
        },
        (error) => reject(error),
      );
    });
    return location;
  } else {
    await getPermission();
  }
};

export const getPermission = async () => {
  try {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  } catch (error) {
    console.error(error);
  }
};
