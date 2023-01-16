import {
    View,
    Image,
    Pressable,
    Modal,
    Dimensions,
    Text
} from 'react-native';
import {
    useEffect
} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from '../style';
import COLORS from '../constants/COLORS';

const win = Dimensions.get('window');

const FeedModal = ({ visible, setVisible, data }) => {
    useEffect(() => {
    }, [])

    return (
        <Modal
            visible={visible}
            onRequestClose={() => setVisible(!visible)}
            transparent={true}
        >
            {/* <FlatList
                contentContainerStyle={{ alignSelf: 'stretch' }}
                keyExtractor={(item, i) => i}
                renderItem={renderItem}
                data={data}
                onRefresh={onRefresh}
                refreshing={isFetching}
                onEndReached={handleLoadMore}
                onEndThreshold={0}
            /> */}

            <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center', borderRadius: 3,
                    backgroundColor: "#fff", width: "80%",
                }}>
                    <Pressable style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        zIndex: 9999
                    }} onPress={() => { setVisible(!visible) }}>
                        <Text>
                            <Ionicons name="close" size={30} color={COLORS.primary} />
                        </Text>
                    </Pressable>
                    <Image style={{ width: 300, height: 362 * (win.width / 541) }} source={require('./../assets/images/1.png')}>
                    </Image>
                    {/* <View style={{
                        flexDirection: 'row',
                        marginVertical: 8
                    }}>

                        <View>
                            <Ionicons
                                name="heart-outline"
                                color={COLORS.primary}
                                size={25}
                            />
                        </View>

                        <View>
                            <Ionicons
                                name="chatbubble-outline"
                                color={COLORS.primary}
                                size={25}
                            />
                        </View>
                    </View> */}
                    <View style={Styles.feedsCardFooter}>
                        <Text style={{ marginHorizontal: 10, color: COLORS.primary }}>
                        When I skate, it's like my brain is turned off; not thoughts, just feelings.
                        </Text>
                        <Text style={{ margin: 10, color: COLORS.primary }}>
                            #skaterslife
                        </Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default FeedModal;