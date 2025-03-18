import { FaSearchPlus } from "react-icons/fa";
import "../TabButton/TabButton.css";
import TabButton from "../TabButton/TabButton";
import { Link } from "react-router-dom";
export default function Header() {
  const arrayMenu = [
    "What to cook",
    "Recipes",
    "Ingredients",
    "Occasions",
    "About Us",
  ];
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <div className="m-3">
            <Link to="/">
              <img
                src="./Lab_01/Group 9.png"
                alt=""
                style={{ cursor: "pointer" }}
              />
            </Link>
          </div>
          <form className="d-flex my-2 my-lg-0">
            <div className="position-relative" style={{ width: "350px" }}>
              <FaSearchPlus className="position-absolute top-50 start-0 translate-middle-y ms-2 text-secondary opacity-75" />
              <input
                className="form-control ps-5"
                type="text"
                placeholder="What would you like to cook?"
              />
            </div>
          </form>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav w-100 d-flex justify-content-center mt-2 mt-lg-0">
              {arrayMenu.map((menuItem, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className="nav-link active"
                    href="#"
                    aria-current="page"
                    to="/tn"
                  >
                    {menuItem}
                    <span className="visually-hidden">(current)</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="d-flex">
            <TabButton nameButton={"btn-1"}>Login</TabButton>
            <Link
              to="/Subscribe"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <TabButton nameButton={"btn-2 ms-2"}>Subscribe</TabButton>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
