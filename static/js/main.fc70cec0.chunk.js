(window["webpackJsonppomodoro-clock"]=window["webpackJsonppomodoro-clock"]||[]).push([[0],[,,,,,,,,,function(e,t,s){e.exports=s(17)},,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(0),r=s.n(a),n=s(8),i=s.n(n),o=(s(14),s(2)),l=s(3),h=s(5),c=s(4),m=s(1),g=s(6),p=(s(15),s(16),function(e){function t(e){var s;return Object(o.a)(this,t),(s=Object(h.a)(this,Object(c.a)(t).call(this,e))).state={restartFlag:s.props.restartFlag},s.restartAnimation=s.restartAnimation.bind(Object(m.a)(s)),s}return Object(g.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){this.state.restartFlag!==this.props.restartFlag&&(this.setState({restartFlag:this.props.restartFlag}),this.restartAnimation())}},{key:"restartAnimation",value:function(){var e=document.getElementById(this.props.id+"progressBar"),t=document.getElementById(this.props.id+"wrapper"),s=document.getElementById(this.props.id+"right-spin"),a=document.getElementById(this.props.id+"left-spin");t.parentElement.removeChild(t),e.appendChild(t);var r=document.getElementById(this.props.id+"wrapper");r.appendChild(a),r.appendChild(s)}},{key:"render",value:function(){var e={animationDuration:this.props.countDownTime+"s",animationPlayState:this.props.progressBarEnabled,borderColor:this.props.progressBarColor},t={animationDuration:this.props.countDownTime/2+"s",animationDelay:this.props.countDownTime/2+"s",animationPlayState:this.props.progressBarEnabled,borderColor:this.props.progressBarColor},s={animationDelay:this.props.countDownTime/2+"s",animationPlayState:this.props.progressBarEnabled},a={transform:"scale("+this.props.progressBarSize+")"};return r.a.createElement("div",{id:this.props.id+"progressBar",className:"CircularProgressBar",style:a},r.a.createElement("div",{className:"start-gap",part:"left"}),r.a.createElement("div",{className:"start-gap",part:"right"}),r.a.createElement("div",{className:"circle-background"}),r.a.createElement("div",{id:this.props.id+"wrapper",className:"wrapper",style:s},r.a.createElement("div",{id:this.props.id+"right-spin",className:"circle right-spin",style:t}),r.a.createElement("div",{id:this.props.id+"left-spin",className:"circle left-spin",style:e})))}}]),t}(r.a.Component)),u=function(e){function t(e){var s;return Object(o.a)(this,t),(s=Object(h.a)(this,Object(c.a)(t).call(this,e))).state={seconds:0,minutes:s.props.sessionLength,breakMinutes:s.props.breakLength,breakSeconds:0,sessionLength:s.props.sessionLength,breakLength:s.props.breakLength,timerPaused:s.props.timerPaused,timerEnabled:!0,restartFlag:s.props.restartFlag,breakPoint:s.props.breakPoint,minutesToBreakPoint:s.props.breakPoint},s.timerIntervalID=0,s.breakTimerIntervalID=0,s.toggleTimer=s.toggleTimer.bind(Object(m.a)(s)),s.restartTimer=s.restartTimer.bind(Object(m.a)(s)),s.toggleBreakTimer=s.toggleBreakTimer.bind(Object(m.a)(s)),s}return Object(g.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){this.props.timerPaused!==this.state.timerPaused&&(this.setState({timerPaused:this.props.timerPaused}),this.toggleTimer(this.props.timerPaused)),this.state.restartFlag!==this.props.restartFlag&&(this.setState({restartFlag:this.props.restartFlag}),this.restartTimer()),!this.state.timerPaused||this.props.sessionLength===this.state.sessionLength&&this.props.breakPoint===this.state.breakPoint&&this.props.breakLength===this.state.breakLength||this.props.timerReset()}},{key:"restartTimer",value:function(){this.setState({seconds:0,minutes:this.props.sessionLength,minutesToBreakPoint:this.props.breakPoint,sessionLength:this.props.sessionLength,breakLength:this.props.breakLength,breakPoint:this.props.breakPoint,breakMinutes:this.props.breakLength,breakSeconds:0})}},{key:"toggleTimer",value:function(e){var t=this;!e&&this.state.timerEnabled?this.timerIntervalID=setInterval(function(){var e=t.state.minutesToBreakPoint,s=t.state.minutes,a=t.state.seconds-1;a<0&&(a=59,s--),0===a&&s!==t.state.sessionLength&&e--,s<0&&console.log("stop!!!"),e<=0&&t.toggleBreakTimer(),t.setState({minutes:s,seconds:a,minutesToBreakPoint:e})},1e3):clearInterval(this.timerIntervalID)}},{key:"toggleBreakTimer",value:function(){var e=this;clearInterval(this.timerIntervalID),this.setState({timerEnabled:!1}),this.state.timerPaused?(this.setState({timerEnabled:!0}),clearInterval(this.breakTimerIntervalID),this.toggleTimer(this.state.timerPaused)):this.breakTimerIntervalID=setInterval(function(){var t=e.state.breakMinutes,s=e.state.breakSeconds;console.log(s),--s<0&&(t--,s=59),t<0&&(clearInterval(e.breakTimerIntervalID),e.setState({timerEnabled:!0,breakLength:e.props.breakLength}),e.toggleTimer()),e.setState({breakMinutes:t,breakSeconds:s})},1e3)}},{key:"render",value:function(){var e="";return e=this.state.minutes<10?"0"+this.state.minutes:this.state.minutes,e+=":",this.state.seconds<10?e+="0"+this.state.seconds:e+=this.state.seconds,r.a.createElement("div",{className:"Timer"},r.a.createElement("div",{className:"display"},e))}}]),t}(r.a.Component),b=function(e){function t(e){var s;return Object(o.a)(this,t),(s=Object(h.a)(this,Object(c.a)(t).call(this,e))).state={timerPaused:!0,sessionProgressBarEnabled:"paused",breakProgressBarEnabled:"paused",restartFlag:!1,sessionLength:5,breakPoint:1,breakLength:2},s.timerPausedToggle=s.timerPausedToggle.bind(Object(m.a)(s)),s.timerReset=s.timerReset.bind(Object(m.a)(s)),s.sessionLengthChange=s.sessionLengthChange.bind(Object(m.a)(s)),s.breakPointChange=s.breakPointChange.bind(Object(m.a)(s)),s.breakLengthChange=s.breakLengthChange.bind(Object(m.a)(s)),s}return Object(g.a)(t,e),Object(l.a)(t,[{key:"timerReset",value:function(){this.state.restartFlag?this.setState({restartFlag:!1}):this.setState({restartFlag:!0})}},{key:"timerPausedToggle",value:function(e){this.state.timerPaused?(this.setState({timerPaused:!1,sessionProgressBarEnabled:"running",breakProgressBarEnabled:"running"}),e.target.classList.remove("fa-play"),e.target.classList.add("fa-pause")):(this.setState({timerPaused:!0,sessionProgressBarEnabled:"paused",breakProgressBarEnabled:"paused"}),e.target.classList.remove("fa-pause"),e.target.classList.add("fa-play"))}},{key:"sessionLengthChange",value:function(e){"+"===e.target.value?this.state.sessionLength<59?this.setState({sessionLength:this.state.sessionLength+1}):this.setState({sessionLength:1}):"-"===e.target.value&&(this.state.sessionLength>1?this.setState({sessionLength:this.state.sessionLength-1}):this.setState({sessionLength:59}))}},{key:"breakPointChange",value:function(e){"+"===e.target.value?this.state.breakPoint<this.state.sessionLength?this.setState({breakPoint:this.state.breakPoint+1}):this.setState({breakPoint:1}):"-"===e.target.value&&(this.state.breakPoint>1?this.setState({breakPoint:this.state.breakPoint-1}):this.setState({breakPoint:this.state.sessionLength}))}},{key:"breakLengthChange",value:function(e){"+"===e.target.value?this.state.breakLength<59?this.setState({breakLength:this.state.breakLength+1}):this.setState({breakLength:1}):"-"===e.target.value&&(this.state.breakLength>1?this.setState({breakLength:this.state.breakLength-1}):this.setState({breakLength:59}))}},{key:"render",value:function(){var e=60*this.state.sessionLength,t={};return this.state.timerPaused&&(t={pointerEvents:"none",color:"#182f54"}),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"timer-container"},r.a.createElement(u,{timerReset:this.timerReset,timerPaused:this.state.timerPaused,sessionLength:this.state.sessionLength,restartFlag:this.state.restartFlag,breakPoint:this.state.breakPoint,breakLength:this.state.breakLength}),r.a.createElement(p,{id:"sessionProgressBar",restartFlag:this.state.restartFlag,countDownTime:e,progressBarEnabled:this.state.sessionProgressBarEnabled,progressBarSize:.7,progressBarColor:"#4287f5"}),r.a.createElement(p,{id:"breakProgressBar",restartFlag:this.state.restartFlag,countDownTime:e,progressBarEnabled:this.state.breakProgressBarEnabled,progressBarSize:.9,progressBarColor:"#4ffff5"})),r.a.createElement("fieldset",{className:"control-container",side:"left"},r.a.createElement("legend",null,r.a.createElement("p",{className:"container-title"},"Session Length")),r.a.createElement("div",{className:"content"},r.a.createElement("button",{className:"button fa fa-plus control-operator",onClick:this.sessionLengthChange,value:"+",style:t}),r.a.createElement("div",{className:"control-number"},this.state.sessionLength),r.a.createElement("button",{className:"button fa fa-minus control-operator",onClick:this.sessionLengthChange,value:"-",style:t}))),r.a.createElement("fieldset",{className:"control-container",side:"right"},r.a.createElement("legend",null,r.a.createElement("p",{className:"container-title"},"Break Point")),r.a.createElement("div",{className:"content"},r.a.createElement("button",{className:"button fa fa-plus control-operator",onClick:this.breakPointChange,value:"+",style:t}),r.a.createElement("div",{className:"control-number"},this.state.breakPoint),r.a.createElement("button",{className:"button fa fa-minus control-operator",onClick:this.breakPointChange,value:"-",style:t}))),r.a.createElement("fieldset",{className:"control-container",side:"bottom-first"},r.a.createElement("legend",null,r.a.createElement("p",{className:"container-title"},"Break Length")),r.a.createElement("div",{className:"content"},r.a.createElement("button",{className:"button fa fa-plus control-operator",onClick:this.breakLengthChange,value:"+",style:t}),r.a.createElement("div",{className:"control-number"},this.state.breakLength),r.a.createElement("button",{className:"button fa fa-minus control-operator",onClick:this.breakLengthChange,value:"-",style:t}))),r.a.createElement("div",{className:"control-container",side:"bottom-second"},r.a.createElement("i",{onClick:this.timerPausedToggle,className:"button button-control fa fa-play"}),r.a.createElement("i",{onClick:this.timerReset,className:"button button-control fa fa-refresh"})))}}]),t}(r.a.Component);i.a.render(r.a.createElement(b,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.fc70cec0.chunk.js.map