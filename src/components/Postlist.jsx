import { useContext } from "react";
import Post from "../components/Post"
import { Postlist as PostListData} from '../store/Post-list-store'
const Postlist = () =>{
 const {postList} = useContext(PostListData);
  return(
    <>
    {postList.map((post) => (
      <Post key={post.id} post={post}/>
    ))}
    </>
  );
}
export default Postlist;