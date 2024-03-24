import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/post";
import Search from "./pages/search";
import Profile from "./pages/profile";
import BottomNavigationBar from "./BottomNavigationBar";

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
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <BottomNavigationBar></BottomNavigationBar>
      </div>
    </Router>
  );
}

export default App;