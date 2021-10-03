import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles.js"

const Post = (props) => {

    const {info} = props;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: info.images != null ? info.images[0].url : "../../../assets/images/covid.jpg" }} />
            <Text style={styles.description} numberOfLines={2}>{info.title}</Text>
            <Text style={styles.allRisks}>
                <Text style={styles.risk}>{info.provider.name}</Text>
            </Text>
        </View>
    )
}

export default Post;