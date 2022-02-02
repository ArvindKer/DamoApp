//TODO:- imports
import { StyleSheet } from "react-native";

//TODO:- styleSheet
export default StyleSheet.create({
    flatlist_container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#BDD63B",
        alignItems: 'center',
        justifyContent: 'center',
    },
    flatlist: {
        width: "100%",
        flex: 1,
        marginTop: 15,
    },
    flatlist_btn: {
        height: 45,
        width: "100%",
        marginTop: 1,
        flexDirection: 'row',
        alignItems: 'center'
        
    },
    flatlist_img: {
        height: 18,
        width: 18,
        resizeMode: 'contain',
        marginLeft: 25,
    },
    flatlist_txt: {
        fontSize: 16,
        marginLeft: 14,
    }
});