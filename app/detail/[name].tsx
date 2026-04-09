import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useDetail } from '@/hooks/useDetail'
import { ActivityIndicator } from 'react-native-paper'
import DetailHero from '@/components/pokemon/DetailHero'
import BreedingSection from '@/components/pokemon/BreedingSection'
import StatsSection from '@/components/pokemon/StatsSection'
import MovesSection from '@/components/pokemon/MovesSection'

const PokemonDetail = () => {
    const {name}=useLocalSearchParams<{name:string}>()
    const {data,isLoading}=useDetail(name)
    if(isLoading || !data) return <ActivityIndicator/>
  return (
    <View className='flex-1 bg-white'>
      <ScrollView bounces={false}>
<DetailHero pokemon={data}/>
<View className='px-6 pt-20 pb-10'>
    <BreedingSection height={data.height} weight={data.weight}/>
 <StatsSection stats={data.stats}/>
 <MovesSection moves={data.moves} />
</View>
     </ScrollView>
    </View>
  )
}

export default PokemonDetail