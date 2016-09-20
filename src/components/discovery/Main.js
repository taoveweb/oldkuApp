import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    ListView,
    TouchableHighlight,
    TouchableWithoutFeedback,
} from 'react-native';


class Main extends Component {


    constructor(props) {
        super(props);

    }

    //主题
    renderZhuTi = ()=> {
        var zhuti = [
            {id: 'a', sign: "a"},
            {id: 'b', sign: "b"},
            {id: 'c', sign: "c"},
            {id: 'd', sign: "d"},
        ]
        return zhuti.map((item, i)=> {
            return <View key={item.id}>
                <Image>
                    <Text>{item.sign}</Text>
                </Image>
            </View>

        })
    }
    //编辑推荐
    renderImg = ()=> {
        var zhuti = [
            {id: 'a', sign: "a"},
            {id: 'b', sign: "b"},
            {id: 'c', sign: "c"},
            {id: 'd', sign: "d"},
        ]
        return zhuti.map((item, i)=> {
            return <View key={item.id}>
                <Image>
                    <Text>{item.sign}</Text>
                </Image>
            </View>

        })
    }
    //推荐用户
    renderTuiJianUser = ()=> {
        var user = [
            {id: 'a', sign: "a"},
            {id: 'b', sign: "b"},
            {id: 'c', sign: "c"},
        ]
        return user.map((item, i)=> {
            return <View key={i}>
                        <Icon name="ios-close" size={26}/>
                        <Image style={styles.headerImg} source={{uri: './img/bookmark.png'}}/>
                        <Text>用户昵称</Text>
                        <Text>你可能感兴趣的人</Text>
                        <TouchableHighlight onPress={this._guanzhu}>
                            <Text>关注</Text>
                        </TouchableHighlight>
                    </View>
        })
    }

    _showAllUser = ()=> {
        console.log('show all user')
    }
    _guanzhu = ()=> {
        console.log('show all user')
    }

    render() {

        return (
            <View style={styles.container}>
                <View>
                    <Text>推荐用户</Text>
                    <TouchableHighlight onPress={this._showAllUser}>
                        <Text>全部</Text>
                    </TouchableHighlight>
                </View>
                <View>
                    {this.renderTuiJianUser()}
                </View>
                <Text>主题</Text>
                <View>
                    {this.renderZhuTi()}
                </View>
                <Text>编辑推荐</Text>
                <View>
                    {this.renderImg()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e7e7e7"
    },
    headerImg: {
        width: 42,
        height: 42,
        borderRadius: 21,
        margin: 0,
        backgroundColor: '#f5f5dc',

    },
});

export default Main;
