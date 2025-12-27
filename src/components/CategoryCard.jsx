function CategoryCard({ title, image }) {
  return (
    <div className="category-card">
      <img src={image} alt={title} />

      <div className="category-label">
        <h5>{title}</h5>
        <span>Shop Now</span>
      </div>
    </div>
  );
}

export default CategoryCard;
