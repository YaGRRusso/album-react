import { PhotosProps } from "../types/PhotosProps"

type PhotosType = {
   data: PhotosProps
}

export function Album({ data }: PhotosType) {
   return (
      <>
         <div>{data.title}</div>
      </>
   )
}