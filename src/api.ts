import axios from 'axios'

const http = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
   getAlbums: async () => {
      let response = await http.get('/albums')
      return response.data;
   },
   getPhotos: async () => {
      let response = await http.get('/photos')
      return response.data;
   },
}

//let json = await api.getAlbums();