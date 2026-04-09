import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const DetailSkeleton = () => {
  return (
    <ScrollView className='flex-1 bg-white' bounces={false}>
      <View className='bg-slate-200 h-80 rounded-b-[45px] items-center justify-end pb-10'>
      <View className='absolute top-12 left-6 w-10 h-10 bg-slate-200 rounded-full '/>
      <View className='absolute top-12 right-6 w-16 h-6 bg-slate-200 rounded-full '/>
   <View className=' w-48 h-10 bg-slate-200 rounded-full mb-4'/>
   <View className='flex-row gap-2'>
<View className=' w-20 h-6 bg-slate-200 rounded-full '/>
<View className=' w-20 h-6 bg-slate-200 rounded-full '/>

   </View>
   <View className='absolute -bottom-16 left-6 w-56 h-56 bg-slate-200 rounded-full border-8 border-white '/>
</View>
<View className='px-6 pt-24'>
    <View className='w-32 h-6 bg-slate-100 rounded-md mb-4'/>
    <View className='h-28 bg-slate-50 rounded-3xl mb-8 border border-slate-100'/>
    <View>
        {[...Array(4)].map((_,i)=>(
            <View key={i} className='flex-row items-center mb-5'>
<View className='w-20 h-3 bg-slate-100 rounded-full mr-4'/>
<View className='flex-1 h-2 bg-slate-50 rounded-full'/>
            </View>
        ))}
    </View>
<View/>
</View>
    </ScrollView>
  )
}

export default DetailSkeleton