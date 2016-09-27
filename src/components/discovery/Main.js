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
const {height, width} = Dimensions.get('window');
import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view';
import Swiper from 'react-native-swiper';
class Main extends Component {


    constructor(props) {
        super(props);
        this.state = {
            position: 1,
            interval: null
        };
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
            }, 3000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    //标题
    renderTitle = (title)=> {
        return <View style={styles.title}>
            <Text style={styles.titleText}>{title}</Text>
            <TouchableHighlight onPress={this._showAllUser}>
                <Icon name="ios-arrow-forward" size={18}/>
            </TouchableHighlight>
        </View>
    };

    //热门活动列表
    renderDiscoveryList = ()=> {
        const dplist = [1, 1, 1, 1];
        return dplist.map((item, i)=> {
            return <TouchableHighlight key={i} style={styles.discoveryItem} onPress={this._showAllUser}>
                <Image style={styles.discoveryItemImg}><Text style={styles.discoveryItemText}>给女朋友拍照才是正经事</Text></Image>
            </TouchableHighlight>

        })
    };
    //热门摄影师列表
    renderDayPhotographyList = ()=> {
        const dplist = [1, 1, 1, 1, 1, 1];
        return dplist.map((item, i)=> {
            return <TouchableHighlight key={i} style={styles.dpItem} onPress={this._showAllUser}>
                <View style={styles.dbBox}>
                    <Image style={styles.dpItemImg}/>
                    <Text style={styles.dpItemText}>我就是我了</Text>
                </View>
            </TouchableHighlight>

        })

    };
    //签名列表
    renderSign = ()=> {
        const dplist = [1, 1, 1, 1, 1, 1, 1, 1, 1];
        return dplist.map((item, i)=> {
            return <TouchableHighlight key={i} style={styles.signItem} onPress={this._showAllUser}>
                <Image style={styles.signImg}>
                    <Text style={styles.signText}>我就是我了</Text>
                </Image>
            </TouchableHighlight>

        })

    };
    //活动列表
    renderActivityList = ()=> {
        const dplist = [1, 1, 1, 1, 1, 1, 1, 1, 1];
        return dplist.map((item, i)=> {
            return <TouchableHighlight key={i} style={styles.activeItem} onPress={this._showAllUser}>
                <Image style={styles.activeImg}>
                    <Text style={styles.activeTitle}>我就是我了</Text>
                    <Text style={styles.activeP}>已投稿{i}</Text>
                    <View style={styles.djs}>
                        <Icon color="#ff6600" name="md-alarm" size={14}/>
                        <Text style={{color:"#fff",paddingHorizontal:3}}>距结束</Text>
                        <Text style={{color:"#ff6600"}}>4天</Text>
                    </View>
                </Image>
            </TouchableHighlight>

        })
    }


    render() {

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
                    initialPage={1}
                >
                    {<ScrollView
                        style={{marginTop: 59}}
                        tabLabel='发现'
                        onScroll={this.handleEndReched}
                        scrollEventThrottle={16}

                    >
                        <Swiper
                            height={180}
                            style={styles.wrapper}
                            autoplay={true}
                            paginationStyle={{bottom: 0}}
                            autoplayTimeout={3}
                        >
                            <View style={styles.slide1}>
                                <Text style={styles.text}>Hello Swiper</Text>
                            </View>
                            <View style={styles.slide2}>
                                <Text style={styles.text}>Beautiful</Text>
                            </View>
                            <View style={styles.slide3}>
                                <Text style={styles.text}>And simple</Text>
                            </View>
                        </Swiper>
                        {this.renderTitle("热门活动")}
                        <View style={styles.discoveryList}>
                            {this.renderDiscoveryList()}
                        </View>
                        {this.renderTitle("每日热门摄影师")}
                        <View style={styles.dayPhotography}>
                            {this.renderDayPhotographyList()}
                        </View>
                        {this.renderTitle("题材")}
                        <View style={styles.signList}>
                            {this.renderSign()}
                        </View>
                        {this.renderTitle("风格")}
                        <View style={styles.signList}>
                            {this.renderSign()}
                        </View>
                        {this.renderTitle("器材")}
                        <View style={styles.signList}>
                            {this.renderSign()}
                        </View>

                    </ScrollView>}

                    {<ScrollView
                        style={{marginTop: 59}}
                        tabLabel='活动'
                        onScroll={this.handleEndReched}
                        scrollEventThrottle={16}

                    >
                        {this.renderActivityList()}
                    </ScrollView>}
                    {<ScrollView
                        style={{marginTop: 59}}
                        tabLabel='影像'
                        onScroll={this.handleEndReched}
                        scrollEventThrottle={16}

                    >
                        <Text>影像</Text>
                    </ScrollView>}
                </ScrollableTabView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    activeItem: {
        flex: 1,

        height: width * 9 / 16,
        backgroundColor: "#ff6600",
        marginBottom: 3,
    },
    activeImg: {
        alignItems: 'center',
    },
    activeTitle: {
        paddingTop: width * 9 / 32 - 8,
        fontSize: 16,
        fontWeight: 'bold',
        color: "#fff"
    },
    activeP: {
        color: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#fff",
        marginTop: 10,
    },
    djs: {
        flexDirection: 'row',
        backgroundColor:"rgba(0,0,0,0.8)",
        paddingHorizontal:4,
        paddingVertical:2,
        borderRadius:5,
        marginTop:8,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
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
    discoveryItem: {
        flex: 1,
        width: (width - 20) / 2 - 2,
        height: (width - 20) * 2 / 7,
        marginLeft: 4,
        marginBottom: 4,

    },
    discoveryItemText: {
        color: "#fff",
        marginHorizontal: 10,
        textAlign: 'center',

    },
    discoveryItemImg: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: "#f4f4f4",
    },
    discoveryList: {
        marginHorizontal: 10,
        marginLeft: 6,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    wrapper: {
        height: 200,
    },
    headerImg: {
        width: 42,
        height: 42,
        borderRadius: 21,
        margin: 0,
        backgroundColor: '#f5f5dc',

    },
    titleText: {
        fontSize: 12,
        paddingLeft: 4
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    dayPhotography: {
        marginHorizontal: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    dpItem: {
        width: (width - 20) / 3,
        height: (width - 20) / 3,
        justifyContent: 'center',
        alignItems: 'center',

    },
    dpItemImg: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#f6f6f6",
        marginBottom: 8,
    },
    signList: {
        marginHorizontal: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    signItem: {
        width: (width - 20) / 3 - 4,
        height: (width - 20) / 3 - 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 2,
        marginVertical: 2,
    },
    signImg: {
        width: (width - 20) / 3 - 4,
        height: (width - 20) / 3 - 4,
        backgroundColor: "#ff6600",
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    signText: {
        width: (width - 20) / 3 - 4,
        height: 20,
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        lineHeight: 20,
        color: "#fff",
        fontSize: 12,
    }
});

export default Main;
