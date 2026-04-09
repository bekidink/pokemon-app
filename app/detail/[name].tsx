import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useDetail } from '@/hooks/useDetail'
import { ActivityIndicator } from 'react-native-paper'
import DetailHero from '@/components/pokemon/DetailHero'

const PokemonDetail = () => {
    const {name}=useLocalSearchParams<{name:string}>()
    const {data,isLoading}=useDetail(name)
    if(isLoading || !data) return <ActivityIndicator/>
  return (
    <View className='flex-1 bg-white'>
      <ScrollView bounces={false}>
<DetailHero pokemon={data}/>
      </ScrollView>
    </View>
  )
}

export default PokemonDetail