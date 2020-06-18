import React, { Component } from 'react';

const style = {
    backgroundColor: "#ffffff"
}

class Compet extends Component {
    render() {
        return (
            <>
        <h2 style={style}>{this.props.compet_title}</h2>
        </>
        )
    }
}

export default Compet;