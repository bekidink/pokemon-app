import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { TYPE_COLORS } from '@/constants/Colors'
import {Ionicons} from "@expo/vector-icons"
const DetailHero = ({pokemon}:any) => {
    const router=useRouter()
    const themeColor=TYPE_COLORS[pokemon.types[0].type.name]||'#607D8B'
  return (
    <View style={{backgroundColor:themeColor}} className='pt-12 pb-24 rounded-b-[45px]'>

     <View className='flex-row justify-between px-6 items-center'>
<TouchableOpacity onPress={()=>router.back()}>
    <Ionicons name='arrow-back' size={28} color={"white"}/>
</TouchableOpacity>
<Text className='text-white/60 font-black text-xl'>#{pokemon.id.toString().padStart(3,'0')}</Text>
     </View>
     <View className='px-8 my-6'>
<Text className='text-white text-4xl font-black capitalize tracking-tighter'>{pokemon.name}</Text>
    
    <View className='flex-row mt-3 gap-2'>
        {pokemon.types.map((t:any)=>(
            <View key={t.type.name} className='bg-white/20 px-4 py-1 rounded-full border border-white/10'>
                <Text className='text-white text-xs font-bold uppercase'>{t.type.name}</Text>
            </View>
        ))}
    </View>
     </View>
     <Image source={{uri:pokemon.sprites.other['official-artwork'].front_default}} className='w-64 h-64 self-center absolute -bottom-16 z-10' resizeMode='contain'/>
    </View>
  )
}

export default DetailHero