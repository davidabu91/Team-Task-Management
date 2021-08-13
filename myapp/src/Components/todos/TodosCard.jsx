import React, { Component } from "react";
import CardComp from "./Card";

export default class TodosCardComp extends Component {
  constructor() {
    super();
  }

  render() {
    return this.props.currentTodos.map((item, index) => {
      return (
        <CardComp
          key={index}
          title={item.title}
          id={item.id}
          userId={item.userId}
          completed={item.completed}
          completedTodo={this.props.completedTodo}
        />
      );
      // let butoonStyle;
      // if(item.completed){
      //   butoonStyle = 'none'
      // }
      // else{
      //   butoonStyle = 'inline'
      // }
      // return (
      //   <div key={index} style={{ border: "solid", borderColor: "purple", margin: "25px" }}>
      //   Title: {item.title} <br />
      //   Comleted: {item.completed}
      //   <br />
      //   <input
      //     onClick={this.props.completedTodo(item.userId,item.id)}
      //     style={{ backgroundColor: "SandyBrown", display: butoonStyle}}
      //     type="button"
      //     value="Mark Completed"
      //   />
      // </div>
      // )
    });
  }
}
