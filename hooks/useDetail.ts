import { pokemonService } from "@/services/pokemon"
import { useQuery } from "@tanstack/react-query"

export const useDetail=(name:string)=>{
    return useQuery({
        queryKey:['pokemon',name],
        queryFn:()=>pokemonService.getByName(name),
        enabled:!!name
    })
}