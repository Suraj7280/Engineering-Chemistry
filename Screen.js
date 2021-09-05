import React, {Component} from 'react';
import {View,Text,ScrollView,Image,StyleSheet, TouchableOpacity} from 'react-native';




export default class Screen extends Component{

    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <ScrollView>
            <View>
                <Text style={{fontSize:60,fontWeight:'bold',left:"2%"}}>
                    E<Text style={{fontSize:30,}}>xplore</Text>
                </Text>
            </View>
            <View style={{flex:1,alignItems:'center',justifyContent:"center",height: 150,width: 355,backgroundColor: 'salmon',zIndex: 99,left:"1%",borderRadius:10,marginTop:3 }}>
                <Text style={{fontSize:21,color:"white",fontWeight:'bold'}}>One of the ways to learn is to know when you're making failures—Robert Genn</Text>
            </View>
            <View>
                <Text style={{left:"3%",fontSize:30,fontWeight:'bold',marginTop:3}}>
                NOTES
                </Text>  
            </View>
            <View style={{flex:3,marginTop:3,left:"1%",flexDirection: "row",}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Unit1")}>
                <Image source={require('./1.png')} style={{height:100,width:100,borderRadius:10,left:"1%"}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Unit2")}>
                <Image source={require('./2.png')} style={{height:100,width:100,borderRadius:10,left:"8%"}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Unit3")}>
                <Image source={require('./3.png')} style={{height:100,width:100,borderRadius:10,left:"15%"}} />
            </TouchableOpacity>
            </View>
            <View style={{flex:2,marginTop:3,left:"1%",flexDirection: "row",}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Unit4")}>
                <Image source={require('./4.png')} style={{height:100,width:100,borderRadius:10,left:"1%"}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Unit5")}>
                <Image source={require('./5.png')} style={{height:100,width:100,borderRadius:10,left:"8%"}} />
            </TouchableOpacity>
            </View>
            <View>
                <Text style={{left:"3%",fontSize:30,fontWeight:'bold',marginTop:3}}>
                Previous Year Paper
                </Text>  
            </View>
            <View style={{flex:3,marginTop:3,left:"1%",flexDirection: "row",}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Nine")}>
                <Image source={require('./2019.png')} style={styles.value} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Eight")}>
                <Image source={require('./2018.png')} style={styles.value} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Seven")}>
                <Image source={require('./2017.png')} style={styles.value} />
            </TouchableOpacity>
            </View>
            <View style={{flex:2,marginTop:3,left:"1%",flexDirection: "row",}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Six")}>
                <Image source={require('./2016.png')} style={styles.value} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Five")}>
                <Image source={require('./2015.png')} style={styles.value} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Four")}>
                <Image source={require('./2014.png')} style={styles.value} />
            </TouchableOpacity>
            </View>
            <View style={{flex:2,marginTop:3,left:"1%",flexDirection: "row",}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Three")}>
                <Image source={require('./2013.png')} style={styles.value} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Second")}>
                <Image source={require('./2012.png')} style={styles.value} />
            </TouchableOpacity>
            </View>
            </ScrollView>
            
        );
    
    }
}

const styles = StyleSheet.create({
    value :{
        height:100,
        width:100,
        borderRadius:10,
        marginLeft: '2%'
    }
    });
