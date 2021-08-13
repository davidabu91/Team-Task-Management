import React, { Component } from "react";

export default class CardComp extends Component {
  constructor() {
    super();
    this.state = {completed: 'not yet'}
  }

  sendComleted = () => {
    this.props.completedTodo(this.props.userId, this.props.id,this.props.title);
  };

  render() {
    let butoonStyle;
    if (this.props.completed) {
      butoonStyle = "none";
    } else {
      butoonStyle = "inline";
    }
    console.log(this.props.userId,this.props.completed)

    return (
      <div style={{ border: "solid", borderColor: "purple", margin: "25px" }}>
       <strong> Title:</strong> {this.props.title} <br />
       <strong> Comleted:</strong> {this.state.completed}
        <br />
        <input
          onClick={this.sendComleted}
          style={{ backgroundColor: "SandyBrown", display: butoonStyle }}
          type="button"
          value="Mark Completed"
        />
      </div>
    );
  }
}
