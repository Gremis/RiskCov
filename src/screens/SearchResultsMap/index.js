import React, {useState, useEffect, useRef} from "react";
import { View, FlatList, useWindowDimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import CustomMarker from "../../components/CustomMarker";


const SearchResultsMaps = (props) =>{
    const [selectedPlaceId, setSelectedPlaceId] = useState (null);
    const [infos, setInfos] = useState([]);
    const flatlist = useRef();
    const map= useRef();
    const {width, height} = useWindowDimensions();

    const {location, viewport} = props.geometry;

    const ASPECT_RATIO = width / height;

    const lat = parseFloat(location.lat);
    const lng = parseFloat(location.lng);
    const northeastLat = parseFloat(viewport.northeast.lat);
    const southwestLat = parseFloat(viewport.southwest.lat);
    const latDelta = northeastLat - southwestLat;
    const lngDelta = latDelta * ASPECT_RATIO;


    useEffect(() => {
        if (!selectedPlaceId || !flatlist){
            return;
        }
        const index = infos.findIndex(place => place.id === selectedPlaceId)
        flatlist.current.scrollToIndex({index})

        const region = {
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: lngDelta,
        }
        map.current.animateToRegion(region);
    }, [selectedPlaceId])

    return (
        <View style={{width: "100%", height: "100%"}}>
        <MapView
        ref={map}
        style={{width: "100%", height: "100%"}}
        provider={ PROVIDER_GOOGLE }
        initialRegion={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: lngDelta,
        }}
        >
            {infos.map(place => (
            <CustomMarker
            coordinate={{ latitude: place.latitude, longitude: place.longitude }}
            percentage={place.risk}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
            />)
            )}
        </MapView>
        </View>
    );
}

export default SearchResultsMaps;