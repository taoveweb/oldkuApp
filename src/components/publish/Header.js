import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import {Theme} from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';


let {height, width} = Dimensions.get('window');

class Header extends Component {

    componentDidMount() {
        //this.props.navigator.push({name: 'PublishSelected',imgs:[]});
    }

    componentDidUpdate() {

    }


    componentWillUnmount() {
    }
    handleAdd = ()=> {
        const {publish}=this.props;
        this.props.navigator.push({name: 'PublishSelected',imgs:publish.imgs});
    };



    readerNextBtn = ()=> {
        const {canpublish}=this.props;
        var opacity=0.5;
        if(!canpublish){
           opacity=1;
        }
        return <TouchableHighlight disabled={canpublish} onPress={this.handleAdd}
        style={[styles.nextStepBox, {opacity: opacity,position:'absolute',right:10,bottom:10}]}>
        <Text style={styles.nextStepText}>下一步</Text>
        </TouchableHighlight>
    }

    render() {



        return (
            <View style={[Theme.header, styles.header]}>
              {/*  <TouchableHighlight
                    activeOpacity={Theme.active.opacity}
                    underlayColor='transparent'
                    onPress={this.handleAdd}>
                    <Text style={styles.cancel}>到消</Text>
                </TouchableHighlight>*/}
                <TouchableHighlight
                    activeOpacity={Theme.active.opacity}
                    underlayColor='transparent'

                    onPress={this.handleAdd}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.selectSource}>相机胶卷</Text>
                        <Icon name="ios-arrow-down" size={20}/>
                    </View>

                </TouchableHighlight>

                {this.readerNextBtn()}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
    },
    text: {
        color: '#fff'
    },
    cancel: {
        width: 50,
        textAlign: 'center',
    },
    selectSource: {
        fontSize: 18,
    },
    title: {
        width: width / 2,
        textAlign: 'center',
        fontSize: 60
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
});

export default Header;

