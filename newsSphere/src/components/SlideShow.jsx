import { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { NewsContext } from "../context/NewsContext";

const SlideShow = ({ category }) => {
  const { news, loading, error } = useContext(NewsContext);
  const generalNews = news[category] || "No news available";
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (generalNews.length <= 1) return;

    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % generalNews.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [generalNews]);

  return (
    <>
      {error && <div className="error">{error}</div>}
      {loading && <div>Loading news...</div>}
      <div className="slider">
        <a
          href={generalNews[currentSlide]?.url}
          className="slide-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
        <div className="slider-content">
          <h3>{generalNews[currentSlide]?.title}</h3>

          <p>{generalNews[currentSlide]?.description}</p>

          <img
            className="slider-img"
            src={generalNews[currentSlide]?.urlToImage}
            alt={generalNews[currentSlide]?.title}
          />
        </div>
      </div>
    </>
  );
};

SlideShow.propTypes = {
  category: PropTypes.string.isRequired,
};

export default SlideShow;
