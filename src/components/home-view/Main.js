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
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';


class Main extends Component {


    constructor(props) {
        super(props);
        this.state={
            loading:1
        }

    }


    renderJinXuan = () => {
        const { homeList } = this.props;
        //console.log(this.props,'props')
        var winsize = Dimensions.get('window');
        //console.log(this.state.num++,homeList,'a')
        if (!homeList || !homeList.data || homeList.data.length == 0) {
            // console.log('d')
            return null
        }
        //console.log(this.state.num++,homeList,'b');
        //console.log(homeList.data.length)
        return homeList.data.map((item, i)=> {
            //console.log(this.state.num++,'c')
            if (item.excellent == 1) {
                return (
                    <ListItem key={item["_id"]} item={item} winsize={winsize}/>
                )
            }

        })
    }

    renderGuanzhu = () => {
        const { homeList } = this.props;
        //console.log(this.props,'props')
        var winsize = Dimensions.get('window');
        //console.log(this.state.num++,homeList,'a')
        if (!homeList || !homeList.data || homeList.data.length == 0) {
            // console.log('d')
            return null
        }
        //console.log(this.state.num++,homeList,'b');
        //console.log(homeList.data.length)
        return homeList.data.map((item, i)=> {
            //console.log(this.state.num++,'c')
            if (item.excellent == 0) {
                return (
                    <ListItem key={item["_id"]} item={item} winsize={winsize}/>
                )
            }

        })
    }

    //加载更多
    handleEndReched = (event:Object)=> {
        const onEndReachedThreshold = 10;
        var ne = event.nativeEvent;

        if ((ne.contentOffset.y - ne.contentSize.height + ne.layoutMeasurement.height) > onEndReachedThreshold ) {
            if (!this.props.homeList.isFetchingMoreList && this.state.loading ==1) {
                this.setState({loading:2});
                this.props.actions.fetchMoreHomeList()
            }
        }
        if ((ne.contentOffset.y - ne.contentSize.height + ne.layoutMeasurement.height) < onEndReachedThreshold){
            this.setState({loading:1});
        }

    }

    renderMore = ()=> {
        if (this.props.homeList.data.length > 0) {
            return <Text style={styles.more}>加载更多</Text>
        }
    }

    _onRefresh = () => {
        this.props.actions.fetchRefreshHomeList()
    };

    render() {

        const { homeList } = this.props;

        return (
            <View style={styles.container}>
                <ScrollableTabView
                    style={styles.container}

                    renderTabBar={
                        ()=>
                        <DefaultTabBar
                           backgroundColor="#f5f5f5"
                           textStyle={{fontSize:16,paddingTop:25}}
                           activeTextColor="#000"
                           inactiveTextColor="#666"
                        />
                    }
                    tabBarPosition='overlayTop'
                    >
                    {<ScrollView
                        style={{marginTop:59}}
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
                        style={{marginTop:59}}
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
        backgroundColor: "#f0ffff"
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
        color: "#666", textAlign: "center", backgroundColor: "#fff"
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
