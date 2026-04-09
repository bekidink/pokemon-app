import { Dimensions, View } from "react-native";


const {width}=Dimensions.get('window')
const cardWidth=(width-48)/2
const SkeletonCard=()=>(
    <View style={{width:cardWidth}} className="m-2 bg-slate-50 rounded-2xl h-40 border border-slate-100 overflow-hidden">
<View className="absolute left-4 top-3 w-8 h-3 bg-slate-300 rounded-full"/>

<View className="w-20 h-20 bg-slate-300 rounded-full self-center mt-6"/>
<View className="w-16 h-4 bg-slate-300 rounded-full self-center mt-4"/>
    </View>
)

export const HomeSkeleton=()=>{
    return (
        <View className="flex-row flex-wrap justify-center px-2 pt-4">
{[...Array(6)].map((_,i)=>(
    <SkeletonCard key={i}/>
))}
        </View>
    )
}