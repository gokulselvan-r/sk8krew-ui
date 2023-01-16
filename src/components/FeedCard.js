import {
    View,
    Text,
    Image,
    Pressable
} from 'react-native';
import {
    useEffect
} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from '../style';
import COLORS from '../constants/COLORS';

const FeedsCard = (props) => {
    useEffect(() => {
    }, [])

    const handleFollow = () => {
        console.log("handleFollow")
    }

    const handleProfile = () => {
        console.log("handleProfile")
    }

    const handleLike = () => {
        console.log("handleLike")
    }

    const handleComment = () => {
        console.log("handleComment")
    }

    const handleShare = () => {
        console.log("handleShare")
    }

    const handleSave = () => {
        console.log("handleSave")
    }




    return (
        <View style={Styles.feedsCardView}>
            <View style={Styles.feedsCardHeader}>
                <Pressable onPress={handleProfile}>
                <View style={Styles.feedsCardUserInfo} >
                    <Image style={{ width: 25, height: 25, borderRadius: 30, marginHorizontal: 10 }} source={require('./../assets/images/3.png')}>
                    </Image>
                    <Text style={{color: COLORS.white}}>GandS</Text>
                </View>
                </Pressable>
                <View style={Styles.feedsCardFollow}>
                    <Pressable onPress={handleFollow}>
                        <Text style={{ paddingVertical: 5, paddingHorizontal: 20, color: '#fff' }}>Follow</Text>
                    </Pressable>
                </View>
                {/* <View style={Styles.feedsCardUserInfo}>
                    <Text>More Options</Text>
                </View> */}
            </View>
            <View style={Styles.feedsCardPost}>
                <Image style={{ width: '100%', height: 300, minHeight: 200 }} source={require('./../assets/images/3.png')}>
                </Image>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginVertical: 8
                }}>
                    <Pressable onPress={handleLike}>
                    <View>
                        <Ionicons
                            name="heart-outline"
                            color={COLORS.white}
                            size={25}
                        />
                        <Text style={{textAlign:'center'}}>999</Text>
                    </View>
                    </Pressable>
                    <Pressable onPress={handleComment}>
                    <View>
                        <Ionicons
                            name="chatbubble-outline"
                            color={COLORS.white}
                            size={25}
                        />
                        <Text style={{textAlign:'center'}}>999</Text>
                    </View>
                    </Pressable>
                    <Pressable onPress={handleShare}>
                    <View>

                        <Ionicons
                            name="share-outline"
                            color={COLORS.white}
                            size={25}
                        />
                        <Text style={{textAlign:'center'}}>999</Text>
                    </View>
                    </Pressable>
                    <Pressable onPress={handleSave}>
                    <View>
                        <Ionicons
                            name="bookmark-outline"
                            color={COLORS.white}
                            size={25}
                        />
                        <Text style={{textAlign:'center'}}>999</Text>
                    </View>
                    </Pressable>
                </View>
            </View>
            <View style={Styles.feedsCardFooter}>
                <Text style={{ marginHorizontal: 10, color:COLORS.white }}>
                When I skate, it's like my brain is turned off; not thoughts, just feelings.
                </Text>
                <Text style={{ margin: 10, color:COLORS.white }}>
                    #skaterslife
                </Text>
            </View>
        </View>
    )
}

export default FeedsCard;