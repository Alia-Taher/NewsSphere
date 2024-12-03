import { useContext } from "react";
import PropTypes from "prop-types";
import { NewsContext } from "../context/NewsContext";

const NewsFragment = ({ category, handleClickedArticle, articles }) => {
  const { loading, error } = useContext(NewsContext);
  
  return (
    <>
      {error && <div className="error">{error}</div>}
      <div className={`news-fragment ${category}`}>
        {loading && <div>Loading news...</div>}
        <div>
          {articles &&
            articles.map((article) => (
              <div
                key={article.title}
                onClick={() => handleClickedArticle(article)}
              >
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <img
                  className="fragment-img"
                  src={article.urlToImage}
                  alt={article.title}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
NewsFragment.propTypes = {
  category: PropTypes.string,
  articles: PropTypes.array,
  handleClickedArticle: PropTypes.func,
};

export default NewsFragment;
