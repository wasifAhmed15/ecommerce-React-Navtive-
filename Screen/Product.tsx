import axios from "axios"
import {Text,View,TouchableOpacity, ScrollView, Image,Modal, TextInput} from "react-native"
import { useEffect } from "react"
import { useState } from "react"
import rncStyles from "rncstyles"
export default function Product ({navigation}:any){
    let [data,setdata]=useState<any>([])
    const getdata= ()=>{
    axios
    .get("https://fakestoreapi.com/products").then((res)=>{
        // console.log(res.data)

        setdata([...res.data])
    }).catch((err)=>{
        console.log(err)
    })
}

    useEffect(()=>{
        getdata()

    },[])
    return <>

    <View style={[rncStyles.textCenter,rncStyles.my-5]}>
        <Text>Produc</Text>
        <ScrollView>
            {
                data.map((x:any,Index:any)=>{
                 return  <TouchableOpacity onPress={()=>{
                    navigation.navigate('SingleProduct',x)
                 }}>
                    <View style={[rncStyles.bgWhite,rncStyles.rounded, rncStyles.shadow3,rncStyles.flexCenter,rncStyles.m2]}>
                        <Image source={{uri:x.image}} style={{width:200,height:200}} resizeMode="contain"/>
                        <Text numberOfLines={1}>
                            {x.title}
                        </Text>
                        


                    </View>

                   </TouchableOpacity>
                })
                
            }
            
        </ScrollView>

    </View>






    
  

    </>
}