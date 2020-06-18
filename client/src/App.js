import React, {Component} from 'react';
import './App.css';
import {withStyles} from '@material-ui/core/styles';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Player from './components/player/player';
import Game from './components/game/game';
import Compet from './components/compet/compet';
import Scoreboard from './components/scoreboard/scoreboard';

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
    width: "100%",
    backgroundColor: "#ffffff"
}
const thstyle = {
    padding: "10px 15px"
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player_info: '',
            compet_info: '',
            game_info: '',
            scoreboard: ''
        }
    }

    // componentDidMount() {
    //     this.playerApi()
    //         .then(res => this.setState({player_info: res}))
    //         .catch(err => console.log(err));
    //
    //     this.competApi()
    //         .then(res => this.setState({compet_info: res}))
    //         .catch(err => console.log(err));
    //
    //     this.gameApi()
    //         .then(res => this.setState({game_info: res}))
    //         .catch(err => console.log(err));
    //
    //     this.scoreboardApi()
    //         .then(res => this.setState({scoreboard: res}))
    //         .catch(err => console.log(err));
    // }

    playerApi = async () => {
        const response = await fetch('v3/players/');
        const body = await response.json();
        return body;
    }

    competApi = async () => {
        const response = await fetch('/v2/compet');
        const body = await response.json();
        return body;
    }

    gameApi = async () => {
        const response = await fetch('/v2/game');
        const body = await response.json();
        return body;
    }

    scoreboardApi = async () => {
        const response = await fetch('/v2/scoreboard');
        const body = await response.json();
        return body;
    }

    renderPlayer() {
        /*return this.state.player_info ? this.state.player_info.map(p => {
            return <Player l_player1={p.l_player1} l_team1={p.l_team1} l_player2={p.l_player2}
                           l_team2={p.l_team2} r_player1={p.r_player1} r_team1={p.r_team1} r_player2={p.r_player2}
                           r_team2={p.r_team2}/>
        }) : ''*/
        return <Player />
    }

    renderCompet() {
        return this.state.compet_info ? this.state.compet_info.map(c => {
            return <Compet compet_title={c.compet_title}/>
        }) : ''
    }

    renderScoreboard() {
        return this.state.scoreboard ? this.state.scoreboard.map(s => {
            return <Scoreboard l_setScore={s.l_setScore} l_score={s.l_score}
                               r_setScore={s.r_setScore} r_score={s.r_score}/>
        }) : ''
    }

    render() {

        return (
            <BrowserRouter>
                <div>
                    <Route path='/player' render={() => (
                        this.renderPlayer()
                    )}/>
                    <Route path='/game' component={Game}/>
                    <Route path='/compet' render={() => (
                        this.renderCompet()
                    )}/>
                    <Route path='/scoreboard' render={() => (
                        this.renderScoreboard()
                    )}/>

                </div>
            </BrowserRouter>

        );
    }
}

export default withStyles(styles)(App);
