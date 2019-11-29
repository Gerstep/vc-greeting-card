(this["webpackJsonpvc-greeting-card"]=this["webpackJsonpvc-greeting-card"]||[]).push([[0],{131:function(e,t){},136:function(e,t){},137:function(e,t){},147:function(e,t){},152:function(e,t){},180:function(e,t){},206:function(e,t){},234:function(e,t){},301:function(e,t,n){e.exports=n(526)},306:function(e,t,n){},332:function(e,t){},333:function(e,t){},343:function(e,t){},349:function(e,t){},360:function(e,t){},361:function(e,t){},379:function(e,t){},388:function(e,t){},390:function(e,t){},420:function(e,t){},421:function(e,t){},523:function(e,t){},525:function(e,t){},526:function(e,t,n){"use strict";n.r(t);var a=n(15),i=n.n(a),r=n(295),o=n.n(r),s=(n(306),n(6)),c=n.n(s),u=n(183),l=n(296),f=n(297),m=n(299),d=n(298),g=n(300),h=n(308),v=n(68).Ed25519KeyPair,p=n(138),w=n(501),y=p.suites.Ed25519Signature2018,b=n(508).driver().keyToDidDoc,E="https://source.unsplash.com/collection/433313/1280x1024",k=h.parse(window.location.search),C=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={issuerVerificationMethod:k.issuerVerificationMethod||"",toDID:"did:example:123",publicKeyBase58:k.publicKeyBase58||"",privateKeyBase58:k.privateKeyBase58||"",msg:k.msg||"",backgroundImage:E},n.makeCard=function(){var e=n.canvasA,t=n.canvasA.getContext("2d"),a=n.state.msg,i=new Image;function r(e,n,a,i,r){var o=r||10,s=i||10;t.font=n.toString()+"px monospace",t.fillStyle=a,t.fillText(e,s,o)}i.src=n.state.backgroundImage,i.setAttribute("crossorigin","anonymous"),i.onload=function(){t.drawImage(i,0,0,n.canvasA.width,n.canvasA.height),t.fillStyle="RGBA(255, 255, 255, 0.8)",t.fillRect(0,0,e.width,e.height/4);r("Message: "+a,20,"red",0,40),r("From: "+n.state.issuerVerificationMethod,20,"red",0,72),r("To: "+n.state.toDID,20,"red",0,104)}},n.convertCardToVC=Object(u.a)(c.a.mark((function e(){var t,a,i,r,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new v(n.state),a=b(t),i=new y({issuerVerificationMethod:t.id,key:t}),r=n.canvasA.toDataURL("image/png"),o={"@context":["https://www.w3.org/2018/credentials/v1","https://www.w3.org/2018/credentials/examples/v1"],id:"https://example.com/credentials/1872",type:["VerifiableCredential","GreetingCard"],issuer:a.id,issuanceDate:(new Date).toISOString(),credentialSubject:{id:n.state.toDID},greetingCard:{image:r,message:n.state.message,from:n.state.issuerVerificationMethod,to:n.state.toDID}},e.next=7,w.issue({credential:o,suite:i});case 7:s=e.sent,console.log(JSON.stringify(s,null,2));case 9:case"end":return e.stop()}}),e)}))),n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(c.a.mark((function e(){var t,n,a=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==this.state.privateKeyBase58){e.next=6;break}return e.next=3,v.generate();case 3:t=e.sent,n=b(t),this.setState({issuerVerificationMethod:n.id,publicKeyBase58:t.publicKeyBase58,privateKeyBase58:t.privateKeyBase58});case 6:""===this.state.msg&&this.setState({msg:"Happy Holidays!"}),setTimeout((function(){a.makeCard()}),500);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"vc-greeting-card-options"},i.a.createElement("h3",null,"From Verification Method:"),i.a.createElement("input",{value:this.state.issuerVerificationMethod,onChange:function(t){e.setState({issuerVerificationMethod:t.target.value})}}),i.a.createElement("br",null),i.a.createElement("h3",null,"From Private Key:"),i.a.createElement("input",{value:this.state.privateKeyBase58,onChange:function(t){e.setState({privateKeyBase58:t.target.value})}}),i.a.createElement("h3",null,"To DID:"),i.a.createElement("input",{value:this.state.toDID,onChange:function(t){e.setState({toDID:t.target.value})}}),i.a.createElement("br",null),i.a.createElement("h3",null,"Message:"),i.a.createElement("input",{value:this.state.msg,onChange:function(t){e.setState({msg:t.target.value}),setTimeout((function(){e.makeCard()}),500)}}),i.a.createElement("br",null),i.a.createElement("h3",null,"Background: "),i.a.createElement("input",{value:this.state.backgroundImage,onChange:function(t){e.setState({backgroundImage:t.target.value}),setTimeout((function(){e.makeCard()}),500)}}),i.a.createElement("br",null),i.a.createElement("h3",null,i.a.createElement("button",{onClick:this.convertCardToVC},"Get VC Greeting Card"))),i.a.createElement("canvas",{style:{margin:"0 auto"},width:"800",height:"600",ref:function(t){return e.canvasA=t}}))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},70:function(e,t){},80:function(e,t){}},[[301,1,2]]]);
//# sourceMappingURL=main.a919f868.chunk.js.map