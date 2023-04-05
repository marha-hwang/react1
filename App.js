import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Memo from './Memo';
import MemoWrite from './MemoWrite';
import Notice from './Notice';
import NoticeDetail from './NoticeDetail';


const Stack = createNativeStackNavigator();
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name = "Login" component={Login}/>
                <Stack.Screen name = "Memo" component={Memo}/>
                <Stack.Screen name = "MemoWrite" component={MemoWrite}/>
                <Stack.Screen name = "Notice" component={Notice}/>
                <Stack.Screen name = "NoticeDetail" component={NoticeDetail}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App