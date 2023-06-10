import { configureStore } from '@reduxjs/toolkit'
import ArticleReducer from './redux/ArticleSlice'

export default configureStore({
  reducer: {
    article: ArticleReducer, 
  }
})