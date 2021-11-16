(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{131:function(e,t,n){},198:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(29),r=n.n(o),s=n(147),c=n.n(s),l=n(47),d=n(18),p=n(64),h={initial:"/",base:"/Tasks",myNotes:"/notes",sharedNotes:"/shared-notes",aboutApp:"/about",notFound:"/not-found",signIn:"/sign-in",signUp:"/sign-up",profile:"/profile"},x=n(13),u=n(248),j=n(240),b=n(238),m=n(259),f=n(247),g=n(256),O=n(239),y=n(260),v=n(261),S=n(262),N=n(263),w=n(245),T=n(264),A=n(265),I=n(241),C=n(243),k=n(242),F=n(140),R=n.n(F),z=n(109),E=n.n(z),B=n(88),L=n.n(B),P=n(87),D=n.n(P),M=n(143),_=n.n(M),U=n(142),H=n.n(U),G={NOTES_INIT:"Select note to display",NO_NOTES:"Create your first note!",NOT_CHOSEN:"Select note to save!",NOT_AUTHORIZED:"Please sign in to get access to your personal notes and share them with other users.",WELCOME_AUTHORIZED:"You can work with your personal notes and share them with other users."},J=n(35),W=n.n(J),V={FAKE_API:"https://mocki.io/v1/6e70ca5e-cb79-4b2f-8c99-8b99b08eb542",SERVER_USERS:"https://note-app-training-server.herokuapp.com/api/users",SERVER_AUTH:"https://note-app-training-server.herokuapp.com/api/users/auth",SERVER_NOTES:"https://note-app-training-server.herokuapp.com/api/notes",SERVER_PAGE:"https://note-app-training-server.herokuapp.com/api/notes?page="},Z=function(e,t,n,i){var a=V.SERVER_NOTES+"/"+t,o=new Date,r={id:e.id,title:e.title,description:e.description,createdAt:e.createdAt,updatedAt:o.toISOString()};W()({method:"PUT",url:a,headers:{Authorization:"Basic ".concat(n)},data:r}).then((function(e){return e})).catch((function(e){return e}))},q=n(26),Q=function(e,t){var n=Object(i.useState)([]),a=Object(x.a)(n,2),o=a[0],r=a[1];return Object(i.useEffect)((function(){W()({method:"GET",url:V.SERVER_PAGE+t,headers:{Authorization:"Basic ".concat(e)}}).then((function(e){return r([].concat(Object(q.a)(o),Object(q.a)(e.data)))})).catch((function(e){console.log(e)}))}),[t]),[o,r]},$=n(56),Y=n(258),K=n(97),X=n(137),ee="#ffffff",te="#000000",ne="#173661",ie="#8d0d38",ae="linear-gradient(45deg, #3a74c4, #4588E6)",oe="linear-gradient(35deg, #E5F0FC, #E3F2FF)",re="linear-gradient(135deg, #D48AAB, #EBABC8)",se="linear-gradient(115deg, #FFD7E2, #FFBAD9)",ce="1px solid #a66289",le="1px solid #CCD6E3",de="0 0 10px #A69D9E",pe="2px solid #ccaabe",he={aboutBlock:{width:"96%",margin:"2% 2% 2% 2%",boxShadow:de,borderRadius:"5px",color:ne},aboutChapter:{background:re,fontFamily:"titles",padding:"10px",color:ee,borderRadius:"5px 5px 0px 0px"},aboutList:{padding:"3px 8px 3px 8px"},aboutText:{padding:"10px"},aboutTitle:{fontFamily:"notes",color:ne,textAlign:"center",margin:"15px 0px 0px 0px",fontWeight:"bold"},activeCardGradient:"linear-gradient(135deg, #ffffff, #eeeeee)",activeNote:{display:"inlineBlock",width:"97%",marginTop:"25px",marginLeft:"3%",padding:"10px",height:"450px",resize:"none",border:pe,background:ee,fontFamily:"notes",fontSize:"16px",textAlign:"justify",borderRadius:"5px",boxShadow:de},activeNoteGradient:"linear-gradient(35deg, #D99ABF, #cf93b6)",activeSharedNote:{display:"block",width:"98%",marginLeft:"1%",marginTop:"20px",marginBottom:"20px",padding:"10px",height:"200px",border:pe,background:ee,fontFamily:"notes",fontSize:"16px",textAlign:"justify",color:te,borderRadius:"5px",boxShadow:de},addButtonIcon:{height:"29px",width:"29px"},addNote:{height:"36px",borderLeft:"1px solid #ccc",padding:"5px 0px 5px 15px",marginLeft:"20px"},addNoteButtons:{margin:"0px 20px 15px 0px",height:"40px",padding:"0px"},addNoteMessage:{marginLeft:"auto",marginRight:"auto",padding:"5px",fontSize:"14px"},addUsers:{background:ne,textAlign:"center",margin:"-18px 0px 0px 10px",height:"30px",color:ee},alertNoteNotChosen:{display:"none",position:"absolute",top:"437px",left:"200px",height:"40px",padding:"3px 10px 3px 10px",width:"400px"},allNotes:{minHeight:"70px",display:"inlineBlock",width:"100%",marginTop:"10px",marginLeft:"2%",background:oe,border:le},applyFilter:{background:re,outline:"none",fontFamily:"notes",fontSize:"14px",borderRadius:"5px",color:ee},authorizationLink:{display:"block",marginTop:"15px",marginLeft:"auto",marginRight:"auto",width:"165px",fontFamily:"notes",fontSize:"14px"},buttonGroup:{display:"inline-block"},cancelButton:{background:ae,outline:"none",marginTop:"15px",marginLeft:"3%",padding:"5px 10px 5px 10px",fontFamily:"notes",fontSize:"14px",borderRadius:"5px",color:ee,marginRight:"calc(45% - 10px)"},cancelFilter:{background:ae,outline:"none",padding:"5px 10px 5px 10px",fontFamily:"notes",fontSize:"14px",borderRadius:"5px",color:ee,marginRight:"20px"},cancelShareButton:{background:ae,outline:"none",marginTop:"15px",marginLeft:"3%",padding:"5px 10px 5px 10px",fontFamily:"notes",fontSize:"14px",borderRadius:"5px",color:ee,marginRight:"calc(47%)"},cardGradient:se,date:{paddingTop:"5px",margin:"0px",fontSize:"14px",color:"#363636"},deleteIcon:{marginTop:"3px",color:ie},dragable:{},draggingBackground:"#edf5fc",draggingShadow:"0 0 5px #ccc",droppable:{height:"350px",overflow:"auto"},emailsList:{padding:"3px",fontFamily:"notes",fontSize:"14px",lineHeight:"18px",background:oe},error:{display:"none",outline:"1px solid red"},filters:{height:"300px",width:"200px",overflow:"auto"},focusShadow:"0 0 10px #824567",form:{width:"570px",marginLeft:"auto",marginRight:"auto",marginTop:"30px",padding:"25px",borderRadius:"5px",background:oe,boxShadow:de},formBlock:{display:"inline-block",width:"260px",verticalAlign:"top"},formInput:{width:"240px",height:"24px",borderRadius:"3px",border:le,outline:"none"},formLabel:{fontWeight:"bold",display:"flex",marginBottom:"5px",fontFamily:"titles",margin:"8px 0px 3px 0px",color:ne},header:{textAlign:"left",width:"100%",height:"50px",padding:"10px",background:ne,fontSize:"30px",lineHeight:"30px",fontFamily:"titles",color:ee},menu:{display:"inline-block",width:"85%",height:"50px",fontFamily:"notes",fontSize:"18px",color:ee,textAlign:"right"},menuSignUp:{verticalAlign:"middle",padding:"5px 10px 5px 10px",fontSize:"14px",lineHeight:"14px",height:"20px",borderRadius:"3px",background:"transparent",color:ee,margin:"0px"},menuSignIn:{},menuIcon:{verticalAlign:"middle"},menuIconProfile:{display:"inline-block",verticalAlign:"middle",fontSize:"16px",margin:"-4px 3px 0px -3px"},menuMain:{textDecoration:"none",padding:"5px 10px 15px 10px",borderRadius:"5px 5px 0px 0px",position:"relative",height:"30px",width:"60px",marginLeft:"2px",marginRight:"2px"},menuText:{verticalAlign:"middle",paddingLeft:"3px"},newNote:{margin:"10px auto 0px auto",padding:"5px",color:ne,fontFamily:"titles",fontSize:"20px",fontWeight:"bold"},newNoteText:{width:"100%",maxHeight:"300px",minHeight:"40px",fontFamily:"notes",fontSize:"16px",textAlign:"justify",color:ne,borderRadius:"5px",margin:"5px",padding:"10px",border:"1px solid #3a74c4"},newNoteTitle:{width:"100%",height:"40px",fontFamily:"notes",fontSize:"16px",textAlign:"justify",color:ne,borderRadius:"5px",margin:"5px",padding:"10px",border:"1px solid #3a74c4"},noNotes:{fontFamily:"titles",fontSize:"16px",color:ee,margin:"15px 0px 0px 10px",background:ae,width:"300px",marginLeft:"auto",marginRight:"auto",marginTop:"10px"},noteInList:{color:"#000",width:"300px",fontFamily:"notes"},noteInListShared:{color:"#000",minWidth:"150px",fontFamily:"notes",padding:"5px 0px 5px 0px"},noteTitle:{display:"block",fontWeight:"bold",minWidth:"150px",fontFamily:"titles",fontSize:"16px"},notFoundAlert:{fontSize:"24px",width:"500px",marginLeft:"auto",marginRight:"auto",marginTop:"200px"},notFoundAlertTitle:{fontSize:"32px"},primaryButton:{background:re,outline:"none",marginTop:"15px",marginLeft:"3%",padding:"5px 10px 5px 10px",fontFamily:"notes",fontSize:"14px",borderRadius:"5px",color:ee},profilePage:{width:"450px",marginLeft:"auto",marginRight:"auto",textAlign:"center"},profileTable:{width:"450px",margin:"20px auto 20px auto",background:ee,borderRadius:"5px",boxShadow:de,fontFamily:"notes",fontSize:"16px"},profileTableInfo:{fontFamily:"notes",fontSize:"16px"},profileTableTitle:{fontFamily:"titles",fontSize:"16px",color:ne,fontWeight:"bold"},progressCircle:{marginLeft:"48%",marginTop:"50px"},saveIcon:{marginRight:"5px"},sharedNotesGrid:{padding:"8px 10px 5px 20px",height:"300px",overflowY:"scroll",background:"#e6f1ff"},sharedNoteCard:{background:se,borderRadius:"0px",boxShadow:" 1px 2px 3px #747474"},sharedText:{width:"100%",resize:"none",height:"100px",paddingTop:"10px",marginTop:"0px",border:"none",borderTop:ce,outline:"none",fontFamily:"notes",textAlign:"justify"},sharedTitle:{padding:"5px 0px 10px 0px",margin:"0px",textAlign:"center"},shareIcon:{color:ne},shareNote:{textAlign:"center",width:"450px",padding:"5px",color:ne,fontFamily:"titles",fontSize:"20px",fontWeight:"bold"},shareNoteText:{width:"400px",textAlign:"justify",margin:"5px 0px 5px 0px",fontFamily:"notes",fontSize:"14px",color:te},shareNoteTitles:{margin:"5px 0px 5px 0px",fontFamily:"notes",fontSize:"16px",color:ne,fontWeight:"bold"},signOutButton:{height:"32px",fontSize:"18px",color:ee,fontFamily:"notes",background:re,marginTop:"10px",borderRadius:"5px",border:"none"},submitButton:{width:"100px",height:"32px",fontSize:"18px",color:ee,fontFamily:"notes",background:re,marginTop:"15px",marginLeft:"210px",borderRadius:"5px",border:"none"},text:{width:"100%",resize:"none",height:"340px",paddingTop:"10px",marginTop:"10px",border:"none",borderTop:ce,outline:"none",fontFamily:"notes",textAlign:"justify"},title:{paddingTop:"5px",margin:"0px",textAlign:"center"},userToShare:{width:"80%",height:"30px",fontFamily:"notes",fontSize:"16px",lineHeight:"16px",textAlign:"justify",color:ne,borderRadius:"5px",marginTop:"10px",padding:"5px",border:"1px solid #3a74c4"},validationError:{color:ie,fontSize:"12px",fontFamily:"notes"},welcomeBlock:{width:"60%",margin:"10% auto 0px auto",boxShadow:de,borderRadius:"5px",color:ne,textAlign:"center"},wrapper:{width:"100%",marginLeft:"auto",marginRight:"auto",minHeight:"600px",maxHeight:"2000px",backgroundColor:"#f7f7f7"}},xe=n(234),ue=n(255),je=n(246),be=n(138),me=n.n(be),fe=n(12),ge=function(e){return e.slice(0,20)+"..."};ge.PropTypes={fullDescr:n.n(fe).a.string};var Oe=ge,ye=n(1),ve=function(e){var t=e.note,n=e.displayChosenNote,i=e.shareNote,o=e.removeNote;return Object(ye.jsxs)(C.a,{divider:!0,children:[Object(ye.jsx)(xe.a,{onClick:function(){n(t)},children:Object(ye.jsx)(ue.a,{primary:Object(ye.jsx)(je.a,{style:he.noteTitle,children:t.title}),secondary:Object(ye.jsxs)(a.a.Fragment,{children:[Object(ye.jsx)(je.a,{sx:{display:"inline-block"},component:"span",style:he.noteInList,className:"shortDescription",children:Oe(t.description)}),t.createdAt.substr(0,10)]}),style:he.noteInList})}),Object(ye.jsx)(g.a,{onClick:function(){return i(t)},color:"inherit",component:"span",children:Object(ye.jsx)(D.a,{style:he.shareIcon})}),Object(ye.jsx)(g.a,{onClick:function(){return o(t.id)},color:"inherit",component:"span",children:Object(ye.jsx)(me.a,{style:he.deleteIcon})})]})},Se=function(e){var t=e.noteChosen,n=e.notesToDisplay,i=e.setPage,a=e.page,o=e.changePosition,r=e.shareNote,s=e.removeNote;return Object(ye.jsx)("div",{style:he.allNotes,children:Object(ye.jsx)(K.a,{onDragEnd:function(e){o(e)},children:0===n.length?Object(ye.jsx)(j.a,{variant:"filled",severity:"info",id:"saveNoteError",style:he.noNotes,children:G.NO_NOTES}):Object(ye.jsx)(K.c,{droppableId:"droppable-1",children:function(e,o){return Object(ye.jsx)("div",Object($.a)(Object($.a)({id:"scrollableDiv",style:he.droppable,ref:e.innerRef},e.droppableProps),{},{children:Object(ye.jsx)(Y.a,{children:Object(ye.jsxs)(X.a,{dataLength:n.length,next:function(){return i(a+1)},hasMore:!0,scrollableTarget:"scrollableDiv",children:[n.map((function(e,n){return Object(ye.jsx)(K.b,{draggableId:"draggable"+n,index:n,children:function(n,i){return Object(ye.jsx)("div",Object($.a)(Object($.a)(Object($.a)({ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{style:Object($.a)(Object($.a)({},n.draggableProps.style),{},{boxShadow:i.isDragging?he.draggingShadow:"none",background:i.isDragging?he.draggingBackground:"inherit"}),children:Object(ye.jsx)(ve,{note:e,displayChosenNote:t,shareNote:r,removeNote:s})}))}},n)})),e.placeholder]})})}))}})})})},Ne=function(e){var t=e.title,n=e.buttonFunction,i=e.newText;return Object(ye.jsxs)(f.a,{style:he.primaryButton,variant:"contained",onClick:function(){return n(i)},children:[Object(ye.jsx)(L.a,{style:he.saveIcon}),t]})},we=(n(131),function(e,t,n,i,a){var o=[],r=new Date;!function s(c){W()({method:"GET",url:V.SERVER_PAGE+c,headers:{Authorization:"Basic ".concat(n)}}).then((function(l){for(var d=0;d<l.data.length;d++)o.push(l.data[d]);if(l.data.length>4)s(c+1);else{var p={id:o.length+1,title:e,description:t,createdAt:r.toISOString(),updatedAt:r.toISOString()};W()({method:"POST",url:V.SERVER_NOTES,headers:{Authorization:"Basic ".concat(n)},data:p}).then((function(e){i([]),a(1)}))}}))}(1)}),Te=function(e,t,n){return e.length>0&&(n=n.filter((function(t){return-1!==e.indexOf(t.createdAt.substr(0,10))}))),t.length>0&&(n=n.filter((function(e){return-1!==t.indexOf(e.title)}))),n},Ae=function(e){var t=e.user,n=e.store,a=Object(i.useState)(1),o=Object(x.a)(a,2),r=o[0],s=o[1],c=Q(t,r),l=Object(x.a)(c,2),d=l[0],p=l[1],h={id:-1,title:G.NOTES_INIT,description:"",createdAt:""},F=d.map((function(e){return e.createdAt.substr(0,10)})),z=d.map((function(e){return e.title})),B=F.filter((function(e,t){return F.indexOf(e)===t})),P=z.filter((function(e,t){return z.indexOf(e)===t})),M=Object(i.useState)(h),U=Object(x.a)(M,2),J=U[0],W=U[1],V=Object(i.useState)(J.description),q=Object(x.a)(V,2),$=q[0],Y=q[1],K=Object(i.useState)(!1),X=Object(x.a)(K,2),ee=X[0],te=X[1];Object(i.useEffect)((function(){Y(J.description)}),[J]);var ne=Object(i.useState)(!1),ie=Object(x.a)(ne,2),ae=ie[0],oe=ie[1],re=Object(i.useState)(""),se=Object(x.a)(re,2),ce=se[0],le=se[1],de=Object(i.useState)(""),pe=Object(x.a)(de,2),xe=pe[0],ue=pe[1],je=Object(i.useState)(!1),be=Object(x.a)(je,2),me=be[0],fe=be[1],ge=Object(i.useState)([]),Oe=Object(x.a)(ge,2),ve=Oe[0],Ae=Oe[1],Ie=Object(i.useState)([]),Ce=Object(x.a)(Ie,2),ke=Ce[0],Fe=Ce[1],Re=Object(i.useState)(!1),ze=Object(x.a)(Re,2),Ee=ze[0],Be=ze[1],Le=Object(i.useState)([]),Pe=Object(x.a)(Le,2),De=Pe[0],Me=Pe[1],_e=Object(i.useState)([]),Ue=Object(x.a)(_e,2),He=Ue[0],Ge=Ue[1];var Je=function(e){if(e.target.checked)ve.push(e.target.name),Ae(ve);else{var t=ve.indexOf(e.target.name);ve.splice(t,t)}},We=function(e){if(e.target.checked)De.push(e.target.name),Me(De);else{var t=De.indexOf(e.target.name);De.splice(t,t)}},Ve=function(){oe(!1)};var Ze=function(e,t){"clickaway"!==t&&te(!1)},qe=Te(ke,He,d),Qe=Object(i.useState)(!1),$e=Object(x.a)(Qe,2),Ye=$e[0],Ke=$e[1],Xe=Object(i.useState)(h),et=Object(x.a)(Xe,2),tt=et[0],nt=et[1],it=Object(i.useState)(""),at=Object(x.a)(it,2),ot=at[0],rt=at[1],st=Object(i.useState)([]),ct=Object(x.a)(st,2),lt=ct[0],dt=ct[1],pt=function(){console.log(tt,lt),nt(h),dt([]),Ke(!1)};return Object(ye.jsx)("div",{style:{width:"100%"},children:Object(ye.jsxs)(u.a,{sx:{display:"grid",gridTemplateColumns:"36% 60%",gap:1},children:[Object(ye.jsxs)("div",{children:[Object(ye.jsxs)("div",{className:"buttonsNotes",children:[Object(ye.jsx)("h4",{children:"Filter by: "}),Object(ye.jsxs)(m.a,{variant:"contained",style:he.buttonGroup,children:[Object(ye.jsx)(f.a,{id:"filterButton",onClick:function(){Be(!0),Me([])},children:"Title"}),Object(ye.jsx)(f.a,{id:"filterButton",onClick:function(){fe(!0),Ae([])},children:"Date"}),Object(ye.jsx)(f.a,{id:"filterButton",onClick:function(){Ae([]),Fe([]),Me([]),Ge([])},children:"Show all"})]}),Object(ye.jsx)("h4",{style:he.addNote,children:"Add note:"}),Object(ye.jsx)(g.a,{style:he.addButtonIcon,onClick:function(){le(""),ue(""),oe(!0),W(h)},children:Object(ye.jsx)(R.a,{color:"info",fontSize:"large"})}),Object(ye.jsxs)(O.a,{open:ae,onClose:Ve,children:[Object(ye.jsx)(y.a,{style:he.newNote,children:"New note"}),Object(ye.jsxs)(v.a,{children:[Object(ye.jsx)(S.a,{style:he.addNoteMessage,children:"Enter title and description of your new note."}),Object(ye.jsx)(b.a,{id:"title",placeholder:"Title",className:"activeNote",minRows:null,maxLength:40,minLength:1,style:he.newNoteTitle,onChange:function(e){return le(e.target.value)}}),Object(ye.jsx)(b.a,{id:"text",placeholder:"Description",className:"activeNote",minRows:null,maxLength:500,minLength:1,style:he.newNoteText,onChange:function(e){return ue(e.target.value)}})]}),Object(ye.jsxs)(N.a,{style:he.addNoteButtons,children:[Object(ye.jsxs)(f.a,{style:he.cancelButton,onClick:Ve,children:[Object(ye.jsx)(E.a,{style:he.saveIcon}),"Cancel"]}),Object(ye.jsxs)(f.a,{style:he.primaryButton,variant:"contained",onClick:function(){(ce.length>3||xe.length>3)&&(we(ce,xe,t,p,s),Ve())},children:[Object(ye.jsx)(L.a,{style:he.saveIcon}),"Save note"]})]})]}),Object(ye.jsxs)(O.a,{open:me,onClose:function(){return fe(!1)},children:[Object(ye.jsx)(y.a,{style:he.newNote,children:"Filter by dates"}),Object(ye.jsxs)(v.a,{children:[Object(ye.jsx)(S.a,{style:he.addNoteMessage,children:"Choose dates to display"}),Object(ye.jsx)(w.a,{style:{height:"300px",width:"200px",overflow:"auto"},children:Object(ye.jsx)(T.a,{children:B.map((function(e,t){return Object(ye.jsx)(A.a,{control:Object(ye.jsx)(I.a,{onChange:Je,name:e}),label:e})}))})})]}),Object(ye.jsxs)(N.a,{style:he.addNoteButtons,children:[Object(ye.jsx)(f.a,{style:he.cancelFilter,onClick:function(){return fe(!1)},children:"Cancel"}),Object(ye.jsx)(f.a,{style:he.applyFilter,onClick:function(){Fe(ve),fe(!1),localStorage.setItem("filterDatesArray",JSON.stringify(ve))},children:"Filter notes"})]})]}),Object(ye.jsxs)(O.a,{open:Ee,onClose:function(){return Be(!1)},children:[Object(ye.jsx)(y.a,{style:he.newNote,children:"Filter by titles"}),Object(ye.jsxs)(v.a,{children:[Object(ye.jsx)(S.a,{style:he.addNoteMessage,children:"Choose notes to display"}),Object(ye.jsx)(w.a,{style:he.filters,children:Object(ye.jsx)(T.a,{children:P.map((function(e,t){return Object(ye.jsx)(A.a,{control:Object(ye.jsx)(I.a,{onChange:We,name:e}),label:e})}))})})]}),Object(ye.jsxs)(N.a,{style:he.addNoteButtons,children:[Object(ye.jsx)(f.a,{style:he.cancelFilter,onClick:function(){return Be(!1)},children:"Cancel"}),Object(ye.jsx)(f.a,{style:he.applyFilter,onClick:function(){Ge(De),Be(!1)},children:"Filter notes"})]})]})]}),Object(ye.jsx)(Se,{noteChosen:function(e){W(e)},notesToDisplay:qe,setPage:s,page:r,changePosition:function(e){var t=e.source.index,n=e.destination.index;qe.splice(n,0,qe.splice(t,1)[0])},shareNote:function(e){Ke(!0),nt(e)},removeNote:function(e){}})]}),Object(ye.jsxs)(O.a,{open:Ye,onClose:function(){},children:[Object(ye.jsx)(y.a,{style:he.shareNote,children:"Share note"}),Object(ye.jsxs)(v.a,{children:[Object(ye.jsxs)(S.a,{style:{width:300},children:[Object(ye.jsx)("h4",{style:he.shareNoteTitles,children:"Title:"}),Object(ye.jsx)("p",{style:he.shareNoteText,children:tt.title}),Object(ye.jsx)("h4",{style:he.shareNoteTitles,children:"Description:"}),Object(ye.jsx)("p",{style:he.shareNoteText,children:tt.description}),Object(ye.jsx)("h4",{style:he.shareNoteTitles,children:"Date:"}),Object(ye.jsx)("p",{style:he.shareNoteText,children:tt.createdAt.substr(0,10)})]}),Object(ye.jsx)(S.a,{style:he.shareNoteTitles,children:"Share with:"}),lt.map((function(e,t){return Object(ye.jsxs)(C.a,{style:he.emailsList,children:[Object(ye.jsx)("span",{style:{width:"95%"},children:e}),Object(ye.jsx)(g.a,{style:{width:"10px",height:"10px"},onClick:function(e){return function(e){var t=lt;t.splice(e,1),dt(t),rt(" ")}(t)},children:Object(ye.jsx)(H.a,{fontSize:"small"})})]})})),Object(ye.jsx)(b.a,{id:"userToShare",placeholder:"user@gmail.com",value:ot,className:"activeNote",minRows:null,maxLength:40,minLength:5,style:he.userToShare,onFocus:function(){return rt("")},onChange:function(e){return t=e.target.value,void rt(t);var t}}),Object(ye.jsxs)(f.a,{style:he.addUsers,onClick:function(){var e=lt;e.push(ot),dt(e),rt("")},children:[Object(ye.jsx)(_.a,{fontSize:"small",color:"inherit",style:{display:"inline"}}),Object(ye.jsx)("span",{children:"Add"})]})]}),Object(ye.jsxs)(N.a,{style:he.addNoteButtons,children:[Object(ye.jsxs)(f.a,{style:he.cancelShareButton,onClick:function(){nt(h),dt([]),rt(""),Ke(!1)},children:[Object(ye.jsx)(E.a,{style:he.saveIcon}),"Cancel"]}),Object(ye.jsxs)(f.a,{style:he.primaryButton,variant:"contained",onClick:function(){return pt},children:[Object(ye.jsx)(D.a,{style:he.saveIcon}),"Share"]})]})]}),Object(ye.jsxs)("div",{style:{position:"relative"},children:[Object(ye.jsxs)("div",{className:"chosenNote",style:he.activeNote,children:[Object(ye.jsx)("h3",{style:he.title,children:J.title}),Object(ye.jsx)(b.a,{id:"displayedNote",className:"activeNote",minRows:null,maxLength:500,style:he.text,value:$,onChange:function(e){return t=e.target.value,void Y(t);var t}}),Object(ye.jsx)("p",{style:he.date,children:J.createdAt.substr(0,10)})]}),Object(ye.jsx)(Ne,{title:"Save Changes",buttonFunction:function(e){if(J.id>=0){for(var i=0;i<d.length;i++)if(d[i].id===J.id){d[i].description=e,console.log(d[i],J.id),Z(d[i],J.id,t,n);break}n.dispatch({type:"loadPage"})}else te(!0)},newText:$}),Object(ye.jsx)(k.a,{open:ee,autoHideDuration:3e3,onClose:Ze,children:Object(ye.jsx)(j.a,{onClose:Ze,severity:"info",sx:{width:"100%"},children:G.NOT_CHOSEN})})]})]})})},Ie=n(268),Ce=n(266),ke=n(267),Fe=function(e){var t=e.id,n=e.note,i=e.displaySharedNote;return Object(ye.jsx)("div",{children:Object(ye.jsx)(Ce.a,{sx:{minWidth:"250px"},onClick:function(){return i(t,he.activeCardGradient,he.focusShadow)},className:"sharedNote",style:he.sharedNoteCard,children:Object(ye.jsx)(xe.a,{children:Object(ye.jsxs)(ke.a,{children:[Object(ye.jsx)(je.a,{style:he.noteTitle,children:n.title}),Object(ye.jsx)(je.a,{sx:{display:"block"},component:"span",style:he.noteInListShared,className:"shortDescription",children:Oe(n.text)}),Object(ye.jsx)(je.a,{variant:"body2",children:n.date})]})})})})},Re=function(){return Object(p.useQuery)("shared",(function(){return fetch(V.FAKE_API).then((function(e){return e.json()}))}))},ze=function(e){var t=e.userId,n=Re(),a=n.data,o=n.isSuccess,r=n.isLoading,s=[];o&&a[t]&&(s=a[t].sharedNotes);var c=Object(i.useState)({title:G.NOTES_INIT,text:"",date:""}),l=Object(x.a)(c,2),d=l[0],p=l[1];function h(e){p(a[t].sharedNotes[e])}return Object(ye.jsxs)("div",{style:{width:"100%"},children:[Object(ye.jsxs)("div",{className:"chosenSharedNote",style:he.activeSharedNote,children:[Object(ye.jsx)("h3",{style:he.sharedTitle,children:d.title}),Object(ye.jsx)("p",{style:he.sharedText,children:d.text}),Object(ye.jsx)("p",{style:he.date,children:d.date})]}),Object(ye.jsxs)("div",{style:he.sharedNotesGrid,children:[r&&Object(ye.jsx)(Ie.a,{style:he.progressCircle,size:40,thickness:4,value:100,disableShrink:!0}),o&&!a[t]?Object(ye.jsx)(j.a,{variant:"filled",severity:"info",id:"saveNoteError",style:he.noNotes,children:G.NO_NOTES}):Object(ye.jsx)(u.a,{sx:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:3},children:o&&s.map((function(e,t){return Object(ye.jsx)(Fe,{id:t,note:e,displaySharedNote:h})}))})]})]})},Ee=function(){return Object(ye.jsx)("div",{style:{width:"100%"},children:Object(ye.jsxs)(u.a,{sx:{width:"100%"},children:[Object(ye.jsx)(je.a,{variant:"h5",component:"div",style:he.aboutTitle,children:"About \xabMy Notes\xbb"}),Object(ye.jsxs)("div",{style:he.aboutBlock,children:[Object(ye.jsx)(je.a,{variant:"h6",component:"div",style:he.aboutChapter,children:"Utility and features"}),Object(ye.jsxs)(je.a,{variant:"subtitle1",component:"div",style:he.aboutText,children:["\xabMy Notes\xbb is a simple and practical app that helps you to",Object(ye.jsx)("strong",{children:" create and save "})," your personal notes whenever and whereever needed. You can:",Object(ye.jsxs)(Y.a,{style:he.aboutList,children:[Object(ye.jsx)(C.a,{disablePadding:!0,children:"- look through your notes,"}),Object(ye.jsx)(C.a,{disablePadding:!0,children:"- filter them by title and date,"}),Object(ye.jsx)(C.a,{disablePadding:!0,children:"- add new notes, "}),Object(ye.jsx)(C.a,{disablePadding:!0,children:"- change your note. "})]}),"Moreover \xabMy Notes\xbb allows you to",Object(ye.jsx)("strong",{children:" share your personal notes"})," with other users of our app."]})]}),Object(ye.jsxs)("div",{style:he.aboutBlock,children:[Object(ye.jsx)(je.a,{variant:"h6",component:"div",style:he.aboutChapter,children:"Development potential"}),Object(ye.jsx)(je.a,{variant:"subtitle1",component:"div",style:he.aboutText,children:"In the nearest future the ability to add todo lists and set notifications will be added to the app. Users will have an oportunity to add images and audio to their notes. In order to make your notes more personalized, functions of choosing design of notes will be provided: fonts, colors, themes."})]})]})})},Be=n(17),Le=n(249),Pe={email:"",name:"",surname:"",birthday:"",password:"",passwordConfirm:""},De=function(e){var t={};return e.email?/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(e.email)||(t.email="*Invalid email format"):t.email="*Required",e.name?/^[a-zA-Z\s-]*$/.test(e.name)||(t.name="*Please, enter your name in English"):t.name="*Required",e.surname?/^[a-zA-Z\s-]*$/.test(e.surname)||(t.surname="*Please, enter your last name in English"):t.surname="*Required",e.birthday||(t.birthday="*Required"),e.password?e.password.length<9&&(t.password="*Password must contain at least 9 characters"):t.password="*Required",e.passwordConfirm?e.passwordConfirm!==e.password&&(t.passwordConfirm="*Password is incorrect"):t.passwordConfirm="*Required",t},Me=function(e){var t=e.submitRegistration;return Object(ye.jsxs)("div",{children:[Object(ye.jsx)("h2",{style:he.aboutTitle,children:"Registration"}),Object(ye.jsx)(Be.d,{initialValues:Pe,onSubmit:t,validate:De,children:Object(ye.jsxs)(Be.c,{style:he.form,children:[Object(ye.jsxs)("div",{style:he.formBlock,children:[Object(ye.jsx)("label",{style:he.formLabel,htmlFor:"name",children:"First name"}),Object(ye.jsx)(Be.b,{style:he.formInput,type:"text",id:"name",name:"name",placeholder:"Name"}),Object(ye.jsx)(Be.a,{name:"name",children:function(e){return Object(ye.jsx)("div",{className:"error",children:e})}})]}),Object(ye.jsxs)("div",{style:he.formBlock,children:[Object(ye.jsx)("label",{style:he.formLabel,htmlFor:"surname",children:"Last name"}),Object(ye.jsx)(Be.b,{style:he.formInput,type:"text",id:"surname",name:"surname",placeholder:"Surname"}),Object(ye.jsx)(Be.a,{name:"surname",children:function(e){return Object(ye.jsx)("div",{className:"error",children:e})}})]}),Object(ye.jsxs)("div",{style:he.formBlock,children:[Object(ye.jsx)("label",{style:he.formLabel,htmlFor:"email",children:"Email"}),Object(ye.jsx)(Be.b,{style:he.formInput,type:"email",id:"email",name:"email",placeholder:"myemail@mail.com"}),Object(ye.jsx)(Be.a,{name:"email",children:function(e){return Object(ye.jsx)("div",{className:"error",children:e})}})]}),Object(ye.jsxs)("div",{style:he.formBlock,children:[Object(ye.jsx)("label",{style:he.formLabel,htmlFor:"birthday",children:"Date of birth"}),Object(ye.jsx)(Be.b,{style:he.formInput,type:"date",id:"birthday",name:"birthday"}),Object(ye.jsx)(Be.a,{name:"birthday",children:function(e){return Object(ye.jsx)("div",{className:"error",children:e})}})]}),Object(ye.jsxs)("div",{style:he.formBlock,children:[Object(ye.jsx)("label",{style:he.formLabel,htmlFor:"password",children:"Password"}),Object(ye.jsx)(Be.b,{style:he.formInput,type:"password",id:"password",name:"password"}),Object(ye.jsx)(Be.a,{name:"password",children:function(e){return Object(ye.jsx)("div",{className:"error",children:e})}})]}),Object(ye.jsxs)("div",{style:he.formBlock,children:[Object(ye.jsx)("label",{style:he.formLabel,htmlFor:"passwordConfirm",children:"Confirm password"}),Object(ye.jsx)(Be.b,{style:he.formInput,type:"password",id:"passwordConfirm",name:"passwordConfirm"}),Object(ye.jsx)(Be.a,{name:"passwordConfirm",style:he.validationError,children:function(e){return Object(ye.jsx)("div",{className:"error",children:e})}})]}),Object(ye.jsx)(Le.a,{href:"./sign-in",style:he.authorizationLink,children:"Already have an account?"}),Object(ye.jsx)("button",{style:he.submitButton,type:"submit",children:"SIGN UP"})]})})]})},_e=function(e){var t={};return e.email||(t.email="*Required"),e.password||(t.password="*Required"),t},Ue=n(93),He=function(e,t,n){var i=Object(Ue.encode)(e.email+":"+e.password);W()({method:"GET",url:V.SERVER_AUTH,headers:{Authorization:"Basic ".concat(i)}}).then((function(e){var n=e.data,a={name:n.firstName,surname:n.lastName,birthday:n.birthday.substr(0,10),email:n.email};t(a,i)})).catch((function(e){n(!0)}))},Ge=function(e){var t=e.submitAutorization,n=Object(i.useState)(!1),a=Object(x.a)(n,2),o=a[0],r=a[1],s=function(e,t){"clickaway"!==t&&r(!1)};return Object(ye.jsxs)("div",{children:[Object(ye.jsx)("h2",{style:he.aboutTitle,children:"Authorization"}),Object(ye.jsx)(Be.d,{initialValues:Pe,onSubmit:function(e){return He(e,t,r)},validate:_e,children:Object(ye.jsxs)(Be.c,{style:he.form,children:[Object(ye.jsxs)("div",{style:he.formBlock,children:[Object(ye.jsx)("label",{style:he.formLabel,htmlFor:"email",children:"Email"}),Object(ye.jsx)(Be.b,{style:he.formInput,type:"email",id:"email",name:"email"}),Object(ye.jsx)(Be.a,{name:"email",children:function(e){return Object(ye.jsx)("div",{className:"error",children:e})}})]}),Object(ye.jsxs)("div",{style:he.formBlock,children:[Object(ye.jsx)("label",{style:he.formLabel,htmlFor:"password",children:"Password"}),Object(ye.jsx)(Be.b,{style:he.formInput,type:"password",id:"password",name:"password"}),Object(ye.jsx)(Be.a,{name:"password",children:function(e){return Object(ye.jsx)("div",{className:"error",children:e})}})]}),Object(ye.jsx)(Le.a,{href:"./sign-up",style:he.authorizationLink,children:"Don't have an account yet?"}),Object(ye.jsx)("button",{style:he.submitButton,type:"submit",children:"SIGN IN"})]})}),Object(ye.jsx)(k.a,{open:o,autoHideDuration:3e3,onClose:s,children:Object(ye.jsx)(j.a,{onClose:s,severity:"error",sx:{width:"100%"},children:"Invalid email or password!"})})]})},Je=n(251),We=n(252),Ve=n(254),Ze=n(250),qe=n(253),Qe=function(e){var t=e.profileInfo,n=e.signOut;function i(e,t){return{title:e,value:t}}var a=[i("First name",t.name),i("Last name",t.surname),i("Date of birth",t.birthday),i("Email",t.email)];return Object(ye.jsx)("div",{style:{width:"100%"},children:Object(ye.jsxs)(u.a,{style:he.profilePage,children:[Object(ye.jsx)(je.a,{variant:"h5",component:"div",style:he.aboutTitle,children:"My Profile"}),Object(ye.jsx)(Ze.a,{style:he.profileTable,children:Object(ye.jsx)(Je.a,{children:Object(ye.jsx)(We.a,{children:a.map((function(e){return Object(ye.jsxs)(qe.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(ye.jsx)(Ve.a,{component:"th",scope:"row",style:he.profileTableTitle,children:e.title}),Object(ye.jsx)(Ve.a,{align:"right",style:he.profileTableInfo,children:e.value})]},e.title)}))})})}),Object(ye.jsx)(f.a,{style:he.signOutButton,variant:"contained",onClick:n,children:"SIGN OUT"})]})})},$e=function(e){var t=e.isAuthorized,n=e.name;return Object(ye.jsx)("div",{style:{width:"100%"},children:Object(ye.jsx)(u.a,{style:he.welcomeBlock,children:t?Object(ye.jsxs)("div",{children:[Object(ye.jsx)(je.a,{variant:"h5",component:"div",style:he.aboutChapter,children:n+", welcome to \xabMy Notes\xbb !"}),Object(ye.jsx)(je.a,{variant:"subtitle1",component:"div",style:he.aboutText,children:G.WELCOME_AUTHORIZED})]}):Object(ye.jsxs)("div",{children:[Object(ye.jsx)(je.a,{variant:"h5",component:"div",style:he.aboutChapter,children:"Welcome to \xabMy Notes\xbb !"}),Object(ye.jsx)(je.a,{variant:"subtitle1",component:"div",style:he.aboutText,children:G.NOT_AUTHORIZED})]})})})},Ye=n(269),Ke=function(){return Object(ye.jsx)(d.b,{path:h.notFound,children:Object(ye.jsx)("div",{children:Object(ye.jsxs)(j.a,{icon:!1,variant:"filled",style:he.notFoundAlert,severity:"error",children:[Object(ye.jsx)(Ye.a,{style:he.notFoundAlertTitle,children:"Error 404"}),"Page not found"]})})})},Xe=new p.QueryClient,et=function(e){var t=e.profileInfo,n=e.isAuthorized,i=e.user,a=e.submitRegistration,o=e.submitAutorization,r=e.signOut,s=e.store;return localStorage.isAuthorized&&(n=JSON.parse(localStorage.getItem("isAuthorized"))),Object(ye.jsx)("div",{style:he.wrapper,children:Object(ye.jsxs)(l.a,{basename:h.base,children:[Object(ye.jsxs)("header",{style:he.header,children:[Object(ye.jsx)("span",{children:"My Notes"}),Object(ye.jsxs)("div",{style:he.menu,children:[Object(ye.jsx)(l.b,{to:h.myNotes,style:he.menuMain,activeClassName:"activeMenu",children:Object(ye.jsx)("span",{style:he.menuText,children:"My Notes"})}),Object(ye.jsx)(l.b,{to:h.sharedNotes,style:he.menuMain,activeClassName:"activeMenu",children:Object(ye.jsx)("span",{style:he.menuText,children:"Shared Notes"})}),Object(ye.jsx)(l.b,{to:h.aboutApp,style:he.menuMain,activeClassName:"activeMenu",children:Object(ye.jsx)("span",{style:he.menuText,children:"About"})}),n?Object(ye.jsx)("div",{style:{display:"inline"},children:Object(ye.jsxs)(l.b,{to:h.profile,className:"menuSignIn",activeClassName:"activeMenuAuthorization",children:[Object(ye.jsx)(c.a,{style:he.menuIconProfile}),Object(ye.jsx)("span",{children:"Profile"})]})}):Object(ye.jsxs)("div",{style:{display:"inline"},children:[Object(ye.jsx)(l.b,{to:h.signIn,className:"menuSignIn",activeClassName:"activeMenuAuthorization",children:Object(ye.jsx)("span",{children:"Sign in"})}),Object(ye.jsx)(l.b,{to:h.signUp,style:he.menuSignUp,activeClassName:"activeMenuRegistration",children:Object(ye.jsx)("span",{children:"Sign up"})})]})]})]}),Object(ye.jsxs)(d.d,{children:[Object(ye.jsx)(d.b,{exact:!0,path:h.initial,children:Object(ye.jsx)($e,{isAuthorized:n,name:t.name})}),Object(ye.jsx)(d.b,{path:h.sharedNotes,children:n?Object(ye.jsx)(p.QueryClientProvider,{client:Xe,children:Object(ye.jsx)(ze,{userId:1})}):Object(ye.jsx)(d.a,{to:h.notFound})}),Object(ye.jsx)(d.b,{path:h.myNotes,children:n?Object(ye.jsx)(p.QueryClientProvider,{client:Xe,children:Object(ye.jsx)(Ae,{user:i,store:s})}):Object(ye.jsx)(d.a,{to:h.notFound})}),Object(ye.jsx)(d.b,{path:h.aboutApp,children:Object(ye.jsx)(Ee,{})}),Object(ye.jsx)(d.b,{path:h.signUp,children:n?Object(ye.jsx)(d.a,{to:h.profile}):Object(ye.jsx)(Me,{submitRegistration:a})}),Object(ye.jsx)(d.b,{path:h.signIn,children:n?Object(ye.jsx)(d.a,{to:h.profile}):Object(ye.jsx)(Ge,{isAuthorized:n,submitAutorization:o})}),Object(ye.jsx)(d.b,{path:h.profile,children:n?Object(ye.jsx)(Qe,{profileInfo:t,signOut:r}):Object(ye.jsx)(d.a,{to:h.signIn})}),Object(ye.jsx)(d.b,{path:h.notFound,children:Object(ye.jsx)(Ke,{})}),Object(ye.jsx)(d.b,{path:"*",children:Object(ye.jsx)(d.a,{to:h.notFound})})]})]})})},tt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,271)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),o(e),r(e)}))},nt=n(55),it=function(e,t){var n=Object(Ue.encode)(e.email+":"+e.password),i={email:e.email,password:e.password,firstName:e.name,lastName:e.surname,birthday:e.birthday};W.a.post(V.SERVER_USERS,i).then((function(i){var a={name:e.name,surname:e.surname,email:e.email,birthday:e.birthday,password:e.password},o=n.toString();localStorage.setItem("isAuthorized",JSON.stringify(!0)),localStorage.setItem("profileInfo",JSON.stringify(a)),localStorage.setItem("encoded",JSON.stringify(n)),t.dispatch({type:"signUp",payload:{profileInfo:a,user:o}})})).catch((function(e){alert(e.response.data)}))},at={},ot=!1,rt="";localStorage.profileInfo&&(at=JSON.parse(localStorage.getItem("profileInfo"))),localStorage.isAuthorized&&(ot=JSON.parse(localStorage.getItem("isAuthorized"))),localStorage.encoded&&(rt=JSON.parse(localStorage.getItem("encoded")));var st=Object(nt.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isAuthorized:!1,profileInfo:{},encoded:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"loadPage":return{isAuthorized:ot,profileInfo:at,encoded:rt};case"signUp":case"signIn":return{isAuthorized:!0,profileInfo:t.payload.profileInfo,encoded:t.payload.user};case"signOut":return localStorage.clear(),{isAuthorized:!1,profileInfo:{},encoded:""};default:return e}}));function ct(){st.dispatch({type:"signOut"})}st.subscribe((function(){var e=st.getState();r.a.render(Object(ye.jsx)(a.a.StrictMode,{children:Object(ye.jsx)(et,{profileInfo:e.profileInfo,isAuthorized:e.isAuthorized,user:e.encoded,submitRegistration:function(e){return it(e,st)},submitAutorization:function(e,t){return function(e,t){var n=t.toString();localStorage.setItem("isAuthorized",JSON.stringify(!0)),localStorage.setItem("profileInfo",JSON.stringify(e)),localStorage.setItem("encoded",JSON.stringify(t)),st.dispatch({type:"signIn",payload:{profileInfo:e,user:n}})}(e,t)},signOut:ct,store:st})}),document.getElementById("root"))})),st.dispatch({type:"loadPage"}),tt()}},[[198,1,2]]]);
//# sourceMappingURL=main.940dc177.chunk.js.map