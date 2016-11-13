import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {
    StyleSheet,
    View
} from 'react-native';
import {
    Header,
    Main,
} from '../components/publish';
import Actions from '../actions';

class Publish extends Component {
    constructor(props){
        super(props);
        this.state={
            canpublish:true,
        }
    }


    setPublishBtnState=(val)=>{
        this.setState({canpublish:val})
    }

    render() {
        return (
            <View style={styles.container}>
                <Header {...this.props} canpublish={this.state.canpublish} />
                <Main {...this.props} setPublishBtnState={this.setPublishBtnState}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    }
});

function mapStateToProps(state) {
    return {
        publish: state.publish
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
)(Publish);

