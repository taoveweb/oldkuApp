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
      <View style={[Theme.header,{backgroundColor:'transparent',borderBottomWidth:0,height:24}]}>

          <TouchableHighlight
            activeOpacity={Theme.active.opacity}
            underlayColor='transparent'
            style={styles.share}
            onPress={this.handleAdd}>
            <Icon style={styles.icon}  name="ios-share-outline" size={24}  color="#fff" />
          </TouchableHighlight>
        <TouchableHighlight
            activeOpacity={Theme.active.opacity}
            underlayColor='transparent'
            style={styles.setting}
            onPress={this.handleAdd}>
          <Icon style={styles.icon}  name="ios-settings-outline" size={24}  color="#fff" />
          </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon:{
    fontWeight:"400",

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
