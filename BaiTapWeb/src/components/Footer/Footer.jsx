export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-4">
              <h3 className="h5 mb-3">About Us</h3>
              <p>
                Welcome to our website, a wonderful place to explore and learn
                how to cook like a pro.
              </p>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <button className="btn btn-danger">Send</button>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <h3 className="h5 mb-3">Learn More</h3>
              <ul className="list-unstyled">
                <li>Our Cooks</li>
                <li>See Our Features</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div className="col-md-3 mb-4">
              <h3 className="h5 mb-3">Shop</h3>
              <ul className="list-unstyled">
                <li>Gift Subscription</li>
                <li>Send Us Feedback</li>
              </ul>
            </div>

            <div className="col-md-3 mb-4">
              <h3 className="h5 mb-3">Recipes</h3>
              <ul className="list-unstyled">
                <li>What to Cook This Week</li>
                <li>Pasta</li>
                <li>Dinner</li>
                <li>Healthy</li>
                <li>Vegetarian</li>
                <li>Vegan</li>
                <li>Christmas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p>
            <img src="./Lab_02/chefifywhite.png" alt="" />
            &copy; 2023 Chefify Company
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </p>
        </div>
      </footer>
    </>
  );
}
