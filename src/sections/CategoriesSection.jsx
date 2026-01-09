import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";

import catClothing from "../assets/images/cat-clothing.png";
import catElectronics from "../assets/images/cat-electronics.png";
import catFurniture from "../assets/images/cat-furniture.png";
import catKids from "../assets/images/cat-kids.png";
import catBeauty from "../assets/images/cat-beauty.png";
import catAccessories from "../assets/images/cat-accessories.png";
import catFoods from "../assets/images/cat-foods.png";
import catShoes from "../assets/images/cat-shoes.png";

function CategoriesSection() {
  const categories = [
    { title: "Clothing", image: catClothing },
    { title: "Electronics", image: catElectronics },
    { title: "Furniture", image: catFurniture },
    { title: "Kids", image: catKids },
    { title: "Beauty", image: catBeauty },
    { title: "Accessories", image: catAccessories },
    { title: "Foods", image: catFoods },
    { title: "Shoes", image: catShoes },
  ];

  return (
    <section className="categories-section mt-2">
      <div className="container">
        <h3 className="text-center mb-4 categories-section-title">
          Explore Our Categories
        </h3>

        <div className="row g-3 justify-content-center">
          {categories.map((cat, idx) => (
            <div className="col-6 col-md-3" key={idx}>
              <Link
                to={`/shop?category=${encodeURIComponent(cat.title)}`}
                style={{ textDecoration: "none" }}
              >
                <CategoryCard title={cat.title} image={cat.image} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
