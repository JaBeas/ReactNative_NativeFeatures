import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

function PlaceItem({ places, onSelect }) {
  <Pressable onPress={onSelect}>
    <Image source={{ uri: place.imageUri }} />
    <View>
      <Text>{place.title}</Text>
      <Text>{place.address}</Text>
    </View>
  </Pressable>;
}

export default PlaceItem;

const styles = StyleSheet.create({});
