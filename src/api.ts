import axios from 'axios'

const http = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
   getAlbums: async () => {
      let response = await http.get('/albums')
      return response.data;
   },
   getPhotos: async (albumId: string) => {
      let response = await http.get(`/photos?albumId=${albumId}`)
      return response.data;
   },
   getPhoto: async (photoId: string) => {
      let response = await http.get(`/photos?id=${photoId}`)
      return response.data;
   },
}

//let json = await api.getAbc();