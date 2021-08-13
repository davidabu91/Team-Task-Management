import React, { Component } from 'react'

export default class AddPostComp extends Component {

    constructor()
    {
        super();
        this.state = {title:'', body:''}
    }

    changDisplay = () => {
        this.props.changDisplay()
    }

    sendNewPost = () =>{
        this.props.addPost( this.props.userId, this.state.title, this.state.body)
        this.props.changDisplay()
    }

    render() {
        return (
            <div style={{border:'solid', borderColor:'green'}}>
                Title: <input type="text" onChange={e => {this.setState({title: e.target.value})}}/><br/>
                Body: <input type="text" onChange={e => {this.setState({body: e.target.value})}}/><br/>
                <input type="button" value='Cancel' style={{backgroundColor: "SandyBrown"}} onClick={this.changDisplay}/>
                <input type="button" value='Add' style={{backgroundColor: "SandyBrown"}} onClick={this.sendNewPost}/>

            </div>
        )
    }
}
