import React from "react";
class Mycomponent extends React.Component {
    state = {
        Name: 'Eric',
        Age: 28,
        Address: 'HCM'
    }
    render() {
        return (
            <div>
                My name is: {this.state.Name}
                <br />
                Address: {this.state.Address}
            </div>
        );
    }
}

export default Mycomponent;
