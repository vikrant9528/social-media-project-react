function Welcomemessage({ onGetPostsClick }){
  return(
    <center className="welcomeMessage">
    <h1>There are no posts</h1>
    <button type="button" className="btn btn-primary" onClick={onGetPostsClick}>Get Posts from Server</button>
    </center>
  );
}
export default Welcomemessage