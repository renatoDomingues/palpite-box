
//to funcionar o talwindcss with next=>
import React from 'react'
import '../css/styles.css'//=>start do 0 do css "tailwindcss"
import Layout from '../components/layout'

const MyApp = ({Component, pageProps}) =>{
    return (
        <Layout>
             <Component {...pageProps}/>
        </Layout>
    )
}

/*
const MyApp = () =>{
    return <h1>MyApp</h1>
}
*/

export default MyApp
//<div className='container mx-auto'>=> centraliza