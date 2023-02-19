import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";



const Home: NextPage = () => {


  return (
   
    <>
        <Head>
      <title>
        Pokemon | Home
      </title>
     </Head>
    

<section className="bg-inherit">
  <div className="container mx-auto px-4 py-16">
    <div className="max-w-md mx-auto text-center">
      <h1 className="text-4xl font-bold font-serif text-lime-200">Welcome to Pokemon site</h1>
      <p className="mt-6 text-white text-xl font-sans">Here you can Create,Delete and add a sprite image of pokemon.Hope you have fun!</p>
      <Link href="/createPokemon" className="inline-block mt-8 bg-black text-white font-bold py-2 px-4 rounded-lg uppercase tracking-wider hover:bg-green-900">Get Started</Link>
    </div>
  </div>
</section>

        
    </>
  );
};

export default Home;
