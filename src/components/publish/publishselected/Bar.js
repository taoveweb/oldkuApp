import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Theme} from '../../../styles';

let {height, width} = Dimensions.get('window');

class Bar extends Component {
    componentDidMount() {
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    handleSubmit = ()=> {
        this.props.onSubmit();
    }
    handleCancel = ()=> {
        this.props.onCancel();
    }

    render() {
        return (
            <View style={[Theme.header,styles.header]}>
                <TouchableHighlight
                    activeOpacity={Theme.active.opacity}
                    underlayColor='transparent'
                    onPress={this.handleCancel}
                    style={styles.btn}>
                    <Icon style={styles.icon} name="ios-arrow-back" size={24} color="#000"/>
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={Theme.active.opacity}
                    underlayColor='transparent'
                    style={styles.nextStepBox}>
                    <Text style={styles.nextStepText}>发布</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    nextStepBox: {
        width: 60,
        height: 23,
        backgroundColor: "#ffa500",
        borderRadius: 12,
        overflow: "hidden",
    },
    nextStepText: {
        textAlign: 'center',
        color: '#fff',
        height: 23,
        flex: 1,
        lineHeight: 21,
    },
    container: {
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        overflow: 'hidden',
        width: 38,
        height: 38,
    },
    btnIcon: {
        width: 42,
        height: 42,
    },
});

export default Bar;
