import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const styles = theme => ({
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto"
    },
    table: {
      minWidth: 1080
    }
  });
const tblstyle = {
    backgroundColor: "#ffffff"
    }
const thstyle = {
    padding : "10px 15px" 
    }

class Player extends Component {
    render() {
        return (
            <table style={tblstyle}>
            <thead>
                <tr>
                    <th style={thstyle}>{this.props.l_player1} </th>
                    <th>{this.props.l_team1}</th>
                    <th>{this.props.l_player2}</th>
                    <th>{this.props.l_team2}</th>
                    <th>{this.props.r_player1}</th>
                    <th>{this.props.r_team1}</th>
                    <th>{this.props.r_player2}</th>
                    <th>{this.props.r_team2}</th>
                </tr>
            </thead>
            </table>
        )
    }
}

export default Player;