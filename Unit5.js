import React from 'react';
import {View, Image,Dimensions, ScrollView} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

export default class Unit5 extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <ScrollView>
             <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/1.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/2.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/3.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/4.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/5.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/6.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/7.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/8.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/9.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/10.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/11.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/12.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/13.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/14.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/15.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/16.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            
           </ScrollView>
           
        )
    }
}