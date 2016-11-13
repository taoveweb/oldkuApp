import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import {
    Bar,
    Main,
} from '../components/publish/publishselected';
let {height, width} = Dimensions.get('window');
import Actions from '../actions';

class HomeView extends Component {
    constructor(props) {
        super(props);
    }

    forData = {};
    close = ()=> {
        this.props.navigator.pop();
    }
    handleUpdate = (data)=> {
        this.forData = data;
    }
    handleCancel = ()=> {
        this.close();
    }
    handleSubmit = ()=> {
        if (this.props.data) {
            this.props.actions.editTodo(this.props.data.id, this.forData.title, this.forData.hour);
        } else {
            this.props.actions.addTodo(this.forData.title, this.forData.hour);
        }
        this.close();
    }

    render() {
        return (
            <Image style={styles.container} source={require('../components/edit-view/img/bg.png')}>
                <Bar onCancel={this.handleCancel} onSubmit={this.handleSubmit}/>
                <Main {...this.props}  onCancel={this.handleCancel} onUpdate={this.handleUpdate}/>
            </Image>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height
    }
});

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeView);

