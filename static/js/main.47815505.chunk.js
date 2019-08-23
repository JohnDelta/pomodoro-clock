(window["webpackJsonppomodoro-clock"]=window["webpackJsonppomodoro-clock"]||[]).push([[0],[,,,,,,,,,function(t,e,a){t.exports=a(17)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),r=a(8),i=a.n(r),o=(a(14),a(2)),l=a(3),c=a(5),m=a(4),h=a(1),g=a(6),u=(a(15),a(16),function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(c.a)(this,Object(m.a)(e).call(this,t))).state={restartFlag:a.props.restartFlag},a.restartAnimation=a.restartAnimation.bind(Object(h.a)(a)),a}return Object(g.a)(e,t),Object(l.a)(e,[{key:"componentDidUpdate",value:function(){!this.state.restartFlag&&this.props.restartFlag&&(this.setState({restartFlag:!0}),this.restartAnimation()),this.state.restartFlag&&!this.props.restartFlag&&(this.setState({restartFlag:!1}),this.restartAnimation())}},{key:"restartAnimation",value:function(){var t=document.getElementById("progressBar"),e=document.getElementById("wrapper"),a=document.getElementById("right-spin"),s=document.getElementById("left-spin");e.parentElement.removeChild(e),t.appendChild(e);var n=document.getElementById("wrapper");n.appendChild(s),n.appendChild(a)}},{key:"render",value:function(){var t={animationDuration:this.props.countDownTime+"s",animationPlayState:this.props.progressBarEnabled},e={animationDuration:this.props.countDownTime/2+"s",animationDelay:this.props.countDownTime/2+"s",animationPlayState:this.props.progressBarEnabled},a={animationDelay:this.props.countDownTime/2+"s",animationPlayState:this.props.progressBarEnabled},s={transform:"scale("+this.props.progressBarSize+")"};return n.a.createElement("div",{id:"progressBar",className:"CircularProgressBar",style:s},n.a.createElement("div",{className:"start-gap",part:"left"}),n.a.createElement("div",{className:"start-gap",part:"right"}),n.a.createElement("div",{className:"circle-background"}),n.a.createElement("div",{id:"wrapper",className:"wrapper",style:a},n.a.createElement("div",{id:"right-spin",className:"circle right-spin",style:e}),n.a.createElement("div",{id:"left-spin",className:"circle left-spin",style:t})))}}]),e}(n.a.Component)),p=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(c.a)(this,Object(m.a)(e).call(this,t))).state={seconds:0,minutes:a.props.minutes,timerEnabled:a.props.timerEnabled,restartFlag:a.props.restartFlag},a.timerIntervalID=0,a.toggleTimer=a.toggleTimer.bind(Object(h.a)(a)),a.restartTimer=a.restartTimer.bind(Object(h.a)(a)),a}return Object(g.a)(e,t),Object(l.a)(e,[{key:"componentDidUpdate",value:function(){this.props.timerEnabled&&!this.state.timerEnabled&&(this.setState({timerEnabled:!0}),this.toggleTimer(!0)),!this.props.timerEnabled&&this.state.timerEnabled&&(this.setState({timerEnabled:!1}),this.toggleTimer(!1)),!this.state.restartFlag&&this.props.restartFlag&&(this.setState({restartFlag:!0}),this.restartTimer()),this.state.restartFlag&&!this.props.restartFlag&&(this.setState({restartFlag:!1}),this.restartTimer()),this.state.timerEnabled||this.props.minutes===this.state.minutes||this.setState({minutes:this.props.minutes})}},{key:"restartTimer",value:function(){this.setState({seconds:0,minutes:this.props.minutes})}},{key:"toggleTimer",value:function(t){var e=this;t?this.timerIntervalID=setInterval(function(){var t=e.state.minutes,a=e.state.seconds-1;a<0&&(a=59,t--),t<0&&console.log("stop!!!"),e.setState({minutes:t,seconds:a})},1e3):clearInterval(this.timerIntervalID)}},{key:"render",value:function(){var t="";return t=this.state.minutes<10?"0"+this.state.minutes:this.state.minutes,t+=":",this.state.seconds<10?t+="0"+this.state.seconds:t+=this.state.seconds,n.a.createElement("div",{className:"Timer"},n.a.createElement("div",{className:"display"},t))}}]),e}(n.a.Component),d=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(c.a)(this,Object(m.a)(e).call(this,t))).state={timerEnabled:!1,progressBarEnabled:"paused",restartFlag:!1,sessionLength:5,breakPoint:1,breakLength:2},a.timerEnabledToggle=a.timerEnabledToggle.bind(Object(h.a)(a)),a.timerReset=a.timerReset.bind(Object(h.a)(a)),a.sessionLengthChange=a.sessionLengthChange.bind(Object(h.a)(a)),a.breakPointChange=a.breakPointChange.bind(Object(h.a)(a)),a.breakLengthChange=a.breakLengthChange.bind(Object(h.a)(a)),a}return Object(g.a)(e,t),Object(l.a)(e,[{key:"timerReset",value:function(){this.state.restartFlag?this.setState({restartFlag:!1}):this.setState({restartFlag:!0})}},{key:"timerEnabledToggle",value:function(t){this.state.timerEnabled?(this.setState({timerEnabled:!1,progressBarEnabled:"paused"}),t.target.classList.remove("fa-pause"),t.target.classList.add("fa-play")):(this.setState({timerEnabled:!0,progressBarEnabled:"running"}),t.target.classList.remove("fa-play"),t.target.classList.add("fa-pause"))}},{key:"sessionLengthChange",value:function(t){"+"===t.target.value&&this.state.sessionLength<59?this.setState({sessionLength:this.state.sessionLength+1}):"-"===t.target.value&&this.state.sessionLength>0&&this.setState({sessionLength:this.state.sessionLength-1})}},{key:"breakPointChange",value:function(t){"+"===t.target.value&&this.state.breakPoint<this.state.sessionLength?this.setState({breakPoint:this.state.breakPoint+1}):"-"===t.target.value&&this.state.breakPoint>1&&this.setState({breakPoint:this.state.breakPoint-1})}},{key:"breakLengthChange",value:function(t){"+"===t.target.value&&this.state.breakLength<59?this.setState({breakLength:this.state.breakLength+1}):"-"===t.target.value&&this.state.breakLength>1&&this.setState({breakLength:this.state.breakLength-1})}},{key:"render",value:function(){var t=60*this.state.sessionLength;return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"timer-container"},n.a.createElement(p,{timerEnabled:this.state.timerEnabled,minutes:this.state.sessionLength,restartFlag:this.state.restartFlag}),n.a.createElement(u,{restartFlag:this.state.restartFlag,countDownTime:t,progressBarEnabled:this.state.progressBarEnabled,progressBarSize:.7})),n.a.createElement("fieldset",{className:"control-container",side:"left"},n.a.createElement("legend",null,n.a.createElement("p",{className:"container-title"},"Session Length")),n.a.createElement("div",{className:"content"},n.a.createElement("button",{className:"button fa fa-plus control-operator",onClick:this.sessionLengthChange,value:"+"}),n.a.createElement("div",{className:"control-number"},this.state.sessionLength),n.a.createElement("button",{className:"button fa fa-minus control-operator",onClick:this.sessionLengthChange,value:"-"}))),n.a.createElement("fieldset",{className:"control-container",side:"right"},n.a.createElement("legend",null,n.a.createElement("p",{className:"container-title"},"Break Point")),n.a.createElement("div",{className:"content"},n.a.createElement("button",{className:"button fa fa-plus control-operator",onClick:this.breakPointChange,value:"+"}),n.a.createElement("div",{className:"control-number"},this.state.breakPoint),n.a.createElement("button",{className:"button fa fa-minus control-operator",onClick:this.breakPointChange,value:"-"}))),n.a.createElement("fieldset",{className:"control-container",side:"bottom-first"},n.a.createElement("legend",null,n.a.createElement("p",{className:"container-title"},"Break Length")),n.a.createElement("div",{className:"content"},n.a.createElement("button",{className:"button fa fa-plus control-operator",onClick:this.breakLengthChange,value:"+"}),n.a.createElement("div",{className:"control-number"},this.state.breakLength),n.a.createElement("button",{className:"button fa fa-minus control-operator",onClick:this.breakLengthChange,value:"-"}))),n.a.createElement("div",{className:"control-container",side:"bottom-second"},n.a.createElement("i",{onClick:this.timerEnabledToggle,className:"button button-control fa fa-play"}),n.a.createElement("i",{onClick:this.timerReset,className:"button button-control fa fa-refresh"})))}}]),e}(n.a.Component);i.a.render(n.a.createElement(d,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.47815505.chunk.js.map