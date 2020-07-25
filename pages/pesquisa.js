
import React from 'react'
import Link from 'next/link'

const Pesquisa = () =>{
   const save = async() =>{
      //alert(1)//test
      const form ={
         Nome: 'aaa',
         Email: 'bbb',
         Whatsapp: 'ccc'
      }
      try{
         const response = await fetch('/api/save', {
            method: 'POST',//POST=>for salvar
            body: JSON.stringify(form)//JSON.stringfy()=>body String
         })
         const data = await response.json()
         console.log(data)
      }catch(err){

      }//with try{}catch(err){}=>no quebra pagina
   }
   return (
      <div className='pt-6'>
         <h1 className='text-center font-bold my-4 text-2xl'>Críticas e sugestões</h1>
         <p className='text-center mb-6'>
            O restaurante X sempre busca por atender melhor seus clientes.<br/>
            Por isso, estamos sempre abertos a ouvir a sua opinião.
         </p>
         <div className='w-1/5 mx-auto'>
            <label className='font-bold'>Seu nome:</label>
            <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded'/>
            <button className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Salvar</button>
         </div>                      
      </div>
   )
}

export default Pesquisa
//className='pt-6' <=>para afastar topo
//<label> <=>identificar onde está campo escrever
//className='w-1/5' <=>para aumentar tamanho
//className='mb-6' <=>espaço parte baixo
//className='block' <=>para deixar um abaixo do outro
//className='w-1/5 mx-auto' <=>para centralizar e colocar embaixo do outro na pagina

/*
           <div className='w-1/5 mx-auto'>
              <label className='font-bold'>Seu e-mail:</label>
              <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded'/>
           </div>
           <div className='w-1/5 mx-auto'>
              <label className='font-bold'>Whatsapp:</label>
              <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded'/>
           </div>
           <div className='w-1/5 mx-auto'>
              <label className='font-bold'>Crítica e/ou sugestão:</label>
              <input type='text' className='p-10 block shadow bg-blue-100 my-2 rounded'/>
           </div>
*/