import "./Subscribe.css";
const Subscribe = () => {
  return (
    <div className="subscription-container">
      <div className="header-nav">
        <div className="nav-links">
          <span className="nav-link">Recipes <span>{'>'}</span></span>
          <span className="nav-link active">Subscribe</span>
        </div>
      </div>

      <div className="subscription-main-content">
        <div className="subscription-card">
          <div className="subscription-info">
            <h2 className="exclusive-text">
              This recipe is exclusively available to subscribers
            </h2>

            <h1 className="headline">
              Join now to access effortless, hassle-free recipes
            </h1>

            <ul className="benefits-list">
              <li className="benefit-item">
                <div className="benefit-icon">✓</div>
                <span>20,000+ recipes for all tastes and skill levels</span>
              </li>
              <li className="benefit-item">
                <div className="benefit-icon">✓</div>
                <span>Filter by diets, cook times, and more</span>
              </li>
              <li className="benefit-item">
                <div className="benefit-icon">✓</div>
                <span>Personal recipe box for favorites</span>
              </li>
              <li className="benefit-item">
                <div className="benefit-icon">✓</div>
                <span>
                  Can purchase access to our subscriber-only results app
                </span>
              </li>
            </ul>

            <div className="price-section">
              <h2 className="price">0.25USD / week</h2>
              <p className="price-details">
                Billed as $1 every 4 weeks for the first year
              </p>
            </div>

            <button className="subscribe-button primary">SUBSCRIBE NOW</button>

            <p className="cancel-text">Cancel in Freemium Time</p>
          </div>

          <div className="image-container">
            <img
              src="/Lab_04/dish.png"
              alt="Collection of prepared dishes"
              className="food-image"
            />
          </div>
        </div>

        <div className="all-access-section">
          <h2 className="all-access-title">
            An All Access subscription includes
          </h2>

          <div className="features-container">
            <div className="feature-card">
              <h3 className="feature-title">Cooking</h3>
              <p className="feature-desc">
                Enjoy recipes, advice and inspiration for any occasion.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Wirecutter</h3>
              <p className="feature-desc">
                Explore independent reviews for thousands of products.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Games</h3>
              <p className="feature-desc">
                Unwind with Spelling Bee, Wordle, The Crossword.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">The Athletic</h3>
              <p className="feature-desc">
                Discover in-depth, personalized sports journalism.
              </p>
            </div>
          </div>
        </div>

        <div className="cooking-only-section">
          <div className="logo-container">
            <div className="chefify-logo">
              <div className="logo-icon">🍲</div>
              <h2 className="logo-text">Chefify</h2>
            </div>
          </div>

          <h2 className="cooking-only-title">
            Subscribe to Chefify Cooking only
          </h2>
          <p className="cooking-only-desc">
            Enjoy thousands of delicious recipes for every taste, plus advice
            and inspiration daily.
          </p>

          <div className="subscription-options">
            <label className="option-card">
              <input
                type="radio"
                name="subscription"
                value="monthly"
                defaultChecked
              />
              <div className="option-content">
                <span className="option-price">$2/month</span>
                <span className="option-details">(Billed every 4 weeks)</span>
              </div>
            </label>

            <label className="option-card">
              <input type="radio" name="subscription" value="annual" />
              <div className="option-content">
                <span className="option-price">$20/year</span>
                <span className="option-details">(Billed once annually)</span>
              </div>
            </label>
          </div>

          <button className="subscribe-button secondary">Subscribe Now</button>

          <p className="cancel-text">Cancel or Pause anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
