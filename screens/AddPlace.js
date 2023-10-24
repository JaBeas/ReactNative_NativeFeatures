import PlaceForm from '../components/Places/PlaceForm';

function AddPlace({ navigation }) {
  function createPlaceHadler(place) {
    navigation.navigate('AllPlaces', {
      place: place,
    });
  }

  return <PlaceForm onCreatePlace={createPlaceHadler} />;
}

export default AddPlace;
