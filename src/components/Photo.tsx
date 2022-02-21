import { Link } from "react-router-dom"
import { PhotosProps } from "../types/PhotosProps"

type PhotosType = {
   data: PhotosProps
}

export function Photo({ data }: PhotosType) {
   return (
      <>
         <Link to={`/display/${data.id}`}>
            <div>
               <img src={data.thumbnailUrl} alt="imagem" />
               <p>{data.title.substring(0, 15)}</p>
            </div>
         </Link>
      </>
   )
}