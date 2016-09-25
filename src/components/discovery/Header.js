import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableHighlight,
    StatusBar,
    } from 'react-native';
import {Theme} from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';
let {height, width} = Dimensions.get('window');

class Header extends Component {
    handleAdd = ()=> {
        this.props.navigator.push({name: 'EditView'});
    }

    render() {
        return (
            <View style={[Theme.header,styles.container]}>

                <TouchableHighlight
                    activeOpacity={Theme.active.opacity}
                    underlayColor='transparent'
                    style={styles.search}
                    onPress={this.handleAdd}>
                    <Icon style={styles.icon}  name="ios-search-outline" size={24}  color="#666" />
                </TouchableHighlight>
                <Text style={[styles.title]}>
                    发现
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    title: {
        fontSize: 12,
        color:"#000",
        textAlign:'center',
        marginTop:8,

    },
    search: {
        position: 'absolute',
        left: 8,
        bottom: 8
    }
});

export default Header;
