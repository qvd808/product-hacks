import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/post";
import Search from "./pages/search";
import Notification from "./pages/notification";
import Profile from "./pages/profile";
import BottomNavigationBar from "./BottomNavigationBar";
import Test from "./pages/Test";
import Post2 from "./pages/post2";
import PostAPost from "./pages/postAPost";

function App() {
  return (
    <Router>
      {" "}
      <div className="App">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="/search" element={<Search />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/test" element={<Test />} />
            <Route path="/post2" element={<Post2 />} />
            <Route path="/postApost" element={<PostAPost />} />
          </Routes>
        </main>
        <BottomNavigationBar></BottomNavigationBar>
      </div>
    </Router>
  );
}

export default App;
