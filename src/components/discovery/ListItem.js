import React, {Component} from 'react';
import Utils from '../../utils';
import Icon from 'react-native-vector-icons/Ionicons';
var TimeAgo = require('react-native-timeago');
var moment = require('moment'); //load moment module to set local language
require('moment/locale/zh-cn'); //for import moment local language file during the application build
moment.locale('zh-cn');//set moment local language to zh-cn
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    Dimensions
    } from 'react-native';
import {Theme, BasicStyle} from '../../styles';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state={
            like:false
        }
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    handleLike() {
        this.setState({like:!this.state.like})
    }
    handleChat() {
        this.setState({like:!this.state.like})
    }
    handleMore() {
        this.setState({like:!this.state.like})
    }

    renderLike(){
        if(this.state.like){
            return <Icon name="ios-heart" size={24}  color="#fe555a" />
        }else{
            return <Icon name="ios-heart-outline" size={24}  color="#fe555a" />
        }
    }

    render() {
        var {item,winsize} = this.props;
        var w = winsize.width;
        var h = winsize.height;


        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Image style={styles.headerImg} source={{uri:'http://localhost:8083/'+item.author.headPicture}}/>
                    <View style={styles.topContent}>
                        <Text style={styles.name}>{item.author.name}</Text>
                        <TimeAgo style={styles.time} time={item.created}/>
                        <Text style={styles.like}>{item.meta.length}喜欢</Text>
                    </View>
                </View>
                {<Image style={{width:w,height:parseInt(item.height*(w/item.width))}}
                        source={{uri:'http://localhost:8083/'+item.imgUrl}}/>}
                {/*<Image style={{width:w,height:100}}
                 source={{uri:'http://localhost:8083/'+item.imgUrl}}/>*/}
                <View style={styles.meta}>
                    <TouchableHighlight
                        style={styles.btnIcon}
                        onPress={this.handleMore.bind(this)}>
                        <Icon name="ios-more" size={24} color="#666"/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.btnIcon}
                        onPress={this.handleChat.bind(this)}>
                        <Icon name="ios-chatbubbles-outline" size={24} color="#666"/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.btnIcon}
                        onPress={this.handleLike.bind(this)}>
                        {this.renderLike()}
                    </TouchableHighlight>
                </View>
                <View style={styles.sign}>
                    {
                        item.sign.map((val, i)=> {
                            return <Text key={new Date()+i} style={styles.signText}>{val}</Text>
                        })
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: 8,
        backgroundColor: '#fff',
    },
    headerImg: {
        width: 42,
        height: 42,
        borderRadius: 21,
        margin: 0,
        backgroundColor: '#f5f5dc',

    },
    topContent: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 8,
    },
    like: {position: 'absolute', right: 0, top: 9, fontSize: 12},
    name: {fontSize: 12},
    time: {fontSize: 10, paddingTop: 4},
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        paddingBottom: 4,
        paddingTop: 10,
        backgroundColor: '#fff'
    },
    body: {
        flex: 1,
        padding: 15,
    },
    meta: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderBottomWidth: 1,
        padding: 12,
        borderBottomColor: "#fff5ee"
    },
    sign: {
        flexDirection: 'row',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 12,
        paddingRight: 12,
        flexWrap: 'wrap',
    },
    signText: {
        borderRadius: 9,
        borderWidth: 1,
        borderStyle: "solid",
        fontSize: 10,
        borderColor: "#dadada",
        paddingLeft: 7,
        paddingRight: 7,
        height: 18,
        lineHeight: 14,
        marginRight: 10,
        marginBottom: 5


    },
    btnIcon: {
        width: 25,
        height: 25,
        marginLeft: 15
    }
});

export default ListItem;
