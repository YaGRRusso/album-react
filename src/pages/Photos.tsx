import { api } from '../api';
import { useEffect, useState } from 'react';
import { Photo } from '../components/Photo'
import { useSearchParams } from 'react-router-dom';

function Photos() {
   const [photos, setPhotos] = useState([]);
   const [loading, setLoading] = useState(false)
   const [params, setParams] = useSearchParams();
   let albumId = params.get('albumId')

   useEffect(() => {
      loadPhotos();
   }, [])

   async function loadPhotos() {
      setLoading(true)
      try {
         if (albumId) {
            let json = await api.getPhotos(albumId);
            setPhotos(json)
         }
         setLoading(false)
      } catch (error) {
         alert(error)
         setLoading(false)
      }
   }

   return (
      <div className='flex items-center justify-center flex-wrap'>
         {
            loading &&
            <div>Carregando...</div>
         }

         <div className='text-2xl w-full text-center mt-10'>Id do Album: {albumId}</div>
         <div className='text-sm w-full text-center mb-10'>Total de Imagens: {photos.length}</div>
         {
            photos.map((item, index) => (
               <div key={index} className='p-5 border-2 m-3 cursor-pointer hover:border-gray-400 text-center'><Photo data={item} /></div>
            ))
         }
      </div>
   )
}

export default Photos;