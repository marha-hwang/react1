import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, Button} from 'react-native';

class Memo extends Component{
    render(){
        return  <View>
                    <Button title = "메모작성" onPress={ () =>  this.props.navigation.navigate("MemoWrite")}></Button>
                    <Button title = "공지사항" onPress={ () =>  this.props.navigation.navigate("Notice")}></Button>
                </View>
    }
}

const styles = StyleSheet.create({
    
})

export default Memo;