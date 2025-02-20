function DisplayInfor({ listUser, handleDeleteUser }) {
  return (
    <div>
      {listUser.length == 0 && <h1>Ban da xoa het danh sach</h1>}
      {listUser.map((user) => {
        return (
          <div key={user.id} className={user.Age < 18 ? "red" : "blue"}>
            <div>My name is: {user.Name}</div>
            <div>My Age: {user.Age}</div>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default DisplayInfor;
