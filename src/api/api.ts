import axios from "axios"
import { DataRequestApiT, PhotoT } from './../types'

type GetphotosMarsApiT = {
  photos: PhotoT[]
}

export const photosMarsAPI = {
  get (dataRequestApi: DataRequestApiT, errorCallBeck: (error: string)=>void, key='DEMO_KEY') {
    return axios.get<GetphotosMarsApiT>(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${dataRequestApi.rover}/photos?sol=${dataRequestApi.sol}&page=${dataRequestApi.page}&camera=${dataRequestApi.camera}&api_key=${key}`
    ).then(response => {
      return (response.data.photos as PhotoT[])
    })
    .catch(err => {
      console.error(err)
      errorCallBeck(''+err)
    })
  },
}