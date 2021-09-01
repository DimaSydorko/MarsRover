import { compose } from "redux"
import { connect } from 'react-redux'
import { AppStateT } from "../../redux/redux-store"
import { requestPhotos } from "../../redux/photosMars-reduser"
import Search from "./search"

let mapStateToProps = (state: AppStateT) => ({
  cameras: state.photosMars.cameras,
  rovers: state.photosMars.rovers,
  error: state.photosMars.error,
})

export default compose<React.ComponentType>(
  connect (mapStateToProps, {requestPhotos})
) (Search)