(window["webpackJsonppomodoro-clock"]=window["webpackJsonppomodoro-clock"]||[]).push([[0],[,,,,,,,,,function(t,e,a){t.exports=a(17)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var s=a(0),r=a.n(s),i=a(8),n=a.n(i),l=(a(14),a(2)),o=a(3),c=a(5),m=a(4),p=a(1),d=a(6),u=(a(15),a(16),function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(m.a)(e).call(this,t))).state={restartFlag:a.props.restartFlag},a.restartAnimation=a.restartAnimation.bind(Object(p.a)(a)),a}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentDidUpdate",value:function(){!this.state.restartFlag&&this.props.restartFlag&&(this.setState({restartFlag:!0}),this.restartAnimation()),this.state.restartFlag&&!this.props.restartFlag&&(this.setState({restartFlag:!1}),this.restartAnimation())}},{key:"restartAnimation",value:function(){var t=document.getElementById("progressBar"),e=document.getElementById("wrapper"),a=document.getElementById("right-spin"),s=document.getElementById("left-spin");e.parentElement.removeChild(e),t.appendChild(e);var r=document.getElementById("wrapper");r.appendChild(s),r.appendChild(a)}},{key:"render",value:function(){var t={animationDuration:this.props.countDownTime+"s",animationPlayState:this.props.progressBarEnabled},e={animationDuration:this.props.countDownTime/2+"s",animationDelay:this.props.countDownTime/2+"s",animationPlayState:this.props.progressBarEnabled},a={animationDelay:this.props.countDownTime/2+"s",animationPlayState:this.props.progressBarEnabled},s={transform:"scale("+this.props.progressBarSize+")"};return r.a.createElement("div",{id:"progressBar",className:"CircularProgressBar",style:s},r.a.createElement("div",{className:"start-gap",part:"left"}),r.a.createElement("div",{className:"start-gap",part:"right"}),r.a.createElement("div",{className:"circle-background"}),r.a.createElement("div",{id:"wrapper",className:"wrapper",style:a},r.a.createElement("div",{id:"right-spin",className:"circle right-spin",style:e}),r.a.createElement("div",{id:"left-spin",className:"circle left-spin",style:t})))}}]),e}(r.a.Component)),h=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(m.a)(e).call(this,t))).state={seconds:a.props.seconds,minutes:a.props.minutes,timerEnabled:!1,restartFlag:a.props.restartFlag},a.timerIntervalID=0,a.toggleTimer=a.toggleTimer.bind(Object(p.a)(a)),a.restartTimer=a.restartTimer.bind(Object(p.a)(a)),a}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentDidUpdate",value:function(){this.props.timerEnabled&&!this.state.timerEnabled&&(this.setState({timerEnabled:!0}),this.toggleTimer(!0)),!this.props.timerEnabled&&this.state.timerEnabled&&(this.setState({timerEnabled:!1}),this.toggleTimer(!1)),!this.state.restartFlag&&this.props.restartFlag&&(this.setState({restartFlag:!0}),this.restartTimer()),this.state.restartFlag&&!this.props.restartFlag&&(this.setState({restartFlag:!1}),this.restartTimer())}},{key:"restartTimer",value:function(){this.setState({seconds:this.props.seconds,minutes:this.props.minutes})}},{key:"toggleTimer",value:function(t){var e=this;t?this.timerIntervalID=setInterval(function(){var t=e.state.minutes,a=e.state.seconds-1;a<0&&(a=59,t--),t<0&&console.log("stop!!!"),e.setState({minutes:t,seconds:a})},1e3):clearInterval(this.timerIntervalID)}},{key:"render",value:function(){var t="";return t=this.state.minutes<10?"0"+this.state.minutes:this.state.minutes,t+=":",this.state.seconds<10?t+="0"+this.state.seconds:t+=this.state.seconds,r.a.createElement("div",{className:"Timer"},r.a.createElement("div",{className:"display"},t))}}]),e}(r.a.Component),g=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(m.a)(e).call(this,t))).state={timerEnabled:!1,minutes:3,seconds:0,progressBarEnabled:"paused",restartFlag:!1},a.timerEnabledToggle=a.timerEnabledToggle.bind(Object(p.a)(a)),a.timerReset=a.timerReset.bind(Object(p.a)(a)),a}return Object(d.a)(e,t),Object(o.a)(e,[{key:"timerReset",value:function(){this.state.restartFlag?this.setState({restartFlag:!1}):this.setState({restartFlag:!0})}},{key:"timerEnabledToggle",value:function(t){this.state.timerEnabled?(this.setState({timerEnabled:!1,progressBarEnabled:"paused"}),t.target.classList.remove("fa-pause"),t.target.classList.add("fa-play")):(this.setState({timerEnabled:!0,progressBarEnabled:"running"}),t.target.classList.remove("fa-play"),t.target.classList.add("fa-pause"))}},{key:"render",value:function(){var t=60*this.state.minutes;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"timer-container"},r.a.createElement(h,{timerEnabled:this.state.timerEnabled,minutes:this.state.minutes,seconds:this.state.seconds,restartFlag:this.state.restartFlag}),r.a.createElement(u,{restartFlag:this.state.restartFlag,countDownTime:t,progressBarEnabled:this.state.progressBarEnabled,progressBarSize:.7})),r.a.createElement("div",{className:"control-container"},r.a.createElement("i",{onClick:this.timerEnabledToggle,className:"button fa fa-play"}),r.a.createElement("i",{onClick:this.timerReset,className:"button fa fa-refresh"})))}}]),e}(r.a.Component);n.a.render(r.a.createElement(g,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.38486793.chunk.js.map