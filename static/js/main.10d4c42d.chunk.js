(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,a){e.exports=a.p+"static/media/welsh-dragon.a9c9a57a.svg"},5419:function(e,t,a){e.exports=a(5554)},5424:function(e,t,a){},5425:function(e,t,a){},5554:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(21),o=a.n(r),l=(a(5424),a(16)),c=a(17),s=a(19),m=a(18),u=a(20),d=a(22),p=a(23),h=a(6),g=a(24),b=a(59),f=a.n(b),v=a(60),y=a.n(v),E=a(26),O=a.n(E),j=a(29),w=a.n(j),k=a(61),x=a.n(k),C=a(62),S=a.n(C),N=a(132),T=a.n(N),D=(a(5425),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={drawerOpen:!1},a.toggleDrawer=a.toggleDrawer.bind(Object(g.a)(Object(g.a)(a))),a.scrollTo=a.scrollTo.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"scrollTo",value:function(e){e.preventDefault();var t=document.querySelector(e.currentTarget.getAttribute("href")),a=(window.pageYOffset||document.documentElement.scrollTop)+t.getBoundingClientRect().top,n=document.querySelector("header").offsetHeight;window.scrollTo(0,a-n)}},{key:"toggleDrawer",value:function(e){this.state.drawerOpen!==e&&this.setState({drawerOpen:e})}},{key:"render",value:function(){var e=this,t="xs"!==this.props.width;return i.a.createElement("div",null,i.a.createElement(f.a,{position:"fixed",color:"inherit"},i.a.createElement(y.a,null,i.a.createElement("div",{className:"header-container"},i.a.createElement("a",{className:"logo",href:"/"},i.a.createElement("img",{src:T.a,alt:"St. David's Society"})),i.a.createElement("div",{className:"header-wrapper"},i.a.createElement("div",{className:"header-top"},i.a.createElement(O.a,{variant:"h5",color:"inherit"},"Montreal St. David's Welsh Society")),t?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"header-divider"}),i.a.createElement("nav",null,i.a.createElement(w.a,{href:"#about",onClick:this.scrollTo},"Home"),i.a.createElement(w.a,{href:"#events",onClick:this.scrollTo},"Events"),i.a.createElement(w.a,{href:"#membership",onClick:this.scrollTo},"Memberships"),i.a.createElement(w.a,{href:"#contact",onClick:this.scrollTo},"Contact"))):null),t?null:i.a.createElement(x.a,{color:"inherit",onClick:function(){return e.toggleDrawer(!e.state.drawerOpen)}},i.a.createElement(S.a,null))))),i.a.createElement(h.i,{anchor:"right",onClose:function(){return e.toggleDrawer(!1)},onOpen:function(){return e.toggleDrawer(!0)},open:this.state.drawerOpen},i.a.createElement(h.f,null,[{title:"Home",url:"#about"},{title:"Events",url:"#events"},{title:"Memberships",url:"#membership"},{title:"Contact",url:"#contact"}].map(function(t,a){return i.a.createElement(h.g,{button:!0,href:t.url,component:"a",key:t.title,onClick:function(t){e.toggleDrawer(!1),e.scrollTo(t)}},i.a.createElement(h.h,{primary:t.title}))}))))}}]),t}(i.a.Component)),I=Object(h.l)()(D),W=a(5),F=a.n(W),B=a(63),M=a.n(B),A=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.children,n=e.id,r=e.title,o=e.subtitle,l=e.sectionStyle;return i.a.createElement("div",{id:n,className:F()(t.sectionContainer,l)},i.a.createElement(M.a,{item:!0,xs:12},r?i.a.createElement(O.a,{className:"section-title "+F()(t.sectionTitle),variant:"h5",align:"center"},r):null,o?i.a.createElement(O.a,{className:F()(t.sectionSubtitle),variant:"body1",align:"center"},o):null,i.a.createElement("div",{className:F()(t.sectionContent)},a)))}}]),t}(i.a.Component),R=Object(d.withStyles)(function(e){return{sectionContainer:{width:"auto",paddingTop:2*e.spacing.unit,paddingBottom:6*e.spacing.unit,"&.odd":{"& .section-title":{background:e.palette.primary.main,color:"white",marginTop:2*e.spacing.unit,marginBottom:2*e.spacing.unit}},"&.even":{background:"#efefef"}},sectionTitle:{textTransform:"uppercase",marginTop:2*e.spacing.unit,paddingTop:1*e.spacing.unit,paddingBottom:1*e.spacing.unit,fontWeight:500},sectionSubtitle:{color:e.palette.neutral.grey3},sectionContent:Object(p.a)({width:"auto",paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit,marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1280+3*e.spacing.unit*2),{width:1080,marginLeft:"auto",marginRight:"auto"})}})(A),Y=["January","February","March","April","May","June","July","August","September","October","November","December"],J=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.title,n=e.content,r=e.date;return i.a.createElement(h.b,{className:F()(t.card)},i.a.createElement("div",null,i.a.createElement(h.c,{className:F()(t.cardWrapper)},i.a.createElement("div",{className:F()(t.eventDetails)},i.a.createElement(h.k,{variant:"h6",className:F()(t.eventTitle)},a),i.a.createElement(h.k,{variant:"body1"},n)),i.a.createElement("div",{className:F()(t.eventDate)},i.a.createElement(h.k,{variant:"h3",align:"center",className:F()(t.eventDay)},r.getDate()+1),i.a.createElement(h.k,{variant:"subtitle1",align:"center",className:F()(t.eventMonth)},Y[r.getMonth()]),i.a.createElement(h.k,{variant:"caption",align:"center",className:F()(t.eventYear)},r.getFullYear())))))}}]),t}(i.a.Component),L=Object(d.withStyles)(function(e){return{card:{margin:"15px 0"},cardWrapper:Object(p.a)({display:"flex",padding:"20px 25px"},e.breakpoints.down("sm"),{padding:"15px 20px",flexDirection:"column"}),eventDetails:Object(p.a)({paddingRight:"50px"},e.breakpoints.down("sm"),{paddingRight:0}),eventTitle:{marginBottom:"10px"},eventDate:Object(p.a)({padding:"0 30px 0 50px",minWidth:"75px",borderLeft:"1px solid #1b1b1b",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},e.breakpoints.down("sm"),{borderLeft:"none",borderTop:"1px solid #1b1b1b",marginTop:15,padding:"15px 0 0"}),eventDay:{fontFamily:"Ubuntu",fontSize:"60px",lineHeight:1},eventMonth:{fontSize:"24px",padding:"5px 0",lineHeight:1},eventYear:{fontSize:"16px",lineHeight:1}}})(J),z=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(R,{id:"membership",title:"Membership",sectionStyle:"odd"},i.a.createElement(h.k,{variant:"h6",className:F()(e.subtitle)},"Joining the St. David\u2019s society is a great way to contribute to and meet other members of the Welsh community in Montreal."),i.a.createElement(h.d,{container:!0,className:e.root,spacing:40},i.a.createElement(h.d,{item:!0,xs:12,md:6,className:e.membershipSection},i.a.createElement(h.k,{variant:"h6"},"Being a member gives you :"),i.a.createElement("ul",null,i.a.createElement("li",null,"The main perk you get"),i.a.createElement("li",null,"Another perk which is great"),i.a.createElement("li",null,"Yet another advantage to being a member"),i.a.createElement("li",null,"And much more..."))),i.a.createElement(h.d,{item:!0,xs:12,md:6,className:e.membershipSection},i.a.createElement(h.k,{variant:"h6"},"You can be a member of the St. David\u2019s society for the small price of 50$"),i.a.createElement(h.a,{variant:"contained",style:{marginTop:"15px"}},"Become a member"))))}}]),t}(i.a.Component),H=Object(d.withStyles)(function(e){return{subtitle:{borderBottom:"2px solid ".concat(e.palette.primary.main),paddingBottom:"10px"},root:{marginTop:"25px"},membershipSection:Object(p.a)({padding:"5px 40px !important","&:first-child":Object(p.a)({borderRight:"1px solid #757575"},e.breakpoints.down("sm"),{borderRight:"none"})},e.breakpoints.down("sm"),{padding:"5px 20px !important"})}})(z),P=a(44),q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleInputChange=function(e){return function(t){a.setState(Object(p.a)({},e,t.target.value))}},a.state={name:"",email:"",message:"",age:""},a.handleInputChange=a.handleInputChange.bind(Object(g.a)(Object(g.a)(a))),a.onRecaptchaVerify=a.onRecaptchaVerify.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onRecaptchaVerify",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(R,{id:"contact",title:"Contact the St. David\u2019s society",subtitle:"Let us know if you have any questions or comments",sectionStyle:"even"},i.a.createElement("form",{className:e.form},i.a.createElement(h.j,{id:"emailName",className:e.textField,value:this.state.name,onChange:this.handleInputChange("name"),margin:"dense",variant:"outlined",placeholder:"Your name",InputProps:{startAdornment:i.a.createElement(h.e,{position:"start"},i.a.createElement(P.c,{className:e.fieldIcon}))}}),i.a.createElement(h.j,{id:"emailAddress",type:"email",className:e.textField,value:this.state.email,onChange:this.handleInputChange("email"),margin:"dense",variant:"outlined",placeholder:"Your email",InputProps:{startAdornment:i.a.createElement(h.e,{position:"start"},i.a.createElement(P.a,{className:e.fieldIcon}))}}),i.a.createElement(h.j,{id:"emailMessage",multiline:!0,className:e.textField,value:this.state.message,onChange:this.handleInputChange("message"),margin:"dense",variant:"outlined",placeholder:"Your message",InputProps:{startAdornment:i.a.createElement(h.e,{position:"start"},i.a.createElement(P.b,{className:e.fieldIcon}))}}),i.a.createElement(h.j,{id:"emailAge",type:"message",className:e.ageField,value:this.state.age,onChange:this.handleInputChange("age"),margin:"dense",variant:"outlined",placeholder:"Your age",InputProps:{startAdornment:i.a.createElement(h.e,{position:"start"},i.a.createElement(P.b,{className:e.fieldIcon}))}}),i.a.createElement(h.a,{variant:"contained",style:{margin:"8px"}},"Send message")))}}]),t}(i.a.Component),U=Object(d.withStyles)(function(e){return{form:{maxWidth:"750px",margin:"0 auto"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:"100%",background:"white","& div:hover":{"& fieldset":{borderColor:"".concat(e.palette.neutral.grey2)}},"& fieldset":{borderWidth:"1px !important"}},fieldIcon:{color:e.palette.neutral.grey2},ageField:{display:"none"},submitButton:{background:e.palette.primary.main}}})(q),V=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement("div",{className:e.footerWrapper},i.a.createElement(h.k,{variant:"body1",align:"center",style:{color:"white"}},"\xa9Copyright St. David\u2019s society 2019"))}}]),t}(i.a.Component),Q=Object(d.withStyles)(function(e){return{footerWrapper:{background:e.palette.neutral.grey4,padding:"20px"}}})(V),$=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement("div",{className:"App"},i.a.createElement(I,null),i.a.createElement("main",{className:e.main},i.a.createElement(R,{id:"about",title:"What is the Montreal St. David\u2019s Society?",sectionStyle:"odd"},i.a.createElement(h.k,{variant:"body1"},"Why are you pointing your screwdrivers like that? They're scientific instruments, not water pistols. One day, just one day, maybe I'll meet somebody who gets the whole 'don't wander off' thing. Clara, I'm not your boyfriend. I never said it was your mistake. That could blow a hole in the space-time continuum, the size of\u2014actually, the exact size of Belgium. That's a bit undramatic, isn't it? 'Belgium'? People assume that time is a strict progression of cause-and-effect... but actually, from a non-linear, non-subjective viewpoint, it's more like a big ball of wibbly-wobbly... timey-wimey... stuff.")),i.a.createElement(R,{id:"events",title:"Upcoming events",sectionStyle:"even"},i.a.createElement(L,{title:"Title of the first upcoming event",content:"Join us for the first official event hosted by the St. David\u2019s society.\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                tempor incididunt ut labore et dolore magna aliqua. Quis ipsum\n                                suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan\n                                lacus vel facilisis.",date:new Date("2019-03-25")}),i.a.createElement(L,{title:"Title of the first upcoming event",content:"Join us for the first official event hosted by the St. David\u2019s society.\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                tempor incididunt ut labore et dolore magna aliqua. Quis ipsum\n                                suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan\n                                lacus vel facilisis.",date:new Date("2019-04-04")})),i.a.createElement(H,null),i.a.createElement(U,null)),i.a.createElement(Q,null))}}]),t}(i.a.Component),G=Object(h.l)()(Object(d.withStyles)(function(e){return{main:Object(p.a)({paddingTop:110},e.breakpoints.down("sm"),{paddingTop:85})}})($)),K=Object(d.createMuiTheme)({palette:{primary:{main:"#d21034"},neutral:{white:"ffffff",grey1:"#f2f2f2",grey2:"#757575",grey3:"#686868",grey4:"#1b1b1b",black:"000000",main:"#757575"}},typography:{useNextVariants:!0,fontFamily:["Ubuntu","Arial","sans-serif"].join(","),h1:{fontFamily:"Comorant",fontWeight:600},h2:{fontFamily:"Comorant",fontWeight:600},h3:{fontFamily:"Comorant",fontWeight:600},h4:{fontFamily:"Comorant",fontWeight:600},h5:{fontFamily:"Comorant",fontWeight:500},headline:{fontFamily:"Ubuntu",fontWeight:600,fontSize:"2rem"}},overrides:{MuiButton:{contained:{boxShadow:"none",backgroundColor:"#757575",color:"white","&:hover":{backgroundColor:"#d21034"}}}}}),X=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(d.MuiThemeProvider,{theme:K},i.a.createElement(G,null))}}]),t}(n.Component);o.a.render(i.a.createElement(X,null),document.getElementById("root"))}},[[5419,1,2]]]);
//# sourceMappingURL=main.10d4c42d.chunk.js.map