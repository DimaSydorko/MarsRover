import "./imgHolder.css"
import React from "react"
import { DataRequestApiT, PhotoT } from "../../types"
import { Button } from "antd"

type PropsT = {
  photos: PhotoT[]
  isFetching: boolean
  curentSearch: DataRequestApiT
  requestPhotos: (
    dataRequestApi:DataRequestApiT,
    isLoadMore:boolean,
  ) => void
}

const ImgHolder:React.FC<PropsT> = React.memo(({photos, isFetching, curentSearch, requestPhotos}) => {
  function Puginator() {
    if (curentSearch && photos.length > 24) {
      return <Button onClick={()=>{
        curentSearch.page++
        requestPhotos(curentSearch, true)
      }}>
        Load more...
      </Button>
    }
  }

  function Content() {
    if (isFetching) return <div>Loading...</div>
    else if (photos.length) {
      return <>
        <div className="Img-Container">
          {photos.map(p => <img 
            key={p.id} 
            src={p.img_src} 
            alt={p.earth_date} 
            className='img'
            />)}
        </div>
          {Puginator()}
      </>
    }
    else return <>
      Please enter data for search.
      {Puginator()}
    </>
  }

  return<>
    <div className='Content-Container'>
      {Content()}
    </div>
  </>
})

export default ImgHolder