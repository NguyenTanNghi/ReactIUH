import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const users = [
    { id: 1, name: "Nguyễn Văn A", image:"https://vtcpay.vn/blog/wp-content/uploads/2023/12/tieu-su-song-kang.jpg" },
    { id: 2, name: "Trần Thị B" , image:"https://vcdn1-giaitri.vnecdn.net/2025/01/28/trie-u-lo-tu-1738040900-173804-3999-5747-1738040984.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=gc_r_1vrcg1tCOyL1fs7aw" },
    { id: 3, name: "Lê Văn C" ,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFQJEltrJqhnvM4NXW92U2cDaZytFMMC2w0g&s"}
];



function UserList() {
    return (
        <div className="container mt-5" style={{ fontSize: "30px", fontWeight:"bold"}}>
            <ul className="list-group">
                {users.map((user) => (
                    <li
                        className="list-group-item d-flex justify-content-between align-items-center userL"
                        key={user.id}
                    >
                        <img src={user.image} alt="" style={{width:"50px",objectPosition:'center', objectFit:'cover',borderRadius:'50%'}}/>
                        {user.name}

                        <Link
                            to={`/user/${user.id}`}
                            className="text-decoration-none text-dark user-link"
                        >
                            <button
                                type="button"
                                class="btn btn-primary"
                                data-bs-toggle="button"
                                aria-pressed="false"
                                autocomplete="off"
                                style={{fontSize:"20px"}}
                            >
                                Chi tiết
                            </button>


                        </Link>


                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
