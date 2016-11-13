import React, {Component} from 'react';
import Utils from '../../../utils';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Picker,
    Image,
    Dimensions,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import {Theme} from '../../../styles';
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


    handleCancel = ()=> {
        this.props.onCancel();
    }

    //热门活动列表
    renderImgList = ()=> {
        const {imgs}=this.props;
        return imgs.map((item, i)=> {
            return <TouchableHighlight key={i} style={styles.imgItem}>
                <Image source={{uri: item.uri}} style={styles.imgItemImg}></Image>
            </TouchableHighlight>

        })
    };


    render() {

        return (
            <ScrollView style={styles.container}>
                <View style={{flex: 1}}>
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
                    <View style={styles.textInputBox}>
                        <TextInput
                            autoCapitalize="none"
                            placeholder="描述"
                            style={styles.textArea}
                            multiline={true}
                            numberOfLines={4}></TextInput>
                        <View style={styles.imgList}>
                            {this.renderImgList()}
                            <TouchableHighlight onPress={this.handleCancel} style={[styles.imgItem, {
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 0.5,
                                borderColor: '#dadada'
                            }]}>
                                <Icon style={styles.icon} name="ios-add" size={100} color="#dadada"/>
                            </TouchableHighlight>
                        </View>
                    </View>

                    <View style={ styles.tags}>
                        <Text style={styles.addTag}>+标签</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    textInputBox: {
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: "#e6e6fa",
    },
    tags: {
        position: 'absolute', bottom: 0, backgroundColor: "#fff", height: 50, width: width,
        justifyContent: 'center',
        paddingLeft: 10
    },
    addTag: {
        color: "#ff6600",
        borderWidth: 0.5,
        borderColor: "#ff6600",
        borderRadius: 12,
        width: 55,
        textAlign: 'center',
        paddingVertical: 3
    },
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: "#f8f8f8"

    },
    titleBox: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#e6e6fa',
        marginBottom: 8,
    },
    input: {
        height: 50,
        color: '#000',
        backgroundColor: "#fff",


    }, textArea: {
        height: 120,
        padding: 10,
        color: '#000',
        backgroundColor: "#fff",
        fontSize: 18,
    },
    pickerWrap: {
        borderColor: '#e6e6fa',
        borderBottomWidth: 0.5,
        backgroundColor: "#fff",

    },
    imgItem: {
        width: (width - 22) / 3 - 2,
        height: (width - 22) / 3 - 2,
        marginLeft: 4,
        marginBottom: 4,
        flexShrink: 1,
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
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingLeft: 6,
        paddingBottom: 60,
        borderColor: '#e6e6fa',
        borderBottomWidth: 0.5,
    },
});

export default Main;
