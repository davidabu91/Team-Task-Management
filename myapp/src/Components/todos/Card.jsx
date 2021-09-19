import React, { Component } from "react";

export default class CardComp extends Component {
  constructor() {
    super();
    this.state = {completed: 'not yet'}
  }

  componentDidMount(){
    if(this.props.completed){
      this.setState({completed: "Yess!"})
    }
  }

  sendComleted = () => {
    this.props.completedTodo(this.props.userId, this.props.id,this.props.title);
    this.setState({completed: "Yess!"})
  };

  render() {
    let butoonStyle;
    if (this.props.completed) {
      butoonStyle = "none";
    } else {
      butoonStyle = "inline";
    }

    return (
      <div style={{ border: "solid", borderColor: "purple", margin: "25px" }}>
       <strong> Title:</strong> {this.props.title} <br />
       <strong> Completed:</strong> {this.state.completed}
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
