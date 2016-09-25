import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
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
        const { renderStatusBar} = this.props;
        renderStatusBar(idx);
        this.props.actions.switchMainTab(idx);
    }

    render() {
        const { renderTab, tab ,renderStatusBar} = this.props;
        const size=28;

        return (
            <TabNavigator
                style={styles.container}

                >
                <TabNavigator.Item
                    style={styles.item}
                    title="首页"
                    titleStyle={styles.titleStyle}
                    selected={tab === 0}
                    onPress={()=> this.handleSwitchTab(0)}
                    renderIcon={() => <Icon style={styles.icon}  name="ios-home-outline" size={size}  color="#000" />}
                    renderSelectedIcon={() => <Icon style={styles.icon}  name="ios-home" size={size}  color="#4F8EF7" />}>
                    {renderTab(0)}

                </TabNavigator.Item>
                <TabNavigator.Item
                    style={styles.item}
                    titleStyle={styles.titleStyle}

                    title="发现"
                    selected={tab === 1}
                    onPress={()=> this.handleSwitchTab(1)}
                    renderIcon={() => <Icon style={styles.icon}  name="ios-compass-outline" size={size}  color="#000" />}
                    renderSelectedIcon={() => <Icon  style={styles.icon} name="ios-compass" size={size}  color="#4F8EF7" />}>
                    {renderTab(1)}
                </TabNavigator.Item>
                <TabNavigator.Item
                    style={styles.item}
                    selected={tab === 2}
                    onPress={()=> this.handleSwitchTab(2)}
                    renderIcon={() => <Icon name="logo-instagram" size={45} style={{paddingTop:0,position:"relative",top:16,}} color="#000" />}
                    renderSelectedIcon={() => <Icon name="logo-instagram" size={45} style={{paddingTop:0,position:"relative",top:16,}}  color="#4F8EF7" />}>
                    {renderTab(2)}
                </TabNavigator.Item>
                <TabNavigator.Item
                    style={styles.item}
                    titleStyle={styles.titleStyle}
                    title="动态"
                    selected={tab === 3}
                    onPress={()=> this.handleSwitchTab(3)}
                    renderIcon={() => <Icon style={styles.icon} name="ios-ribbon-outline" size={size}  color="#000" />}
                    renderSelectedIcon={() => <Icon style={styles.icon}  name="ios-ribbon" size={size}  color="#4F8EF7" />}>
                    {renderTab(3)}
                </TabNavigator.Item>
                <TabNavigator.Item
                    style={styles.item}
                    titleStyle={styles.titleStyle}
                    title="个人"
                    selected={tab === 4}
                    onPress={()=> this.handleSwitchTab(4)}
                    renderIcon={() => <Icon style={styles.icon}  name="ios-contact-outline" size={size}  color="#000" />}
                    renderSelectedIcon={() => <Icon style={styles.icon}  name="ios-contact" size={size}  color="#4F8EF7" />}>
                    {renderTab(4)}
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    titleStyle:{
        position:"relative",
        top:-4,
    },
    icon:{
        position:"relative",
        top:3,
    },
    item: {
        height: height - 60,

    }
});

export default Main;
