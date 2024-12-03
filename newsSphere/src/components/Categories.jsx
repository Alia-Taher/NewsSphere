import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Categories = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(
    (category) => {
      navigate(`/category/${category}`);
    },
    [navigate]
  );

  return (
    <div className="categories-container">
      <ul className="categories">
        {[
          "business",
          "entertainment",
          "general",
          "health",
          "science",
          "sports",
          "technology",
        ].map((category) => (
          <button
            key={category}
            className="category"
            onClick={() => handleClick(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
