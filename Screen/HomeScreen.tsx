import {View,Text,TouchableOpacity, ScrollView, ImageBackground, Image} from 'react-native'
import rncStyles from "rncstyles"
import { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
export default function HomeData({navigation}:any){
   

    const imageCloth =[
    {
        image:"data:image/jpeg;base64,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"
    },
    {
        image:"data:image/jpeg;base64,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cp7HX8awwGV8RRAPcTVUCdWSGEREKREQEREBERATmTp//wASxYH59vqvOm5zn0+6N7RG0cQyYKtVSpVZ0qUkaopVjcZqOyeVj3QMOqKb3EpamxGZE9hei+0z/wDH4gf2qT/QFlK9FNpk/kmIH/TVvYSBKjw3oIPKe3slynhlOjE+me0egOPbNsJiT/hsPqlK9AtoA2XDYof4TEesiB5yUyPhXHmggT2U6B7W5Yet6aa/bKT0A20fJwrnz9Wv7TCB4uIQkdk5+Mpw1IgXP03mT4TdjtxtcOi/26tH+FjPbpbotqEZnCKbc61X+GkfpgYIl4qUVOoEzz/0W2mR+VYVT3L1pHrKS2m5ra4/9xgj53rfVRgjXdXADkPbPnbBVBp9U2oNz+0/zmC/za//AGJQ+6Pag0OFPmrVProiBq9BWHIy/TeocmBmwqm6rao0p0D5q/2qJQ+6raoF+qok9wri/outoGI7PqdtMj2XQj0MCJ1nOb8Fu92uaiBsEVHEt2NahYC+ZNnv6p0hIpERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//9k="
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvI_xr9Uu7QIxJS7JrWpP3nCoHM4fj1MM_xg&usqp=CAU"
    }
];

const imageElectronic=[
    {
        image:"https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        image:"https://media.istockphoto.com/id/172485535/photo/washing-machine.jpg?s=2048x2048&w=is&k=20&c=GINeWhBmz95XjeH0Y1tVA_UBoPgv0LoTu8Ctm0oDjC0="
    },

    {
        image:"https://www.aysonline.pk/wp-content/uploads/2023/11/6-250x250.png"
    },

    {
        image:"https://www.aysonline.pk/wp-content/uploads/2023/11/thumbnail-ays-46-1-250x250.jpg"
    },

    {
        image:"data:image/jpeg;base64,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"
    },

]

    return<>
    <View style={[rncStyles.h100, rncStyles.bgWhite]}>
    <ScrollView >
        <View style={[rncStyles.w100,rncStyles.flexRow,{height:40,backgroundColor:"#b4245d", }]}>
            <View style={[rncStyles.m1]}>

            <TouchableOpacity>
                <Text style={[rncStyles.textWhite , rncStyles.fs5]}>
                    E-Commerce
                </Text>
            </TouchableOpacity>
            </View>

          


            <View style={[rncStyles.flexRow,rncStyles.justifyContentEnd,{marginEnd:"auto"} ]}>



            <View style={[rncStyles.m1]}>
                
           <TouchableOpacity onPress={()=>{
            navigation.navigate('Home')
           }}>
         <Text style={[rncStyles.textWhite , rncStyles.fs5]}>
        Home
    </Text>
</TouchableOpacity>
</View>


<View style={[rncStyles.m1]}>
    
<TouchableOpacity onPress={()=>{
    navigation.navigate('Product')
}}>
    <Text style={[rncStyles.textWhite , rncStyles.fs5]}>
        Product
    </Text>
</TouchableOpacity>
</View>
            
           
            
            

        </View>

        <View style={[rncStyles.mt1]}>
        <TouchableOpacity onPress={()=>{
            navigation.navigate("Login")
        }}>
    <Text style={[rncStyles.textCenter , rncStyles.fs5,rncStyles.textWhite ]}>
        <Icon name="login" size={20}/>Login
    </Text>
</TouchableOpacity>



        </View>

    </View>


<View style={[rncStyles.py5]}>



<View style={{ height: 500 }}>
<ImageBackground source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPrdYhGxSz50ttZ-CcGEb6ZIIGZSMyb-LIWw&usqp=CAU"}}  resizeMode="cover" style={[rncStyles.w100,rncStyles.h100]}>
  <View style={[rncStyles.justifyContentCenter , rncStyles.alignItemsCenter,rncStyles.h100]}>
    <Text style={[rncStyles.fs1,rncStyles.textWhite]}>
        Start Shopping 50% Off
        
    </Text>

    <View style={[
         rncStyles.w30,
         rncStyles.border1,
        
         rncStyles.rounded,
         {height:40,backgroundColor:"#e8be92"},
         rncStyles.flexCenter,
         rncStyles.alignItemsCenter,
         rncStyles.py1

         
         ]}> 
        <TouchableOpacity >
<Text style={[rncStyles.textCenter,rncStyles.textWhite]}>Start Shopping</Text>
        </TouchableOpacity>


    </View>

  </View>
  </ImageBackground>

</View>


         </View>


 <View >
 <Text style={[rncStyles.textCenter,rncStyles.fs3,rncStyles.textBold ]}>Clothes iteams</Text>
 </View>
<ScrollView horizontal={true}>

<View style={[rncStyles.flexRow, rncStyles.py2]}>

   {
    imageCloth.map((x:any,Index:number)=>{
        return <View key={Index} style={[rncStyles.bgWhite,rncStyles.rounded,rncStyles.shadow3,rncStyles.m2]}>
            <TouchableOpacity>

             <Image resizeMode='contain' source={{uri:x.image }} style={{ width: 200, height: 200 }}/>
            </TouchableOpacity>

        </View>
    })
   }



</View>
</ScrollView>


<View style={[rncStyles.py5]}>
    <View style={[rncStyles.py3]}>
<Text style={[rncStyles.textCenter,rncStyles.fs3,rncStyles.textBold ]}>Electronic iteams</Text>

    </View>

    <ScrollView horizontal={true}>

        <View style={[rncStyles.flexRow]}>
            {
                imageElectronic.map((Imagedata:any,Index:any)=>{
                    return <View key={Index} style={[rncStyles.bgWhite,rncStyles.rounded,rncStyles.shadow3,rncStyles.m2]}>
                        
                        <Image resizeMode='contain' source={{uri:Imagedata.image}} style={{ width: 200, height: 200 }}/>
                    </View>
                })
            }

        </View>


    </ScrollView>
   

    
</View>

<View style={[rncStyles.flexCenter]}>


<View style={[rncStyles.flexCenter,rncStyles.w40,rncStyles.border1,rncStyles.py2,rncStyles.rounded,rncStyles.m2,{backgroundColor:"#e8be92"}]}>
    <TouchableOpacity onPress={()=>navigation.navigate('Product')}>
        <Text>View All Product...</Text>
    </TouchableOpacity>

</View>
</View>



    

    </ScrollView>
    </View>






    
    
    </>
}
{/* 
    <View >
        <Image resizeMode='contain' source={{uri:"" }} style={{ width: 200, height: 200 }}/>
    </View> */}


    // <ScrollView horizontal={true}>
    // <View style={[rncStyles.flexRow]}>
    //     {
    //         imageElectronic.map((Image:any,index:number)=>{
    //             return <View key={index}>
                
    //                     <Image resizeMode="contain" source={{uri:Image.image}} style={{ width: 200, height: 200 }}/>
                

    //             </View>
    //         })
    //     }

    // </View>