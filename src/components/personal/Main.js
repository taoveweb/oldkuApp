import React, {Component} from 'react';
import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view';

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

class Main extends Component {

    render() {
        return (

            <View style={styles.container}>

                <View style={styles.head}>
                    <Image style={styles.headerPic}/>
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
                        style={[styles.container,{marginTop: 40,}]}
                        tabLabel='图博'
                        scrollEventThrottle={16}
                    >
                        <View style={{flex:1}}>
                        <Text>图博</Text>
                        </View>

                    </ScrollView>}

                    <ScrollView
                        style={{marginTop: 40}}
                        tabLabel='喜欢'
                    >
                        <View style={{flex:1}}>
                            <Text>喜欢</Text>
                        </View>
                    </ScrollView>
                    <ScrollView
                        style={{marginTop: 40}}
                        tabLabel='资料'
                    >
                        <View style={{flex:1}}>
                            <Text>资料</Text>
                        </View>
                    </ScrollView>
                </ScrollableTabView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
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
        paddingVertical:5,
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
        marginTop: -35
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
