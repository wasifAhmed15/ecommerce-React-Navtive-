import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../Screen/LoginData";
import HomeData from "../Screen/HomeScreen";
import Product from "../Screen/Product";
import SingleProduct from "../Screen/SingleProduct";

const stack = createNativeStackNavigator();

export default  function StackNavigator(){
    return<>
    <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name="Home" component={HomeData}/>
            <stack.Screen name="Login" component={Login}
            options={{
                headerShown:false
            }}
            
            />
            <stack.Screen name="Product" component={Product}/>
            <stack.Screen name = "SingleProduct" component={SingleProduct}/>
        </stack.Navigator>
    </NavigationContainer>
    
    </>

}