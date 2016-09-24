import React, {Component} from 'react';
import Utils from '../../utils';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import {Theme, BasicStyle} from '../../styles';

class ListItem extends Component {

  render() {
    const getTimer = ()=>{
      return Utils.DateHandler.timeLogFromNowTo(new Date(this.props.data.completedTime||this.props.data.endTime));
    }
    return (
      <View style={[styles.container]}>

        <Text >abc</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Theme.color.brown
  },
  body: {
    flex: 1,
    padding: 15,
  },
  btnIcon: {
    width: 24,
    height: 24
  },
  timer: {
    fontSize: 12,
    fontStyle: 'italic'
  }
});

export default ListItem;
