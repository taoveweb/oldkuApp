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
} from '../components/activity';
import Actions from '../actions';

class Activity extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<Header {...this.props} />*/}
        <Main {...this.props}/>
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
    activity: state.activity
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
)(Activity);

