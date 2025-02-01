import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
