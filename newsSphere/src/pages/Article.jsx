import { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArticleDisplay } from "../components/ArticleDisplay";
import { NewsContext } from "../context/NewsContext";
import { useLocation } from "react-router-dom";

const Article = () => {
  const { state } = useLocation();
  const { currentArticle } = useContext(NewsContext);

  const article = state?.article || currentArticle;

  if (!article) {
    return <div>No article found.</div>;
  }

  return (
    <div className="Article-display">
      <Navbar path="/" />
      <ArticleDisplay article={article} />
      <Footer />
    </div>
  );
};

export default Article;
