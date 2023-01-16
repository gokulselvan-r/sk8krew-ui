import {
    View,
    Image,
    Pressable,
    Dimensions
} from 'react-native';
import React, {
    useEffect, useState
} from 'react';
import FeedModal from './FeedModal';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProfileFeeds = (props) => {

    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
    }, [])

    const handleFeed = () => {
        setVisible(true);
    }

    return (
        <React.Fragment>
            <Pressable style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 }
        ]}
            onPress={handleFeed} >
            <View >
                <Image style={{ width: windowWidth / 3.2, height: windowWidth / 3.2, margin: 2, borderRadius: 10 }} source={require('./../assets/images/4.png')}>
                </Image>
            </View>
        </Pressable>
        {
            visible ? <FeedModal visible={visible} setVisible={setVisible} data={{}} /> : <></>
        }
        </React.Fragment>
    )
}

export default ProfileFeeds;