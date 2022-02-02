//TODO:- imports
import { StyleSheet } from "react-native";

//TODO:- styleSheet
export default StyleSheet.create({

    safearea_container: {
        backgroundColor: "#BDD63B",
        height: '100%',
        alignItems: 'center',
    },
    top_navigation_bar_container: {
        backgroundColor: "#BDD63B",
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    menu_btn: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menu_btn_img: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    top_navigation_bar_txt: {
        color: "#fff",
        fontSize: 22,
        fontWeight: '600',
        flex: 1,
        textAlign: 'center'
    },
    top_navigation_bar_blank_view: {
        height: 50,
        width: 50,
        marginRight: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    common_container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#BDD63B",
        alignItems: 'center',
        justifyContent: 'center',
    },
    common_txt: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '600',
    },
    shadow_sty: {
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 1
    }

});