import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import * as APIs from '../constants/ServerAPIs';

import {connect} from 'react-redux';

import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    Dimensions,
} from 'react-native';
import {
    Header,
    Main,
} from '../components/personal';
import Actions from '../actions';

class Personal extends Component {

    render() {
        const {width,height}=Dimensions.get('window');
        return (
            <Image resizeMode="cover" style={{flex:1}}
                source={{uri: 'http://www.oldku.com/images/201610/hp_f983e7e8c99902b08e7818aabf889ea0_600.jpeg'}}>
                <ScrollView style={[styles.container]}>
                    {/*this.props.renderStatusBar('light-content')*/}
                    <Header {...this.props} />
                    <Main {...this.props}/>
                </ScrollView>
            </Image>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

function mapStateToProps(state) {
    return {
        personal: state.personal,
        homeList: state.homeList,
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
)(Personal);

