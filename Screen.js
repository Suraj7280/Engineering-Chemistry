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
                <Image source={require('./a.png')} style={{height:100,width:100,borderRadius:10,left:"1%"}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Unit2")}>
                <Image source={require('./b.png')} style={{height:100,width:100,borderRadius:10,left:"8%"}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Unit3")}>
                <Image source={require('./c.png')} style={{height:100,width:100,borderRadius:10,left:"15%"}} />
            </TouchableOpacity>
            </View>
            <View style={{flex:2,marginTop:3,left:"1%",flexDirection: "row",}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Unit4")}>
                <Image source={require('./d.png')} style={{height:100,width:100,borderRadius:10,left:"1%"}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Unit5")}>
                <Image source={require('./e.png')} style={{height:100,width:100,borderRadius:10,left:"8%"}} />
            </TouchableOpacity>
            </View>
            <View>
                <Text style={{left:"3%",fontSize:30,fontWeight:'bold',marginTop:3}}>
                Previous Year Paper
                </Text>  
            </View>
            <View style={{flex:3,marginTop:3,left:"1%",flexDirection: "row",}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Nine")}>
                <Image source={require('./aa.png')} style={styles.value} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Eight")}>
                <Image source={require('./bb.png')} style={styles.value} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Seven")}>
                <Image source={require('./cc.png')} style={styles.value} />
            </TouchableOpacity>
            </View>
            <View style={{flex:2,marginTop:3,left:"1%",flexDirection: "row",}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Six")}>
                <Image source={require('./dd.png')} style={styles.value} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Five")}>
                <Image source={require('./ee.png')} style={styles.value} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Four")}>
                <Image source={require('./ff.png')} style={styles.value} />
            </TouchableOpacity>
            </View>
            <View style={{flex:2,marginTop:3,left:"1%",flexDirection: "row",}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Three")}>
                <Image source={require('./gg.png')} style={styles.value} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Second")}>
                <Image source={require('./hh.png')} style={styles.value} />
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
