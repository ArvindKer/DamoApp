//Imports
import { StyleSheet } from "react-native";
import { CONST } from '../../global/constants'

export default StyleSheet.create({
    main_container: {
        backgroundColor: "#BDD63B", 
        height: '100%'
    },
    container : {
        flex: 1, 
        width: '100%', 
        backgroundColor: "#BDD63B", 
        alignItems: 'center', 
        // justifyContent: 'center', 
    },
    txt_style: {
        color: 'grey',
        fontSize: 22,
        fontWeight: '600',
    },
    animated_img_view: {
        width: 180, 
        height: 180,
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    animated_btn_view: {
        width: '100%', 
        height: CONST.DEVICE_HEIGHT ,
        borderRadius: CONST.DEVICE_WIDTH / 2,
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: "#fff", 
    },
    start_btn: {
        width: 200,
        height: 45,
        borderRadius: 20,
        backgroundColor: "#BDD63B",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: CONST.DEVICE_HEIGHT / 2
    },
    start_txt:{
        fontSize: 18,
        color: '#fff',
        fontWeight: '600'
    }


});