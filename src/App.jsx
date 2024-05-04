import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import PostListProvider from "./store/posts-item";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
    <PostListProvider>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
      </PostListProvider>
    </>
  );
}

export default App;
