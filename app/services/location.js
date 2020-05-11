import {PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export const getLocation = async () => {
  const permissionGranted = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );
  if (permissionGranted) {
    Geolocation.getCurrentPosition(
      success => {
        console.log({success});
        const {latitude, longitude} = success.coords;
        return {latitude, longitude}
      },
      error => console.log({error}),
    );
  } else {
    await this.getPermission();
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
