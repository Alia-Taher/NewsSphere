import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import ByCategory from "./pages/ByCategory";
import NewsProvider from "./context/NewsProvider";
import "./App.css";

function App() {
  return (
    <>
      <NewsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/article" element={<Article />} />

            <Route path="/category/:categoryName" element={<ByCategory />} />
          </Routes>
        </Router>
      </NewsProvider>
    </>
  );
}

export default App;
