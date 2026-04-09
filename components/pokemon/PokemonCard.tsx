import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { memo } from 'react'
import { useRouter } from 'expo-router'

export default memo(function PokemonCard({pokemon}:any){
const router=useRouter()
const id=pokemon.url.split("/").filter(Boolean).pop()
const displayId=`#${id?.padStart(3,"0")}`
const imageUrl=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
 return (
  <TouchableOpacity
  activeOpacity={0.8}
  onPress={()=>router.push(`/detail/${pokemon.name}`)}
  accessibilityRole='button'
  accessibilityLabel={`View details for ${pokemon.name}`}
  className='flex-1 m-2'
  >
<View className='bg-white rounded-3xl p-5 items-center border border-slate-100 shadow-2xl'>
  <Text className='absolute left-4 top-3 text-slate-300 font-black italic'>{displayId}</Text>
  <Image source={{uri:imageUrl}} className='w-24 h-24 my-3' resizeMode='contain'/>
<Text className='text-sm font-bold uppercase tracking-tight'>{pokemon.name}</Text>
</View>
  </TouchableOpacity>
 )
})

