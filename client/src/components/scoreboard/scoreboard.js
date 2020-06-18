import React, { Component } from 'react';

const tblstyle = {
    backgroundColor: "#ffffff"
    }
const thstyle = {
    padding : "10px 15px" 
    }

class Scoreboard extends Component {
    render() {
        return (
            <table style={tblstyle}>
                <thead>
                    <tr>
                        <th style={thstyle}>왼쪽팀 세트 스코어</th>
                        <th>{this.props.l_setScore}</th>                    
                    </tr>
                    <tr>
                        <th style={thstyle}>왼쪽팀 스코어</th>
                        <th>{this.props.l_score}</th>
                    </tr>
                    <tr>
                        <th style={thstyle}>오른쪽팀 세트 스코어</th>
                        <th>{this.props.r_setScore}</th>
                    </tr>
                    <tr>
                        <th style={thstyle}>오른쪽팀 스코어</th>
                        <th>{this.props.r_score}</th>
                    </tr>
                </thead>
            </table>

        )
    }
}

export default Scoreboard;