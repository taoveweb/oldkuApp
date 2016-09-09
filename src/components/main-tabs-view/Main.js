import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Image
    } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
let {height, width} = Dimensions.get('window');

class Main extends Component {
    handleSwitchTab = (idx)=> {
        this.props.actions.switchMainTab(idx);
    }

    render() {
        const { renderTab, tab } = this.props;

        return (
            <TabNavigator
                style={styles.container}>
                <TabNavigator.Item
                    style={styles.item}
                    title="首页"
                    selected={tab === 0}
                    onPress={()=> this.handleSwitchTab(0)}
                    renderIcon={() => <Image source={require('./img/home.png') }/>}
                    renderSelectedIcon={() => <Image source={require('./img/home_filled.png')}/>}>
                    {renderTab(0)}
                </TabNavigator.Item>
                <TabNavigator.Item
                    style={styles.item}
                    title="发现"
                    selected={tab === 1}
                    onPress={()=> this.handleSwitchTab(1)}
                    renderIcon={() => <Image source={require('./img/checked.png') }/>}
                    renderSelectedIcon={() => <Image source={require('./img/checked_filled.png')}/>}>
                    {renderTab(1)}
                </TabNavigator.Item>
                <TabNavigator.Item
                    style={styles.item}
                    title="拍照"
                    selected={tab === 2}
                    onPress={()=> this.handleSwitchTab(2)}
                    renderIcon={() => <Image source={require('./img/bookmark.png') }/>}
                    renderSelectedIcon={() => <Image source={require('./img/bookmark_filled.png')}/>}>
                    {renderTab(2)}
                </TabNavigator.Item>
                <TabNavigator.Item
                    style={styles.item}
                    title="活动"
                    selected={tab === 3}
                    onPress={()=> this.handleSwitchTab(3)}
                    renderIcon={() => <Image source={require('./img/bookmark.png') }/>}
                    renderSelectedIcon={() => <Image source={require('./img/bookmark_filled.png')}/>}>
                    {renderTab(3)}
                </TabNavigator.Item>
                <TabNavigator.Item
                    style={styles.item}
                    title="个人"
                    selected={tab === 4}
                    onPress={()=> this.handleSwitchTab(4)}
                    renderIcon={() => <Image source={require('./img/bookmark.png') }/>}
                    renderSelectedIcon={() => <Image source={require('./img/bookmark_filled.png')}/>}>
                    {renderTab(3)}
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        height: height - 49
    }
});

export default Main;
