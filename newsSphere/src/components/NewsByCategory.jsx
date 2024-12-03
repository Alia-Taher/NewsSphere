import { useContext, useEffect, useMemo } from "react";
import { NewsContext } from "../context/NewsContext";
import { useParams } from "react-router-dom";

const NewsByCategory = () => {
  const { categoryName } = useParams();

  console.log("useParams categoryName:", categoryName);

  const { byCategory, getNewsByCategory, loading, error} =
    useContext(NewsContext);
   console.log(error, 'this is the error')

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

// import { useParams } from 'react-router-dom';
// import { useContext, useEffect, useMemo } from 'react';
// import { NewsContext } from '../context/NewsContext';

// const NewsByCategory = () => {
//   const { categoryName } = useParams();
//   const { byCategory, getNewsByCategory } = useContext(NewsContext);

//   // Memoize the logging to prevent re-logging on every render
//   const memoizedCategoryName = useMemo(() => {
//     console.log('useParams categoryName:', categoryName);
//     return categoryName;
//   }, [categoryName]);

//   // Use useEffect to fetch news only when category changes
//   useEffect(() => {
//     // Check if news for this category is not already loaded
//     if (!byCategory[memoizedCategoryName]) {
//       getNewsByCategory(memoizedCategoryName);
//     }
//   }, [memoizedCategoryName, byCategory, getNewsByCategory]);

//   // Memoize the news list
//   const categoryNews = useMemo(() => {
//     return byCategory[memoizedCategoryName] || [];
//   }, [byCategory, memoizedCategoryName]);

//   // Render logic
//   return (
//     <div>
//       <h1>{memoizedCategoryName.charAt(0).toUpperCase() + memoizedCategoryName.slice(1)} News</h1>
//       {categoryNews.map((news, index) => (
//         <div key={index}>
//           {/* Render news items */}
//           <h2>{news.title}</h2>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NewsByCategory;
