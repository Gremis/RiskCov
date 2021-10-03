import React from "react";
import { View, Text } from "react-native";
import { Marker } from "react-native-maps";

const CustomMarker = (props) =>{
    const { coordinate, percentage, onPress, isSelected } = props;
    return(
        <Marker coordinate={coordinate} onPress={onPress}>
                <View style= {{
                    backgroundColor: isSelected ? "black" : "white",
                    padding: 5,
                    borderRadius: 20,
                    borderColor: "grey",
                    borderWidth: 1,
                }}>
                    <Text style={{color: isSelected ? "white" : "black", fontWeight: "bold"}}>{percentage}%</Text>
                </View>
        </Marker>
    );
};

export default CustomMarker;