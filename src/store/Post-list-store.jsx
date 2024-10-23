import { createContext, useReducer } from "react";

export const Postlist = createContext({
  postList : [],
  addPost:()=>{},
  addInitialPost:()=>{},
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
  const addPost = (userId,postTitle,postBody,reactions,tags) => {
    dispatchPostList({
      type: 'ADD_POST',
      payload:{
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      }
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
      addInitialPost: addInitialPost
      }
      }> {children}
  </Postlist.Provider>
}

export default PostListProvider;