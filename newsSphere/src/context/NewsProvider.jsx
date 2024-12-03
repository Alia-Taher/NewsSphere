import { NewsContext } from "./NewsContext";
import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

/// eslint-disable-next-line no-undef
const API_KEY = import.meta.env.VITE_API_KEY;

const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "Technology",
];

//fetching data from the API
const fetchNewsAllCategories = async () => {
  try {
    const fetchedData = await Promise.all(
      categories.map(async (category) => {
        const query = encodeURIComponent(category);
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${query}&sortBy=relevancy&pageSize=10&apiKey=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Filter out articles with "[Removed]"
        const filteredArticles = data.articles.filter(
          (article) => !article.title.includes("[Removed]")
        );

        return { category, data: filteredArticles };
      })
    );

    const formattedData = fetchedData.reduce((acc, { category, data }) => {
      acc[category] = data;
      return acc;
    }, {});

    return formattedData;
  } catch (error) {
    console.error("Error fetching news for all categories:", error);
    throw new Error("Error fetching news for all categories");
  }
};

// fetch articles by category
const fetchNewsByCategory = async (category, page = 1) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${category}&pageSize=15&page=${page}&apiKey=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("API response:", data);

    return data.articles.filter(
      (article) => !article.title.includes("[Removed]")
    );
  } catch (error) {
    console.error("Error fetching news by category:", error);
    throw new Error("Error fetching news by category");
  }
};

const NewsProvider = ({ children }) => {
  const [news, setNews] = useState({});
  const [byCategory, setByCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [pageByCategory, setPageByCategory] = useState({});

  useEffect(() => {
    const getNews = async () => {
      try {
        const articles = await fetchNewsAllCategories();
        setNews(articles);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError(`Failed to fetch news ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  // fetch news by category
  const getNewsByCategory = useCallback(
    async (category, isLoadMore = false) => {
      const currentPage = isLoadMore ? (pageByCategory[category] || 1) + 1 : 1;

      try {
        setError(null);
        if (!isLoadMore) {
          // Reset state when revisiting a category
          setByCategory((prevByCategory) => ({
            ...prevByCategory,
            [category]: [], // Clear articles for the category
          }));
          setPageByCategory((prevPageByCategory) => ({
            ...prevPageByCategory,
            [category]: 1, // Reset page to 1
          }));
        }
        setLoading(true);

        const articles = await fetchNewsByCategory(category, currentPage);

        // Update state with fetched articles
        setByCategory((prevByCategory) => ({
          ...prevByCategory,
          [category]: isLoadMore
            ? [...(prevByCategory[category] || []), ...articles]
            : articles, // Append if loading more; replace otherwise
        }));

        if (isLoadMore) {
          setPageByCategory((prevPageByCategory) => ({
            ...prevPageByCategory,
            [category]: currentPage, // Update page number,
          }));
        }
        return articles;
      } catch (error) {
        console.error("Error fetching news by category:", error);
        setError(error.message || "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    },
    [byCategory, pageByCategory]
  );

  return (
    <>
      <NewsContext.Provider
        value={{
          news,
          byCategory,
          loading,
          error,
          getNewsByCategory,
          categories,
          currentArticle,
          setCurrentArticle,
        }}
      >
        {children}
      </NewsContext.Provider>
    </>
  );
};

NewsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NewsProvider;
