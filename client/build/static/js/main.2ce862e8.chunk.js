(this.webpackJsonpbadminton=this.webpackJsonpbadminton||[]).push([[0],{28:function(e,t,n){e.exports=n(44)},34:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(23),o=n.n(c),u=n(10),l=n.n(u),s=n(16),i=n(7),p=n(3),f=n(9),m=n(8),h=(n(34),n(58)),b=n(24),d=n(1),y={backgroundColor:"#ffffff"},E={padding:"10px 15px"},v=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return a.a.createElement("table",{style:y},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{style:E},this.props.player_name," "),a.a.createElement("th",null,this.props.player_team))))}}]),n}(r.Component),_=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return a.a.createElement("h2",null,"Game Works!")}}]),n}(r.Component),j={backgroundColor:"#ffffff"},O=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{style:j},this.props.compet_title))}}]),n}(r.Component),g={backgroundColor:"#ffffff"},k={padding:"10px 15px"},x=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return a.a.createElement("table",{style:g},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{style:k},"\uc67c\ucabd\ud300 \uc138\ud2b8 \uc2a4\ucf54\uc5b4"),a.a.createElement("th",null,this.props.l_setScore)),a.a.createElement("tr",null,a.a.createElement("th",{style:k},"\uc67c\ucabd\ud300 \uc2a4\ucf54\uc5b4"),a.a.createElement("th",null,this.props.l_score)),a.a.createElement("tr",null,a.a.createElement("th",{style:k},"\uc624\ub978\ucabd\ud300 \uc138\ud2b8 \uc2a4\ucf54\uc5b4"),a.a.createElement("th",null,this.props.r_setScore)),a.a.createElement("tr",null,a.a.createElement("th",{style:k},"\uc624\ub978\ucabd\ud300 \uc2a4\ucf54\uc5b4"),a.a.createElement("th",null,this.props.r_score))))}}]),n}(r.Component),S=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).playerApi=Object(s.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/v2/players");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)}))),r.competApi=Object(s.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/v2/compet");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)}))),r.gameApi=Object(s.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/v2/game");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)}))),r.scoreboardApi=Object(s.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/v2/scoreboard");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)}))),r.state={player_info:"",compet_info:"",game_info:"",scoreboard:""},r}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.playerApi().then((function(t){return e.setState({player_info:t})})).catch((function(e){return console.log(e)})),this.competApi().then((function(t){return e.setState({compet_info:t})})).catch((function(e){return console.log(e)})),this.gameApi().then((function(t){return e.setState({game_info:t})})).catch((function(e){return console.log(e)})),this.scoreboardApi().then((function(t){return e.setState({scoreboard:t})})).catch((function(e){return console.log(e)}))}},{key:"renderPlayer",value:function(){return this.state.player_info?this.state.player_info.map((function(e){return a.a.createElement(v,{player_name:e.player_name,player_team:e.player_team})})):""}},{key:"renderCompet",value:function(){return this.state.compet_info?this.state.compet_info.map((function(e){return a.a.createElement(O,{compet_title:e.compet_title})})):""}},{key:"renderScoreboard",value:function(){return this.state.scoreboard?this.state.scoreboard.map((function(e){return a.a.createElement(x,{l_setScore:e.l_setScore,l_score:e.l_score,r_setScore:e.r_setScore,r_score:e.r_score})})):""}},{key:"render",value:function(){var e=this;return a.a.createElement(b.a,null,a.a.createElement("div",null,a.a.createElement(d.a,{path:"/player",render:function(){return e.renderPlayer()}}),a.a.createElement(d.a,{path:"/game",component:_}),a.a.createElement(d.a,{path:"/compet",render:function(){return e.renderCompet()}}),a.a.createElement(d.a,{path:"/scoreboard",render:function(){return e.renderScoreboard()}})))}}]),n}(r.Component),w=Object(h.a)((function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{minWidth:1080}}}))(S);o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.2ce862e8.chunk.js.map