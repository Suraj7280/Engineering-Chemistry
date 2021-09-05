import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Importing Components
import Unit1 from './Unit1';
import Screen from './Screen';
import Unit2 from './Unit2';
import Unit3 from './Unit3';
import Unit4 from './Unit4';
import Unit5 from './Unit5';
import Nine from './Nine';
import Eight from './Eight';
import Seven from './Seven';
import Six from './Six';
import Five from './Five';
import Four from './Four';
import Three from './Three';
import Second from './Second';

//Stack nav
const Stack = createStackNavigator();

export default class App extends React.Component{

    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Engineering Chemistry">
                        {({navigation})=><Screen navigation={navigation}/>}
                    </Stack.Screen>
                    <Stack.Screen name="Unit1">
                        {({navigation})=><Unit1 navigation={navigation}/>}
                    </Stack.Screen> 
                    <Stack.Screen name="Unit2">
                        {({navigation})=><Unit2 navigation={navigation}/>}
                    </Stack.Screen>  
                    <Stack.Screen name="Unit3">
                        {({navigation})=><Unit3 navigation={navigation}/>}
                    </Stack.Screen> 
                    <Stack.Screen name="Unit4">
                        {({navigation})=><Unit4 navigation={navigation}/>}
                    </Stack.Screen> 
                    <Stack.Screen name="Unit5">
                        {({navigation})=><Unit5 navigation={navigation}/>}
                    </Stack.Screen>
                    <Stack.Screen name="Nine">
                        {({navigation})=><Nine navigation={navigation}/>}
                    </Stack.Screen>
                    <Stack.Screen name="Eight">
                        {({navigation})=><Eight navigation={navigation}/>}
                    </Stack.Screen>
                    <Stack.Screen name="Seven" title="nineteen">
                        {({navigation})=><Seven navigation={navigation}/>}
                    </Stack.Screen>
                    <Stack.Screen name="Six">
                        {({navigation})=><Six navigation={navigation}/>}
                    </Stack.Screen>
                    <Stack.Screen name="Five">
                        {({navigation})=><Five navigation={navigation}/>}
                    </Stack.Screen>
                    <Stack.Screen name="Four">
                        {({navigation})=><Four navigation={navigation}/>}
                    </Stack.Screen>
                    <Stack.Screen name="Three">
                        {({navigation})=><Three navigation={navigation}/>}
                    </Stack.Screen>
                    <Stack.Screen name="Second">
                        {({navigation})=><Second navigation={navigation}/>}
                    </Stack.Screen>             
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}