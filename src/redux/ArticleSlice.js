import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'




export const fetshArticle= createAsyncThunk(
    'article/fetshArticle',
    async ()=>{
        const response = await axios.get('http://localhost/b2rAPis/fetshArticles.php',{
            headers: {
            "Content-Type": "multipart/form-data"
        }});
        return response.data
    }
)
  

export const ArticleSlice = createSlice({
  name: 'article',
  initialState: {
    data:[],
    status : null ,
  },
  reducers: {
   

  },
  extraReducers:{
    [fetshArticle.fulfilled] : (state , {payload})=>{
        state.data=payload;
        state.status="Succes"
    } ,
    [fetshArticle.pending] : (state)=>{
        state.status="loading"
    } ,
    [fetshArticle.rejected] : (state)=>{
        state.status="failed"
    } 

  }
})


export default ArticleSlice.reducer