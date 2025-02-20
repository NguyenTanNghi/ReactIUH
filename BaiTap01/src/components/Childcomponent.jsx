import React from "react";

class Childcomponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueInput: "abc",
    };
  }
  handleOnchangeInput = (event) => {
    this.setState({
      Name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <>
        <form action="" onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.Name}
            onChange={(event) => this.handleOnchangeInput(event)}
          />
          <button>Submit</button>
        </form>
      </>
    );
  }
}
export default Childcomponent;
