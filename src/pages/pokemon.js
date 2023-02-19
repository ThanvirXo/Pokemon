

import Head from "next/head";

import Link from "next/link";

import { AiFillDelete} from 'react-icons/ai';



import { api } from "../utils/api";

// import { ObjectId } from "bson";



const pokemon=()=>{

  const utils=api.useContext();
  const {data,isLoading,isFetching}=api.createPokemon.listall.useQuery({})
  
  
  

  const events=!isLoading?data.pokemons:[]
 
  const deletepokemon=api.createPokemon.deletepokemon.useMutation({
    onSettled:()=>{
      utils.createPokemon.listall.invalidate()
    }
   })
 
 
  
   

    return(
    <>
    <Head>
  <title>
    Pokemon | Pokemon's
  </title>
 </Head>
    



{/* 
{!isLoading && events.length === 0 && 
    <>      
    <div className="mt-20 tc b f4 i">
    <p>No Pokemons available,Click the button below to create one</p>
    <Link href="/createPokemon" className="inline-block mt-8 bg-black text-white font-bold py-2 px-4 rounded-lg uppercase tracking-wider hover:bg-green-900">Create Pokemon</Link>
    </div>
    
  </>
}

<div className="grid grid-cols-3 gap-4 mt-8">
{isLoading?

  <>
  <div className="bg-inherit ml-4 shadow-md rounded-lg p-4 ba border-black animate-pulse ">
    <div className="rounded-full bg-gray-300 h-32 w-32 mx-auto mb-4 animate-pulse" />
  <h2 className="text-lg font-bold mb-2 f2 tc pa4"></h2>
  </div>
  </>


:events.map(pokemon=>{
  return(
    <>
    
    <div className="bg-inherit ml-4 shadow-md rounded-lg p-4 ba border-black" key={pokemon.id}>
  <img src={pokemon.url} alt="Card 1" class="mb-4 w-50 h-50 rounded-full mx-auto" />
  <h2 className="text-lg font-bold mb-2 f2 tc pa2">{pokemon.name}</h2>
  <div className="tc">
    <p onClick={()=>{
      deletepokemon.mutate({id:pokemon.id})
    }} className="pointer inline-block mt-2 bg-black text-white font-bold py-2 px-4 rounded-lg uppercase tracking-wider hover:bg-red-700"><AiFillDelete/></p>
    </div>
  
  
</div>


     </>
  )
})
}
  </div> */}

  {isLoading && events.length ===0 &&
  <>
  <div className="mt-20 tc b f4 i">
    <p>No Pokemons available,Click the button below to create one</p>
    <Link href="/createPokemon" className="inline-block mt-8 bg-black text-white font-bold py-2 px-4 rounded-lg uppercase tracking-wider hover:bg-green-900">Create Pokemon</Link>
    </div>
 
  </>
  }
  <div className="grid grid-cols-3 gap-2 mt-10 pa3">
  {isLoading?
    <>
    <div className="tc max-w-xs rounded overflow-hidden shadow-lg ba">
      <img className="w-full h-50 bb border-white"/>
      <div className="px-6 py-4">
      <p className="text-white f3"></p>
        <div className="font-bold font-mono f4 mb-2 pa2 text-lime-400"></div>
      </div>
      <div className="tc">
    <p className="pointer inline-block mt-2 bg-white text-black font-bold py-2 px-4 rounded-lg uppercase tracking-wider hover:bg-red-700"><AiFillDelete/></p>
    </div>
    </div>
    
    </>
  :events.map(pokemon=>{
    return(
      <div className="tc max-w-xs rounded overflow-hidden shadow-lg ba">
      <img className="w-full h-50 bb border-white" src={pokemon.url} alt="" />
      <div className="px-6 py-4">
      <p className="text-white f3">Pokemon Name:</p>
        <div className="font-bold font-mono f4 mb-2 pa2 text-lime-400"> {pokemon.name}</div>
      </div>
      <div className="tc">
    <p onClick={()=>{
      deletepokemon.mutate({id:pokemon.id})
    }} className="pointer inline-block mt-2 bg-white text-black font-bold py-2 px-4 rounded-lg uppercase tracking-wider hover:bg-red-700"><AiFillDelete/></p>
    </div>
    </div>
    )
  })
  }


  </div>
    </>
    );

 }

 


export default pokemon;

