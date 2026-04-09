import { pokemonService } from "@/services/pokemon"
import { useQuery } from "@tanstack/react-query"

export const useList=()=>{
    return useQuery({
        queryKey:['pokemon','list'],
        queryFn:()=>pokemonService.getList()
    })
}