import {
    View,
    Image,
    Text
} from 'react-native';
import COLORS from '../constants/COLORS';
import Styles from '../style';

const NotificationBox = ({

}) => {
    return (
        <View style={Styles.notificationCard}>
            <View style={Styles.notificationImageView}>
                <Image
                    style={{ width: 70, height: 70, borderRadius: 50, borderColor: COLORS.secondary, borderWidth: 2 }}
                    source={require('./../assets/images/3.png')}
                />
            </View>
            <View style={Styles.notificationDesc}>
                <Text style={{color: COLORS.white}}>
                Premium designed icons for use in web, iOS, Android, and desktop apps
                </Text>
            </View>
        </View>
    )
}

export default NotificationBox;