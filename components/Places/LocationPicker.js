import { StyleSheet, View } from 'react-native';

import OutlindedButton from '../UI/OutlinedButton';
import { Colors } from '../../constants/colors';

function getLocationHandler() {}

function pickOnMapHandler() {}

function LocationPicker() {
  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlindedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlindedButton>
        <OutlindedButton icon="map" onPress={pickOnMapHandler}>
          Pick on map
        </OutlindedButton>
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
