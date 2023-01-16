import React, { Fragment, Component } from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import COLORS from '../constants/COLORS';

export default class CreatePost extends Component {
    state = {
        filepath: {
            data: '',
            uri: ''
        },
        fileData: '',
        fileUri: ''
    }

    launchCamera = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchCamera(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                const { height, width, uri } = response.assets[0]
                this.setState({
                    height,
                    width,
                    uri
                });
            }
        });

    }

    launchImageLibrary = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                const { height, width, uri } = response.assets[0]
                this.setState({
                    height,
                    width,
                    uri
                });
            }
        });

    }

    
    render() {
        return (
            <Fragment>
                        <View style={styles.btnParentSection}>
                            <TouchableOpacity onPress={this.launchCamera} style={styles.btnSection}  >
                                <Text style={styles.btnText}>Open Camera</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.launchImageLibrary} style={styles.btnSection}  >
                                <Text style={styles.btnText}>Pick Image</Text>
                            </TouchableOpacity>
                        </View>
            </Fragment>
        );
    }
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: COLORS.white,
    },

    btnParentSection: {
        alignItems: 'center',
        marginVertical: 10
    },
    btnSection: {
        width: '80%',
        height: 50,
        backgroundColor: COLORS.thirdary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        marginBottom: 10
    },
    btnText: {
        textAlign: 'center',
        color: COLORS.white,
        fontSize: 14,
        fontWeight: 'bold'
    }
});
