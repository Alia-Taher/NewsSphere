import { useContext, useEffect, useMemo } from "react";
import { NewsContext } from "../context/NewsContext";
import { useParams } from "react-router-dom";

const NewsByCategory = () => {
  const { categoryName } = useParams();

  const { byCategory, getNewsByCategory, loading, error } =
    useContext(NewsContext);

  useEffect(() => {
    if (!byCategory[categoryName]) {
      // If category news is not already cached
      const fetchCategory = async () => {
        await getNewsByCategory(categoryName, false);
      };
      fetchCategory();
    }
  }, [categoryName, byCategory, getNewsByCategory]);

  //Memoize category news to prevent unnecessary re-renders
  const categoryNews = useMemo(() => {
    return byCategory[categoryName?.toLowerCase()] || [];
  }, [byCategory, categoryName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching news</div>;
  }

  return (
    <div className="by-category-page">
      <h1>
        Latest on{" "}
        {categoryName
          ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
          : "News"}
      </h1>
      <div className="news-grid">
        {categoryNews.map((article, index) => (
          <div key={index} className="news-item">
            {article.urlToImage && (
              <div className="article-image">
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="article-image"
                />
              </div>
            )}
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))}
      </div>
      <button onClick={() => getNewsByCategory(categoryName, true)}>
        Load More
      </button>
    </div>
  );
};
export default NewsByCategory;
