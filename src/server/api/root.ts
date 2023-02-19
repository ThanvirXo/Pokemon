
import { createTRPCRouter } from "./context";
import { exampleRouter } from "./routers/example";

import { pokemonRouter } from "./routers/pokemon.router";
import { userRouter } from "./routers/user.router";


/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example:exampleRouter,
  register:userRouter,
  createPokemon:pokemonRouter,
  
});

// export type definition of API
export type AppRouter = typeof appRouter;
