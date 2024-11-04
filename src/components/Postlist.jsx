import Post from "../components/Post"
import { Postlist as PostListData} from '../store/Post-list-store'
import Welcomemessage from "./Welcomemessage";
import { useLoaderData } from "react-router-dom";
const Postlist = () =>{
  const postList = useLoaderData();

  return(
    <>
    {/* { fetching && <Loadingspinner/>} */}
    { postList.length===0 && <Welcomemessage/>}
    { postList.map((post) => (
      <Post key={post.id} post={post}/>
    ))}
    </>
  );
}

export const postLoader = () => {
  return fetch('https://dummyjson.com/posts')
  .then((res) => res.json())
  .then((data) =>{
   return data.posts
  });
}
export default Postlist;