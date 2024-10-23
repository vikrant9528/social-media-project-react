import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Createpost from "./components/Createpost"
import Postlist from "./components/Postlist"
import Sidebar from "./components/Sidebar";
import PostListProvider from "./store/Post-list-store";
function App() {
  let [ selectedTab , setSelectedTab ]=useState("Home");
  return (
    <PostListProvider>
    <div className="app-container">
  <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
  <div className="content">
   <Header/>
   {selectedTab === "Createpost" ?<Createpost/>:<Postlist/>}
   <Footer/>
   </div>
   </div>
   </PostListProvider>
  )
}

export default App
