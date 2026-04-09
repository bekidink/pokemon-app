import { View, Text } from 'react-native'
import React, { useState } from 'react'
import HomeHeader from '@/components/pokemon/HomeHeader'
import SearchInput from '@/components/ui/SearchInput'

const Home = () => {
    const [searchQuery,setSearchQuery]=useState("")
  return (
    <View className='flex-1 '>
      <HomeHeader/>
      <SearchInput value={searchQuery} onChange={setSearchQuery}/>
    </View>
  )
}

export default Home