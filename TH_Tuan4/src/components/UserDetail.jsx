import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";

const users = [
    { id: 1, name: "Nguyễn Văn A", age: 25, email: "a@example.com", image:"https://vtcpay.vn/blog/wp-content/uploads/2023/12/tieu-su-song-kang.jpg" },
    { id: 2, name: "Trần Thị B", age: 30, email: "b@example.com", image:"https://vcdn1-giaitri.vnecdn.net/2025/01/28/trie-u-lo-tu-1738040900-173804-3999-5747-1738040984.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=gc_r_1vrcg1tCOyL1fs7aw" },
    { id: 3, name: "Lê Văn C", age: 28, email: "c@example.com",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFQJEltrJqhnvM4NXW92U2cDaZytFMMC2w0g&s" }
];

function UserDetail() {
    const { id } = useParams();
    const user = users.find((u) => u.id === parseInt(id));

    if (!user) {
        return <h2 className="text-center text-danger">Người dùng không tồn tại</h2>;
    }

    return (
        <div className="container mt-5" style={{width:"600px"}}>
            <div className="card user-card">
                <div className="card-header text-white" style={{backgroundColor:"green"}}>
                    <h1 className="card-title text-center">{user.name}</h1>
                </div>
                <div className="card-body"style={{fontSize:"30px"}}>
                    <p className="card-text"><strong>Tuổi:</strong> {user.age}</p>
                    <p className="card-text"><strong>Email:</strong> {user.email}</p>
                    <img src={user.image} alt={user.name} />
                </div>
            </div>
        </div>
    );
}

export default UserDetail;
