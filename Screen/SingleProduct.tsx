import { View, Text, Image, ScrollView, TouchableOpacity, Modal, TextInput } from 'react-native'
import rncStyles from 'rncstyles'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
export default function SingleProduct({ navigation, route }: any) {
    let [model,setmodel]=useState(false)
    let obj = route.params
    return <>
        <ScrollView>
            <View style={[rncStyles.flexCenter, rncStyles.m2, rncStyles.h100, rncStyles.bgWhite]}>
                <Image source={{ uri: obj.image }} resizeMode='contain' style={{ width: '100%', height: 300 }} />
                <View style={[rncStyles.py2]}>
                    <Text style={[rncStyles.textCenter, rncStyles.fs5]}>{obj.title}</Text>
                </View>
                <View>
                    <Text >{obj.description}</Text>
                </View>
                <View style={[rncStyles.py2]}>
                    <Text style={[rncStyles.textCenter, rncStyles.fs3, rncStyles.textBold]}>RS:{obj.price}</Text>
                </View>



                <View style={[rncStyles.w100, rncStyles.flexCenter, rncStyles.py3]}>
                    <View style={[rncStyles.w40, rncStyles.border1, rncStyles.flexCenter, rncStyles.rounded, rncStyles.bgDanger, { height: 40 }]}>

                        <TouchableOpacity style={[]} onPress={()=>setmodel(true)}>
                            <Text style={[rncStyles.textCenter, rncStyles.textWhite, rncStyles.fs5]}>Add To Card</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        </ScrollView>


        <Modal
            transparent={true}
            visible={model}

        >


            <View style={[rncStyles.h100, rncStyles.bgWhite]}>

                                
                                    <TouchableOpacity onPress={()=>setmodel(false)}>
                                        <Text style={[rncStyles.fs4,{textAlign:"right",color:"red"}]}><Icon name="cancel" size={30} style={[rncStyles.textEnd,]}/></Text>
                                    </TouchableOpacity>
                               
            <View style={[rncStyles.flexCenter]}>
                            </View>



                <View style={[rncStyles.h100, rncStyles.p2, rncStyles.justifyContentCenter]}>
                    <View>
                        <Text style={[
                            rncStyles.textStart,
                            rncStyles.fs1,
                            rncStyles.textBold,
                            rncStyles.mb1]}>

                            {obj.title}
                        </Text>


                    </View>
                    <ScrollView>
                        <View>

                            <View style={rncStyles.mb2}>
                                <TextInput placeholder='Enter Your Name' style={[rncStyles.border1,rncStyles.rounded,rncStyles.textBlack]} />
                            </View>

                            <View style={rncStyles.mb2}>
                                <TextInput placeholder='Email' keyboardType='email-address' style={[rncStyles.border1,rncStyles.rounded,rncStyles.textBlack]}/>
                            </View>

                            <View style={rncStyles.mb2}>
                                <TextInput placeholder='Phone No' keyboardType='name-phone-pad' style={[rncStyles.border1,rncStyles.rounded,rncStyles.textBlack]}/>
                            </View>

                            <View style={rncStyles.mb2}>
                                <TextInput placeholder='Address' style={[rncStyles.border1,rncStyles.rounded,rncStyles.textBlack]}/>
                
                            </View>


                            <View style={rncStyles.mb2}>
                                <TextInput placeholder='Product Name' style={[rncStyles.border1,rncStyles.rounded,rncStyles.textBlack]}/>
                
                            </View>

                            <View style={rncStyles.mb2}>
                                <TextInput placeholder='quantity' keyboardType='phone-pad' style={[rncStyles.border1,rncStyles.rounded,rncStyles.textBlack]}/>
                
                            </View>

                            <View style={[rncStyles.flexCenter]}>
                                <View style={[rncStyles.flexCenter,rncStyles.w40,rncStyles.m2, rncStyles.py1,rncStyles.bgInfo,rncStyles.rounded]}>
                                    <TouchableOpacity >
                                        <Text style={[rncStyles.textWhite,rncStyles.fs4]}>Send</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                          



                        </View>


                    </ScrollView>



                </View>


            </View>

        </Modal>

    </>
}