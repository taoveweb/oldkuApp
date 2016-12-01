import React, {Component} from 'react';


import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    ListView,
    TouchableWithoutFeedback,
    RefreshControl
} from 'react-native';
import ListItem from './ListItem';
import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view';
var loading = 1;

class Main extends Component {


    constructor(props) {
        super(props);
    }


    renderJinXuan = () => {
        const {homeList} = this.props;
        var winsize = Dimensions.get('window');
        if (!homeList || !homeList.data || homeList.data.length == 0) {
            return null
        }
        var excellent = [];
        homeList.data.forEach((item, i)=> {
            if (item.excellent == 1) {
                excellent.push(item)
            }
        });
        if (excellent.length > 0) {
            return excellent.map((item, i)=> {
                return (
                    <ListItem key={item["_id"]} item={item} winsize={winsize}/>
                )
            })

        } else {
            return   <Text
                    style={{fontSize:20,flex:1,color:"#ff6600",paddingTop:200,alignItems:'center',justifyContent:'center',textAlign:'center'}}>
                    暂无内容</Text>
        }

    }

    renderGuanzhu = () => {
        const {homeList} = this.props;
        var winsize = Dimensions.get('window');
        if (!homeList || !homeList.data || homeList.data.length == 0) {
            return null
        }
        return homeList.data.map((item, i)=> {
            if (item.excellent == 0) {
                return (
                    <ListItem key={item["_id"]} item={item} winsize={winsize}/>
                )
            }

        })
    }

    //加载更多
    handleEndReched = (event)=> {
        const onEndReachedThreshold = 60;
        var nativeEvent = event.nativeEvent;
        var y = nativeEvent.contentInset.top + nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height
            - nativeEvent.contentSize.height;
        var yy = nativeEvent.contentInset.top + nativeEvent.contentOffset.y;
        if (y > onEndReachedThreshold && yy > 0) {
            if (!this.props.homeList.isFetchingMoreList && loading == 1) {
                loading = 2;
                this.props.actions.fetchMoreHomeList()
            }
        }
        if (y < onEndReachedThreshold) {
            loading = 1;
        }


    }

    renderMore = ()=> {
        if (this.props.homeList.data.length > 0) {
            return <Text style={styles.more}>上拉加载更多</Text>
        }
    }

    _onRefresh = () => {
        this.props.actions.fetchRefreshHomeList()
    };

    render() {

        const {homeList} = this.props;

        return (
            <View style={styles.container}>
                <ScrollableTabView
                    style={styles.container}

                    renderTabBar={
                        ()=>
                            <DefaultTabBar
                                backgroundColor="#f5f5f5"
                                textStyle={{fontSize: 16, paddingTop: 25}}
                                activeTextColor="#000"
                                inactiveTextColor="#666"
                            />
                    }
                    tabBarPosition='overlayTop'
                >
                    {<ScrollView
                        style={{marginTop: 59}}
                        tabLabel='关注'
                        onScroll={this.handleEndReched}
                        scrollEventThrottle={16}
                        refreshControl={
                            <RefreshControl
                                refreshing={homeList.isFetchingHomeList}
                                onRefresh={this._onRefresh}
                                tintColor="#666"
                                title="Loading..."
                                titleColor="#666"
                                colors={['#ff0000', '#00ff00', '#0000ff']}
                                progressBackgroundColor="#ffff00"
                            />
                        }
                    >

                        {this.renderGuanzhu()}
                        {this.renderMore()}


                    </ScrollView>}

                    <ScrollView
                        style={{marginTop: 59}}
                        tabLabel='推荐'
                        refreshControl={
                            <RefreshControl
                                refreshing={homeList.isFetchingHomeList}
                                onRefresh={this._onRefresh}
                                tintColor="#666"
                                title="Loading..."
                                titleColor="#666"
                                colors={['#ff0000', '#00ff00', '#0000ff']}
                                progressBackgroundColor="#ffff00"
                            />
                        }
                    >
                        {this.renderJinXuan()}

                    </ScrollView>
                </ScrollableTabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8ff"
    },
    loading: {
        paddingTop: 10,
        alignItems: 'center'
    },
    loadingText: {
        fontSize: 12,
        fontStyle: 'italic'
    },
    list: {
        flex: 1,
        padding: 20
    },
    more: {

        color: "#666", textAlign: "center",
        position:'relative',
        marginBottom:-33,
        paddingVertical:8,
    },
    row: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 20,
        backgroundColor: '#3a5795',
        margin: 5,
    },
    text: {
        alignSelf: 'center',
        color: '#fff',
    },
    scrollview: {
        flex: 1,
    },
});

export default Main;
