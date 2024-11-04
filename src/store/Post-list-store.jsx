import { createContext, useReducer , useState , useEffect} from "react";

export const Postlist = createContext({
  postList : [],
  addPost:()=>{},
  deletePost:()=>{},
});

const postLIstReducer = (currPostList , action) => {
  let newPostList = currPostList;
  if(action.type === 'DELETE_POST'){
    newPostList = currPostList.filter(post => post.id !== action.payload.postId)
  }else if(action.type === 'ADD_INITIAL_POSTS'){
    newPostList = action.payload.posts;
  }
  else if(action.type === 'ADD_POST'){
    newPostList = [action.payload,...currPostList]
  }
  return newPostList;
}

const PostListProvider = ({children}) =>{
  const [ postList , dispatchPostList ]=useReducer( postLIstReducer , [])

 
  const addPost = (post) => {
    dispatchPostList({
      type: 'ADD_POST',
      payload:post,
    })
  }

  const addInitialPost = (posts) => {
    dispatchPostList({
      type: 'ADD_INITIAL_POSTS',
      payload:{
       posts:posts
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: 'DELETE_POST',
      payload:{
        postId,
      }
    })
  }

  
 
  return <Postlist.Provider
    value={
      {
      postList : postList,
      addPost : addPost,
      deletePost : deletePost,
      }
      }> {children}
  </Postlist.Provider>
}

export default PostListProvider;