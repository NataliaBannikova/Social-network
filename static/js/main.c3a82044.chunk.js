(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{128:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(41),a=n(4),o={messages:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Yo"}],dialogs:[{id:1,name:"Nata"},{id:2,name:"Stas"},{id:3,name:"Emma"}]},u=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:t.newMessageBody}])});default:return e}}},13:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return c}));var r=n(57),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"5b3aef01-ef4a-41cd-bd77-38f17735a1df"}}),o={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object."),u.getProfile(e)}},u={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},c={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},133:function(e,t,n){e.exports=n.p+"static/media/loader.d2253ba2.svg"},137:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__17MJB"}},14:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",activeLink:"Navbar_activeLink__3etBE"}},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(27),a=n(28),o=n(30),u=n(29),c=n(0),i=n.n(c),s=n(11),l=n(6),f=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(o.a)(c,t);var n=Object(u.a)(c);function c(){return Object(r.a)(this,c),n.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(l.a,{to:"/login"})}}]),c}(i.a.Component);return Object(s.b)(f)(t)}},170:function(e,t,n){e.exports=n(299)},178:function(e,t,n){},296:function(e,t,n){},297:function(e,t,n){},298:function(e,t,n){},299:function(e,t,n){"use strict";n.r(t);var r=n(56),a=n.n(r),o=n(0),u=n.n(o),c=n(27),i=n(28),s=n(30),l=n(29),f=n(11),p=n(6),m=n(10),d=(n(178),n(46)),g=(n(57),n(19)),b=n(55),E=n.n(b),h=n(58),v=n.n(h),O=function(e){return u.a.createElement("header",{className:E.a.header},u.a.createElement("img",{src:"https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/5e17558f848f82e664c09d67_logo-dark.svg"}),u.a.createElement("div",{className:E.a.loginBlock},e.isAuth?u.a.createElement("div",null,e.login," - ",u.a.createElement("button",{onClick:e.logout},"Log out")):u.a.createElement(g.b,{to:"/login"},"Login")),u.a.createElement("div",{className:E.a.usersAva},u.a.createElement("img",{src:null!=e.large?e.large:v.a,className:E.a.userPhoto})))},_=n(9),S=n.n(_),j=n(16),w=n(4),P=n(42),C=n(13),y={userId:null,email:null,login:null,isAuth:!1,photos:null},I=function(e,t,n,r){return{type:"auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},N=function(){return function(){var e=Object(j.a)(S.a.mark((function e(t){var n,r,a,o,u;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,o=r.login,u=r.email,t(I(a,u,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(w.a)(Object(w.a)({},e),t.payload);case"SET_CURRENT_USER_PROFILE":return Object(w.a)(Object(w.a)({},e),t.photos);default:return e}},k=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return u.a.createElement(O,this.props)}}]),n}(u.a.Component),U=Object(f.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{setCurrentUserProfile:function(e){return{type:"SET_CURRENT_USER_PROFILE",photos:e}},logout:function(){return function(){var e=Object(j.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.logout();case 2:0===e.sent.data.resultCode&&t(I(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(k),L=n(129),F=n(77),A=n(36),x=n(50),R=n.n(x),z=Object(L.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return u.a.createElement("form",{onSubmit:t},Object(A.c)("Email","email",[F.b],A.a),Object(A.c)("Password","password",[F.b],A.a,{type:"password"}),Object(A.c)(null,"rememberMe",[],A.a,{type:"checkbox"},"remember me"),n&&u.a.createElement("div",{className:R.a.formSummaryError},n),u.a.createElement("div",null,u.a.createElement("button",null,"Login")))})),D=Object(f.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(j.a)(S.a.mark((function r(a){var o,u;return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,C.a.login(e,t,n);case 2:0===(o=r.sent).data.resultCode?a(N()):(u=o.data.messages.length>0?o.data.messages[0]:"Some error",a(Object(P.a)("login",{_error:u})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?u.a.createElement(p.a,{to:"/profile"}):u.a.createElement("div",null,u.a.createElement("h1",null,"Login"),u.a.createElement(z,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),G=(n(296),function(e){return u.a.createElement("div",null,"Music")}),M=(n(95),n(96),n(14)),B=n.n(M),H=function(e){return u.a.createElement("nav",{className:B.a.nav},u.a.createElement("div",{className:B.a.item},u.a.createElement(g.b,{to:"/Profile",activeClassName:B.a.activeLink},"Profile")),u.a.createElement("div",{className:"".concat(B.a.item," ").concat(B.a.active)},u.a.createElement(g.b,{to:"/Dialogs",activeClassName:B.a.activeLink},"Messages")),u.a.createElement("div",{className:"".concat(B.a.item," ").concat(B.a.active)},u.a.createElement(g.b,{to:"/Users",activeClassName:B.a.activeLink},"Users")),u.a.createElement("div",{className:B.a.item},u.a.createElement(g.b,{to:"/News",activeClassName:B.a.activeLink},"News")),u.a.createElement("div",{className:B.a.item},u.a.createElement(g.b,{to:"/Music",activeClassName:B.a.activeLink},"Music")),u.a.createElement("div",{className:B.a.item},u.a.createElement(g.b,{to:"/Settings",activeClassName:B.a.activeLink},"Settings")))},W=(n(297),function(e){return u.a.createElement("div",null,"News for you")}),K=(n(298),function(e){return u.a.createElement("div",null,"Settings")}),V=n(54),J=n(69),X=n(130),Y=n(73),Z=n.n(Y),q=n(136),Q=n.n(q),$=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,c=e.portionSize,i=void 0===c?20:c,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var p=Math.ceil(s/i),m=Object(o.useState)(1),d=Object(X.a)(m,2),g=d[0],b=d[1],E=(g-1)*i+1,h=g*i;return u.a.createElement("div",{className:Z.a.paginator},g>1&&u.a.createElement("button",{onClick:function(){b(g-1)}},"prev"),l.filter((function(e){return e>=E&&e<=h})).map((function(e){return u.a.createElement("span",{className:Q()(Object(J.a)({},Z.a.selectedPage,r===e),Z.a.pageNumber),key:e,onClick:function(t){a(e)}},e)})),p>g&&u.a.createElement("button",{onClick:function(){b(g+1)}},"next"))},ee=n(137),te=n.n(ee),ne=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return u.a.createElement("div",null,u.a.createElement("span",null,u.a.createElement("div",null,u.a.createElement(g.b,{to:"/profile/"+t.id},u.a.createElement("img",{src:null!=t.photos.small?t.photos.small:v.a,className:te.a.userPhoto}))),u.a.createElement("div",null,t.followed?u.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"UnFollow"):u.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Follow"))),u.a.createElement("span",null,u.a.createElement("span",null,u.a.createElement("div",null,t.name),u.a.createElement("div",null,t.status)),u.a.createElement("span",null,u.a.createElement("div",null,"user.location.country"),u.a.createElement("div",null,"user.location.city"))))},re=["currentPage","onPageChanged","totalUsersCount","pageSize","users"],ae=function(e){e.currentPage;var t=e.onPageChanged,n=e.totalUsersCount,r=e.pageSize,a=e.users,o=Object(V.a)(e,re);return u.a.createElement("div",null,u.a.createElement($,{currentPage:o.currentPage,onPageChanged:t,totalItemsCount:n,pageSize:r}),u.a.createElement("div",null,a.map((function(e){return u.a.createElement(ne,{user:e,followingInProgress:o.followingInProgress,key:e.id,unfollow:o.unfollow,follow:o.follow})}))))},oe=n(41),ue=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(w.a)(Object(w.a)({},e),r):e}))},ce={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},ie=function(e){return{type:"FOLLOW",userId:e}},se=function(e){return{type:"UNFOLLOW",userId:e}},le=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},fe=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},pe=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},me=function(){var e=Object(j.a)(S.a.mark((function e(t,n,r,a){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(pe(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(pe(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(w.a)(Object(w.a)({},e),{},{users:ue(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(w.a)(Object(w.a)({},e),{},{users:ue(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(w.a)(Object(w.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(w.a)(Object(w.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(w.a)(Object(w.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(w.a)(Object(w.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(w.a)(Object(w.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(oe.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},ge=(n(144),n(139)),be=Object(ge.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Ee=function(e){return e.usersPage.totalUsersCount},he=function(e){return e.usersPage.currentPage},ve=function(e){return e.usersPage.isFetching},Oe=function(e){return e.usersPage.followingInProgress},_e=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).onPageChanged=function(e){var t=r.props.pageSize;r.props.getUsers(e,t)},r}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,this.props.isFetching?u.a.createElement(d.a,null):null,u.a.createElement(ae,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(u.a.Component),Se=Object(m.d)(Object(f.b)((function(e){return{users:be(e),pageSize:e.usersPage.pageSize,totalUsersCount:Ee(e),currentPage:he(e),isFetching:ve(e),followingInProgress:Oe(e)}}),{follow:function(e){return function(){var t=Object(j.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:me(n,e,C.c.follow.bind(C.c),ie);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(j.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:me(n,e,C.c.unfollow.bind(C.c),se);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:le,toggleFollowingProgress:pe,getUsers:function(e,t){return function(){var n=Object(j.a)(S.a.mark((function n(r){var a;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(fe(!0)),r(le(e)),n.next=4,C.c.getUsers(e,t);case 4:a=n.sent,r(fe(!1)),r({type:"SET_USERS",users:a.items}),r({type:"SET_TOTAL_USERS_COUNT",count:a.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(_e),je={initialized:!1},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(w.a)(Object(w.a)({},e),{},{initialized:!0});default:return e}},Pe=n(128),Ce=n(98),ye={sidebar:[{id:1,name:"Bibi"},{id:2,name:"Dodo"},{id:3,name:"Bubu"}]},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye;return e},Ne=n(138),Te=n(131),ke=Object(m.c)({profilePage:Ce.b,dialogsPage:Pe.b,sidebars:Ie,usersPage:de,auth:T,form:Te.a,app:we}),Ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,Le=Object(m.e)(ke,Ue(Object(m.a)(Ne.a)));window.__store__=Le;var Fe=Le,Ae=u.a.lazy((function(){return n.e(5).then(n.bind(null,733))})),xe=u.a.lazy((function(){return Promise.all([n.e(2),n.e(4)]).then(n.bind(null,732))})),Re=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?u.a.createElement("div",{className:"app-wrapper"},u.a.createElement(U,null),u.a.createElement(H,null),u.a.createElement("div",{className:"app-wrapper-content"},u.a.createElement(o.Suspense,{fallback:u.a.createElement(d.a,null)},u.a.createElement(p.b,{path:"/profile/:userId?",render:function(){return u.a.createElement(xe,null)}}),u.a.createElement(p.b,{path:"/dialogs",render:function(){return u.a.createElement(Ae,null)}})),u.a.createElement(p.b,{path:"/users",render:function(){return u.a.createElement(Se,null)}}),u.a.createElement(p.b,{path:"/login",render:function(){return u.a.createElement(D,null)}}),u.a.createElement(p.b,{path:"/news",component:W}),u.a.createElement(p.b,{path:"/music",component:G}),u.a.createElement(p.b,{path:"/settings",component:K}))):u.a.createElement(d.a,null)}}]),n}(o.Component),ze=Object(m.d)(p.f,Object(f.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(N()).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Re),De=function(e){return u.a.createElement(g.a,null,u.a.createElement(f.a,{store:Fe},u.a.createElement(ze,null)))},Ge=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,731)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,u=t.getTTFB;n(e),r(e),a(e),o(e),u(e)}))};a.a.render(u.a.createElement(De,null),document.getElementById("root")),Ge()},36:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return d}));var r=n(54),a=n(0),o=n.n(a),u=n(91),c=n(50),i=n.n(c),s=["input","meta","Formtype"],l=["input","meta","child"],f=function(e){var t=e.input,n=e.meta,a=n.touched,u=n.error,c=e.Formtype,l=Object(r.a)(e,s),f=a&&u;return o.a.createElement("div",{className:i.a.formControl+" "+(f?i.a.error:"")},o.a.createElement("div",null,o.a.createElement(c,Object.assign({},t,l))),f&&o.a.createElement("span",null,u))},p=function(e){return o.a.createElement(f,Object.assign({},e,{Formtype:"textarea"}))},m=function(e){e.input,e.meta,e.child,Object(r.a)(e,l);return o.a.createElement(f,Object.assign({},e,{Formtype:"input"}))},d=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(u.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a))," ",c)}},46:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(133),u=n.n(o);t.a=function(e){return a.a.createElement("div",null,a.a.createElement("img",{src:u.a}))}},50:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue",formSummaryError:"FormsControls_formSummaryError__1F2-S"}},55:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5",usersAva:"Header_usersAva__2-Uy8"}},58:function(e,t,n){e.exports=n.p+"static/media/user.0aa8581c.jpeg"},73:function(e,t,n){e.exports={paginator:"Paginator_paginator__18P4_",pageNumber:"Paginator_pageNumber__xOsKi",selectedPage:"Paginator_selectedPage__3SIki"}},77:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},95:function(e,t,n){e.exports={item:"Friends_item__3OQlo"}},96:function(e,t,n){e.exports={title:"Sidebar_title__3GEKy",friends:"Sidebar_friends__18f4t"}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"f",(function(){return d})),n.d(t,"e",(function(){return g}));var r=n(9),a=n.n(r),o=n(16),u=n(41),c=n(4),i=n(13),s={posts:[{id:1,message:"Hi, how are you?",likesCount:11},{id:2,message:"It's my first post?",likesCount:0}],profile:null,status:""},l=function(e){return{type:"ADD-POST",newPostBody:e}},f=function(e){return{type:"SET_STATUS",status:e}},p=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:r.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[{id:5,message:t.newPostBody,likesCount:0}])});case"SET_STATUS":return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case"SET_USER_PROFILE":return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case"DELET_POST":return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case"SAVE_PHOTO_SUCCESS":return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[170,1,3]]]);
//# sourceMappingURL=main.c3a82044.chunk.js.map