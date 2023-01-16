import {
    View,
    Image,
    ScrollView,
    Text,
    Dimensions,
    SafeAreaView,
    RefreshControl,
    Pressable,
    ImageBackground
} from 'react-native';
import {
    useEffect
} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'


import Styles from '../style';
import COLORS from '../constants/COLORS';
import ProfileFeeds from '../components/ProfileFeeds';

const Profile = (props) => {
    useEffect(() => {
    }, [])

    const settingsHandle = () => {
        console.log("Settings")
    }

    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.container}>
                <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                        <View style={{ marginVertical: 20, alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, color: COLORS.white }}>123</Text>
                            <Text style={{ fontSize: 15, color: COLORS.white }}>Followers</Text>
                        </View>
                        <View style={{ marginVertical: 20, alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, color: COLORS.white }}>2</Text>
                            <Text style={{ fontSize: 15, color: COLORS.white }}>Post</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Pressable onPress={settingsHandle}>
                            {({ pressed }) => (
                                <ImageBackground style={{ width: 100, height: 100, alignItems: 'center', justifyContent: 'center' }} imageStyle={{ borderRadius: 50, borderColor: COLORS.secondary, borderWidth: 3, opacity: 0.5 }} source={require('./../assets/images/4.png')}>
                                    <Text>
                                        <Ionicons name={pressed ? "settings" : "settings-outline"} color={COLORS.white} size={25} />
                                    </Text>
                                </ImageBackground>
                            )}
                        </Pressable>
                        <Text style={{ fontSize: 15, marginTop: 10, color: COLORS.white }}>Sk8 Krew</Text>
                    </View>
                    <View style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                        <View style={{ marginVertical: 20, alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, color: COLORS.white }}>123</Text>
                            <Text style={{ fontSize: 15, color: COLORS.white }}>Followings</Text>
                        </View>
                        <View style={{ marginVertical: 20, alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, color: COLORS.white }}>123</Text>
                            <Text style={{ fontSize: 15, color: COLORS.white }}>Stars</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, borderBottomColor: COLORS.secondary, marginTop: -15 }}>
                    <Text style={{ fontSize: 20, color: COLORS.white }}>Living My Life</Text>
                </View>
                <View style={{ flex: 9, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start' }}>
                    <ScrollView>
                        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
                            {
                                new Array(20).fill(1).map((i, index) => {
                                    return (
                                        <ProfileFeeds key={index} />
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Profile;