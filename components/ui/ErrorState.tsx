import { View } from "react-native";
import {Ionicons} from "@expo/vector-icons"
import { Button, Text } from "react-native-paper";
interface ErrorStateProps{
    message?:string;
    onRetry?:()=>void;
}

export const ErrorState=({
    message="we couldn't reach the PokeAPI",
    onRetry

}:ErrorStateProps)=>{
return (
    <View className="flex-1 items-center justify-center p-8 bg-white">
        <View className="bg-rose-50 rounded-full p-6 mb-6">
<Ionicons name="cloud-offline-outline" size={48} color={'#f43f5e'}/>
        </View>
        <Text variant="headlineSmall" className="font-black text-slate-800 text-center mb-2">OOps! connection lost</Text>
    <Text className="text-slate-500 text-center mb-8 leading-5">{message} please check your internet connection and try again</Text>
    {onRetry && (
        <Button mode="contained" onPress={onRetry} className="bg-slate-100 rounded-xl px-4 py-1" labelStyle={{
            fontWeight:'bold',fontSize:14
        }}>
Try Again
        </Button>
    )}
    </View>
)
}