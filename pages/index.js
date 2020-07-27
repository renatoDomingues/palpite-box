
import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())//create a function, strategy (...args) that catches cada arguments passing another function

//Component=>
const Index = () => {
  const {data, error} = useSWR('/api/get-promo', fetcher)
  //return (<pre>{JSON.stringify(data)}</pre>)//if you are returning data
  return (
      <div>
          <p className='mt-12 text-center'>
            O restaurante X sempre busca por atender melhor seus clientes.<br/>
              Por isso, estamos sempre abertos a ouvir a sua opinião.
          </p>
          <div className='text-center my-12'>
            <Link href='/pesquisa'>
              <a className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Dar opinião ou sugestão</a>
            </Link>
          </div>
          {!data && <p>Carregando ...</p>}
          {!error && data && data.showCoupon &&
          <p className='my-12 text-center'>
              {data.message}
          </p>
          }
      </div>
    )
}//=>array function
/*
{!data && <p>Carregando ...</p>}
{data &&

}=> way of doing if React
*/
//export to out=>
export default Index

/*
SWR <=>e processado e carregado 1° no servidor;
Ou carregamento dos dados no cliente frontend, API "Application Programming Interface";
Instalar p SWR <=> npm install swr
*/
/*
 - to install json=> npm init -y
 - to install React, React Dom=> npm install react react-dom
 - to install framework next=> npm install next
 - to install services tailwind=> npm install tailwindcss
 - create a config file tailwind=> npx tailwindcss init
 - install the postcss, he going resolve import @import=> npm install postcss-import
 - install to help tailwind=> npm install autoprefixer
*/
//<br/> <=>pular line
//className='my-12' <=>abri o espaço em volta
//className='rounded-lg' <=>border arredondada