import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, Button} from 'react-native';

class Notice extends Component{
    render(){
        return  <View>
                    <Button title = "공지 상세" onPress={ () =>  this.props.navigation.navigate("NoticeDetail")}></Button>
                </View>
    }
}

const styles = StyleSheet.create({
    
})

export default Notice;