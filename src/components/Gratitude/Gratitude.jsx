import React, { Component } from 'react';

export class Gratitude extends Component {
    render () {
        return (
            <div id='gratitude-component'>
            <h2>Thank You, {this.props.name}}</h2>
            <p>for staying connected to us</p>
      </div>
        )
    }
}
