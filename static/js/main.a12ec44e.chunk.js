(this.webpackJsonpmineour_clone=this.webpackJsonpmineour_clone||[]).push([[0],{52:function(e,t,r){"use strict";r.r(t);var c=r(1),a=r(0),n=r.n(a),s=r(18),i=r.n(s),j=r(15),o=r.n(j),l=r(17),u=r(8),d=r(58),b=r(56),O=r(57),p=r(54),h=r(33),x=(r(44),h.a.initializeApp({apiKey:"AIzaSyDBrq-3sSDmWIOXNBFqfIgMUVfkDnEmFbY",authDomain:"mineour-83160.firebaseapp.com",databaseURL:"https://mineour-83160-default-rtdb.firebaseio.com",projectId:"mineour-83160",storageBucket:"mineour-83160.appspot.com",messagingSenderId:"434023847752",appId:"1:434023847752:web:4bca7ba4e2c9846e8e857d"})),m=x.auth(),f=n.a.createContext();function v(){return Object(a.useContext)(f)}function w(e){var t=e.children,r=Object(a.useState)(),n=Object(u.a)(r,2),s=n[0],i=n[1],j=Object(a.useState)(!0),o=Object(u.a)(j,2),l=o[0],d=o[1];Object(a.useEffect)((function(){return m.onAuthStateChanged((function(e){d(!1),i(e)}))}),[]);var b={currentUser:s,login:function(e,t){return m.signInWithEmailAndPassword(e,t)},signup:function(e,t){return m.createUserWithEmailAndPassword(e,t)},logout:function(){return m.signOut()},resetPassword:function(e){m.sendPasswordResetEmail(e)},updateEmail:function(e){return s.updateEmail(e)},updatePassword:function(e){return s.updatePassword(e)}};return Object(c.jsx)(f.Provider,{value:b,children:!l&&t})}var g=r(7),y=r(9);function S(){var e=Object(a.useRef)(),t=Object(a.useRef)(),r=v().login,n=Object(a.useState)(""),s=Object(u.a)(n,2),i=s[0],j=s[1],h=Object(a.useState)(!1),x=Object(u.a)(h,2),m=x[0],f=x[1],w=Object(g.g)();function S(){return(S=Object(l.a)(o.a.mark((function c(a){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a.preventDefault(),c.prev=1,j(""),f(!0),c.next=6,r(e.current.value,t.current.value);case 6:w.push("/"),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(1),j("Failed to log in");case 12:f(!1);case 13:case"end":return c.stop()}}),c,null,[[1,9]])})))).apply(this,arguments)}return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(d.a,{children:Object(c.jsxs)(d.a.Body,{children:[Object(c.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),i&&Object(c.jsx)(b.a,{variant:"danger",children:i}),Object(c.jsxs)(O.a,{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(c.jsxs)(O.a.Group,{id:"email",children:[Object(c.jsx)(O.a.Label,{children:"Email"}),Object(c.jsx)(O.a.Control,{type:"email",ref:e,required:!0})]}),Object(c.jsxs)(O.a.Group,{id:"password",children:[Object(c.jsx)(O.a.Label,{children:"Password"}),Object(c.jsx)(O.a.Control,{type:"password",ref:t,required:!0})]}),Object(c.jsx)(p.a,{disabled:m,className:"w-100",type:"submit",children:"Log In"})]}),Object(c.jsx)("div",{className:"w-100 text-center mt-3",children:Object(c.jsx)(y.b,{to:"/forgot-password",children:"Forgot Password?"})})]})}),Object(c.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(c.jsx)(y.b,{to:"/signup",children:"Sign Up"})]})]})}function P(){var e=Object(a.useRef)(),t=Object(a.useRef)(),r=Object(a.useRef)(),n=v().signup,s=Object(a.useState)(""),i=Object(u.a)(s,2),j=i[0],h=i[1],x=Object(a.useState)(!1),m=Object(u.a)(x,2),f=m[0],w=m[1],S=Object(g.g)();function P(){return(P=Object(l.a)(o.a.mark((function c(a){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(a.preventDefault(),t.current.value===r.current.value){c.next=3;break}return c.abrupt("return",h("Passwords do not match"));case 3:return c.prev=3,h(""),w(!0),c.next=8,n(e.current.value,t.current.value);case 8:S.push("/"),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(3),h("Failed to create an account");case 14:w(!1);case 15:case"end":return c.stop()}}),c,null,[[3,11]])})))).apply(this,arguments)}return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(d.a,{children:Object(c.jsxs)(d.a.Body,{children:[Object(c.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),j&&Object(c.jsx)(b.a,{variant:"danger",children:j}),Object(c.jsxs)(O.a,{onSubmit:function(e){return P.apply(this,arguments)},children:[Object(c.jsxs)(O.a.Group,{id:"email",children:[Object(c.jsx)(O.a.Label,{children:"Email"}),Object(c.jsx)(O.a.Control,{type:"email",ref:e,required:!0})]}),Object(c.jsxs)(O.a.Group,{id:"password",children:[Object(c.jsx)(O.a.Label,{children:"Password"}),Object(c.jsx)(O.a.Control,{type:"password",ref:t,required:!0})]}),Object(c.jsxs)(O.a.Group,{id:"password-confirm",children:[Object(c.jsx)(O.a.Label,{children:"Password Confirmation"}),Object(c.jsx)(O.a.Control,{type:"password",ref:r,required:!0})]}),Object(c.jsx)(p.a,{disabled:f,className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(c.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(c.jsx)(y.b,{to:"/login",children:"Log In"})]})]})}function N(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),r=t[0],n=t[1],s=v(),i=s.currentUser,j=s.logout,O=Object(g.g)();function h(){return(h=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(""),e.prev=1,e.next=4,j();case 4:O.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(d.a,{children:Object(c.jsxs)(d.a.Body,{children:[Object(c.jsx)("h2",{className:"text-center mb-4",children:"Profile"}),r&&Object(c.jsx)(b.a,{variant:"danger",children:r}),Object(c.jsx)("strong",{children:"Email:"})," ",i.email,Object(c.jsx)(y.b,{to:"/update-profile",className:"btn btn-primary w-100 mt-3",children:"Update Profile"})]})}),Object(c.jsx)("div",{className:"w-100 text-center mt-2",children:Object(c.jsx)(p.a,{variant:"link",onClick:function(){return h.apply(this,arguments)},children:"Log Out"})})]})}var k=r(22),C=r(37);function L(e){var t=e.component,r=Object(C.a)(e,["component"]),a=v().currentUser;return Object(c.jsx)(g.b,Object(k.a)(Object(k.a)({},r),{},{render:function(e){return a?Object(c.jsx)(t,Object(k.a)({},e)):Object(c.jsx)(g.a,{to:"/login"})}}))}function E(){var e=Object(a.useRef)(),t=Object(a.useRef)(),r=Object(a.useRef)(),n=v(),s=n.currentUser,i=n.updatePassword,j=n.updateEmail,o=Object(a.useState)(""),l=Object(u.a)(o,2),h=l[0],x=l[1],m=Object(a.useState)(!1),f=Object(u.a)(m,2),w=f[0],S=f[1],P=Object(g.g)();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(d.a,{children:Object(c.jsxs)(d.a.Body,{children:[Object(c.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),h&&Object(c.jsx)(b.a,{variant:"danger",children:h}),Object(c.jsxs)(O.a,{onSubmit:function(c){if(c.preventDefault(),t.current.value!==r.current.value)return x("Passwords do not match");var a=[];S(!0),x(""),e.current.value!==s.email&&a.push(j(e.current.value)),t.current.value&&a.push(i(t.current.value)),Promise.all(a).then((function(){P.push("/")})).catch((function(){x("Failed to update account")})).finally((function(){S(!1)}))},children:[Object(c.jsxs)(O.a.Group,{id:"email",children:[Object(c.jsx)(O.a.Label,{children:"Email"}),Object(c.jsx)(O.a.Control,{type:"email",ref:e,required:!0,defaultValue:s.email})]}),Object(c.jsxs)(O.a.Group,{id:"password",children:[Object(c.jsx)(O.a.Label,{children:"Password"}),Object(c.jsx)(O.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(c.jsxs)(O.a.Group,{id:"password-confirm",children:[Object(c.jsx)(O.a.Label,{children:"Password Confirmation"}),Object(c.jsx)(O.a.Control,{type:"password",ref:r,placeholder:"Leave blank to keep the same"})]}),Object(c.jsx)(p.a,{disabled:w,className:"w-100",type:"submit",children:"Update"})]})]})}),Object(c.jsx)("div",{className:"w-100 text-center mt-2",children:Object(c.jsx)(y.b,{to:"/",children:"Cancel"})})]})}function U(){var e=Object(a.useRef)(),t=v().resetPassword,r=Object(a.useState)(""),n=Object(u.a)(r,2),s=n[0],i=n[1],j=Object(a.useState)(""),h=Object(u.a)(j,2),x=h[0],m=h[1],f=Object(a.useState)(!1),w=Object(u.a)(f,2),g=w[0],S=w[1];function P(){return(P=Object(l.a)(o.a.mark((function r(c){return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c.preventDefault(),r.prev=1,m(""),i(""),S(!0),r.next=7,t(e.current.value);case 7:m("Check your inbox for further instructions"),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),i("Failed to reset password");case 13:S(!1);case 14:case"end":return r.stop()}}),r,null,[[1,10]])})))).apply(this,arguments)}return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(d.a,{children:Object(c.jsxs)(d.a.Body,{children:[Object(c.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),s&&Object(c.jsx)(b.a,{variant:"danger",children:s}),x&&Object(c.jsx)(b.a,{variant:"success",children:x}),Object(c.jsxs)(O.a,{onSubmit:function(e){return P.apply(this,arguments)},children:[Object(c.jsxs)(O.a.Group,{id:"email",children:[Object(c.jsx)(O.a.Label,{children:"Email"}),Object(c.jsx)(O.a.Control,{type:"email",ref:e,required:!0})]}),Object(c.jsx)(p.a,{disabled:g,className:"w-100",type:"submit",children:"Reset Password"})]}),Object(c.jsx)("div",{className:"w-100 text-center mt-3",children:Object(c.jsx)(y.b,{to:"/login",children:"Login"})})]})}),Object(c.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(c.jsx)(y.b,{to:"/signup",children:"Sign Up"})]})]})}var F=r(55);var R=function(){return Object(c.jsx)(F.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(c.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(c.jsx)(y.a,{children:Object(c.jsx)(w,{children:Object(c.jsxs)(g.d,{children:[Object(c.jsx)(L,{exact:!0,path:"/",component:N}),Object(c.jsx)(L,{path:"/update-profile",component:E}),Object(c.jsx)(g.b,{path:"/signup",component:P}),Object(c.jsx)(g.b,{path:"/login",component:S}),Object(c.jsx)(g.b,{path:"/forgot-password",component:U})]})})})})})};r(51);i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(R,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.a12ec44e.chunk.js.map