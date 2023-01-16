import {
    FlatList,
    View,
    Text
} from 'react-native';
import {
    useEffect,
    useState,
    useRef
} from 'react';
import Styles from '../style';
import FeedsCard from '../components/FeedCard';
import ActionSheet from "react-native-actions-sheet";
import CreatePost from './CreatePost';


const Feeds = (props) => {
    const [data, setData] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    const [isFetching, setIsFetching] = useState(false);
    useEffect(() => {
    }, [])

    const onRefresh = () => {
        setIsFetching(true);
        setData(data => [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        setTimeout(() => {
            setIsFetching(false);
        }, 2000)
    }

    const renderItem = (item) => {
        return <FeedsCard />
    }

    const handleLoadMore = () => {
        setIsFetching(true);
        setData(data => [...data, ...[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]])
        setTimeout(() => {
            setIsFetching(false);
        }, 2000)
    }
    return (
        <View style={Styles.containerWOFlex}>
            <FlatList
                contentContainerStyle={{ alignSelf: 'stretch' }}
                keyExtractor={(item, i) => i}
                renderItem={renderItem}
                data={data}
                onRefresh={onRefresh}
                refreshing={isFetching}
                onEndReached={handleLoadMore}
                onEndThreshold={0}
            />
            <ActionSheet ref={props.sheetRef}>
               <CreatePost />
            </ActionSheet>
        </View>
    )
}

export default Feeds;