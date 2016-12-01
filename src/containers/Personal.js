import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import * as APIs from '../constants/ServerAPIs';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {connect} from 'react-redux';

import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    Dimensions,
    Text,
} from 'react-native';
import {
    Header,
    Main,
} from '../components/personal';
import Actions from '../actions';
/*<Image resizeMode="cover" style={{flex:1}}
 source={{uri: 'http://www.oldku.com/images/201610/hp_f983e7e8c99902b08e7818aabf889ea0_600.jpeg'}}>
 <ScrollView style={[styles.container]}>
 /!*this.props.renderStatusBar('light-content')*!/
 <Header {...this.props} />
 <Main {...this.props}/>
 </ScrollView>
 </Image>*/
class Personal extends Component {
    render() {
        const {width, height}=Dimensions.get('window');
        const {
            onScroll = () => {
            }
        } = this.props;
        return (
            /* <ParallaxView
             backgroundSource={{uri: 'http://www.oldku.com/images/201610/hp_f983e7e8c99902b08e7818aabf889ea0_600.jpeg'}}
             windowHeight={200}
             header={(
             <Header {...this.props} />
             )}
             scrollableViewStyle={{backgroundColor: 'red'}}
             >


             <Main {...this.props}/>

             </ParallaxView>*/

            <ParallaxScrollView
                onScroll={onScroll}

                headerBackgroundColor="#333"
                stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
                parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
                backgroundSpeed={10}

                renderBackground={() => (
                      <View key="background">
                        <Image source={{uri: 'http://www.oldku.com/images/201610/hp_f983e7e8c99902b08e7818aabf889ea0_600.jpeg',
                                        width: window.width,
                                        height: PARALLAX_HEADER_HEIGHT}}/>
                        <View style={{position: 'absolute',
                                      top: 0,
                                      width: window.width,
                                      backgroundColor: 'rgba(0,0,0,.4)',
                                      height: PARALLAX_HEADER_HEIGHT}}/>
                      </View>
                    )}

                onChangeHeaderVisibility={
                    (a)=>{
                        console.log(a)
                    }


                }

                renderForeground={() => (
                      <View key="parallax-header" style={ styles.parallaxHeader }>
                    {/*    <Image style={ styles.avatar } source={{
                          uri: 'https://pbs.twimg.com/profile_images/2694242404/5b0619220a92d391534b0cd89bf5adc1_400x400.jpeg',
                          width: AVATAR_SIZE,
                          height: AVATAR_SIZE
                        }}/>
                        <Text style={ styles.sectionSpeakerText }>
                          Talks by Rich Hickey
                        </Text>
                        <Text style={ styles.sectionTitleText }>
                          CTO of Cognitec, Creator of Clojure
                        </Text>*/}
                      </View>
                    )}

                renderStickyHeader={() => (
                      <View key="sticky-header" style={styles.stickySection}>
                        <Text style={styles.stickySectionText}>个人中心</Text>
                      </View>
                    )}

                renderFixedHeader={() => (
                  <View key="fixed-header" style={styles.fixedSection}>
                                 <Header {...this.props} />

                  </View>
                )}
            >
                <Main {...this.props}/>

            </ParallaxScrollView>

        )
    }
}
/*const styles = StyleSheet.create({
 container: {
 flex: 1,
 }
 });*/


const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 200;
const STICKY_HEADER_HEIGHT = 60;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: window.width,
        height: PARALLAX_HEADER_HEIGHT
    },
    stickySection: {
        flex:1,
        height: STICKY_HEADER_HEIGHT,
        justifyContent: 'flex-end',
        paddingBottom:3

    },
    stickySectionText: {
        color: 'white',
        fontSize: 16,
        margin: 10
    },
    fixedSection: {
        position: 'absolute',
        top:0,
        bottom: 10,
        right: 10,
    },
    fixedSectionText: {
        color: '#999',
        fontSize: 12
    },
    parallaxHeader: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        paddingTop: 100
    },
    avatar: {
        marginBottom: 10,
        borderRadius: AVATAR_SIZE / 2
    },
    sectionSpeakerText: {
        color: 'white',
        fontSize: 12,
        paddingVertical: 5
    },
    sectionTitleText: {
        color: 'white',
        fontSize: 12,
        paddingVertical: 5
    },
    row: {
        overflow: 'hidden',
        paddingHorizontal: 10,
        height: ROW_HEIGHT,
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderBottomWidth: 1,
        justifyContent: 'center'
    },
    rowText: {
        fontSize: 20
    }
});


function mapStateToProps(state) {
    return {
        personal: state.personal,
        homeList: state.homeList,
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
)(Personal);

