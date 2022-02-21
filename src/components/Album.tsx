import { Link } from "react-router-dom"
import { AlbumProps } from "../types/AlbumProps"

type AlbumType = {
   data: AlbumProps
}

export function Album({ data }: AlbumType) {
   return (
      <>
         <Link to={`/photos?albumId=${data.id}`}><div>{data.title}</div></Link>
      </>
   )
}