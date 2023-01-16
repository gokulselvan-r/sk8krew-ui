import {
    ScrollView,
    TextInput,
    View,
} from 'react-native';
import {
    useEffect,
    useState
} from 'react';
import RNShake from 'react-native-shake';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from '../style';
import UserCard from '../components/UserCard';
import CustomTextInput from '../components/CustomTextInput';
import COLORS from '../constants/COLORS';



const Search = (props) => {
    const [search, setSearch] = useState("");
    useEffect(() => {
    }, [])

    const handleSearch=async (search) => {
        console.log(search)
    }
    return (
        <View>
            <View style={Styles.customInputView1}>
                <Ionicons
                    name="search"
                    size={25}
                    color={COLORS.thirdary}
                    style={Styles.customInputIcon}
                />
                <TextInput
                    placeholderTextColor={COLORS.thirdary}
                    placeholder="Search"
                    keyboardType="default"
                    onChangeText={handleSearch}
                    style={Styles.customInput}
                />
            </View>
            <ScrollView contentContainerStyle={Styles.containerWOFlex}>
                {
                    new Array(20).fill(1).map((notification, i) => {
                        return <UserCard props={props} key={i} />
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Search;