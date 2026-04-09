import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'

const MovesSection = ({moves}:{moves:any}) => {
    const topMoves=moves.slice(0,6)
  return (
    <View>
        <View className='flex-row justify-between items-center mb-5'>
      <Text className='text-xl font-black text-slate-800'>Moves</Text>
    <TouchableOpacity className='bg-slate-900 px-4 py-2 rounded-xl active:opacity-80'>
<Text className='text-white text-[10px] font-bold uppercase'>See All</Text>
    </TouchableOpacity>
    </View>
    <View className='flex-row flex-wrap gap-2'>
        {topMoves.map((m)=>(
            <View key={m.move.name} className='bg-slate-50 border border-slate-100 px-4 py-2 rounded-2xl'>
                <Text className='text-slate-600 text-xs font-semibold'>{m.move.name.replace('-',' ')}</Text>
            </View>
        ))}
    </View>
    </View>
  )
}

export default MovesSection