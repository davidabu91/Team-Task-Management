import React, { Component } from 'react'

export default class CardPostComp extends Component {

    constructor()
    {
        super();

    }

    render() {
        return (
            <div style={{border:'solid', borderColor:'purple', margin:'25px'}}>
               <strong> Title:</strong> {this.props.title}<br/>
               <strong>Body:</strong>  {this.props.body}
            </div>
        )
    }
}
