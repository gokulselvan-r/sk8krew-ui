import {
    View,
} from 'react-native';
import {
    useEffect
} from 'react';
import {
    splashStyle
} from './../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Logout = (props) => {
    useEffect(() => {
        AsyncStorage.clear();
        props.navigation.navigate("Login");
    }, [])
   
    return (
        <View style={splashStyle.container}>
            
        </View>
    )
}

export default Logout;