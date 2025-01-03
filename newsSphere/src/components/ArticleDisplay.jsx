import PropTypes from "prop-types";

export const ArticleDisplay = ({ article }) => {
  const {
    title,
    urlToImage,
    author,
    description,
    content,
    url,
    loading,
    error,
  } = article;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>There was an error. Please try again later</div>;
  }

  return (
    <div>
      <div className="article-display">
        <h1>{title}</h1>
        <div className="article-image">
          <img src={urlToImage} alt={title} />
        </div>
        <p className="description-article">{description}</p>
        <p className="content">{content}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
        <p className="author">
          <strong>Author:</strong> {author}
        </p>
      </div>
    </div>
  );
};

ArticleDisplay.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    urlToImage: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
    loading: PropTypes.bool,
    error: PropTypes.bool,
  }).isRequired,
};
