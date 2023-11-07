import { useState } from "react";
import { View, Text, Pressable, background} from "react-native";

const data:{name:string; background:string}[]=[
    {name: 'Zahra', background:'#7fffd4', age:19},
    {name: 'Venera', background:'#dcdcdc', age:18},
    {name: 'Turkan', background:'#90ee90', age:30},
    {name: 'Nijat', background:'#ffa07a', age:25},
    {name: 'Aytac', background:'#dda0dd', age:47},
    {name: 'Amin', background:'#f5deb3', age:15},
    {name: 'Gulten', background:'#dcdcdc', age:28},
]

function Clickk (){
    const [person, setPerson]= useState<{name:string;background:string}>({})

return (
    <View style={{flex:1}}>
        <View style={{flex:0.8, padding:10}}>
            <View style={{height:200, borderRadius:10, backgroundColor:person?.background ?? 'purple', elevation:2, alignItems:"center", justifyContent:"center"}}>
                <Text style={{fontSize:30, color:'black', marginLeft:5,}}>
                    {person?.name ?? 'unknown'}
                </Text>
                <Text style={{fontSize:50, color:'black', marginLeft:5, alignSelf:"center"}}>
                    {person?.age ?? 'unknown'}
                </Text>
            </View>
        </View>
        <View style={{flex:0.2, alignItems:'center'}}>
            <Pressable
                onPress={()=>{
                    setPerson(data[Math.random()* data.length|0])
                }}
                style={{height:30, width:100, backgroundColor:'black', justifyContent:'center', alignItems:"center", padding:3, borderRadius:3, elevation:3}}android_ripple={{color:person, background}}>
                <Text style={{color:'white', fontSize:12}}>
                    {'Random'}
                </Text>
            </Pressable>
        </View>
    </View>
)
}
export default Clickk