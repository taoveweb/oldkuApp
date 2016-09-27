import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Navigator
} from 'react-native';
import MainTabsView from './MainTabsView';
import EditView from './EditView';
import BroswerView from './BroswerView';

const ROUTES = { MainTabsView, BroswerView, EditView };

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      StatusBarStyle:"default"
    }
  }

  renderScene = (route, navigator) => {
    let Scene = ROUTES[route.name];
    return <Scene {...route} navigator={navigator}/>;
  };
  configureScene = (route, routeStack) => {
    switch (route.name){
      case 'EditView':
        return Navigator.SceneConfigs.FloatFromBottom;
      default:
        return Navigator.SceneConfigs.PushFromRight;
    }
  };

  renderStatusBar=(idx,style)=>{
    let s= style || "default";
    if(idx==4){
      s="light-content";
    }
    this.setState({
      StatusBarStyle:s
    })
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={this.state.StatusBarStyle}/>
        <Navigator
          initialRoute={{name: 'MainTabsView',renderStatusBar:this.renderStatusBar}}
          renderScene={this.renderScene}
          configureScene={this.configureScene}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
