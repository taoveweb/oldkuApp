import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    ScrollView
    } from 'react-native';
import ListItem from './ListItem';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';



class Main extends Component {
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
            }
        };


    }

    componentWillMount() {

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


    renderLoading = () => {
        if (this.props.todos.isFetchingAllTodos) {
            return (
                <View style={styles.loading}>
                    <Text style={styles.loadingText}>Loading...</Text>
                </View>
            )
        }
        return null;
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollableTabView
                    style={styles.container}
                    renderTabBar={()=><DefaultTabBar backgroundColor='rgba(255, 255, 255, 0.7)' />}
                    tabBarPosition='overlayTop'
                    >
                    <ScrollView style={{marginTop:50}} tabLabel='关注'>
                        {this.renderGuanZhu()}
                        {this.renderGuanZhu()}
                        {this.renderGuanZhu()}
                        {this.renderGuanZhu()}
                        {this.renderGuanZhu()}
                        {this.renderGuanZhu()}

                    </ScrollView>
                    <ScrollView style={{marginTop:50}} tabLabel='精选'>

                        {this.renderJinXuan()}
                        {this.renderJinXuan()}
                        {this.renderJinXuan()}
                        {this.renderJinXuan()}
                        {this.renderJinXuan()}
                        {this.renderJinXuan()}
                        {this.renderJinXuan()}
                        {this.renderJinXuan()}
                        {this.renderJinXuan()}
                        {this.renderJinXuan()}

                    </ScrollView>
                </ScrollableTabView>
                {this.renderLoading()}


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    }
});

export default Main;
