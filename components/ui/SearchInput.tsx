import { View, Text, Keyboard } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';
interface SearchInputProps{
    value:string;
    onChange:(text:string)=>void
}
const SearchInput = ({value,onChange}:SearchInputProps) => {
  return (
    <View className='px-6 -mt-7'>
      <Searchbar placeholder='eg pokemon' onChangeText={onChange} value={value} className='bg-white rounded-full shadow-md' iconColor='black' onClearIconPress={()=>Keyboard.dismiss()} />
    </View>
  )
}

export default SearchInput