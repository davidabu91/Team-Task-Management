import React, { Component } from 'react'
import TodosCardComp from './TodosCard'
import AddTodoComp from './AddTodo'

export default class TodosComp extends Component {

    constructor()
    {
        super();
        this.state = {displayTodo: true}
    }

    changDisplay = () =>{
        this.setState({displayTodo: true})
    }

    render() {

        let displayTodos;
        let displayAdd;
        if(this.state.displayTodo){
            displayTodos = 'inline'
            displayAdd = 'none'
        }else{
            displayTodos = 'none'
            displayAdd = 'inline'
        }

        return (

            <div >
                <h3>Todos: User {this.props.userId}</h3>
                <input type="button" value='Add' onClick={()=> {this.setState({displayTodo: false})}} style={{display:displayTodos}} />
                <div style={{display:displayTodos}}>
                    <TodosCardComp currentTodos={this.props.currentTodos} completedTodo={this.props.completedTodo}/>
                </div>
                <div style={{display: displayAdd}}>
                    <AddTodoComp changDisplay={this.changDisplay} addTodo={this.props.addTodo} userId={this.props.userId}/>
                </div>
            </div>
        )
    }
}
