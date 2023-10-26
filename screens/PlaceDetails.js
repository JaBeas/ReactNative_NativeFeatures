import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import OutlindedButton from '../components/UI/OutlinedButton';
import { Colors } from '../constants/colors';
import { useEffect } from 'react';
import { fetchPlaceDetails } from '../util/database';

function PlaceDetails({ route }) {
  function showOnMapHandler() {}

  const selectedPlaceId = route.params.placeId;

  useEffect(() => {
    async function loadPlaceData() {
      fetchPlaceDetails(selectedPlaceId);
    }

    loadPlaceData();
  }, [selectedPlaceId]);

  return (
    <ScrollView>
      <Image style={styles.image} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>ADDRESS</Text>
        </View>
        <OutlindedButton icon="map" onPress={showOnMapHandler}>
          View on map
        </OutlindedButton>
      </View>
    </ScrollView>
  );
}

export default PlaceDetails;

const styles = StyleSheet.create({
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
  },
  locationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
