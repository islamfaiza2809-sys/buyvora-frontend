import coll1 from "../assets/images/coll1.png";
import coll2 from "../assets/images/coll2.jpg";
import coll3 from "../assets/images/coll3.png";

function FeaturedCollectionsSection() {
  return (
    <section className="featured-collections mt-5 py-5">
      <div className="container text-center">
        <h3 className="text-center mb-4 featuredcollection-section-title">
  Featured Collections
</h3>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="coll-card"><img src={coll1} alt="Collection 1" /></div>
            <h5 className="mt-2">Fashion</h5>
          </div>
          <div className="col-md-4">
            <div className="coll-card"><img src={coll2} alt="Collection 2" /></div>
            <h5 className="mt-2">Home Essentials</h5>
          </div>
          <div className="col-md-4">
            <div className="coll-card"><img src={coll3} alt="Collection 3" /></div>
            <h5 className="mt-2">Tech & Gadgets</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCollectionsSection;
