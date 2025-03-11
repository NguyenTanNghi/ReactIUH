import "bootstrap/dist/css/bootstrap.min.css";
import { LuSearchCheck } from "react-icons/lu";
export default function Header() {
    const theLi = {
        color: "#4b4b4b",
        fontWeight: "500",
        fontSize: "16px",
        textTransform: "uppercase",
        transition: "color 0.3s ease"
    }
    return <>
        <div>
            <div>
                <nav
                    className="navbar navbar-expand-sm navbar-light bg-light"
                >
                    <div className="container-fluid">
                        <img
                            src="../public/image/Group 9.png"
                            className="img-fluid rounded-top"
                            alt="Group 9.png"
                            style={{ marginRight: "3%" }}
                        />
                        <form className="d-flex my-2 my-lg-0">
                            <div className="d-flex" style={{ position: "relative" }}>
                                <LuSearchCheck
                                    style={{
                                        position: "absolute",
                                        left: "10px",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        color: "#6c757d",
                                    }}
                                />
                                <input
                                    className="form-control me-sm-2"
                                    type="text"
                                    placeholder="What would you like to cook?"
                                    style={{
                                        width: "300px",
                                        paddingLeft: "30px",
                                        border: "1px solid #ced4da",
                                        borderRadius: "50px",
                                    }}
                                />
                            </div>
                        </form>
                        <div className="collapse navbar-collapse" style={{ paddingLeft: "7%" }}>
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item" style={{ marginRight: "20px" }}>
                                    <a
                                        className="nav-link"
                                        href="#"
                                        style={theLi}
                                    >
                                        What to cook
                                    </a>
                                </li>
                                <li className="nav-item" style={{ marginRight: "20px" }}>
                                    <a
                                        className="nav-link"
                                        href="#"
                                        style={theLi}
                                    >
                                        Recipes
                                    </a>
                                </li>
                                <li className="nav-item" style={{ marginRight: "20px" }}>
                                    <a
                                        className="nav-link"
                                        href="#"
                                        style={theLi}
                                    >
                                        Ingredients
                                    </a>
                                </li>
                                <li className="nav-item" style={{ marginRight: "20px" }}>
                                    <a
                                        className="nav-link"
                                        href="#"
                                        style={theLi}
                                    >
                                        Occasions
                                    </a>
                                </li>
                                <li className="nav-item" style={{ marginRight: "20px" }}>
                                    <a
                                        className="nav-link"
                                        href="#"
                                        style={theLi}
                                    >
                                        About Us
                                    </a>
                                </li>
                            </ul>
                        </div>



                        <div>
                            <div className="d-flex align-items-center p-1">
                                <button className="d-flex align-items-center p-2" style={{ border: 'none', cursor: 'pointer', marginRight: '20px', display: 'flex', alignItems: 'center', background: 'oklch(0.936 0.032 17.717)', borderRadius: '15px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                                    <img
                                        src="../public/image/check.png"
                                        className="img-fluid"
                                        alt="check.png"
                                        style={{ width: '30px', height: '30px', marginRight: '10px' }}
                                    />
                                    <span style={{ color: 'oklch(0.704 0.191 22.216)', fontSize: '18px', fontWeight: 'bold' }}>Your Recipe Box</span>
                                </button>
                                <div>
                                    <img
                                        src="../public/image/avatar.png"
                                        className="img-fluid rounded-circle"
                                        alt="avatar.png"
                                        style={{ width: '50px', height: '50px', objectFit: 'cover', cursor: 'pointer' }}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </nav>

            </div>
        </div>
    </>
}