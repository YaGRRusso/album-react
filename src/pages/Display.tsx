import { api } from '../api';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { PhotosProps } from '../types/PhotosProps';

function Photos() {
   const [photoInfo, setPhotoInfo] = useState<PhotosProps>();
   const [loading, setLoading] = useState(false)
   const params = useParams()

   console.log(params.id)

   useEffect(() => {
      if (params.id) {
         loadPhotos(params.id);
      }
   }, [])

   async function loadPhotos(id: string) {
      setLoading(true)
      try {
         if (id) {
            let json = await api.getPhoto(id);
            setPhotoInfo(json)
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

         <div className='flex items-center justify-center my-10 w-full flex-col lg:flex-row'>
            <img src={photoInfo?.url} alt={photoInfo?.title} className='w-11/12 mx-3 sm:w-auto' />
            <div className='flex-1 flex items-start justify-start flex-col mx-10'>
               <p className='text-2xl font-bold my-3 uppercase max-w-md'>{photoInfo?.title}</p>
               <p className='text-lg'>Album: {photoInfo?.albumId}</p>
               <p className='text-lg'>Id: {photoInfo?.id}</p>
            </div>
         </div>
      </div>
   )
}

export default Photos;