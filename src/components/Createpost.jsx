import { useContext, useRef } from "react";
import {Postlist} from "../store/Post-list-store";

const CreatePost = () =>{

const { addPost } = useContext(Postlist)

const userIdElement = useRef();
const postTitleElement = useRef();
const postBodyElement = useRef();
const reactionsElement = useRef();
const tagsElement = useRef();


function handleSubmit(event){
 event.preventDefault();
 const userId = userIdElement.current.value;
 const postTitle = postTitleElement.current.value;
 const postBody = postBodyElement.current.value;
 const reactions = reactionsElement.current.value;
 const tags = tagsElement.current.value.split(' ')

 userIdElement.current.value="";
 postTitleElement.current.value="";
 postBodyElement.current.value="";
 reactionsElement.current.value="";
 tagsElement.current.value="";


 addPost(userId,postTitle,postBody,reactions,tags);
};


return(
  <form className="create-post" onSubmit={handleSubmit}>

<div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter your user Id jhere</label>
    <input type="text" className="form-control" id="userId" ref={userIdElement} placeholder="your user Id" />
    </div>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" className="form-control" id="title" ref={postTitleElement} placeholder="How are you feeling today" />
    </div>

    <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea  type="text" rows="4" className="form-control" ref={postBodyElement} id="body" placeholder="Tell us more about it" />
    </div>

    <div className="mb-3">
    <label htmlFor="reactions" className="form-label">No of Reactions</label>
    <input type="text" className="form-control" id="reactions" ref={reactionsElement} placeholder="How many people reacted to this post" />
    </div>

    <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
    <input type="text" className="form-control" id="tags" ref={tagsElement} placeholder="Please enter tags using space" />
    </div>

 
  <button type="submit" className="btn btn-primary">Post</button>
</form>
  );
}
export default CreatePost;