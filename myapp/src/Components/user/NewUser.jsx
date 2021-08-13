import React, { Component } from 'react'

export default class NewUserComp extends Component {

    constructor()
    {
        super();
        this.state = {name: '', email: ''}
    }

    adduser = () => {
        this.props.addNewUser(this.state.name, this.state.email)
    }
    render() {
        return (
            <div style={{border: 'solid', marginTop: '100px'}}>
               Name: <input type="text" onChange={e => {this.setState({name: e.target.value})}}/><br/>
               Email: <input type="text" onChange={e => {this.setState({email: e.target.value})}}/><br/>
               <input type="button" value='Add' onClick={this.adduser}/>
               <input type="button" value='Cansel' onClick={this.props.censelAddUser}/>

            </div>
        )
    }
}
