(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{252:function(e,t,a){"use strict";a.r(t);var n=a(13),s=a(0),r=a.n(s),o=a(30),c=a(31),i=a.n(c),l=a(32),h=function(e,t,a,n){console.log(e);var s=l.a.SERVER_NOTES+"/"+e;i()({method:"DELETE",url:s,headers:{Authorization:"Basic ".concat(t)}}).then((function(e){a([]),n(1)})).catch((function(e){return e}))},j=a(239),d=a(236),b=a(209),u=a(244),O=a(113),p=a(37),x=a(3),y=a(213),g=a(207),f=a(253),S=a(215),N=a(225),m=a(240),v=a.n(m),T=a(241),C=a.n(T),E=a(114),D=a(49),k=a(1),I=function(e){var t=e.note,a=e.displayChosenNote,n=e.shareNote,s=e.setNoteToRemove;return Object(k.jsxs)(y.a,{divider:!0,children:[Object(k.jsx)(g.a,{onClick:function(){a(t)},children:Object(k.jsx)(f.a,{primary:Object(k.jsx)(S.a,{style:x.a.noteTitle,children:t.title}),secondary:Object(k.jsxs)(r.a.Fragment,{children:[Object(k.jsx)(S.a,{sx:x.a.inlineBlock,component:"span",style:x.a.noteInList,className:"shortDescription",children:Object(E.a)(t.description)}),Object(D.a)(t.createdAt)]}),style:x.a.noteInList})}),Object(k.jsx)(N.a,{onClick:function(){return n(t)},color:"inherit",component:"span",children:Object(k.jsx)(v.a,{style:x.a.shareIcon})}),Object(k.jsx)(N.a,{onClick:function(){s(t.id)},color:"inherit",component:"span",children:Object(k.jsx)(C.a,{style:x.a.deleteIcon})})]})},A=function(e){var t=e.note,a=e.displayChosenNote,r=e.shareNote,c=e.removeNote,i=Object(s.useState)(o.a.ID),l=Object(n.a)(i,2),h=l[0],j=l[1];return Object(s.useEffect)((function(){h.length>o.a.ID&&c(h)}),[h]),Object(k.jsx)(I,{note:t,displayChosenNote:a,shareNote:r,setNoteToRemove:j})},P=function(e){var t=e.displayChosenNote,a=e.notesToDisplay,n=e.setPage,s=e.page,r=e.changePosition,o=e.shareNote,c=e.removeNote;return Object(k.jsx)("div",{style:x.a.allNotes,children:Object(k.jsx)(u.a,{onDragEnd:function(e){r(e)},children:0===a.length?Object(k.jsx)(b.a,{variant:"filled",severity:"info",id:"saveNoteError",style:x.a.noNotes,children:p.a.NO_NOTES}):Object(k.jsx)(u.c,{droppableId:"droppable-1",children:function(e,r){return Object(k.jsx)("div",Object(j.a)(Object(j.a)({id:"scrollableDiv",style:x.a.droppable,ref:e.innerRef},e.droppableProps),{},{children:Object(k.jsx)(d.a,{children:Object(k.jsxs)(O.a,{dataLength:a.length,next:function(){return n(s+1)},hasMore:!0,scrollableTarget:"scrollableDiv",children:[a.map((function(e,a){return Object(k.jsx)(u.b,{draggableId:"draggable"+a,index:a,children:function(a,n){return Object(k.jsx)("div",Object(j.a)(Object(j.a)(Object(j.a)({ref:a.innerRef},a.draggableProps),a.dragHandleProps),{},{style:Object(j.a)(Object(j.a)({},a.draggableProps.style),{},{boxShadow:n.isDragging?x.a.draggingShadow:"none",background:n.isDragging?x.a.draggingBackground:"inherit"}),children:Object(k.jsx)(A,{note:e,displayChosenNote:t,shareNote:o,removeNote:c})}))}},a)})),e.placeholder]})})}))}})})})},U=function(e,t,a,n,s,r,c,h){var j=l.a.SERVER_SHARE+"/"+e;i()({method:"PUT",url:j,headers:{Authorization:"Basic ".concat(a)},data:{users:t}}).then((function(e){n(o.a.ACTIVE),s([]),r(!1)})).catch((function(e){c(!0),h(e.response.data)}))},R=a(208),L=a(227),w=a(228),B=a(229),V=a(205),z=a(216),H=a(211),_=a(230),F=a(247),J=a(248),M=a(249),W=a(250),q=function(e){var t=e.openShare,a=e.noteToShare,n=e.usersToShare,s=e.removeUser,r=e.setUser,o=e.setUserToShare,c=e.userEmailValue,i=e.addUserToList,l=e.cancelShare,h=e.shareNoteSubmit,j=e.alertShareOpen,d=e.handleAlertShareClose,u=e.shareError;return Object(k.jsxs)(R.a,{open:t,onClose:function(){},children:[Object(k.jsx)(L.a,{style:x.a.shareNote,children:"Share note"}),Object(k.jsxs)(w.a,{children:[Object(k.jsxs)(B.a,{style:x.a.dialogShare,children:[Object(k.jsx)("h4",{style:x.a.shareNoteTitles,children:"Title:"}),Object(k.jsx)("p",{style:x.a.shareNoteText,children:a.title}),Object(k.jsx)("h4",{style:x.a.shareNoteTitles,children:"Description:"}),Object(k.jsx)("p",{style:x.a.shareNoteText,children:a.description}),Object(k.jsx)("h4",{style:x.a.shareNoteTitles,children:"Date:"}),Object(k.jsx)("p",{style:x.a.shareNoteText,children:a.createdAt.substr(0,10)})]}),Object(k.jsx)(B.a,{style:x.a.shareNoteTitles,children:"Share with:"}),n.map((function(e,t){return Object(k.jsxs)(y.a,{style:x.a.emailsList,children:[Object(k.jsx)("span",{style:x.a.widthEmail,children:e}),Object(k.jsx)(N.a,{style:x.a.clearUsers,onClick:function(e){return s(t)},children:Object(k.jsx)(F.a,{fontSize:"small"})})]})})),Object(k.jsx)(V.a,{id:"userToShare",placeholder:"user@gmail.com",value:c,className:"activeNote",minRows:null,maxLength:40,minLength:5,style:x.a.userToShare,onFocus:function(){return r("")},onChange:function(e){return o(e.target.value)}}),Object(k.jsxs)(z.a,{style:x.a.addUsers,onClick:i,children:[Object(k.jsx)(J.a,{fontSize:"small",color:"inherit",style:x.a.inline}),Object(k.jsx)("span",{children:"Add"})]}),Object(k.jsx)(H.a,{open:j,autoHideDuration:3e3,onClose:d,children:Object(k.jsx)(b.a,{onClose:d,severity:"error",sx:x.a.maxWidth,children:u})})]}),Object(k.jsxs)(_.a,{style:x.a.addNoteButtons,children:[Object(k.jsxs)(z.a,{style:x.a.cancelShareButton,onClick:l,children:[Object(k.jsx)(M.a,{style:x.a.saveIcon}),"Cancel"]}),Object(k.jsxs)(z.a,{style:x.a.primaryButton,variant:"contained",onClick:h,children:[Object(k.jsx)(W.a,{style:x.a.saveIcon}),"Share"]})]})]})},G=function(e){var t=e.user,a=e.openShare,r=e.noteToShare,c=e.setNoteToShare,i=e.shareNoteOpen,l=Object(s.useState)(""),h=Object(n.a)(l,2),j=h[0],d=h[1],b=Object(s.useState)([]),u=Object(n.a)(b,2),O=u[0],p=u[1],x=Object(s.useState)(!1),y=Object(n.a)(x,2),g=y[0],f=y[1],S=Object(s.useState)(""),N=Object(n.a)(S,2),m=N[0],v=N[1];return Object(k.jsx)(q,{openShare:a,noteToShare:r,usersToShare:O,removeUser:function(e){var t=O;t.splice(e,1),p(t),d(" ")},setUser:d,setUserToShare:function(e){d(e)},userEmailValue:j,addUserToList:function(){var e=O;e.push(j),p(e),d("")},cancelShare:function(){c(o.a.ACTIVE),p([]),d(""),i(!1)},shareNoteSubmit:function(){U(r.id,O,t,c,p,i,f,v)},alertShareOpen:g,handleAlertShareClose:function(e,t){"clickaway"!==t&&f(!1)},shareError:m})};t.default=function(e){var t=e.user,a=e.displayChosenNote,r=e.notesToDisplay,c=e.setNotes,i=e.setPage,l=e.page,j=e.changePosition,d=Object(s.useState)(!1),b=Object(n.a)(d,2),u=b[0],O=b[1],p=Object(s.useState)(o.a.ACTIVE),x=Object(n.a)(p,2),y=x[0],g=x[1];return Object(k.jsxs)("div",{children:[Object(k.jsx)(P,{displayChosenNote:a,notesToDisplay:r,setPage:i,page:l,changePosition:j,shareNote:function(e){O(!0),g(e)},removeNote:function(e){console.log(e),h(e,t,c,i)}}),Object(k.jsx)(G,{user:t,openShare:u,noteToShare:y,setNoteToShare:g,shareNoteOpen:O})]})}}}]);
//# sourceMappingURL=4.2cf535fa.chunk.js.map