import { createPokemonSchema } from "../../../schema/pokemon.schema";
import { createTRPCRouter, publicProcedure } from "../context";

import z from 'zod';


export const pokemonRouter=createTRPCRouter({
    createpokemon:publicProcedure
    .input(createPokemonSchema)
    .mutation(({input,ctx})=>{
        const {name,url}=input
        try{
            const pokemon=ctx.prisma.pokemon.create({
                data:{
                    name,
                    url,
                }
            })
            return pokemon
        }
        catch(error){
            console.log("error in creating pokemon")

        }
    }),
    listall:publicProcedure
    .query(async({ctx})=>{
        
            const {prisma}=ctx

        const pokemons=await prisma.pokemon.findMany()
    
        return {
            pokemons,
        };
        
        
    }),

    deletepokemon:publicProcedure
    .input(z.object({
        id:z.string(),
    })
    ).mutation(async({input,ctx})=>{
        const {id}=input;
        try{
            return await ctx.prisma.pokemon.delete({
                where:{
                    id,
                }
            });
        }
        catch(error){
            console.log(`error in deleting pokemon ${error}`);
        }
    })

// updatepokemon:publicProcedure
// .input(z.object({
//     id:z.string(),
//     name:z.string(),
// })).mutation(async({input,ctx})=>{
//     const {id,name}=input;
    
//     try{
//         return await ctx.prisma.pokemon.update({
//             where: {
//                 id,
//             },
//             data:name,
//         })
//     }
//     catch(error){
//         throw error;
//     }
// })
 })

