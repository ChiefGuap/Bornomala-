import React from 'react'
import {Stack} from "expo-router";

const Authlayout = () => {
  return (
    <Stack>
        <Stack.Screen name="Register" options={{headerShown: false}}/>
    </Stack>
  )
}

export default Authlayout
