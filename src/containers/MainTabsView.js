import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
    StyleSheet,
    Dimensions,
    View,
    Text,
    Image
    } from 'react-native';
import HomeView from './HomeView';
import CompletedView from './CompletedView';
import BroswerView from './BroswerView';
import {Main} from '../components/main-tabs-view';

import Actions from '../actions';

class MainTabsView extends Component {
    renderTab = (idx)=> {
        const { navigator } = this.props;
        switch (idx) {
            case 0:
                return <HomeView navigator={navigator} title="偶酷摄影" />;
            case 1:
                /*return <CompletedView navigator={navigator}/>;*/
                return <BroswerView url="http://m.oldku.com/m/discovery" title="发现"  />;
            case 2:
                return <BroswerView url="http://m.oldku.com/m/activity" title="活动"  />;
            case 3:
                return <BroswerView url="http://m.oldku.com/m/personal" title="个人主页"  />;
            default:
                return null;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Main {...this.props} renderTab={this.renderTab}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

function mapStateToProps(state) {
    return {
        tab: state.navigation.index
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainTabsView);
