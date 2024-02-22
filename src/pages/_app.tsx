import React, { useState, useEffect } from "react";
import type { AppProps } from 'next/app'
import Head from "next/head";
import '../styles/bootstrap.min.css'
import '../styles/style.css'
//import '../styles/responsive.css'
import '../styles/font-awesome.min.css'
import '../styles/globals.css'
import Layout from '../Components/layout';
import {
 
  QueryClient,
  QueryClientProvider, Hydrate
} from '@tanstack/react-query'



export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  const [queryClient] = useState(() => new QueryClient());
  return  <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
        <Layout><Component {...pageProps} /> </Layout> 
       </Hydrate>
  
      </QueryClientProvider>
      
     
    </>
}