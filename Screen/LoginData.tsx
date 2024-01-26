import {View,Text, TextInput,TouchableOpacity} from 'react-native'
import rncStyles from 'rncstyles'
export default function Login (){
    return<>
    

<View style={[rncStyles.h100,rncStyles.bgWhite]}>
    <View 
    style={[rncStyles.h100,
    rncStyles.justifyContentCenter]}>


    <View style={[]}>
        <Text style={[rncStyles.textPrimary,
        rncStyles.fs1 , 
        rncStyles.textSecondary,
         rncStyles.textBold,
         rncStyles.mb1,
         rncStyles.textCenter
        
        
        ] }>
            Login 

        </Text>

    </View>

    <View style={[rncStyles.py2,
         rncStyles.textCenter,
         ]}>
        
        <Text style={[rncStyles.p2]}>
            Email
        </Text>
        <TextInput placeholder='Email'
         keyboardType='email-address'
         style={[rncStyles.border3,rncStyles.border1,rncStyles.rounded,rncStyles.mx2]}
         
         />

    </View>


    <View style={[rncStyles.textCenter]}>
        
        <Text style={[rncStyles.p2]}>
            Password
        </Text>
        <TextInput  placeholder='Enter Password atleast 6 characters'
        
         secureTextEntry
         style={[rncStyles.border3,rncStyles.border1,rncStyles.rounded,rncStyles.mx2]}

         value=''
         />

    </View>
    <View  style={[rncStyles.py2]}>
    <TouchableOpacity>


        <Text style={[rncStyles.textCenter,{color:"blue"}]}>
            Creat A Account!
        </Text>


    </TouchableOpacity>
    </View>

    <View style={[rncStyles.w100, rncStyles.flexCenter]}>


    <View style={[
         rncStyles.w30,
         rncStyles.border1,
         rncStyles.bgPrimary,
         rncStyles.rounded,
         {height:40},
         rncStyles.flexCenter,
         rncStyles.alignItemsCenter
         
         ]}> 
        <TouchableOpacity >
<Text style={[rncStyles.textCenter,rncStyles.textWhite]}>Login</Text>
        </TouchableOpacity>


    </View>



    </View>
    </View>

</View>
    
    </>
}