import {  View} from 'react-native'
import React from 'react'
import {Text} from "react-native-paper"
const HomeHeader = () => {
  return (
    <View className='bg-gray-400 px-6 pt-4 pb-8 rounded-b-[40px]'>
      <View className='flex-row items-baseline mt-4'>
      <Text  variant='headlineLarge' className='text-white font-bold tracking-tight'>
        Who are you {"\n"}
        <Text className='font-light'>looking for?</Text>
      </Text>

      </View>
    </View>
  )
}

export default HomeHeader