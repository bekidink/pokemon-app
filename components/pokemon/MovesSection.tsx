import { View, TouchableOpacity, Modal, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Divider, IconButton, Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

const MovesSection = ({moves}:{moves:any}) => {
    const topMoves=moves.slice(0,6)
    const [visible,setVisible]=useState(false)
  return (
    <View>
        <View className='flex-row justify-between items-center mb-5'>
      <Text className='text-xl font-black text-slate-800'>Moves</Text>
    <TouchableOpacity className='bg-slate-900 px-4 py-2 rounded-full active:opacity-80' onPress={()=>setVisible(true)}>
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
<Modal animationType='slide' visible={visible} onRequestClose={()=>setVisible(false)}>
    <SafeAreaView className='flex-1 bg-white'>
<View className='flex-row items-center justify-between px-4 py-4 border-b border-slate-100'>
    <Text className='text-xl font-black text-slate-800'>All Moves ({moves.length})</Text>
<IconButton icon={'close'} size={24} onPress={()=>setVisible(false)}/>
</View>
<FlatList data={moves} keyExtractor={(item)=>item.move.name} contentContainerStyle={{padding:20}} ItemSeparatorComponent={()=><Divider className='my-3 opacity-50'/>} 
renderItem={({item})=>(
    <View className='flex-row justify-between items-center'>
<Text className='text-slate-700 font-bold capitalize text-base'>{item.move.name.replace('-',' ')}</Text>
<Text className='text-slate-300 text-xs uppercase font-bold'>Lvl. --</Text>
    </View>
)}
showsVerticalScrollIndicator={false}
/>
    </SafeAreaView>

</Modal>
    </View>
  )
}

export default MovesSection