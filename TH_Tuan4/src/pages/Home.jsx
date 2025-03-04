import UserList from "../components/UserList";
function Home() {
    return (
        <div>
            <h1 className="theTitle" style={{fontWeight:800}}>Danh sách người dùng</h1>
            <UserList />
        </div>
    );
}
export default Home;