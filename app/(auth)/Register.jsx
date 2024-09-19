import React, {useState} from 'react'
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, Platform} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {icons} from '../../constants'
import {Link} from "expo-router"

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <SafeAreaView className="bg-primary w-full h-full justify-center">
        <ScrollView 
        showsHorizontalScrollIndicator={false}
        className = "mx-2 mb-2"
            contentContainerStyle={{minHeight: "100%", justifyContent: "center"}}>
            <View className="w-full justify-center items-center mt-7">
                <Text className="text-2xl font-pbold text-secondary">Bornomala Sign Up</Text>
            </View>

            <View className="mt-6 rounded-3xl border-2 border-[#e7e7e7] flex-row items-center w-full h-[56px] px-4">
                <Image 
                    className="w-6 h-6"
                    resizeMode="contain"
                    source={icons.phone}/>
                <TextInput
                    className="flex-1 font-pmedium ml-2"
                    placeholder="Enter Phone Number"
                    keyboardType="number-pad"
                />
            </View>

            <View className="mt-6 rounded-3xl border-2 border-[#e7e7e7] flex-row items-center w-full h-[56px] px-4">
                <Image 
                    className="w-6 h-6"
                    resizeMode="contain"
                    source={icons.mail}/>
                <TextInput
                    className="flex-1 font-pmedium ml-2"
                    placeholder="Email Address"
                    keyboardType="email-address"
                />
            </View>

            <View className="mt-6 rounded-3xl border-2 border-[#e7e7e7] flex-row items-center w-full h-[56px] px-4">
                <Image 
                    className="w-6 h-6"
                    resizeMode="contain"
                    source={icons.lock}/>
                <TextInput
                    className="flex-1 font-pmedium ml-2"
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                />

                <TouchableOpacity onPress={()=> setShowPassword(!showPassword)}>
                    <Image 
                        resizeMode ="contain"
                        className="w-6 h-6"
                        source={!showPassword ? icons.eye : icons.eyeHide}/>
                </TouchableOpacity>
            </View>

            <View className="mt-6 rounded-3xl border-2 border-[#e7e7e7] flex-row items-center w-full h-[56px] px-4">
                <Image 
                    className="w-6 h-6"
                    resizeMode="contain"
                    source={icons.user}/>
                <TextInput
                    className="flex-1 font-pmedium ml-2"
                    placeholder="First Name"
                />
            </View>

            <View className="mt-6 rounded-3xl border-2 border-[#e7e7e7] flex-row items-center w-full h-[56px] px-4">
                <Image 
                    className="w-6 h-6"
                    resizeMode="contain"
                    source={icons.user}/>
                <TextInput
                    className="flex-1 font-pmedium ml-2"
                    placeholder="Last Name"
                />
            </View>
            

            <TouchableOpacity
                className = 'bg-secondary mt-5 flex-row p-3 rounded-full items-center justify-center'>
                    <Text className ="ml-3 text-lg text-white items-center justify-center">Submit</Text>
            </TouchableOpacity>

            <View className="w-full justify-end items-center pt-3 flex-row">
                <Text className="font-pregular text-gray-200">Already have an account? </Text>
                <Link href="/Login" className="text-lg text-secondary mx-2">Login</Link>
            </View>
            
        </ScrollView>
    </SafeAreaView>

        
  )
}

export default Register
