import React, {Component} from 'react';
import Utils from '../../utils';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Picker,
    Dimensions
} from 'react-native';
import {Theme} from '../../styles';

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
        this.handleUpdate();
    }

    componentDidUpdate() {
        this.handleUpdate();
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

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>标题</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => {
                        this.setState({title: text});
                    }}
                    value={this.state.title}/>
                <Text style={styles.text}>
                    描述
                </Text>

                <View style={styles.pickerWrap}>
                    <TextInput
                        style={styles.textArea}
                        multiline = {true}
                        numberOfLines = {4}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40
    },
    text: {
        color: Theme.color.brown,
        fontSize: 20,
        marginTop: 20,
        marginBottom: 5,
        textAlign: 'left'
    },
    input: {
        height: 40,
        padding: 10,
        borderColor: Theme.color.brown,
        borderWidth: 1,
        borderRadius: 4,
        color: '#000'
    },textArea: {
        height: 80,
        padding: 10,
        borderColor: Theme.color.brown,
        borderWidth: 1,
        borderRadius: 4,
        color: '#000',
    },
    pickerWrap: {
        borderColor: Theme.color.brown,
        borderWidth: 1,
        borderRadius: 4
    }
});

export default Main;
