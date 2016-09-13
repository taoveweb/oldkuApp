import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    TouchableWithoutFeedback,
    RefreshControl
    } from 'react-native';
import ListItem from './ListItem';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';



class Row extends React.Component {
    _onClick = () => {
        this.props.onClick(this.props.data);
    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={this._onClick} >
                <View style={styles.row}>
                    <Text style={styles.text}>
                        {this.props.data.text + ' (' + this.props.data.clicks + ' clicks)'}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}


class Main extends Component {


    _onClick = (row) => {
        row.clicks++;
        this.setState({
            rowData: this.state.rowData,
        });
    };


    constructor(props) {
        super(props);
        var {height, width} = Dimensions.get('window');

        this.state = {
            imglist: [
                {name: "list.jpg", width: 1242, height: 1809},
                {name: "lista.jpg", width: 1242, height: 1340},
                {name: "listb.jpg", width: 1242, height: 1632}
            ],
            winsize:{
                width:width,
                height:height
            },
            isRefreshing: false,
            loaded: 0,
            rowData: Array.from(new Array(20)).map(
                (val, i) => ({text: 'Initial row ' + i, clicks: 0})),
        };


    }

    renderGuanZhu = () => {
        return this.state.imglist.map((a, b)=> {
            var winsize=this.state.winsize;
            var w=winsize.width;
            var h=winsize.height;
            return (
                <Image style={{width:w,height:parseInt(a.height*(w/a.width))}}
                       source={{uri:'http://static.oldku.com/'+a.name}}/>
            )
        })
    }

    renderJinXuan = () => {
        return this.state.imglist.map((img, i)=> {
            var winsize=this.state.winsize;
            var w=winsize.width;
            var h=winsize.height;
            return (
                <ListItem key={i} img={img} winsize={this.state.winsize} />
            )
        })
    }



    _onRefresh = () => {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            // prepend 10 items
            const rowData = Array.from(new Array(10))
                .map((val, i) => ({
                    text: 'Loaded row ' + (+this.state.loaded + i),
                    clicks: 0,
                }))
                .concat(this.state.rowData);

            this.setState({
                loaded: this.state.loaded + 10,
                isRefreshing: false,
                rowData: rowData,
            });
        }, 5000);
    };

    render() {

        const rows = this.state.rowData.map((row, ii) => {
            return <Row key={ii} data={row} onClick={this._onClick}/>;
        });

        return (
            <View style={styles.container}>
                <ScrollableTabView
                    style={styles.container}

                    renderTabBar={
                        ()=><DefaultTabBar    backgroundColor='rgba(255, 255, 255, 0.7)' />
                        }
                    tabBarPosition='overlayTop'
                    >
                    <ScrollView style={{marginTop:50}} tabLabel='关注1'>
                        {this.renderJinXuan()}
                    </ScrollView>

                    <ScrollView
                        style={{marginTop:50}}
                        tabLabel='精选'
                        refreshControl={
                          <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh}
                            tintColor="#ff0000"
                            title="Loading..."
                            titleColor="#00ff00"
                            colors={['#ff0000', '#00ff00', '#0000ff']}
                            progressBackgroundColor="#ffff00"
                          />
                        }
                        >
                        {rows}

                    </ScrollView>
                </ScrollableTabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#f0ffff"
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
