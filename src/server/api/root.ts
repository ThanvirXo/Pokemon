
import { createTRPCRouter } from "./context";


import { pokemonRouter } from "./routers/pokemon.router";



/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  createPokemon:pokemonRouter,
  
});

// export type definition of API
export type AppRouter = typeof appRouter;
