import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        height: "100%",
        backgroundColor: "white",
    },
    image: {
        width: "100%",
        height: 800,
        resizeMode: "cover",
        justifyContent: "center",
    },
    textInput: {
        fontSize: 20,
        marginBottom: 20,
        color: "white",
        backgroundColor: "#d4d4d4",
        borderRadius: 40,
        paddingLeft: 20
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: "lightgrey",
    },
    iconContainer: {
        backgroundColor: "#d4d4d4",
        padding: 7,
        borderRadius: 10,
        marginRight: 15,
    },
    locationText: {

    },
});

export default styles;