//TODO:- imports
import { StyleSheet } from "react-native";

//TODO:- styleSheet
export default StyleSheet.create({
   
    flatlist: {
        width: "100%",
        flex: 1,
        marginTop: 15,
    },
    flatlist_item: {
        width: "80%",
        height: 50,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 8,
        borderRadius: 10,
    },
    flatlist_txt: {
        fontSize: 16,
        marginLeft: 14,
        color: "#fff"
    }
});