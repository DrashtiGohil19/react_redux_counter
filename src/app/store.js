import { configureStore } from '@reduxjs/toolkit'
import counterslice from '../features/counterslice'

export default configureStore({
  reducer: {
    counter:counterslice
  }
})