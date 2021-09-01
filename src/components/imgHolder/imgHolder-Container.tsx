import { compose } from "redux"
import { connect } from 'react-redux'
import { AppStateT } from "../../redux/redux-store"
import { requestPhotos } from "../../redux/photosMars-reduser"
import ImgHolder from "./imgHolder"

let mapStateToProps = (state: AppStateT) => ({
  photos: state.photosMars.photos,
  curentSearch: state.photosMars.curentSearch,
  isFetching: state.photosMars.isFetching,
})

export default compose<React.ComponentType>(
  connect (mapStateToProps, {requestPhotos})
) (ImgHolder)