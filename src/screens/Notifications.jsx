import {
    ScrollView,
    View,
} from 'react-native';
import {
    useEffect
} from 'react';
import Styles from '../style';
import NotificationBox from '../components/NotificationBox';

const Notifications = (props) => {
    useEffect(() => {
    }, [])
   
    return (
        <ScrollView contentContainerStyle={Styles.containerWOFlex}>
            {
                new Array(20).fill(1).map((notification,i) => {
                    return <NotificationBox key={i}/>
                })
            }
        </ScrollView>
    )
}

export default Notifications;