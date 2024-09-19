import React from 'react'
import {View, Text, Image} from "react-native";
import {images} from "../../constants"


const OnboardingTwo = () => {
    return (
        <View className="bg-primary w-full h-full justify-center">
            <View className="justify-center items-center">
                <Image
                    className="w-[322.67px] h-[294.88px]"
                    source={images.learningmore}
                    resizeMode="contain"
                />
            </View>
            <View>
                <Text className="w-full text-center text-black-100 text-2xl font-pbold mt-14">Many ways to Learn</Text>
                <Text className="text-gray-300 font-pmedium text-[15px] text-center mt-2 mx-2 leading-6">Take control of your learning and compete with others to show off your knowledge</Text>
            </View>
        </View>

    )
}
export default OnboardingTwo
