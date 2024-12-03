import { useContext } from "react";
import PropTypes from "prop-types";
import { NewsContext } from "../context/NewsContext";

const SideBarNews = ({ category, articles, handleClickedArticle }) => {
  const { loading, error } = useContext(NewsContext);

  return (
    <>
      {error && <div className="error">Error loading content</div>}
      <div className="side-bar-element">
        {loading && <div>Loading news...</div>}
        <div className="side-bar-title">Check out the Latest in {category}</div>
        {articles &&
          articles.map((article, index) => (
            <div
              key={article.title || index}
              onClick={() => handleClickedArticle(article)}
            >
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          ))}
      </div>
    </>
  );
};

SideBarNews.propTypes = {
  category: PropTypes.string,
  articles: PropTypes.array,
  handleClickedArticle: PropTypes.func,
};

export default SideBarNews;
