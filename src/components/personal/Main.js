import React, {Component} from 'react';
import Utils from '../../utils';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';

import {Theme} from '../../styles';

class Main extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Image style={styles.headerPic} />
          <Text style={styles.name}>子一824</Text>
          <View style={styles.info}>
            <Text style={styles.text}>关注</Text>
            <Text style={styles.num}>4</Text>
            <Text style={styles.line}>|</Text>
            <Text style={styles.num}>0</Text>
            <Text style={styles.text}>资料</Text>
          </View>
        </View>

        <View style={styles.tab}>
          <TouchableHighlight
              style={styles.active}
              activeOpacity={Theme.active.opacity}
              underlayColor='transparent'>
              <Text style={[styles.tabText,styles.active]}>图博</Text>
            </TouchableHighlight>
          <Text style={styles.tabText}>喜欢</Text>
          <Text style={styles.tabText}>资料</Text>
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name:{
    fontSize:14,
    paddingTop:10,
  },
  info:{
    flexDirection:'row',
    paddingTop:4,
  },
  text:{
    color:"#666",
    fontSize:10,
  },
  num:{
    fontSize:10,
    paddingHorizontal:3,
  },
  line:{
    fontSize:8,
    paddingHorizontal:7
  },
  headerPic:{
    width:60,
    height:60,
    backgroundColor:"#dadada",
    borderRadius:30,
  },
  head:{
    justifyContent:'flex-start',
    flexDirection:'column',
    alignItems:'center',

    paddingBottom:20
  },
  tab:{
    borderBottomWidth:1,
    borderBottomColor:"#dadada",
    flexDirection:'row',
    justifyContent:'center',

  },
  list: {
    flex: 1,
    padding: 20
  },
  tabText:{
    marginHorizontal:20,
    paddingVertical:8,
    borderBottomWidth:1,
    borderBottomColor:"#ff6600",
  },
  active:{
    borderBottomWidth:1,
    borderBottomColor:"#ff6600",
  },
});

export default Main;
