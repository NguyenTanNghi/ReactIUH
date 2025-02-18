import React from "react";
class Childcomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Age: 0,
            Address: 'HCM'
        }
    }
    handleOnchangeInput = (event) => {
        this.setState({
            Name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();//ngăn việc tải lại trang
        console.log(this.state)
    }

    render() {
        return (
            <>
                <div>
                    <form action=""
                        onSubmit={(event) => this.handleOnSubmit(event)}>
                        <div>
                            My name is: {this.state.Name}
                            <br />
                            Address: {this.state.Address}
                        </div>
                        <input type="text"
                            value={this.state.Name}
                            onChange={(event) => this.handleOnchangeInput(event)} />
                        <button>Submit</button>
                    </form>

                </div>


            </>
        );
    };
}

export default Childcomponent;
