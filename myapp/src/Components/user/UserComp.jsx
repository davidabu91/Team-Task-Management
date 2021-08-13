import React, { Component } from "react";
import "./UserComp.css";

export default class UserComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      openTodos: this.props.completed,
      name: "",
      email: "",
      street: "",
      city: "",
      zipcode: "",
    };
  }



  openDitails = () => {
    this.props.getUserTodos(this.props.id)
  }

  sendData = () => {
    let data = {
      name: this.state.name,
      email: this.state.email,
      id: this.props.id,
      completed: this.state.completed,
      address: {
        city: this.state.city,
        street: this.state.street,
        zipcode: this.state.zipcode,
      },
    };
    this.props.updateUser(data);
  };

  render() {
    let styleOther;
    let buttonValue;
    if (this.state.isVisible) {
      styleOther = "isShowed";
      buttonValue = "Close";
    } else {
      styleOther = "isHidden";
      buttonValue = "Other Data";
    }

    let borderColor;
    if (this.props.completed) {
      borderColor = "green";
      console.log(borderColor)
    } else {
      borderColor = "red";
    }

    let backgroundColor;
    if (this.props.openTodos == this.props.id){
      backgroundColor = 'orange'
    }else{
      backgroundColor = ''
    }


    return (
      <div>
        <div style={{border:'solid', borderColor:borderColor, margin:'25px', backgroundColor:backgroundColor}}>
          <div>
        
            <button onClick={this.openDitails}>Id: {this.props.id}</button> 
            <br />
 
            Name:
            <input
              type="text"
              placeholder={this.props.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <br />
            Email:
            <input
              type="text"
              placeholder={this.props.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <br />
         
            <input
              type="button"
              value={buttonValue}
              onMouseOver={() => this.setState({ isVisible: true })}
              onClick={() => this.setState({ isVisible: false })}
            />
          </div>
          <br />
          <div className={styleOther}>
            Street:
            <input
              type="text"
              placeholder={this.props.street}
              onChange={(e) => this.setState({ street: e.target.value })}
            />
            <br />
            City:
            <input
              type="text"
              placeholder={this.props.city}
              onChange={(e) => this.setState({ city: e.target.value })}
            />
            <br />
            Zip Code:
            <input
              type="text"
              placeholder={this.props.zipcode}
              onChange={(e) => this.setState({ zipcode: e.target.value })}
            />
          </div>
          <div>
            <input type="button" value="Update" onClick={this.sendData} style={{ backgroundColor: "SandyBrown" }} />
            <input
              type="button"
              value="Delete"
              onClick={() => this.props.deletUser(this.props.id)}
              style={{ backgroundColor: "SandyBrown" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
