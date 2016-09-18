import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  StyleSheet,
  View
} from 'react-native';
import {
  Header,
  Main,
} from '../components/home-view';
import Actions from '../actions';
import TitleBar from '../components/common/TitleBar';
class HomeView extends Component {
  constructor(props){
    super(props);
    this.state = {isVisible: true}
  }
  componentDidMount(){
    this.props.actions.fetchAllHomeList();
  }
  componentWillUnmount(){

  }

  render() {
    return (
      <View style={styles.container}>
        {/*<TitleBar title={this.props.title||''}/>*/}
        <Main {...this.props} isVisible={this.state.isVisible}/>
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
    homeList: state.homeList
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
)(HomeView);

