import React from 'react';
import {View, Image,Dimensions, ScrollView} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

export default class Seven extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <ScrollView>
            <View style={{flex:30,marginTop:3,left:"1%",flexDirection: "column",}}>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={380}
                       imageHeight={600}>
                <Image source={require('./2017/1.png')} style={{height:530,width:370,left:"0.5%",marginTop:1}} />   
            </ImageZoom>
            </View>
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={380}
                       imageHeight={600}>
                <Image source={require('./2017/2.png')} style={{height:530,width:370,left:"0.5%",marginTop:1}} />   
            </ImageZoom>
            </View> 
           </ScrollView>
           
        )
    }
}