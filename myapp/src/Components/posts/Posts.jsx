import React, { Component } from "react";
import PostCardsComp from "./PostsCards";
import AddPostComp from "./AddPost";

export default class PostsComp extends Component {
  constructor() {
    super();
    this.state = { displayPost: true };
  }

  changDisplay = () => {
    this.setState({ displayPost: true });
  };

  render() {
    let displayPost;
    let displayAdd;
    if (this.state.displayPost) {
      displayPost = "inline";
      displayAdd = "none";
    } else {
      displayPost = "none";
      displayAdd = "inline";
    }

    return (
      <div >
        <h3>Posts: User {this.props.userId}</h3>
        <input
          style={{display: displayPost}}
          type="button"
          value="Add"
          onClick={(e) => this.setState({ displayPost: false })}
        />
        <div style={{  display: displayPost }}>
          <PostCardsComp currentPosts={this.props.currentPosts} />
        </div>
        <div style={{ display: displayAdd }}>
          <AddPostComp
            changDisplay={this.changDisplay}
            addPost={this.props.addPost}
          />
        </div>
      </div>
    );
  }
}
