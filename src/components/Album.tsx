import { AlbumProps } from "../types/AlbumProps"

type AlbumType = {
   data: AlbumProps
}

export function Album({ data }: AlbumType) {
   return (
      <>
         <div>{data.title}</div>
      </>
   )
}