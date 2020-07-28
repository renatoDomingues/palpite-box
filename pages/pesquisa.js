
import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
   const [ form, setForm ] = useState({
      Nome: '',
      Email: '',
      Whatsapp: '',
      Nota: 5
   })
   const notas = [0, 1, 2, 3, 4, 5]
   const [ sucess, setSucess ] = useState(false)
   const [ retorno, setRetorno ] = useState({})

   const save = async () => {
      //return 1 //=>serve for no function
      try {
            const response = await fetch('/api/save', {
            method: 'POST',
            body: JSON.stringify(form)
         })
         const data = await response.json()
         setSucess(true)
         setRetorno(data)
         //console.log(data)
      } catch (err) {

      }
   }
   const onChange = evt => {
      //console.log(evt.target.value)
      const value = evt.target.value //fazer uma cache
      const key = evt.target.name 
      setForm(old => ({
         ...old,
         [key]: value
      }))
   }
   return (
      <div className='pt-6'>
         <PageTitle title='Pesquisa' />
         <h1 className='text-center font-bold my-4 text-2xl'>Críticas e sugestões</h1>
         <p className='text-center mb-6'>
            O restaurante X sempre busca por atender melhor seus clientes.<br/>
            Por isso, estamos sempre abertos a ouvir a sua opinião.
         </p>
         { !sucess &&
         <div className='w-1/5 mx-auto'>
            <label className='font-bold'>Seu nome:</label>
            <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Nome' onChange={ onChange } name='Nome' value={form.Nome}/>
            <label className='font-bold'>E-mail:</label>
            <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Email' onChange={ onChange } name='Email' value={form.Email}/>
            <label className='font-bold'>Whatsapp:</label>
            <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Whatsapp' onChange={ onChange } name='Whatsapp' value={form.Whatsapp}/>
            <label className='font-bold'>Notas:</label>
            <div className='flex py-6'>
            {notas.map(nota => {
               return (
                  <label className='block w-1/6 text-center'>
                  {nota} <br/>
                  <input type='radio' name='Nota' value={nota} onChange={onChange} />
                  </label>
               )
            })
            }
            </div>
            <button className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Salvar</button>
         </div>
         }
         { sucess && 
            <div className='w-1/5 mx-auto'>
            <p className='mb-6 text-center bg-blue-100 border-t border-blue-500 text-blue-700 px-4 py-3'>Obrigado por contribuir com sua sugestão ou crítica.</p>
            {
               retorno.showCoupon && 
               <div className='text-center border p-4 mb-4'>
                 Seu cupom: <br/>
                 <span className='font-bold text-2xl'>{retorno.Cupom}</span>
               </div>
            }
            {
               retorno.showCoupon && 
               <div className='text-center border p-4 mb-4'>
               <span className='font-bold block mb-2'>{retorno.Promo}</span>
               <br/>
               <span className='italic'>
               Tire um print ou foto desta tela e apresente ao garçon.
               </span>
               </div>
            }
            </div> 
         }                      
      </div>
   )
}

export default Pesquisa

//POST=>for salvar
//JSON.stringfy()=>body String
//with try{}catch(err){}=>no quebra pagina
//className='pt-6' <=>para afastar topo
//<label> <=>identificar onde está campo escrever
//className='w-1/5' <=>para aumentar tamanho
//className='mb-6' <=>espaço parte baixo
//className='block' <=>para deixar um abaixo do outro
//className='w-1/5 mx-auto' <=>para centralizar e colocar embaixo do outro na pagina
//alert(1)//test
//...old,=>//pega tudo formulario antigo e copia

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
           //for test=>
           <pre>
               {JSON.stringify(form, null, 2)}
            </pre>
*/