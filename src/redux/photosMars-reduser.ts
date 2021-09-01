import { DataRequestApiT } from './../types'
import { photosMarsAPI } from "../api/api"
import { PhotoT } from "../types"
import { BaseThunkT, InferActionsT } from "./redux-store"

type ActionsT = InferActionsT<typeof actions>
type ThunkT = BaseThunkT<ActionsT>
export type InitialaseStateT = typeof initialaseState

let initialaseState = { 
  photos: [] as PhotoT[],
  cameras: [
    {
      label: "Front Hazard Avoidance Camera",
      value: "fhaz",
    },
    {
      label: "Rear Hazard Avoidance Camera",
      value: "rhaz",
    },
    {
      label: "Mast Camera",
      value: "mast",
    },
    {
      label: "Chemistry and Camera Complex",
      value: "chemcam",
    },
    {
      label: "Mars Hand Lens Imager",
      value: "mahli",
    },
    {
      label: "Mars Descent Imager",
      value: "mardi",
    },
    {
      label: "Navigation Camera",
      value: "navcam",
    },
    {
      label: "Panoramic Camera",
      value: "pancam",
    },
    {
      label: "Miniature Thermal Emission Spectrometer",
      value: "minites",
    },
  ],
  rovers: [
    {
      label: "Curiosity",
      value: "curiosity",
    },
    {
      label: "Opportunity",
      value: "opportunity",
    },
    {
      label: "Spirit",
      value: "spirit",
    },
  ],
  currentPage: 1 as number,
  isFetching: false as boolean,
  curentSearch: null as DataRequestApiT | null,
  error: '',
}

const photosMarsReduser = (state = initialaseState, action: ActionsT): InitialaseStateT => {
  switch (action.type) {
    case 'SET_PHOTOS':
    case 'SET_CURRENT_SEARCH':
    case 'SET_ERROR':
    case 'TOGGLE_IS_FECHING': {
      return {...state, ...action.peyload}
    }
    case 'SET_MORE_PHOTOS': {
      return {
        ...state,
        photos: state.photos.concat(action.photos),
        error: '',
      }
    }
    default:
      return state
  }
}

export const actions = {
  setPhotos: (photos: PhotoT[]) => ({type: 'SET_PHOTOS', peyload:{photos, error: ''}} as const),
  setMorePhotos: (photos: PhotoT[]) => ({type: 'SET_MORE_PHOTOS', photos} as const),
  setCurrentSearch: (curentSearch: DataRequestApiT) => ({type: 'SET_CURRENT_SEARCH', peyload:{curentSearch}} as const),
  toggleIsFeching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FECHING', peyload:{isFetching}} as const),
  setError: (error: string) => ({type: 'SET_ERROR', peyload:{error}} as const),
}

export const requestPhotos = (dataRequestApi: DataRequestApiT, isLoadMore=false):ThunkT => {
  return async (dispatch) => {
    dispatch(actions.toggleIsFeching(true))
    dispatch(actions.setCurrentSearch(dataRequestApi))

    function setErrorCB(error: string) {
      dispatch(actions.setError(error))
    }
    
    const data = await photosMarsAPI.get(dataRequestApi, setErrorCB)
    if (data) {
      isLoadMore 
      ? dispatch(actions.setMorePhotos(data as PhotoT[]))
      : dispatch(actions.setPhotos(data as PhotoT[]))
    }
    dispatch(actions.toggleIsFeching(false))
  }
}

export default photosMarsReduser