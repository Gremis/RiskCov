import React from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";
import styles from "./styles.js"

const Post = (props) => {

    const info = props.info;
    const width = useWindowDimensions().width;
    
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image style={styles.image} source={{ uri: "https://www.atlas-mag.net/sites/default/files/images/AtlasMagazine_2017-03_No139/en/focus2.png" }} />
                <View style={{flex: 1, marginHorizontal: 10}}>
                    <Text style={styles.risks}>{info.risks} risks</Text>
                    <Text style={styles.description} numberOfLines={2}>{info.description}</Text>
                </View>
            </View>
        </View>
    )
}

export default Post;