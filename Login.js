import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, TextInput, Button} from 'react-native';
import Memo from './Memo';


const Stack = createNativeStackNavigator();
function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Memo" Component = {Memo} />
                <Stack.Screen name = "Login" Component = {Login} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

class Login extends Component{
    render(){
            return <View style = {styles.container}>
                        <View style = {styles.boxWrap}>
                            <Text>ID</Text>
                            <TextInput style = {styles.textBox}></TextInput>
                        </View>
                        <View style = {styles.boxWrap}>
                            <Text>PW</Text>
                            <TextInput style = {styles.textBox}></TextInput>
                        </View>
                        <Button title = "로그인" onPress={() => navigation.navigate('Memo')}></Button>
                </View>
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'space-between',
        marginTop : '60%',
        marginLeft : '10%',
        marginRight : '10%',
        marginBottom : '120%',
        //backgroundColor : 'blue'
    },
    boxWrap : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : '100%',
        flexDirection : 'row',
        //backgroundColor : 'green'
    },
    textBox : {
        height : '50%',
        width : '80%',
        borderColor : 'black',
        borderBottomWidth : 1
        //backgroundColor : 'red'
    }
})

export default Navigation;