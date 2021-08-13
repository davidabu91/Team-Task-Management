import React, { Component } from "react";
import axios from "axios";
import UserComp from "./Components/user/UserComp";
import TodosComp from "./Components/todos/Todos";
import PostsComp from "./Components/posts/Posts";
import NewUserComp from "./Components/user/NewUser";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      posts: [],
      todos: [],
      searchField: "",
      currentTodos: [],
      currentPosts: [],
      openTodos: "",
      displayTodoPost: false,
      displyAddUser: false,
      allIdsCompleted: [],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((resp) => {
      let users = resp.data;
      for (let i = 0; i < users.length; i++) {
        users[i].completed = false;
      }
      this.setState({ users: users });
    });

    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => this.setState({ todos: resp.data }));

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => this.setState({ posts: resp.data }));
  }

  deletUser = (id) => {
    debugger
    console.log('Delet')
    let users = this.state.users.filter((x) => x.id != id);
    let todos = this.state.todos.filter((x) => x.userId != id);
    let posts = this.state.posts.filter((x) => x.userId != id);
    let currentTodos = this.state.currentTodos.filter((x) => x.userId != id);
    let currentPosts = this.state.currentPosts.filter((x) => x.userId != id);

    this.setState({ users: users, todos: todos, posts: posts, currentTodos: currentTodos, currentPosts: currentPosts });
  };

  updateUser = (data) => {
    let newUser = {
      name: data.name,
      id: data.id,
      email: data.email,
      address: {
        city: data.address.city,
        street: data.address.street,
        zipcode: data.address.zipcode,
      },
    };
    let newList = this.state.users;
    let i;
    this.state.users.map((x, index) => {
      if (x.id == data.id) {
        i = index;
      }
    });
    newList.splice(i, 1, newUser);
    this.setState({ users: [...newList] });
  };

  addNewUser = (name, email) => {
    let user = {
      name: name,
      id: this.state.users.length+2,
      email: email,
      address: {
        city: "",
        street: "",
        zipcode: "",
      },
    };
    this.setState({ users: [...this.state.users, user], displyAddUser: false});
  };



  getUserTodos = (id) => {
    let currentTodos = this.state.todos.filter((x) => x.userId == id);
    let currentPosts = this.state.posts.filter((x) => x.userId == id);
    this.setState({ currentTodos: currentTodos, currentPosts: currentPosts });
    this.setState({ openTodos: id, displayTodoPost: true, displyAddUser: false });
  };

  // updatetodos = (userId, todoId) => {
  //   let tempTodos = this.state.todos;
  //   let newTodo = { userId: userId, id: todoId, title: tempTodos };
  // };

  completedTodo = (userId, id, title) => {
    let tempcurrent = this.state.currentTodos;
    let newtodo = { id: id, completed: true, userId: userId, title: title };
    for (let i = 0; i < tempcurrent.length; i++) {
      if (tempcurrent[i].id == id) {
        tempcurrent.splice(i, 1, newtodo);
      }
    }
    let currentUserTodos = tempcurrent
      .filter((x) => x.userId == userId)
      .filter((x) => x.completed == false);
    console.log(currentUserTodos.length, currentUserTodos);
    if (currentUserTodos.length == 0) {
      this.setState({
        allIdsCompleted: [...this.state.allIdsCompleted, userId],
      });
    }
    let newTodos = this.state.todos.filter((x) => x.userId != userId);
    this.setState({
      currentTodos: tempcurrent,
      todos: [...newTodos, ...tempcurrent],
    });
  };

  addTodo = (userId, title) => {
    let tempcurrent = this.state.currentTodos;
    let newtodo = {
      id: tempcurrent.length,
      completed: false,
      userId: userId,
      title: title,
    };
    tempcurrent.push(newtodo);
    this.setState({ currentTodos: [...tempcurrent] });
    let newTodos = this.state.todos.filter((x) => x.userId != userId);
    this.setState({ todos: [...newTodos, ...tempcurrent] });
  };

  addPost = (userId, title, body) => {
    let tempcurrent = this.state.currentPosts;
    let newPost = {
      id: tempcurrent.length,
      userId: userId,
      title: title,
      body: body,
    };
    tempcurrent.push(newPost);
    this.setState({ currentPosts: [...tempcurrent] });
    let newPosts = this.state.posts.filter((x) => x.userId != userId);
    this.setState({ todos: [...newPosts, ...tempcurrent] });
  };

  censelAddUser = () => this.setState({displyAddUser: false})
y
  render() {
    let users = this.state.users
      .map((item) => {
        let completed = this.state.allIdsCompleted.includes(item.id);
        console.log(completed + ":todos", "user id:" + item.id);

        return {
          name: item.name,
          email: item.email,
          id: item.id,
          city: item.address.city,
          street: item.address.street,
          zipcode: item.address.zipcode,
          completed: completed,
        };
      })
      .filter(
        (x) =>
          x.name.toLowerCase().includes(this.state.searchField.toLowerCase()) ||
          x.email.toLowerCase().includes(this.state.searchField.toLowerCase())
      );

    let displaytodopost;
    let displayadduser;
    if (this.state.displayTodoPost) {
      displaytodopost = "inline";
    } else {
      displaytodopost = "none";
    }

    if (this.state.displyAddUser) {
      displayadduser = "inline";
    } else {
      displayadduser = "none";
    }

    return (
      <div>
        <table style={{ width: "100%" }}>
          <tr>
            <td style={{ width: "50%", verticalAlign: "top" }}>
              <h3> Reat - Final Project </h3>

              <input
                style={{
                  width: "75%",
                  padding: "5px",
                  margin: "5px",
                  marginLeft: "10%",
                }}
                type="text"
                placeholder="Searc User"
                onChange={(e) => this.setState({ searchField: e.target.value })}
              />

              <input
                type="button"
                value="Add New User"
                style={{ backgroundColor: 'green',marginLeft: '40%' }}
                onClick={() => this.setState({displyAddUser: true, displayTodoPost:false})}
              />

              {users.map((item) => {
                return (
                  <UserComp
                    key={item.id}
                    name={item.name}
                    email={item.email}
                    id={item.id}
                    city={item.city}
                    zipcode={item.zipcode}
                    street={item.street}
                    completed={item.completed}
                    deletUser={this.deletUser}
                    updateUser={this.updateUser}
                    getUserTodos={this.getUserTodos}
                    todos={this.state.todos}
                    posts={this.state.posts}
                    openTodos={this.state.openTodos}
                  />
                );
              })}
            </td>
            <td style={{verticalAlign: "top"}}>
              
              <div style={{ display: displaytodopost }}>
                <div style={{ border: "solid", margin: "25px" }}>
                  <TodosComp
                    userId={this.state.openTodos}
                    currentTodos={this.state.currentTodos}
                    completedTodo={this.completedTodo}
                    addTodo={this.addTodo}
                  />
                </div>
                <div style={{ border: "solid", margin: "25px" }}>
                  <PostsComp
                    addPost={this.addPost}
                    userId={this.state.openTodos}
                    currentPosts={this.state.currentPosts}
                  />
                  
                </div>
              </div>
              <div style={{ display: displayadduser}}>
                <NewUserComp addNewUser={this.addNewUser} censelAddUser={this.censelAddUser}/>
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
