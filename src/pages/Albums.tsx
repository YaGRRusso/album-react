import { api } from '../api';
import { useEffect, useState } from 'react';
import { Album } from '../components/Album';

function Albums() {
   const [albums, setAlbums] = useState([]);
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      loadAlbums();
   }, [])

   async function loadAlbums() {
      try {
         let json = await api.getAlbums();
         setAlbums(json)
      } catch (error) {
         alert(error)
      }
   }

   return (
      <div className='flex items-center justify-center flex-wrap'>
         {
            loading &&
            <div>Carregando...</div>
         }

         <div className='text-2xl w-full text-center m-10'>Total de Posts: {albums.length}</div>
         {
            albums.map((item, index) => (
               <div key={index} className='w-96 p-5 border-2 m-3 cursor-pointer hover:border-gray-400 text-center'><Album data={item} /></div>
            ))
         }
      </div>
   )
}

export default Albums;