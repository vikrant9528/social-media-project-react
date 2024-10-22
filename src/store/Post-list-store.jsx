import { createContext, useReducer } from "react";

export const Postlist = createContext({
  postList : [],
  addPost:()=>{},
  deletePost:()=>{}
});

const postLIstReducer = (currPostList , action) => {
  let newPostList = currPostList;
  if(action.type === 'DELETE_POST'){
    newPostList = currPostList.filter(post => post.id !== action.payload.postId)
  }else if(action.type === 'ADD_POST'){
    newPostList = [action.payload,...currPostList]
  }
  return newPostList;
}

const PostListProvider = ({children}) =>{
  const [ postList , dispatchPostList ]=useReducer( postLIstReducer , DEFAULT_POSTLIST)
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
      deletePost : deletePost
      }
      }> {children}
  </Postlist.Provider>
}
const DEFAULT_POSTLIST = [{
  id:'1',
  title:'Going to mumbai',
  body:'Hi , friends i am going to mumbai by my fortuner',
  reactions:2,
  userId:'user-9',
  tags:['vacation','mumbai','Enjoying'],
},
{
  id:'2',
  title:'Pass ho bhai',
  body:'Hi , bhai mein pass hogya hun',
  reactions:5,
  userId:'user-10',
  tags:['vacation','mumbai','Enjoying'],
},
];
export default PostListProvider;