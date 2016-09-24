import React, {Component} from 'react';
import Utils from '../../utils';
import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';

import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';


class Main extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollableTabView
                    style={styles.container}

                    renderTabBar={
                        ()=>
                            <DefaultTabBar
                                style={{position: "absolute", width: 100}}
                                underlineStyle={{height: 2, backgroundColor: "#6495ed"}}
                                textStyle={{fontSize: 14, paddingTop: 25}}
                                activeTextColor="#000"
                                inactiveTextColor="#666"
                                backgroundColor='rgba(255, 255, 255, 0.7)'
                            />
                    }
                    tabBarPosition='overlayTop'
                >
                    {<ScrollView
                        style={{marginTop: 50}}
                        tabLabel='动态'
                        scrollEventThrottle={16}
                    >

                        <View style={styles.list}>
                            <TouchableHighlight
                                underlayColor='transparent'
                                style={styles.setting}
                                onPress={this.handleAdd}>
                                <View style={styles.item}>
                                    <Image style={styles.icon}>
                                        <Icon name="md-notifications-outline" color="#ff6600" size={30}/>
                                    </Image>
                                    <Text>通知</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor='transparent'
                                style={styles.setting}
                                onPress={this.handleAdd}>
                                <View style={[styles.item, styles.last]}>
                                    <Image style={styles.icon}>
                                        <Icon name="ios-share-alt-outline" size={30}/>
                                    </Image>
                                    <Text>关注者</Text>
                                </View>
                            </TouchableHighlight>
                        </View>

                    </ScrollView>}

                    <ScrollView
                        style={{marginTop: 50}}
                        tabLabel='评论'
                    >

                    </ScrollView>
                </ScrollableTabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        marginRight: 15,
        width: 40,
        height: 40,
        backgroundColor: "#dedede",
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: 'row',
        borderRadius: 20

    },
    item: {
        flexDirection: "row",
        alignItems: 'center',
        marginHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#dadada",
        paddingVertical: 14,

    },
    last: {
        borderBottomWidth: 0
    },
    list: {
        borderBottomWidth: 2,
        borderBottomColor: "#dadada"
    }
});

export default Main;