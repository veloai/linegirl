import React, {Component} from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'


class PlayerInfo extends Component{
    render(){
        return (
            <TableRow>
                {/* <TableCell>{this.props.id}</TableCell> */}
                <TableCell>{this.props.player_id}</TableCell>
                <TableCell>{this.props.opp_player_id}</TableCell>
                <TableCell>{this.props.compet_id}</TableCell>
                <TableCell>{this.props.player_name}</TableCell>
                <TableCell>{this.props.player_rank}</TableCell>
                <TableCell>{this.props.player_team}</TableCell>
                <TableCell>{this.props.compet_type}</TableCell>
                <TableCell>{this.props.date_of_birth}</TableCell>
                <TableCell>{this.props.nationality}</TableCell>
            </TableRow>
        )
    }
}

export default PlayerInfo;