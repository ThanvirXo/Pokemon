import z from 'zod';
export const createPokemonSchema=z.object({
    name:z.string().min(1).max(20),
    url:z.string().min(1)
})

export type createPokemonInput=z.TypeOf<typeof createPokemonSchema>