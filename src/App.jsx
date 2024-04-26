import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import PostListProvider from "./store/posts-item";

function App() {
  const [selectedTab, setselectedTab] = useState("Home");

  return (
    <>
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab} />
        <div className="content">
          <Navbar />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
      </PostListProvider>
    </>
  );
}

export default App;
