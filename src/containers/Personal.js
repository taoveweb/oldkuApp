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
            <Image resizeMode="cover" style={{flex:1,}}
                source={{uri: APIs.host + '/images/20169/hp_85d11e0619966bbfeec1efa1e2050cae.jpeg'}}>
                <ScrollView style={styles.container}>
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
        personal: state.personal
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

