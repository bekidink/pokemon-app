import { View, Text } from 'react-native'
import React from 'react'

const BreedingSection = ({height,weight}:any) => {
  return (
    <View className='p-2'>
      <Text className='text-xl font-black text-slate-800 mb-4'>Breeding</Text>
    <View className='flex-row bg-slate-50 rounded-xl px-5 py-3 justify-around border border-slate-100 mb-8'>
<View className='items-center'>
    <Text className='text-slate-400 text-[12px] font-bold uppercase mb-1'>Height</Text>
<Text className='text-slate-800 font-bold'>{height/10} m</Text>
</View>
<View className='w-[2px] bg-slate-200'/>
<View className='items-center'>
 <Text className='text-slate-400 text-[12px] font-bold uppercase mb-1'>Weight</Text>
<Text className='text-slate-800 font-bold'>{weight/10} kg</Text>

</View>
    </View>
    </View>
  )
}

export default BreedingSection