(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(e,t,n){e.exports={form:"ProfileForm_form__2xGgc",control:"ProfileForm_control__2YUZH",action:"ProfileForm_action__opJ_6"}},15:function(e,t,n){e.exports={header:"MainNavigation_header__2lqQ1",logo:"MainNavigation_logo__1TgMx"}},20:function(e,t,n){e.exports={profile:"UserProfile_profile__gQOnH"}},21:function(e,t,n){e.exports={starting:"StartingPageContent_starting__kwCvL"}},26:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(18),o=n.n(c),i=n(7),r=(n(26),n(1)),s=n.n(r),a=n(2),l=n(11),j=n(0),u=s.a.createContext({token:"",isLoggedIn:!1,login:function(e){},logout:function(){}}),d=function(e){var t=localStorage.getItem("token"),n=Object(r.useState)(t),c=Object(l.a)(n,2),o=c[0],i=c[1],s=function(){i(null),localStorage.removeItem("token")},a={token:o,isLoggedIn:!!o,login:function(e,t){i(e),localStorage.setItem("token",e);!function(e){var t=(new Date).getTime();new Date(e).getTime()}(t);setTimeout(s,3e3)},logout:s};return Object(j.jsx)(u.Provider,{value:a,children:e.children})},h=u,b=n(15),O=n.n(b),g=function(){var e=Object(r.useContext)(h),t=e.isLoggedIn;return Object(j.jsxs)("header",{className:O.a.header,children:[Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("div",{className:O.a.logo,children:"React Auth"})}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[!t&&Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/auth",children:"Login"})}),t&&Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/profile",children:"Profile"})}),t&&Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:function(){e.logout()},children:"Logout"})})]})})]})},x=function(e){return Object(j.jsxs)(r.Fragment,{children:[Object(j.jsx)(g,{}),Object(j.jsx)("main",{children:e.children})]})},f=n(12),p=n.n(f),m=function(){var e=Object(r.useRef)(),t=Object(r.useContext)(h),n=Object(a.g)();return Object(j.jsxs)("form",{className:p.a.form,onSubmit:function(c){c.preventDefault();var o=e.current.value;fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA2cGi4nySKM25qAX9CqnzeYziSto1DXu0",{method:"POST",body:JSON.stringify({idToken:t.token,password:o,returnSecureToken:!1}),headers:{"Content-Type":"application/json"}}).then((function(e){n.replace("/")}))},children:[Object(j.jsxs)("div",{className:p.a.control,children:[Object(j.jsx)("label",{htmlFor:"new-password",children:"New Password"}),Object(j.jsx)("input",{type:"password",id:"new-password",minLength:"7",ref:e})]}),Object(j.jsx)("div",{className:p.a.action,children:Object(j.jsx)("button",{children:"Change Password"})})]})},_=n(20),v=n.n(_),S=function(){return Object(j.jsxs)("section",{className:v.a.profile,children:[Object(j.jsx)("h1",{children:"Your User Profile"}),Object(j.jsx)(m,{})]})},w=n(9),y=n.n(w),k=function(){var e=Object(r.useRef)(),t=Object(r.useRef)(),n=Object(a.g)(),c=Object(r.useContext)(h),o=Object(r.useState)(!0),i=Object(l.a)(o,2),s=i[0],u=i[1],d=Object(r.useState)(!1),b=Object(l.a)(d,2),O=b[0],g=b[1];return Object(j.jsxs)("section",{className:y.a.auth,children:[Object(j.jsx)("h1",{children:s?"Login":"Sign Up"}),Object(j.jsxs)("form",{onSubmit:function(o){o.preventDefault();var i,r=e.current.value,a=t.current.value;g(!0),i=s?"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA2cGi4nySKM25qAX9CqnzeYziSto1DXu0":"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA2cGi4nySKM25qAX9CqnzeYziSto1DXu0",fetch(i,{method:"POST",body:JSON.stringify({email:r,password:a,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){return g(!1),e.ok?e.json():e.json().then((function(e){throw new Error("Authentication failed!")}))})).then((function(e){var t=new Date((new Date).getTime()+1e3*+e.expiresIn);c.login(e.idToken,t.toISOString()),n.replace("/")})).catch((function(e){alert(e.message)}))},children:[Object(j.jsxs)("div",{className:y.a.control,children:[Object(j.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(j.jsx)("input",{type:"email",id:"email",required:!0,ref:e})]}),Object(j.jsxs)("div",{className:y.a.control,children:[Object(j.jsx)("label",{htmlFor:"password",children:"Your Password"}),Object(j.jsx)("input",{type:"password",id:"password",required:!0,ref:t})]}),Object(j.jsxs)("div",{className:y.a.actions,children:[!O&&Object(j.jsx)("button",{children:s?"Login":"Create Account"}),O&&Object(j.jsx)("p",{children:"Sending request..."}),Object(j.jsx)("button",{type:"button",className:y.a.toggle,onClick:function(){u((function(e){return!e}))},children:s?"Create new account":"Login with existing account"})]})]})]})},N=function(){return Object(j.jsx)(k,{})},C=n(21),A=n.n(C),I=function(){return Object(j.jsx)("section",{className:A.a.starting,children:Object(j.jsx)("h1",{children:"Welcome on Board!"})})},P=function(){return Object(j.jsx)(I,{})};var L=function(){var e=Object(r.useContext)(h);return Object(j.jsx)(x,{children:Object(j.jsxs)(a.d,{children:[Object(j.jsx)(a.b,{path:"/",exact:!0,children:Object(j.jsx)(P,{})}),!e.isLoggedIn&&Object(j.jsx)(a.b,{path:"/auth",children:Object(j.jsx)(N,{})}),Object(j.jsxs)(a.b,{path:"/profile",children:[e.isLoggedIn&&Object(j.jsx)(S,{}),!e.isLoggedIn&&Object(j.jsx)(a.a,{to:"/auth"})]}),Object(j.jsx)(a.b,{path:"*",children:Object(j.jsx)(a.a,{to:"/"})})]})})};o.a.render(Object(j.jsx)(d,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(L,{})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={auth:"AuthForm_auth__MPw6W",control:"AuthForm_control__2fVSU",actions:"AuthForm_actions__1VNhY",toggle:"AuthForm_toggle__21tnB"}}},[[36,1,2]]]);
//# sourceMappingURL=main.038524f0.chunk.js.map