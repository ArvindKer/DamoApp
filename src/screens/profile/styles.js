//TODO:- imports
import { StyleSheet } from "react-native";

//TODO:- styleSheet
export default StyleSheet.create({

    container_one: {
        height: "45%",
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container_two: {
        height: "50%",
        width: '92%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    profile_img_container: {
        height: 124,
        width: 124,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 62,
        borderColor: '#fff',
        borderWidth: 2
    },
    profile_img: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    profile_name: {
        color: "#fff",
        fontSize: 26,
        fontWeight: '500',
        marginVertical: 12
    },
    profile_user_id: {
        color: "#fff",
        fontSize: 16,
        fontWeight: '500'
    },
    separator_one: {
        height: 1,
        width: '90%',
        backgroundColor: '#fff',
        marginVertical: 30
    },
    profile_data_container: {
        flexDirection: 'row',
        width: '86%',
        justifyContent: 'space-between'
    },
    profile_sub_view: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    separator_two: {
        height: 0.8,
        width: '90%',
        backgroundColor: '#2d2d2d',
        marginVertical: 15
    }

});