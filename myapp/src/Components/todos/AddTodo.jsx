import React, { Component } from 'react'

export default class AddTodoComp extends Component {

    constructor()
    {
        super();
        this.state = {title:''}
    }

    changDisplay = () => {
        this.props.changDisplay()
    }

    sendNewTodo = () =>{
        this.props.addTodo( this.props.userId, this.state.title)
        this.props.changDisplay()
    }

    render() {
        return (
            <div style={{border:'solid', borderColor:'green'}}>
                Title: <input type="text" onChange={e => {this.setState({title: e.target.value})}}/><br/>
                <input type="button" value='Cancel' style={{backgroundColor: "SandyBrown"}} onClick={this.changDisplay}/>
                <input type="button" value='Add' style={{backgroundColor: "SandyBrown"}} onClick={this.sendNewTodo}/>

            </div>
        )
    }
}
