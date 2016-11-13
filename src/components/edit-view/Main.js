import React, {Component} from 'react';
import Utils from '../../utils';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Picker,
    Image,
    Dimensions,
    TouchableHighlight
} from 'react-native';
import {Theme} from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';
const {height, width} = Dimensions.get('window');

function getHour(time) {
    var d = time ? new Date(time) : new Date();
    return d.getHours() + (time ? 0 : 1);
}

class Main extends Component {
    constructor(props) {
        super(props);
        var data = this.props.data;
        if (data) {
            this.state = {title: data.title, hour: getHour(data.endTime)}
        } else {
            this.state = {title: '', hour: getHour()}
        }
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    handleUpdate = ()=> {
        this.props.onUpdate(this.state);
    }

    renderPickerItems() {
        var list = [];
        for (var i = 1; i < 24; i++) {
            list.push(<Picker.Item label={i + ''} value={i} key={Utils.GUID()}/>);
        }
        list.push(<Picker.Item label={'00'} value={24} key={Utils.GUID()}/>);
        return list;
    }
    handleCancel = ()=> {
        this.props.onCancel();
    }

    //热门活动列表
    renderImgList = ()=> {
        const dplist = [1, 1, 1, 1];
        return dplist.map((item, i)=> {
            return <TouchableHighlight key={i} style={styles.imgItem}>
                <Image style={styles.imgItemImg}></Image>
            </TouchableHighlight>

        })
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleBox}>
                <TextInput
                    style={styles.input}
                    placeholder="标题"
                    autoCapitalize="none"
                    onChangeText={(text) => {
                        this.setState({title: text});
                    }}
                    value={this.state.title}/>
                </View>
                <View style={styles.pickerWrap}>
                    <TextInput
                        autoCapitalize="none"
                        placeholder="描述"
                        style={styles.textArea}
                        multiline = {true}
                        numberOfLines = {4}/>
                    <View style={styles.imgList}>
                        {this.renderImgList()}
                        <TouchableHighlight onPress={this.handleCancel} style={[styles.imgItem,{justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#dadada'}]}>
                            <Icon style={styles.icon} name="ios-add" size={100} color="#dadada"/>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={ styles.tags}>
                    <Text style={styles.addTag}>+标签</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tags:{flex:1,position:'absolute',bottom:0,backgroundColor:"#fff",height:50,width:width,
        justifyContent:'center',
        paddingLeft:10
    },
    addTag:{
      color:"#ff6600",
        borderWidth:0.5,
        borderColor:"#ff6600",
        borderRadius:12,
        width:55,
        textAlign:'center',
        paddingVertical:3
    },
    container: {
        flex: 1,
        padding: 0,
        backgroundColor:"#f8f8ff"

    },
    titleBox:{
        borderBottomWidth:0.5,
        borderBottomColor:'#e6e6fa',
        marginBottom:8,
    },
    input: {
        height: 40,
        padding: 10,
        color: '#000',
        backgroundColor:"#fff",


    },textArea: {
        height: 80,
        padding: 10,
        color: '#000',
        backgroundColor:"#fff",
        fontSize:18,
        marginBottom:8,
    },
    pickerWrap: {
        borderColor: '#e6e6fa',
        borderTopWidth:0.5,
        backgroundColor:"#fff",

    },
    imgItem: {
        width: (width - 22) / 3 - 2,
        height: (width - 22) / 3 - 2,
        marginLeft: 4,
        marginBottom: 4,
        flexShrink:1,
    },
    imgItemText: {
        color: "#fff",
        marginHorizontal: 10,
        textAlign: 'center',

    },
    imgItemImg: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: "#dadada",
    },
    imgList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor:"#fff",
        paddingHorizontal:10,
        paddingLeft:6,
        paddingBottom:15,
        borderColor: '#e6e6fa',
        borderBottomWidth:0.5,
    },
});

export default Main;
