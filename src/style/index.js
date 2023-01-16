import { StyleSheet } from 'react-native';
import COLORS from '../constants/COLORS';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary
    },
    containerWOFlex: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary
    },
    customButton: {
        backgroundColor: COLORS.primary,
        padding: 20,
        borderRadius: 10,
        margin: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    customButtonText: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 18,
        color: '#fff',
    },
    customButtonFont: {
        marginLeft: 10
    },
    customInputView: {
        width:"80%",
        flexDirection: 'row',
        borderBottomColor: COLORS.primary,
        borderBottomWidth: 1,
        paddingBottom: 8,
        margin: 10,
        marginHorizontal:25
    },
    customInputView1: {
        flexDirection: 'row',
        paddingVertical: 2,
        margin: 10,
        marginHorizontal:20
    },
    customInput: {
        flex: 1,
        paddingVertical: 0,
        color:'#fff'
    },
    customInputIcon: {
        marginRight: 5
    },
    customInputText: {
        color: '#AD40AF',
        fontWeight: '700'
    },
    logoView: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    logoImage: {
        width:150,
        height:150,
        borderRadius: 20
    },
    loginFormView: {
        flex: 1
    },
    feedsCardView: {
        borderWidth: 1,
        borderColor: COLORS.secondary,
        marginHorizontal: 1,
        marginVertical: 7,
        borderRadius: 10
    },
    feedsCardHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    feedsCardUserInfo: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center'
    },
    feedsCardFollow: {
        marginRight: 20,
        backgroundColor: COLORS.thirdary,
        borderRadius: 20
    },
    feedsCardFooter: {

    },
    notificationCard: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    notificationImageView: {
        flex:1
    },
    notificationDesc: {
        flex:3
    }
})

export default Styles