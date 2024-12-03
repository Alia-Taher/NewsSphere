import { NewsContext } from "../context/NewsContext";
import { useContext } from "react";
import SlideShow from "./SlideShow";
import SideBarNews from "./SideBarNews";
import NewsFragment from "./NewsFragment";
import { useNavigate } from "react-router-dom";

const NewsDisplay = () => {
  const { categories, news, setCurrentArticle, error } = useContext(NewsContext);
  const navigate = useNavigate();
console.log( 'news error', error);
  const [
    business,
    entertainment,
    general,
    health,
    science,
    sports,
    Technology,
  ] = categories;

  const handleClickedArticle = (article) => {
    setCurrentArticle(article);
    navigate("/article", { state: { articleData: article } });
  };

  return (
    <>
      <div className="home-display">
        <div className="slide-show">
          <SlideShow
            category={general}
            articles={news.general}
            handleClickedArticle={handleClickedArticle}
          />
        </div>
        <div className="side-bar">
          {news.business && (
            <SideBarNews
              key="business"
              category={business}
              articles={news.business}
              handleClickedArticle={handleClickedArticle}
            />
          )}

          <SideBarNews
            key={entertainment}
            category={entertainment}
            articles={news.entertainment}
            handleClickedArticle={handleClickedArticle}
          />

          <SideBarNews
            key={health}
            category={health}
            articles={news.health}
            handleClickedArticle={handleClickedArticle}
          />
        </div>
        <div className="fragments">
          <NewsFragment
            key={science}
            category={science}
            articles={news.science}
            handleClickedArticle={handleClickedArticle}
          />
          <NewsFragment
            key={sports}
            category={sports}
            articles={news.sports}
            handleClickedArticle={handleClickedArticle}
          />
          <NewsFragment
            key={Technology}
            category={Technology}
            articles={news.Technology}
            handleClickedArticle={handleClickedArticle}
          />
        </div>
      </div>
    </>
  );
};

export default NewsDisplay;
