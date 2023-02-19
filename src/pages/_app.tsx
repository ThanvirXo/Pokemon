import { type AppType } from "next/app";

import { api } from "../utils/api";
import Layout from  '../../components/Layout';
import "../styles/globals.css";
import 'tachyons';
import ParticlesBg from "particles-bg";



const MyApp: AppType = ({ Component, pageProps }) => {

  return ( 
  <>
 
  <Layout>
  
<Component {...pageProps}/> 
</Layout>

  
</>
);
};

export default api.withTRPC(MyApp);
