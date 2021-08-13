import React, { Component } from "react";
import CardPostComp from "./CardPost";

export default class PostCardsComp extends Component {
  constructor() {
    super();
  }

  render() {
    return this.props.currentPosts.map((item) => { 
      return (
        <CardPostComp
          key={item.id}
          title={item.title}
          body={item.body}
          id={item.id}
          userId={item.userId}
        />
      );
    });
  }
}
