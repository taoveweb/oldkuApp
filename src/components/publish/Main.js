import React, {Component} from 'react';
import Utils from '../../utils';

import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableHighlight,
    TouchableOpacity,
    Image,
    Dimensions,
    ScrollView,
    Platform,
} from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';
class Main extends Component {

    constructor(props) {
        super(props);
    }


    getSelectedImages=(data)=>{
        //设置发布状态
        const {setPublishBtnState}=this.props;
        if(data.length>0){
            setPublishBtnState(true)
        }else{
            setPublishBtnState(false)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <CameraRollPicker
                    callback={this.getSelectedImages} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
        padding: 20
    },

});

export default Main;
