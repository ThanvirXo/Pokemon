import { useState } from "react";

import { api } from "../utils/api";

const createPokemon=()=>{
    const create=api.createPokemon.createpokemon.useMutation()
    
    
    const[name,setName]=useState('');
    const[url,setUrl]=useState('');

    const resetForm = () => {
      setName('');
      setUrl('');
    };

    const handlePokemon=(e)=>{
      e.preventDefault()
        create.mutate({name,url})
        if(name.length<=0 || url.length<=0){
          alert("Please fill in all fields")
        }
        resetForm()
        
    }

    return(
        <div className="w-full max-w-xs mx-auto">
  <form className="bg-inherit shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-20 ba border-black" onSubmit={handlePokemon}>
    <div className="mb-4">
      <label className="block text-lime-200 font-bold mb-2 tc font-serif" htmlFor="name">
        Pokemon Name
      </label>
      <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Pikachu" 
    value={name} onChange={(e)=>setName(e.target.value)} />
    </div>
    <div className="mb-6">
      <label className="block text-lime-200 font-bold mb-2 tc" htmlFor="url">
        Sprite link
      </label>
      <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="url" type="url" placeholder="sprite link" 
     value={url} onChange={(e)=>setUrl(e.target.value)} />
    </div>
    <div className="tc">
      <button className="ba border-black bg-black hover:bg-green-700 text-lime-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
        Add Pokemon
      </button>
      {create.isSuccess && <p className="pa2 f3 text-black b">Pokemon created successfully!</p>}
    </div>
  </form>
</div>
    );  
}
export default createPokemon;