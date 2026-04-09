import { View } from 'react-native'
import React from 'react'
import { ProgressBar, Text } from 'react-native-paper';
interface Stat{
    base_stat:number;
    stat:{
        name:string
    }
}
const StatsSection = ({stats}:{stats:Stat[]}) => {
    const getBarColor=(val:number)=>{
        if(val>100) return '#4ade80'
        if(val>60) return '#3b82f6'
        return '#fb7185'
    }
  return (
    <View className='mb-8'>

      <Text className='text-xl font-black text-slate-800 mb-5'>Base Stats</Text>
{stats.map((item)=>(
    <View key={item.stat.name} className='flex-row items-center mb-4'>
        <View className='w-24'>
<Text className='text-slate-400 font-bold text-[10px] uppercase tracking-wider'>{item.stat.name.replace('special-','Sp. ')}</Text>
        </View>
        <Text className='w-8 font-black text-slate-700 text-xs mr-3 text-right'>{item.base_stat}</Text>
   <View className='flex-1'>
    <ProgressBar progress={item.base_stat/200} color={getBarColor(item.base_stat)} className='h-2 rounded-full bg-slate-100'/>
   </View>
    </View>
))}
    </View>
  )
}

export default StatsSection