import React, {Component} from 'react';
import Utils from '../../utils';

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

    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }


    render() {
        var {img,winsize} = this.props;
        var w=winsize.width;
        var h=winsize.height;


        return (
            <View style={styles.container} >
                <View style={styles.top}>
                    <Image style={styles.headerImg} source={require('./img/checked.png')}/>
                    <View style={styles.topContent}>
                        <Text style={styles.name}>春天是个什么色</Text>
                        <Text style={styles.time}>10小时</Text>
                        <Text style={styles.like}>12喜欢</Text>
                    </View>
                </View>
                {<Image style={{width:w,height:parseInt(img.height*(w/img.width))}}
                       source={{uri:'http://static.oldku.com/'+img.name}}/>}
                <View style={styles.meta}>
                    <TouchableHighlight
                        onPress={this.handleCompleted}>
                        <Image style={styles.btnIcon} source={require('./img/checked.png')}/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.handleCompleted}>
                        <Image style={styles.btnIcon} source={require('./img/checked.png')}/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.handleCompleted}>
                        <Image style={styles.btnIcon} source={require('./img/checked.png')}/>
                    </TouchableHighlight>
                </View>
                <View style={styles.sign}>
                    <Text style={styles.signText}>7xcc</Text>
                    <Text style={styles.signText}>建筑</Text>
                    <Text style={styles.signText}>结构</Text>
                    <Text style={styles.signText}>城市</Text>
                    <Text style={styles.signText}>7xcc</Text>
                    <Text style={styles.signText}>建筑</Text>
                    <Text style={styles.signText}>结构</Text>
                    <Text style={styles.signText}>城市</Text><Text style={styles.signText}>7xcc</Text>
                    <Text style={styles.signText}>建筑</Text>
                    <Text style={styles.signText}>结构</Text>
                    <Text style={styles.signText}>城市</Text><Text style={styles.signText}>7xcc</Text>
                    <Text style={styles.signText}>建筑</Text>
                    <Text style={styles.signText}>结构</Text>
                    <Text style={styles.signText}>城市</Text><Text style={styles.signText}>7xcc</Text>
                    <Text style={styles.signText}>建筑</Text>
                    <Text style={styles.signText}>结构</Text>
                    <Text style={styles.signText}>城市</Text>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop:8,
        backgroundColor:'#fff',
    },
    headerImg:{
        width:42,
        height:42,
        borderRadius:21,
        margin:0,
        backgroundColor:'#f5f5dc',

    },
    topContent:{
        fontSize:12,
        flex:1,
        flexDirection: 'column',
        paddingLeft:8,
    },
    like:{position:'absolute',right:0,top:9,fontSize:12},
    name:{fontSize:12},
    time:{fontSize:10,paddingTop:8},
    top:{
        flexDirection:'row',
        alignItems:'center',
        padding:12,
        paddingBottom:4,
        paddingTop:10,
        backgroundColor:'#fff'
    },
    body: {
        flex: 1,
        padding: 15,
    },
    meta:{
        flexDirection:'row',
        justifyContent:'flex-end',
        borderBottomWidth: 1,
        padding:12,
        borderBottomColor: "#fff5ee"
    },
    sign: {
        flexDirection:'row',
        paddingTop:8 ,
        paddingBottom:8 ,
        paddingLeft:12 ,
        paddingRight:12 ,
        flexWrap:'wrap',
    },
    signText:{
        borderRadius:9,
        borderWidth:1,
        borderStyle:"solid",
        fontSize:10,
        borderColor:"#dadada",
        paddingLeft:7,
        paddingRight:7,
        height:18,
        lineHeight:14,
        marginRight:10,
        marginBottom:5


    },
    btnIcon:{
        width:24,
        height:24,
        marginLeft:15
    }
});

export default ListItem;
