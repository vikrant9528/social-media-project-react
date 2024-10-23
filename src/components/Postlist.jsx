import { useContext, useEffect, useState } from "react";
import Post from "../components/Post"
import { Postlist as PostListData} from '../store/Post-list-store'
import Welcomemessage from "./Welcomemessage";
import Loadingspinner from "./Loadingspinner";
const Postlist = () =>{
 const {postList , addInitialPost } = useContext(PostListData);
const[ fetching , setFetching ] = useState(false);



  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch('https://dummyjson.com/posts',{signal})
    .then((res) => res.json())
    .then((data) =>{
      addInitialPost(data.posts);
      setFetching(false);
    });
    return () => {
      console.log('killing useeffect running requests');
      // controller.abort();
    };
  },[])

  return(
    <>
    { fetching && <Loadingspinner/>}
    { !fetching && postList.length===0 && <Welcomemessage/>}
    { !fetching && postList.map((post) => (
      <Post key={post.id} post={post}/>
    ))}
    </>
  );
}
export default Postlist;