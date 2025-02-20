function DisplayInfor({ listUser, handleDeleteUser }) {
  return (
    <div>
      {listUser.map((user) => {
        return (
          <div key={user.id} className={user.Age < 18 ? "red" : "blue"}>
            <div>My name is: {user.Name}</div>
            <div>My Age: {user.Age}</div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default DisplayInfor;
