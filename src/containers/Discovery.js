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
} from '../components/discovery';
import Actions from '../actions';
class HomeView extends Component {
  constructor(props){
    super(props);

  }
  componentDidMount(){
  }
  componentWillUnmount(){

  }

  render() {
    return (
      <View style={styles.container}>
        {/*<TitleBar title={this.props.title||''}/>*/}
        <Header></Header>
        <Main {...this.props} />
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

