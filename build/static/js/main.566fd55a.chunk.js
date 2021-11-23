(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{114:function(e,t,a){"use strict";var i=a(12),n=function(e){return e.slice(0,20)+"..."};n.PropTypes={fullDescr:a.n(i).a.string},t.a=n},140:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(46),o=a.n(r),s=a(39),l=a(17),c={initial:"/",base:"/Tasks",myNotes:"/notes",sharedNotes:"/shared-notes",aboutApp:"/about",notFound:"/not-found",signIn:"/sign-in",signUp:"/sign-up",profile:"/profile"},d=a(3),p=(a(140),a(202)),h=a(215),u=a(37),x=a(1),b=function(e){var t=e.isAuthorized,a=e.name;return Object(x.jsx)("div",{style:d.a.maxWidth,children:Object(x.jsx)(p.a,{style:d.a.welcomeBlock,children:t?Object(x.jsxs)("div",{children:[Object(x.jsx)(h.a,{variant:"h5",component:"div",style:d.a.aboutChapter,children:a+", welcome to \xabMy Notes\xbb !"}),Object(x.jsx)(h.a,{variant:"subtitle1",component:"div",style:d.a.aboutText,children:u.a.WELCOME_AUTHORIZED})]}):Object(x.jsxs)("div",{children:[Object(x.jsx)(h.a,{variant:"h5",component:"div",style:d.a.aboutChapter,children:"Welcome to \xabMy Notes\xbb !"}),Object(x.jsx)(h.a,{variant:"subtitle1",component:"div",style:d.a.aboutText,children:u.a.NOT_AUTHORIZED})]})})})},j=a(209),f=a(226),m=function(){return Object(x.jsx)(l.b,{path:c.notFound,children:Object(x.jsx)("div",{children:Object(x.jsxs)(j.a,{icon:!1,variant:"filled",style:d.a.notFoundAlert,severity:"error",children:[Object(x.jsx)(f.a,{style:d.a.notFoundAlertTitle,children:"Error 404"}),"Page not found"]})})})},g=a(120),O=a.n(g),y=function(e){var t=e.isAuthorized;return Object(x.jsxs)("div",{style:d.a.menu,children:[Object(x.jsx)(s.b,{to:c.myNotes,style:d.a.menuMain,activeClassName:"activeMenu",children:Object(x.jsx)("span",{style:d.a.menuText,children:"My Notes"})}),Object(x.jsx)(s.b,{to:c.sharedNotes,style:d.a.menuMain,activeClassName:"activeMenu",children:Object(x.jsx)("span",{style:d.a.menuText,children:"Shared Notes"})}),Object(x.jsx)(s.b,{to:c.aboutApp,style:d.a.menuMain,activeClassName:"activeMenu",children:Object(x.jsx)("span",{style:d.a.menuText,children:"About"})}),t?Object(x.jsx)("div",{style:d.a.inline,children:Object(x.jsxs)(s.b,{to:c.profile,className:"menuSignIn",activeClassName:"activeMenuAuthorization",children:[Object(x.jsx)(O.a,{style:d.a.menuIconProfile}),Object(x.jsx)("span",{children:"Profile"})]})}):Object(x.jsxs)("div",{style:d.a.inline,children:[Object(x.jsx)(s.b,{to:c.signIn,className:"menuSignIn",activeClassName:"activeMenuAuthorization",children:Object(x.jsx)("span",{children:"Sign in"})}),Object(x.jsx)(s.b,{to:c.signUp,style:d.a.menuSignUp,activeClassName:"activeMenuRegistration",children:Object(x.jsx)("span",{children:"Sign up"})})]})]})},v=a(13),N=a(206),S=a(217),T=a(30),w=a(31),A=a.n(w),F=a(32),C=function(e,t,a){var i=F.a.SERVER_NOTES+"/"+t,n={title:e.title,description:e.description};A()({method:"PUT",url:i,headers:{Authorization:"Basic ".concat(a)},data:n}).then((function(e){return e})).catch((function(e){return e}))},E=a(21),I=function(e,t){var a=Object(i.useState)([]),n=Object(v.a)(a,2),r=n[0],o=n[1];return Object(i.useEffect)((function(){A()({method:"GET",url:F.a.SERVER_PAGE+t,headers:{Authorization:"Basic ".concat(e)}}).then((function(e){o([].concat(Object(E.a)(r),Object(E.a)(e.data)))})).catch((function(e){console.log(e)}))}),[t]),[r,o]},R=a(205),k=a(211),z=a(216),D=a(75),B=a.n(D),L=function(e){var t=e.title,a=e.buttonFunction,i=e.newText;return Object(x.jsxs)(z.a,{style:d.a.primaryButton,variant:"contained",onClick:function(){return a(i)},children:[Object(x.jsx)(B.a,{style:d.a.saveIcon}),t]})},P=function(e){var t=e.active,a=e.newText,i=e.handleChange,n=e.alertOpen,r=e.saveChangedNote,o=e.handleAlertClose;return Object(x.jsxs)("div",{style:d.a.relative,children:[Object(x.jsxs)("div",{className:"chosenNote",style:d.a.activeNote,children:[Object(x.jsx)("h3",{style:d.a.title,children:t.title}),Object(x.jsx)(R.a,{id:"displayedNote",className:"activeNote",minRows:null,maxLength:500,style:d.a.text,value:a,onChange:function(e){return i(e.target.value)}}),Object(x.jsx)("p",{style:d.a.date,children:t.createdAt.substr(0,10)})]}),Object(x.jsx)(L,{title:"Save Changes",buttonFunction:r,newText:a}),Object(x.jsx)(k.a,{open:n,autoHideDuration:3e3,onClose:o,children:Object(x.jsx)(j.a,{onClose:o,severity:"info",sx:d.a.maxWidth,children:u.a.NOT_CHOSEN})})]})},_=function(e,t,a,i,n){var r={title:e,description:t};A()({method:"POST",url:F.a.SERVER_NOTES,headers:{Authorization:"Basic ".concat(a)},data:r}).then((function(e){n(0),i([]),n(1)}))},H=a(233),U=a(225),M=a(123),q=a.n(M),G=a(208),V=a(227),W=a(228),J=a(229),Z=a(230),$=a(121),Y=a.n($),K=function(e){var t=e.addNoteClose,a=e.newNoteOpen,i=e.setNewNoteTitle,n=e.setNewNoteText,r=e.addNoteSubmit;return Object(x.jsxs)(G.a,{open:a,onClose:t,children:[Object(x.jsx)(V.a,{style:d.a.newNote,children:"New note"}),Object(x.jsxs)(W.a,{children:[Object(x.jsx)(J.a,{style:d.a.addNoteMessage,children:"Enter title and description of your new note."}),Object(x.jsx)(R.a,{id:"title",placeholder:"Title",className:"activeNote",minRows:null,maxLength:40,minLength:1,style:d.a.newNoteTitle,onChange:function(e){return i(e.target.value)}}),Object(x.jsx)(R.a,{id:"text",placeholder:"Description",className:"activeNote",minRows:null,maxLength:500,minLength:1,style:d.a.newNoteText,onChange:function(e){return n(e.target.value)}})]}),Object(x.jsxs)(Z.a,{style:d.a.addNoteButtons,children:[Object(x.jsxs)(z.a,{style:d.a.cancelButton,onClick:t,children:[Object(x.jsx)(Y.a,{style:d.a.saveIcon}),"Cancel"]}),Object(x.jsxs)(z.a,{style:d.a.primaryButton,variant:"contained",onClick:r,children:[Object(x.jsx)(B.a,{style:d.a.saveIcon}),"Save note"]})]})]})},Q=a(214),X=a(231),ee=a(232),te=a(210),ae=function(e){var t=e.filterDateOpen,a=e.setFilterDateOpen,i=e.uniqueDates,n=e.changeDateFilters,r=e.applyDateFilters;return Object(x.jsxs)(G.a,{open:t,onClose:function(){return a(!1)},children:[Object(x.jsx)(V.a,{style:d.a.newNote,children:"Filter by dates"}),Object(x.jsxs)(W.a,{children:[Object(x.jsx)(J.a,{style:d.a.addNoteMessage,children:"Choose dates to display"}),Object(x.jsx)(Q.a,{style:d.a.filters,children:Object(x.jsx)(X.a,{children:i.map((function(e,t){return Object(x.jsx)(ee.a,{control:Object(x.jsx)(te.a,{onChange:n,name:e}),label:e})}))})})]}),Object(x.jsxs)(Z.a,{style:d.a.addNoteButtons,children:[Object(x.jsx)(z.a,{style:d.a.cancelFilter,onClick:function(){return a(!1)},children:"Cancel"}),Object(x.jsx)(z.a,{style:d.a.applyFilter,onClick:r,children:"Filter notes"})]})]})},ie=function(e){var t=e.filterTitleOpen,a=e.setFilterTitleOpen,i=e.uniqueTitles,n=e.changeTitleFilters,r=e.applyTitleFilters;return Object(x.jsxs)(G.a,{open:t,onClose:function(){return a(!1)},children:[Object(x.jsx)(V.a,{style:d.a.newNote,children:"Filter by titles"}),Object(x.jsxs)(W.a,{children:[Object(x.jsx)(J.a,{style:d.a.addNoteMessage,children:"Choose notes to display"}),Object(x.jsx)(Q.a,{style:d.a.filters,children:Object(x.jsx)(X.a,{children:i.map((function(e,t){return Object(x.jsx)(ee.a,{control:Object(x.jsx)(te.a,{onChange:n,name:e}),label:e})}))})})]}),Object(x.jsxs)(Z.a,{style:d.a.addNoteButtons,children:[Object(x.jsx)(z.a,{style:d.a.cancelFilter,onClick:function(){return a(!1)},children:"Cancel"}),Object(x.jsx)(z.a,{style:d.a.applyFilter,onClick:r,children:"Filter notes"})]})]})},ne=function(e){var t=e.applyDatesFilter,a=e.applyTitlesFilter,i=e.uniqueDates,n=e.uniqueTitles,r=e.filterDateOpen,o=e.filterTitleOpen,s=e.setFilterDateOpen,l=e.setFilterTitleOpen,c=e.filterDatesArray,d=e.filterTitlesArray,p=e.setDateFilters,h=e.setTitleFilters;return Object(x.jsxs)("div",{children:[Object(x.jsx)(ae,{filterDateOpen:r,setFilterDateOpen:s,uniqueDates:i,changeDateFilters:function(e){if(e.target.checked)c.push(e.target.name),p(c);else{var t=c.indexOf(e.target.name);c.splice(t,t)}},applyDateFilters:function(){t(c),s(!1),localStorage.setItem("filterDatesArray",JSON.stringify(c))}}),Object(x.jsx)(ie,{filterTitleOpen:o,setFilterTitleOpen:l,uniqueTitles:n,changeTitleFilters:function(e){if(e.target.checked)d.push(e.target.name),h(d);else{var t=d.indexOf(e.target.name);d.splice(t,t)}},applyTitleFilters:function(){a(d),l(!1)}})]})},re=function(e){var t=e.uniqueDates,a=e.uniqueTitles,i=e.applyDatesFilter,n=e.applyTitlesFilter,r=e.addNoteOpen,o=e.newNoteOpen,s=e.addNoteClose,l=e.setNewNoteTitle,c=e.setNewNoteText,p=e.addNoteSubmit,h=e.filterNotesByTitle,u=e.filterNotesByDate,b=e.discardFilters,j=e.filterDateOpen,f=e.filterTitleOpen,m=e.setFilterDateOpen,g=e.setFilterTitleOpen,O=e.filterDatesArray,y=e.filterTitlesArray,v=e.setDateFilters,N=e.setTitleFilters;return Object(x.jsxs)("div",{className:"buttonsNotes",children:[Object(x.jsx)("h4",{children:"Filter by: "}),Object(x.jsxs)(H.a,{variant:"contained",style:d.a.buttonGroup,children:[Object(x.jsx)(z.a,{id:"filterButton",onClick:h,children:"Title"}),Object(x.jsx)(z.a,{id:"filterButton",onClick:u,children:"Date"}),Object(x.jsx)(z.a,{id:"filterButton",onClick:b,children:"Show all"})]}),Object(x.jsx)("h4",{style:d.a.addNote,children:"Add note:"}),Object(x.jsx)(U.a,{style:d.a.addButtonIcon,onClick:r,children:Object(x.jsx)(q.a,{color:"info",fontSize:"large"})}),Object(x.jsx)(K,{addNoteClose:s,newNoteOpen:o,setNewNoteTitle:l,setNewNoteText:c,addNoteSubmit:p}),Object(x.jsx)(ne,{uniqueDates:t,uniqueTitles:a,applyDatesFilter:i,applyTitlesFilter:n,filterDateOpen:j,filterTitleOpen:f,setFilterDateOpen:m,setFilterTitleOpen:g,filterDatesArray:O,filterTitlesArray:y,setDateFilters:v,setTitleFilters:N})]})},oe=function(e){var t=e.user,a=e.uniqueDates,n=e.uniqueTitles,r=e.applyDatesFilter,o=e.applyTitlesFilter,s=e.setActive,l=e.setNotes,c=e.setPage,d=Object(i.useState)(!1),p=Object(v.a)(d,2),h=p[0],u=p[1],b=Object(i.useState)(""),j=Object(v.a)(b,2),f=j[0],m=j[1],g=Object(i.useState)(""),O=Object(v.a)(g,2),y=O[0],N=O[1],S=function(){u(!1)},w=Object(i.useState)(!1),A=Object(v.a)(w,2),F=A[0],C=A[1],E=Object(i.useState)([]),I=Object(v.a)(E,2),R=I[0],k=I[1],z=Object(i.useState)(!1),D=Object(v.a)(z,2),B=D[0],L=D[1],P=Object(i.useState)([]),H=Object(v.a)(P,2),U=H[0],M=H[1];return Object(x.jsx)(re,{uniqueDates:a,uniqueTitles:n,applyDatesFilter:r,applyTitlesFilter:o,addNoteOpen:function(){m(""),N(""),u(!0),s(T.a.ACTIVE)},newNoteOpen:h,addNoteClose:S,setNewNoteTitle:m,setNewNoteText:N,addNoteSubmit:function(){(f.length>3||y.length>3)&&(_(f,y,t,l,c),S())},filterNotesByTitle:function(){L(!0),M([])},filterNotesByDate:function(){C(!0),k([])},discardFilters:function(){k([]),r([]),M([]),o([])},filterDateOpen:F,filterTitleOpen:B,setFilterDateOpen:C,setFilterTitleOpen:L,filterDatesArray:R,filterTitlesArray:U,setDateFilters:k,setTitleFilters:M})},se=a(49),le=function(e,t,a){return e.length>0&&(a=a.filter((function(t){return-1!==e.indexOf(Object(se.a)(t.createdAt))}))),t.length>0&&(a=a.filter((function(e){return-1!==t.indexOf(e.title)}))),a},ce=Object(i.lazy)((function(){return Promise.all([a.e(3),a.e(4)]).then(a.bind(null,252))})),de=function(e){var t=e.user,a=e.store,n=Object(i.useState)(T.a.PAGE),r=Object(v.a)(n,2),o=r[0],s=r[1],l=I(t,o),c=Object(v.a)(l,2),p=c[0],h=c[1],u=Object(i.useState)(T.a.ACTIVE),b=Object(v.a)(u,2),j=b[0],f=b[1],m=Object(i.useState)(j.description),g=Object(v.a)(m,2),O=g[0],y=g[1],w=Object(i.useState)(!1),A=Object(v.a)(w,2),F=A[0],E=A[1],R=Object(i.useState)([]),k=Object(v.a)(R,2),z=k[0],D=k[1],B=Object(i.useState)([]),L=Object(v.a)(B,2),_=L[0],H=L[1];Object(i.useEffect)((function(){y(j.description)}),[j]);var U=p.map((function(e){return Object(se.a)(e.createdAt)})),M=p.map((function(e){return e.title})),q=U.filter((function(e,t){return U.indexOf(e)===t})),G=M.filter((function(e,t){return M.indexOf(e)===t}));var V=le(z,_,p);return Object(x.jsx)("div",{style:d.a.maxWidth,children:Object(x.jsxs)(N.a,{sx:d.a.myNotesGrid,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)(oe,{user:t,uniqueDates:q,uniqueTitles:G,applyDatesFilter:D,applyTitlesFilter:H,setActive:f,setNotes:h,setPage:s}),Object(x.jsx)(i.Suspense,{fallback:Object(x.jsx)("div",{style:d.a.loading,children:Object(x.jsx)(S.a,{value:75})}),children:Object(x.jsx)(ce,{user:t,displayChosenNote:function(e){f(e)},notesToDisplay:V,setNotes:h,setPage:s,page:o,changePosition:function(e){var t=e.source.index,a=e.destination.index;V.splice(a,0,V.splice(t,1)[0])}})})]}),Object(x.jsx)(P,{active:j,newText:O,handleChange:function(e){y(e)},alertOpen:F,saveChangedNote:function(e){if(j.id.length>=T.a.ID){for(var i=0;i<p.length;i++)if(p[i].id===j.id){p[i].description=e,console.log(p[i],j.id),C(p[i],j.id,t,a);break}a.dispatch({type:"loadPage"})}else E(!0)},handleAlertClose:function(e,t){"clickaway"!==t&&E(!1)}})]})})},pe=function(e,t){var a=Object(i.useState)([]),n=Object(v.a)(a,2),r=n[0],o=n[1];return Object(i.useEffect)((function(){A()({method:"GET",url:F.a.SERVER_SHARE_PAGE+e,headers:{Authorization:"Basic ".concat(t)}}).then((function(e){o([].concat(Object(E.a)(r),Object(E.a)(e.data))),console.log(r)})).catch((function(e){console.log(e)}))}),[e]),[r,o]},he=function(e){var t=e.sharedChosenNote;return Object(x.jsxs)("div",{className:"chosenSharedNote",style:d.a.activeSharedNote,children:[Object(x.jsx)("h3",{style:d.a.sharedTitle,children:t.title}),Object(x.jsx)("p",{style:d.a.sharedText,children:t.description}),Object(x.jsxs)("p",{style:d.a.date,children:[t.createdAt&&Object(se.a)(t.createdAt),Object(x.jsx)("div",{style:d.a.sharedAuthorChosen,children:t.author})]})]})},ue=a(113),xe=a(234),be=a(235),je=a(207),fe=a(114),me=function(e){var t=e.note,a=e.displaySharedNote;return Object(x.jsx)("div",{style:d.a.sharedFullHeight,children:Object(x.jsx)(xe.a,{onClick:function(){return a(t)},className:"sharedNote",style:d.a.sharedNoteCard,children:Object(x.jsx)(je.a,{children:Object(x.jsxs)(be.a,{children:[Object(x.jsx)(h.a,{style:d.a.noteTitle,children:t.title}),Object(x.jsx)(h.a,{sx:d.a.block,component:"span",style:d.a.noteInListShared,className:"shortDescription",children:Object(fe.a)(t.description)}),Object(x.jsx)(h.a,{variant:"body2",children:Object(se.a)(t.createdAt)}),Object(x.jsxs)(h.a,{style:d.a.sharedAuthor,children:["shared by: ",t.author]})]})})})})},ge=function(e){var t=e.sharedNotes,a=e.displaySharedNote,i=e.pageShared,n=e.setPageShared;return Object(x.jsx)("div",{style:d.a.sharedNotesGrid,id:"scrollableShared",children:0===t.length?Object(x.jsx)(j.a,{variant:"filled",severity:"info",id:"saveNoteError",style:d.a.noSharedNotes,children:u.a.NO_SHARED_NOTES}):Object(x.jsx)(ue.a,{dataLength:t.length,next:function(){return n(i+1)},hasMore:!0,scrollableTarget:"scrollableShared",children:Object(x.jsx)(p.a,{sx:d.a.shareGrid,children:t.map((function(e){return Object(x.jsx)(me,{note:e,displaySharedNote:a})}))})})})},Oe=function(e){var t=e.user,a=Object(i.useState)(1),n=Object(v.a)(a,2),r=n[0],o=n[1],s=pe(r,t),l=Object(v.a)(s,2),c=l[0],p=(l[1],Object(i.useState)(T.a.ACTIVE_SHARED)),h=Object(v.a)(p,2),u=h[0],b=h[1];return Object(x.jsxs)("div",{style:d.a.maxWidth,children:[Object(x.jsx)(he,{sharedChosenNote:u}),Object(x.jsx)(ge,{sharedNotes:c,displaySharedNote:b,pageShared:r,setPageShared:o})]})},ye=a(236),ve=a(213),Ne=function(){return Object(x.jsx)("div",{style:d.a.maxWidth,children:Object(x.jsxs)(p.a,{sx:d.a.maxWidth,children:[Object(x.jsx)(h.a,{variant:"h5",component:"div",style:d.a.aboutTitle,children:"About \xabMy Notes\xbb"}),Object(x.jsxs)("div",{style:d.a.aboutBlock,children:[Object(x.jsx)(h.a,{variant:"h6",component:"div",style:d.a.aboutChapter,children:"Utility and features"}),Object(x.jsxs)(h.a,{variant:"subtitle1",component:"div",style:d.a.aboutText,children:["\xabMy Notes\xbb is a simple and practical app that helps you to",Object(x.jsx)("strong",{children:" create and save "})," your personal notes whenever and whereever needed. You can:",Object(x.jsxs)(ye.a,{style:d.a.aboutList,children:[Object(x.jsx)(ve.a,{disablePadding:!0,children:"- look through your notes,"}),Object(x.jsx)(ve.a,{disablePadding:!0,children:"- filter them by title and date,"}),Object(x.jsx)(ve.a,{disablePadding:!0,children:"- add new notes, "}),Object(x.jsx)(ve.a,{disablePadding:!0,children:"- change your note. "})]}),"Moreover \xabMy Notes\xbb allows you to",Object(x.jsx)("strong",{children:" share your personal notes"})," with other users of our app."]})]}),Object(x.jsxs)("div",{style:d.a.aboutBlock,children:[Object(x.jsx)(h.a,{variant:"h6",component:"div",style:d.a.aboutChapter,children:"Development potential"}),Object(x.jsx)(h.a,{variant:"subtitle1",component:"div",style:d.a.aboutText,children:"In the nearest future the ability to add todo lists and set notifications will be added to the app. Users will have an oportunity to add images and audio to their notes. In order to make your notes more personalized, functions of choosing design of notes will be provided: fonts, colors, themes."})]})]})})},Se=a(15),Te=a(218),we=function(e){var t={};return e.email?/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(e.email)||(t.email="*Invalid email format"):t.email="*Required",e.name?/^[a-zA-Z\s-]*$/.test(e.name)||(t.name="*Please, enter your name in English"):t.name="*Required",e.surname?/^[a-zA-Z\s-]*$/.test(e.surname)||(t.surname="*Please, enter your last name in English"):t.surname="*Required",e.birthday||(t.birthday="*Required"),e.password?e.password.length<9&&(t.password="*Password must contain at least 9 characters"):t.password="*Required",e.passwordConfirm?e.passwordConfirm!==e.password&&(t.passwordConfirm="*Password is incorrect"):t.passwordConfirm="*Required",t},Ae=function(e){var t=e.submitRegistration;return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{style:d.a.aboutTitle,children:"Registration"}),Object(x.jsx)(Se.d,{initialValues:T.a.AUTH_VALUES,onSubmit:t,validate:we,children:Object(x.jsxs)(Se.c,{style:d.a.form,children:[Object(x.jsxs)("div",{style:d.a.formBlock,children:[Object(x.jsx)("label",{style:d.a.formLabel,htmlFor:"name",children:"First name"}),Object(x.jsx)(Se.b,{style:d.a.formInput,type:"text",id:"name",name:"name",placeholder:"Name"}),Object(x.jsx)(Se.a,{name:"name",children:function(e){return Object(x.jsx)("div",{className:"error",children:e})}})]}),Object(x.jsxs)("div",{style:d.a.formBlock,children:[Object(x.jsx)("label",{style:d.a.formLabel,htmlFor:"surname",children:"Last name"}),Object(x.jsx)(Se.b,{style:d.a.formInput,type:"text",id:"surname",name:"surname",placeholder:"Surname"}),Object(x.jsx)(Se.a,{name:"surname",children:function(e){return Object(x.jsx)("div",{className:"error",children:e})}})]}),Object(x.jsxs)("div",{style:d.a.formBlock,children:[Object(x.jsx)("label",{style:d.a.formLabel,htmlFor:"email",children:"Email"}),Object(x.jsx)(Se.b,{style:d.a.formInput,type:"email",id:"email",name:"email",placeholder:"myemail@mail.com"}),Object(x.jsx)(Se.a,{name:"email",children:function(e){return Object(x.jsx)("div",{className:"error",children:e})}})]}),Object(x.jsxs)("div",{style:d.a.formBlock,children:[Object(x.jsx)("label",{style:d.a.formLabel,htmlFor:"birthday",children:"Date of birth"}),Object(x.jsx)(Se.b,{style:d.a.formInput,type:"date",id:"birthday",name:"birthday"}),Object(x.jsx)(Se.a,{name:"birthday",children:function(e){return Object(x.jsx)("div",{className:"error",children:e})}})]}),Object(x.jsxs)("div",{style:d.a.formBlock,children:[Object(x.jsx)("label",{style:d.a.formLabel,htmlFor:"password",children:"Password"}),Object(x.jsx)(Se.b,{style:d.a.formInput,type:"password",id:"password",name:"password"}),Object(x.jsx)(Se.a,{name:"password",children:function(e){return Object(x.jsx)("div",{className:"error",children:e})}})]}),Object(x.jsxs)("div",{style:d.a.formBlock,children:[Object(x.jsx)("label",{style:d.a.formLabel,htmlFor:"passwordConfirm",children:"Confirm password"}),Object(x.jsx)(Se.b,{style:d.a.formInput,type:"password",id:"passwordConfirm",name:"passwordConfirm"}),Object(x.jsx)(Se.a,{name:"passwordConfirm",style:d.a.validationError,children:function(e){return Object(x.jsx)("div",{className:"error",children:e})}})]}),Object(x.jsx)(Te.a,{href:"./sign-in",style:d.a.authorizationLink,children:"Already have an account?"}),Object(x.jsx)("button",{style:d.a.submitButton,type:"submit",children:"SIGN UP"})]})})]})},Fe=a(81),Ce=function(e,t,a){var i=Object(Fe.encode)(e.email+":"+e.password);A()({method:"GET",url:F.a.SERVER_AUTH,headers:{Authorization:"Basic ".concat(i)}}).then((function(e){var a=e.data,n={name:a.firstName,surname:a.lastName,birthday:a.birthday.substr(0,10),email:a.email};t(n,i)})).catch((function(e){a(!0)}))},Ee=function(e){var t={};return e.email||(t.email="*Required"),e.password||(t.password="*Required"),t},Ie=function(e){var t=e.submitAutorization,a=e.handleAlertClose,i=e.alertOpen,n=e.setAlertOpen;return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{style:d.a.aboutTitle,children:"Authorization"}),Object(x.jsx)(Se.d,{initialValues:T.a.AUTH_VALUES,onSubmit:function(e){return Ce(e,t,n)},validate:Ee,children:Object(x.jsxs)(Se.c,{style:d.a.form,children:[Object(x.jsxs)("div",{style:d.a.formBlock,children:[Object(x.jsx)("label",{style:d.a.formLabel,htmlFor:"email",children:"Email"}),Object(x.jsx)(Se.b,{style:d.a.formInput,type:"email",id:"email",name:"email"}),Object(x.jsx)(Se.a,{name:"email",children:function(e){return Object(x.jsx)("div",{className:"error",children:e})}})]}),Object(x.jsxs)("div",{style:d.a.formBlock,children:[Object(x.jsx)("label",{style:d.a.formLabel,htmlFor:"password",children:"Password"}),Object(x.jsx)(Se.b,{style:d.a.formInput,type:"password",id:"password",name:"password"}),Object(x.jsx)(Se.a,{name:"password",children:function(e){return Object(x.jsx)("div",{className:"error",children:e})}})]}),Object(x.jsx)(Te.a,{href:"./sign-up",style:d.a.authorizationLink,children:"Don't have an account yet?"}),Object(x.jsx)("button",{style:d.a.submitButton,type:"submit",children:"SIGN IN"})]})}),Object(x.jsx)(k.a,{open:i,autoHideDuration:3e3,onClose:a,children:Object(x.jsx)(j.a,{onClose:a,severity:"error",sx:d.a.maxWidth,children:"Invalid email or password!"})})]})},Re=function(e){var t=e.submitAutorization,a=Object(i.useState)(!1),n=Object(v.a)(a,2),r=n[0],o=n[1];return Object(x.jsx)(Ie,{submitAutorization:t,handleAlertClose:function(e,t){"clickaway"!==t&&o(!1)},alertOpen:r,setAlertOpen:o})},ke=a(220),ze=a(221),De=a(223),Be=a(219),Le=a(222),Pe=function(e){var t=e.profileInfo,a=e.signOut;return Object(x.jsx)("div",{style:d.a.maxWidth,children:Object(x.jsxs)(p.a,{style:d.a.profilePage,children:[Object(x.jsx)(h.a,{variant:"h5",component:"div",style:d.a.aboutTitle,children:"My Profile"}),Object(x.jsx)(Be.a,{style:d.a.profileTable,children:Object(x.jsx)(ke.a,{children:Object(x.jsxs)(ze.a,{children:[Object(x.jsxs)(Le.a,{sx:d.a.tableBorders,children:[Object(x.jsx)(De.a,{component:"th",scope:"row",style:d.a.profileTableTitle,children:"First name"}),Object(x.jsx)(De.a,{align:"right",style:d.a.profileTableInfo,children:t.name})]},"name"),Object(x.jsxs)(Le.a,{sx:d.a.tableBorders,children:[Object(x.jsx)(De.a,{component:"th",scope:"row",style:d.a.profileTableTitle,children:"Last name"}),Object(x.jsx)(De.a,{align:"right",style:d.a.profileTableInfo,children:t.surname})]},"surname"),Object(x.jsxs)(Le.a,{sx:d.a.tableBorders,children:[Object(x.jsx)(De.a,{component:"th",scope:"row",style:d.a.profileTableTitle,children:"Date of birth"}),Object(x.jsx)(De.a,{align:"right",style:d.a.profileTableInfo,children:t.birthday})]},"birthday"),Object(x.jsxs)(Le.a,{sx:d.a.tableBorders,children:[Object(x.jsx)(De.a,{component:"th",scope:"row",style:d.a.profileTableTitle,children:"Email"}),Object(x.jsx)(De.a,{align:"right",style:d.a.profileTableInfo,children:t.email})]},"email")]})})}),Object(x.jsx)(z.a,{style:d.a.signOutButton,variant:"contained",onClick:a,children:"SIGN OUT"})]})})},_e=function(e){var t=e.profileInfo,a=e.isAuthorized,i=e.user,n=e.submitRegistration,r=e.submitAutorization,o=e.signOut,p=e.store,h=e.NotesListContainer;return Object(x.jsx)("div",{style:d.a.wrapper,children:Object(x.jsxs)(s.a,{basename:c.base,children:[Object(x.jsxs)("header",{style:d.a.header,children:[Object(x.jsx)("span",{children:"My Notes"}),Object(x.jsx)(y,{isAuthorized:a})]}),Object(x.jsxs)(l.d,{children:[Object(x.jsx)(l.b,{exact:!0,path:c.initial,children:Object(x.jsx)(b,{isAuthorized:a,name:t.name})}),Object(x.jsx)(l.b,{path:c.sharedNotes,children:a?Object(x.jsx)(Oe,{user:i,store:p}):Object(x.jsx)(l.a,{to:c.notFound})}),Object(x.jsx)(l.b,{path:c.myNotes,children:a?Object(x.jsx)(de,{user:i,store:p,NotesListContainer:h}):Object(x.jsx)(l.a,{to:c.notFound})}),Object(x.jsx)(l.b,{path:c.aboutApp,children:Object(x.jsx)(Ne,{})}),Object(x.jsx)(l.b,{path:c.signUp,children:a?Object(x.jsx)(l.a,{to:c.profile}):Object(x.jsx)(Ae,{submitRegistration:n})}),Object(x.jsx)(l.b,{path:c.signIn,children:a?Object(x.jsx)(l.a,{to:c.profile}):Object(x.jsx)(Re,{isAuthorized:a,submitAutorization:r})}),Object(x.jsx)(l.b,{path:c.profile,children:a?Object(x.jsx)(Pe,{profileInfo:t,signOut:o}):Object(x.jsx)(l.a,{to:c.signIn})}),Object(x.jsx)(l.b,{path:c.notFound,children:Object(x.jsx)(m,{})}),Object(x.jsx)(l.b,{path:"*",children:Object(x.jsx)(l.a,{to:c.notFound})})]})]})})},He=function(e){e&&e instanceof Function&&a.e(5).then(a.bind(null,251)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),i(e),n(e),r(e),o(e)}))},Ue=a(115),Me=function(e,t){var a=Object(Fe.encode)(e.email+":"+e.password),i={email:e.email,password:e.password,firstName:e.name,lastName:e.surname,birthday:e.birthday};A.a.post(F.a.SERVER_USERS,i).then((function(i){var n={name:e.name,surname:e.surname,email:e.email,birthday:e.birthday,password:e.password},r=a.toString();localStorage.setItem("isAuthorized",JSON.stringify(!0)),localStorage.setItem("profileInfo",JSON.stringify(n)),localStorage.setItem("encoded",JSON.stringify(a)),t.dispatch({type:"signUp",payload:{profileInfo:n,user:r}})})).catch((function(e){alert(e.response.data)}))},qe={},Ge=!1,Ve="";localStorage.profileInfo&&(qe=JSON.parse(localStorage.getItem("profileInfo"))),localStorage.isAuthorized&&(Ge=JSON.parse(localStorage.getItem("isAuthorized"))),localStorage.encoded&&(Ve=JSON.parse(localStorage.getItem("encoded")));var We=Object(Ue.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isAuthorized:!1,profileInfo:{},encoded:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"loadPage":return{isAuthorized:Ge,profileInfo:qe,encoded:Ve};case"signUp":case"signIn":return{isAuthorized:!0,profileInfo:t.payload.profileInfo,encoded:t.payload.user};case"signOut":return localStorage.clear(),{isAuthorized:!1,profileInfo:{},encoded:""};default:return e}}));function Je(){We.dispatch({type:"signOut"})}We.subscribe((function(){var e=We.getState();o.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(_e,{profileInfo:e.profileInfo,isAuthorized:e.isAuthorized,user:e.encoded,submitRegistration:function(e){return Me(e,We)},submitAutorization:function(e,t){return function(e,t){var a=t.toString();localStorage.setItem("isAuthorized",JSON.stringify(!0)),localStorage.setItem("profileInfo",JSON.stringify(e)),localStorage.setItem("encoded",JSON.stringify(t)),We.dispatch({type:"signIn",payload:{profileInfo:e,user:a}})}(e,t)},signOut:Je,store:We})}),document.getElementById("root"))})),We.dispatch({type:"loadPage"}),He()},3:function(e,t,a){"use strict";var i="#ffffff",n="#000000",r="#173661",o="#8d0d38",s="linear-gradient(45deg, #3a74c4, #4588E6)",l="linear-gradient(35deg, #E5F0FC, #E3F2FF)",c="linear-gradient(135deg, #D48AAB, #EBABC8)",d="linear-gradient(115deg, #FFD7E2, #FFBAD9)",p="1px solid #a66289",h="1px solid #CCD6E3",u="0 0 10px #A69D9E",x="2px solid #ccaabe",b={aboutBlock:{width:"96%",margin:"2% 2% 2% 2%",boxShadow:u,borderRadius:"5px",color:r},aboutChapter:{background:c,fontFamily:"titles",padding:"10px",color:i,borderRadius:"5px 5px 0px 0px"},aboutList:{padding:"3px 8px 3px 8px"},aboutText:{padding:"10px"},aboutTitle:{fontFamily:"notes",color:r,textAlign:"center",margin:"15px 0px 0px 0px",fontWeight:"bold"},activeCardGradient:"linear-gradient(135deg, #ffffff, #eeeeee)",activeNote:{display:"inlineBlock",width:"97%",marginTop:"25px",marginLeft:"3%",padding:"10px",height:"450px",resize:"none",border:x,background:i,fontFamily:"notes",fontSize:"16px",textAlign:"justify",borderRadius:"5px",boxShadow:u},activeNoteGradient:"linear-gradient(35deg, #D99ABF, #cf93b6)",activeSharedNote:{display:"block",width:"98%",marginLeft:"1%",marginTop:"20px",marginBottom:"20px",padding:"10px",height:"200px",border:x,background:i,fontFamily:"notes",fontSize:"16px",textAlign:"justify",color:n,borderRadius:"5px",boxShadow:u},addButtonIcon:{height:"29px",width:"29px"},addNote:{height:"36px",borderLeft:"1px solid #ccc",padding:"5px 0px 5px 15px",marginLeft:"20px"},addNoteButtons:{margin:"0px 20px 15px 0px",height:"40px",padding:"0px"},addNoteMessage:{marginLeft:"auto",marginRight:"auto",padding:"5px",fontSize:"14px"},addUsers:{background:r,textAlign:"center",margin:"-18px 0px 0px 10px",height:"30px",color:i},alertNoteNotChosen:{display:"none",position:"absolute",top:"437px",left:"200px",height:"40px",padding:"3px 10px 3px 10px",width:"400px"},allNotes:{minHeight:"70px",display:"inlineBlock",width:"100%",marginTop:"10px",marginLeft:"2%",background:l,border:h},applyFilter:{background:c,outline:"none",fontFamily:"notes",fontSize:"14px",borderRadius:"5px",color:i},authorizationLink:{display:"block",marginTop:"15px",marginLeft:"auto",marginRight:"auto",width:"165px",fontFamily:"notes",fontSize:"14px"},block:{display:"block"},buttonGroup:{display:"inline-block"},cancelButton:{background:s,outline:"none",marginTop:"15px",marginLeft:"3%",padding:"5px 10px 5px 10px",fontFamily:"notes",fontSize:"14px",borderRadius:"5px",color:i,marginRight:"calc(45% - 10px)"},cancelFilter:{background:s,outline:"none",padding:"5px 10px 5px 10px",fontFamily:"notes",fontSize:"14px",borderRadius:"5px",color:i,marginRight:"20px"},cancelShareButton:{background:s,outline:"none",marginTop:"15px",marginLeft:"3%",padding:"5px 10px 5px 10px",fontFamily:"notes",fontSize:"14px",borderRadius:"5px",color:i,marginRight:"calc(47%)"},cardGradient:d,clearUsers:{width:"10px",height:"10px"},date:{paddingTop:"5px",margin:"0px",fontSize:"14px",color:"#363636"},deleteIcon:{marginTop:"3px",color:o},dialogShare:{width:"300px"},draggingBackground:"#edf5fc",draggingShadow:"0 0 5px #ccc",droppable:{height:"350px",overflow:"auto"},emailsList:{padding:"3px",fontFamily:"notes",fontSize:"14px",lineHeight:"18px",background:l},error:{display:"none",outline:"1px solid red"},filters:{height:"300px",width:"200px",overflow:"auto"},focusShadow:"0 0 10px #824567",form:{width:"570px",marginLeft:"auto",marginRight:"auto",marginTop:"30px",padding:"25px",borderRadius:"5px",background:l,boxShadow:u},formBlock:{display:"inline-block",width:"260px",verticalAlign:"top"},formInput:{width:"240px",height:"24px",borderRadius:"3px",border:h,outline:"none"},formLabel:{fontWeight:"bold",display:"flex",marginBottom:"5px",fontFamily:"titles",margin:"8px 0px 3px 0px",color:r},header:{textAlign:"left",width:"100%",height:"50px",padding:"10px",background:r,fontSize:"30px",lineHeight:"30px",fontFamily:"titles",color:i},inline:{display:"inline"},inlineBlock:{display:"inline-block"},loading:{width:"40px",marginLeft:"auto",marginRight:"auto"},maxWidth:{width:"100%"},menu:{display:"inline-block",width:"85%",height:"50px",fontFamily:"notes",fontSize:"18px",color:i,textAlign:"right"},menuSignUp:{verticalAlign:"middle",padding:"5px 10px 5px 10px",fontSize:"14px",lineHeight:"14px",height:"20px",borderRadius:"3px",background:"transparent",color:i,margin:"0px"},menuIcon:{verticalAlign:"middle"},menuIconProfile:{display:"inline-block",verticalAlign:"middle",fontSize:"16px",margin:"-4px 3px 0px -3px"},menuMain:{textDecoration:"none",padding:"5px 10px 15px 10px",borderRadius:"5px 5px 0px 0px",position:"relative",height:"30px",width:"60px",marginLeft:"2px",marginRight:"2px"},menuText:{verticalAlign:"middle",paddingLeft:"3px"},myNotesGrid:{display:"grid",gridTemplateColumns:"36% 60%",gap:1},newNote:{margin:"10px auto 0px auto",padding:"5px",color:r,fontFamily:"titles",fontSize:"20px",fontWeight:"bold"},newNoteText:{width:"100%",maxHeight:"300px",minHeight:"40px",fontFamily:"notes",fontSize:"16px",textAlign:"justify",color:r,borderRadius:"5px",margin:"5px",padding:"10px",border:"1px solid #3a74c4"},newNoteTitle:{width:"100%",height:"40px",fontFamily:"notes",fontSize:"16px",textAlign:"justify",color:r,borderRadius:"5px",margin:"5px",padding:"10px",border:"1px solid #3a74c4"},noNotes:{fontFamily:"titles",fontSize:"16px",color:i,margin:"15px 0px 0px 10px",background:s,width:"250px",marginLeft:"auto",marginRight:"auto",marginTop:"10px"},noSharedNotes:{fontFamily:"titles",fontSize:"16px",color:i,margin:"15px 0px 0px 10px",background:s,width:"350px",marginLeft:"auto",marginRight:"auto",marginTop:"10px"},noteInList:{color:"#000",width:"75%",fontFamily:"notes"},noteInListShared:{color:"#000",minWidth:"150px",fontFamily:"notes",paddingBottom:"3px"},noteTitle:{display:"block",fontWeight:"bold",minWidth:"150px",fontFamily:"titles",fontSize:"16px"},notFoundAlert:{fontSize:"24px",width:"500px",marginLeft:"auto",marginRight:"auto",marginTop:"200px"},notFoundAlertTitle:{fontSize:"32px"},primaryButton:{background:c,outline:"none",marginTop:"15px",marginLeft:"3%",padding:"5px 10px 5px 10px",fontFamily:"notes",fontSize:"14px",borderRadius:"5px",color:i},profilePage:{width:"450px",marginLeft:"auto",marginRight:"auto",textAlign:"center"},profileTable:{width:"450px",margin:"20px auto 20px auto",background:i,borderRadius:"5px",boxShadow:u,fontFamily:"notes",fontSize:"16px"},profileTableInfo:{fontFamily:"notes",fontSize:"16px"},profileTableTitle:{fontFamily:"titles",fontSize:"16px",color:r,fontWeight:"bold"},progressCircle:{marginLeft:"48%",marginTop:"50px"},relativ:{position:"relative"},saveIcon:{marginRight:"5px"},sharedAuthor:{fontSize:"12px",color:"#a66289",marginTop:"5px"},sharedAuthorChosen:{marginLeft:"77%",display:"inline-block",width:"230px",textAlign:"right"},sharedFullHeight:{height:"150px"},sharedNotesGrid:{padding:"8px 10px 5px 20px",height:"160px",overflow:"auto",background:"#e6f1ff"},sharedNoteCard:{background:d,borderRadius:"0px",boxShadow:" 1px 2px 3px #747474"},sharedText:{width:"100%",resize:"none",height:"100px",paddingTop:"10px",marginTop:"0px",border:"none",borderTop:p,outline:"none",fontFamily:"notes",textAlign:"justify"},sharedTitle:{padding:"5px 0px 10px 0px",margin:"0px",textAlign:"center"},shareGrid:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:3},shareIcon:{color:r},shareNote:{textAlign:"center",width:"450px",padding:"5px",color:r,fontFamily:"titles",fontSize:"20px",fontWeight:"bold"},shareNoteText:{width:"400px",textAlign:"justify",margin:"5px 0px 5px 0px",fontFamily:"notes",fontSize:"14px",color:n},shareNoteTitles:{margin:"5px 0px 5px 0px",fontFamily:"notes",fontSize:"16px",color:r,fontWeight:"bold"},signOutButton:{height:"32px",fontSize:"18px",color:i,fontFamily:"notes",background:c,marginTop:"10px",borderRadius:"5px",border:"none"},submitButton:{width:"100px",height:"32px",fontSize:"18px",color:i,fontFamily:"notes",background:c,marginTop:"15px",marginLeft:"210px",borderRadius:"5px",border:"none"},tableBorders:{"&:last-child td, &:last-child th":{border:0}},text:{width:"100%",resize:"none",height:"340px",paddingTop:"10px",marginTop:"10px",border:"none",borderTop:p,outline:"none",fontFamily:"notes",textAlign:"justify"},title:{paddingTop:"5px",margin:"0px",textAlign:"center"},userToShare:{width:"80%",height:"30px",fontFamily:"notes",fontSize:"16px",lineHeight:"16px",textAlign:"justify",color:r,borderRadius:"5px",marginTop:"10px",padding:"5px",border:"1px solid #3a74c4"},validationError:{color:o,fontSize:"12px",fontFamily:"notes"},welcomeBlock:{width:"60%",margin:"10% auto 0px auto",boxShadow:u,borderRadius:"5px",color:r,textAlign:"center"},widthEmail:{width:"95%"},wrapper:{width:"100%",marginLeft:"auto",marginRight:"auto",minHeight:"600px",maxHeight:"2000px",backgroundColor:"#f7f7f7"}};t.a=b},30:function(e,t,a){"use strict";var i=a(37),n={ID:0,PAGE:1,ACTIVE:{id:0,title:i.a.NOTES_INIT,description:"",createdAt:""},ACTIVE_SHARED:{title:i.a.NOTES_INIT,description:"",createdAt:"",author:""},AUTH_VALUES:{email:"",name:"",surname:"",birthday:"",password:"",passwordConfirm:""}};t.a=n},32:function(e,t,a){"use strict";var i={SERVER_USERS:"https://note-app-training-server.herokuapp.com/api/users",SERVER_AUTH:"https://note-app-training-server.herokuapp.com/api/users/auth",SERVER_NOTES:"https://note-app-training-server.herokuapp.com/api/notes",SERVER_PAGE:"https://note-app-training-server.herokuapp.com/api/notes?page=",SERVER_SHARE:"https://note-app-training-server.herokuapp.com/api/notes/share",SERVER_SHARE_PAGE:"https://note-app-training-server.herokuapp.com/api/notes/share?page="};t.a=i},37:function(e,t,a){"use strict";var i={NOTES_INIT:"Select note to display",NO_NOTES:"Create your first note!",NO_SHARED_NOTES:"You don't have any shared notes yet!",NOT_CHOSEN:"Select note to save!",NOT_AUTHORIZED:"Please sign in to get access to your personal notes and share them with other users.",WELCOME_AUTHORIZED:"You can work with your personal notes and share them with other users."};t.a=i},49:function(e,t,a){"use strict";t.a=function(e){return new Date(e).toLocaleDateString()}}},[[167,1,2]]]);
//# sourceMappingURL=main.566fd55a.chunk.js.map