import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import HomeHeader from '@/components/pokemon/HomeHeader'
import SearchInput from '@/components/ui/SearchInput'
import { pokemonService } from '@/services/pokemon'
import { useList } from '@/hooks/useList'
import { ActivityIndicator } from 'react-native-paper'
import PokemonCard from '@/components/pokemon/PokemonCard'

const Home = () => {
    const [searchQuery,setSearchQuery]=useState("")
    const {data,isLoading,error,refetch,isRefetching}=useList()
    if(isLoading) {
      return  <ActivityIndicator/>
    }
    if(!data) return null
console.log("console",data)
// const filteredResults=data?.filter(p=>p.name.includes(searchQuery.toLocaleLowerCase()))??[]
    return (
    <View className='flex-1 '>
      <HomeHeader/>
      <SearchInput value={searchQuery} onChange={setSearchQuery}/>
      <View className='flex-1 bg-white rounded-t-[40px] mt-6 shadow-2xl'>
<FlatList data={data} numColumns={2} keyExtractor={(item)=>item.name} renderItem={({item})=><PokemonCard pokemon={item} />} onRefresh={refetch} refreshing={isRefetching} contentContainerStyle={{
    paddingHorizontal:12,paddingTop:24,paddingBottom:40
}} showsVerticalScrollIndicator={false} ListEmptyComponent={
    <Text>{searchQuery?`No Pokemon found for ${searchQuery}`:"Loading your collection"}</Text>
}/>
      </View>
    
    </View>
  )
}

export default Home