import React from "react";
class DisplayInfor extends React.Component {
    render() {
        const { listUser } = this.props;//truyền từ cha sang con
        //const listUser=this.props.listUser //tương đương với    cách trên
        console.log(listUser)//hiển thị ds trên màn hình console
        return (
            <div>
                {listUser.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>My name is: {user.Name}</div>
                            <div>My Age: {user.Age}</div>
                            <hr />
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default DisplayInfor