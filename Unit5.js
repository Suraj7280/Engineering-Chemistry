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
                <Image source={require('./C5/a.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/b.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/c.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/d.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/e.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/f.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/g.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/h.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/i.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/j.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/k.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/l.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/m.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/n.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/o.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            <View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={360}
                       imageHeight={580}>
                <Image source={require('./C5/p.png')} style={{height:260,width:355,}} />   
            </ImageZoom>
            </View> 
            
           </ScrollView>
           
        )
    }
}