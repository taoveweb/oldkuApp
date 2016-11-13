import React, {Component} from 'react';
import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view';
import * as APIs from '../../constants/ServerAPIs';

import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';

import {Theme} from '../../styles';
const {height, width} = Dimensions.get('window');

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: height
        }
    }

    onScrollHadle = (event: Object)=> {
        console.log(event)
    }
    //图博列表
    renderＴuboList = ()=> {
        const tblist = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        return tblist.map((item, i)=> {
            return <TouchableHighlight key={i} style={styles.tbItem} onPress={this._showAllUser}>
                <Image style={styles.tbItemImg}>
                    <Text style={styles.tbItemText}>厦门风景</Text>
                </Image>
            </TouchableHighlight>

        })

    };
    //标题
    renderTitle = (title)=> {
        return <View style={styles.title}>
            <Text style={styles.titleText}>{title}</Text>
        </View>
    };

    render() {
        const {homeList}=this.props;
        var img='';
        console.log(homeList)
        if(homeList.data.length>0){
            img=homeList.data[0]['author']['headPicture']
        }


        console.log(APIs.host+img)

        return (

            <View style={{flex:1,backgroundColor:'#fff',height:height-249}}>

                <View style={styles.head}>
                    <Image source={{uri:APIs.host+img}} style={styles.headerPic}/>
                    <Text style={styles.name}>子一824</Text>
                    <View style={styles.info}>
                        <Text style={styles.text}>关注</Text>
                        <Text style={styles.num}>4</Text>
                        <Text style={styles.line}>|</Text>
                        <Text style={styles.num}>0</Text>
                        <Text style={styles.text}>资料</Text>
                    </View>
                    <Text style={styles.introduction}>暂无简介</Text>
                </View>

              <ScrollableTabView
                    style={styles.container}

                    renderTabBar={
                        ()=>

                            <DefaultTabBar
                                tabBoxStyle={{height: 40}}
                                containerWidth="100"
                                textStyle={{fontSize: 14, paddingTop: 14}}
                                activeTextColor="#000"
                                inactiveTextColor="#666"
                                underlineStyle={{width: 30, height: 2, bottom: 0}}
                            />
                    }
                    tabBarPosition='overlayTop'

                >
                    {<ScrollView
                        scrollEnabled={true}
                        onScroll={this.onScrollHadle}
                        style={[styles.container, {marginTop: 40,}]}
                        tabLabel='图博'
                        scrollEventThrottle={16}
                    >
                        <View style={styles.tuboList}>
                            {this.renderＴuboList()}
                        </View>

                    </ScrollView>}

                    <ScrollView
                        style={{marginTop: 40}}
                        tabLabel='喜欢'
                    >
                        <View style={styles.tuboList}>
                            {this.renderＴuboList()}
                        </View>
                    </ScrollView>
                    <ScrollView
                        style={{marginTop: 40,flex:1}}
                        tabLabel='资料'
                    >
                        <View style={styles.zlBox}>
                            <View style={styles.zlSection}>
                                <View style={[styles.zlItem, styles.borderBottom]}>
                                    <Text style={styles.label}>简介</Text>
                                    <Text>这家伙很懒什么都没有留下</Text>
                                </View>
                                <View style={styles.zlItem}>
                                    <Text style={styles.label}>居住地</Text>
                                    <Text>福建</Text>
                                </View>
                            </View>
                            <View style={styles.zlSection}>
                                {this.renderTitle("常用标签")}
                                <View style={{height:60}}>

                                </View>
                            </View>
                            <View style={[styles.zlSection,{flex:1,paddingBottom:15,marginBottom:0,borderBottomWidth:0}]}>
                                {this.renderTitle("使用过的器材")}
                                <View style={styles.zl1Item}>
                                    <Text style={styles.label}>简介</Text>
                                    <Text>这家伙很懒什么都没有留下</Text>
                                </View>
                                <View style={styles.zl1Item}>
                                    <Text style={styles.label}>居住地</Text>
                                    <Text>福建</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </ScrollableTabView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    label: {
        color: "#666",
        paddingRight: 10,
    },
    zlSection: {
        borderBottomWidth: 1,
        borderBottomColor: "#dadada",
        backgroundColor: "#fff",
        marginBottom:8,
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: "#dadada",
    },
    zlItem: {
        marginHorizontal: 10,
        paddingVertical: 15,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    zl1Item:{
        paddingHorizontal: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingTop:4,
    },
    zlBox: {
        flex: 1,
        backgroundColor:'#f5f5f5',

    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        borderLeftWidth: 2,
        borderLeftColor: "#ffa500",
        height: 12,
        marginVertical: 10,
        marginTop: 20,


    },
    titleText: {
        fontSize: 12,
        paddingLeft: 4
    },
    tbItemText: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        paddingHorizontal: 4,
        paddingVertical: 4,
        color: "#fff",
        zIndex: 2,
        fontSize: 12
    },
    tbItemImg: {
        position: 'relative',
        flex: 1,
    },
    tbItem: {
        width: (width - 20) / 2 - 2,
        height: (width - 20) / 2 - 2,
        backgroundColor: "#dadada",
        marginBottom: 4,
        marginRight: 4,
        position: 'relative',

    },
    tuboList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 10,
        marginTop: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    name: {
        fontSize: 14,
        paddingTop: 10,
    },
    info: {
        flexDirection: 'row',
        paddingTop: 4,
    },
    introduction: {
        fontSize: 10,
        color: "#666",
        paddingVertical: 5,
    },
    text: {
        color: "#666",
        fontSize: 10,
    },
    num: {
        fontSize: 10,
        paddingHorizontal: 3,
    },
    line: {
        fontSize: 8,
        paddingHorizontal: 7
    },
    headerPic: {
        width: 70,
        height: 70,
        backgroundColor: "#dadada",
        borderRadius: 35,
        marginTop: -35,
        borderWidth:0.5,
        borderColor:"#dadada"
    },
    head: {
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 5
    },
    tab: {
        borderBottomWidth: 1,
        borderBottomColor: "#dadada",
        flexDirection: 'row',
        justifyContent: 'center',

    },
    list: {
        flex: 1,
        padding: 20
    },
    tabText: {
        marginHorizontal: 20,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#ff6600",
    },
    active: {
        borderBottomWidth: 1,
        borderBottomColor: "#ff6600",
    },
});

export default Main;
