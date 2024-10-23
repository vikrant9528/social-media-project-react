import { useContext } from "react";
import Post from "../components/Post"
import { Postlist as PostListData} from '../store/Post-list-store'
import Welcomemessage from "./Welcomemessage";
const Postlist = () =>{
 const {postList , addInitialPost } = useContext(PostListData);
  const handleGetPostsClick =  () => {
    fetch('https://dummyjson.com/posts')
    .then((res) => res.json())
    .then((data) =>{
      addInitialPost(data.posts);
      console.log(data.posts)
    });
  };
  return(
    <>
    { postList.length===0 && <Welcomemessage onGetPostsClick={handleGetPostsClick}/>}
    {postList.map((post) => (
      <Post key={post.id} post={post}/>
    ))}
    </>
  );
}
export default Postlist;