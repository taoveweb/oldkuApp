import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import {Theme} from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';

let {height, width} = Dimensions.get('window');

class Header extends Component {
  handleAdd = ()=>{
    this.props.navigator.push({name: 'EditView'});
  }
  render() {
    return (
        <View style={styles.container}>

          <TouchableHighlight
              activeOpacity={Theme.active.opacity}
              underlayColor='transparent'
              style={styles.share}
              onPress={this.handleAdd}>
            <Icon style={styles.icon}  name="ios-share-alt-outline" size={24}  color="#000" />
          </TouchableHighlight>
          <TouchableHighlight
              activeOpacity={Theme.active.opacity}
              underlayColor='transparent'
              style={styles.setting}
              onPress={this.handleAdd}>
            <Icon style={styles.icon}  name="ios-compass-outline" size={24}  color="#000" />
          </TouchableHighlight>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection:'row',
    justifyContent:'flex-end',
    paddingTop:15,
    paddingRight:15,
  },

  title: {
    width: width/2,
    textAlign: 'center',
    fontSize: 60
  },
  share:{
    marginRight:15
  }

});

export default Header;
