(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){},24:function(e,t,a){e.exports=a(53)},30:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),s=a.n(o),l=a(55),i=a(56),c=(a(30),a(7)),u=a(8),m=a(10),d=a(9),h=a(11),p=a(54),g=a(6),f=a.n(g),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).logout=function(){localStorage.removeItem("jwtToken"),window.location.reload()},a.state={articles:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.defaults.headers.common.Authorization=localStorage.getItem("jwtToken"),f.a.get("/api/article").then(function(t){e.setState({articles:t.data}),console.log(e.state.articles)}).catch(function(t){401===t.response.status&&e.props.history.push("/login")})}},{key:"render",value:function(){return r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"panel panel-default"},r.a.createElement("div",{class:"panel-heading"},r.a.createElement("h3",{class:"panel-title"},"ARTICLE CATALOG \xa0",localStorage.getItem("jwtToken")&&r.a.createElement("button",{class:"btn btn-primary",onClick:this.logout},"Logout"))),r.a.createElement("div",{class:"panel-body"},r.a.createElement("table",{class:"table table-stripe"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ISBN"),r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Author"))),r.a.createElement("tbody",null,this.state.articles.map(function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(p.a,{to:"/show/".concat(e._id)},e.isbn)),r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.author))}))))))}}]),t}(n.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var E=function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");w?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):v(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):v(t,e)}),window.addEventListener("fetch",function(e){if(e.request.url.match("^.*(/api/).*$"))return!1})}},y=(a(21),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).onChange=function(t){var a=e.state;a[t.target.name]=t.target.value,e.setState(a)},e.onSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password;f.a.post("/api/auth/login",{username:n,password:r}).then(function(t){localStorage.setItem("jwtToken",t.data.token),e.setState({message:""}),e.props.history.push("/")}).catch(function(t){401===t.response.status&&e.setState({message:"Login failed. Username or password not match"})})},e.state={username:"",password:"",message:""},e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.message;return r.a.createElement("div",{class:"container"},r.a.createElement("form",{class:"form-signin",onSubmit:this.onSubmit},""!==n&&r.a.createElement("div",{class:"alert alert-warning alert-dismissible",role:"alert"},n),r.a.createElement("h2",{class:"form-signin-heading"},"Please sign in"),r.a.createElement("label",{for:"inputEmail",class:"sr-only"},"Email address"),r.a.createElement("input",{type:"email",class:"form-control",placeholder:"Email address",name:"username",value:t,onChange:this.onChange,required:!0}),r.a.createElement("label",{for:"inputPassword",class:"sr-only"},"Password"),r.a.createElement("input",{type:"password",class:"form-control",placeholder:"Password",name:"password",value:a,onChange:this.onChange,required:!0}),r.a.createElement("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"Login"),r.a.createElement("p",null,"Not a member?"," ",r.a.createElement(p.a,{to:"/register"},r.a.createElement("span",{class:"glyphicon glyphicon-plus-sign","aria-hidden":"true"})," Register here"))))}}]),t}(n.Component)),k=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).onChange=function(t){var a=e.state;a[t.target.name]=t.target.value,e.setState(a)},e.onSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password;f.a.post("/api/auth/register",{username:n,password:r}).then(function(t){e.props.history.push("/login")})},e.state={username:"",password:""},e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",{class:"container"},r.a.createElement("form",{class:"form-signin",onSubmit:this.onSubmit},r.a.createElement("h2",{class:"form-signin-heading"},"Register"),r.a.createElement("label",{for:"inputEmail",class:"sr-only"},"Email address"),r.a.createElement("input",{type:"email",class:"form-control",placeholder:"Email address",name:"username",value:t,onChange:this.onChange,required:!0}),r.a.createElement("label",{for:"inputPassword",class:"sr-only"},"Password"),r.a.createElement("input",{type:"password",class:"form-control",placeholder:"Password",name:"password",value:a,onChange:this.onChange,required:!0}),r.a.createElement("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"Register")))}}]),t}(n.Component);s.a.render(r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(i.a,{exact:!0,path:"/",component:b}),r.a.createElement(i.a,{path:"/login",component:y}),r.a.createElement(i.a,{path:"/register",component:k}))),document.getElementById("root")),E()}},[[24,1,2]]]);
//# sourceMappingURL=main.11b60995.chunk.js.map