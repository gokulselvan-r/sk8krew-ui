import {
    View,
    Image,
    Text,
    Pressable
} from 'react-native';
import COLORS from '../constants/COLORS';
import Styles from '../style';

const UserCard = (props) => {
    const handleSearchUserClick = () => {
        console.log(props)
    }
    return (
        <Pressable style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }} onPress={handleSearchUserClick}>
            <View style={Styles.notificationCard}>
                <View style={Styles.notificationImageView}>
                    <Image
                        style={{ width: 70, height: 70, borderRadius: 50, borderColor: COLORS.secondary, borderWidth: 2 }}
                        source={require('./../assets/images/3.png')}
                    />
                </View>
                <View style={Styles.notificationDesc}>
                    <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>
                        @sk8.krew
                    </Text>
                    <Text style={{ color: COLORS.white, marginTop: 2 }}>
                        Sk8 Krew
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

export default UserCard;