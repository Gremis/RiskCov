import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: "lightgrey" 
    },
    row:{
        flexDirection: "row",
        alignItems: "center"
    },
    button: {
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: "#676767",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonAge: {
        fontSize: 20,
        color: "#474747",
        marginTop: -4,
    },
    buttonMain: {
        marginBottom: 20,
        backgroundColor: "#f15454",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    textButtonMain: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        marginBottom: 8,
    }
});

export default styles;