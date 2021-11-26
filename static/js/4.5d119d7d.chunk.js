(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{252:function(e,t,a){"use strict";a.r(t);var s=a(12),n=a(1),r=a.n(n),o=a(26),c=a(31),i=a.n(c),l=a(32),h=function(e,t,a,s){var n=l.a.SERVER_NOTES+"/"+e;i()({method:"DELETE",url:n,headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){s(0),a([]),s(1)})).catch((function(e){a([]),s(1)}))},d=a(239),j=a(235),u=a(209),b=a(244),O=a(112),p=a(39),x=a(3),f=function(e,t){var a=e.source.index,s=e.destination.index;return t.splice(s,0,t.splice(a,1)[0]),t},y=a(213),S=a(207),N=a(253),g=a(215),m=a(224),v=a(240),T=a.n(v),C=a(241),E=a.n(C),A=a(113),D=a(33),I=a(0),k=function(e){var t=e.note,a=e.displayChosenNote,s=e.shareNote,n=e.setNoteToRemove;return Object(I.jsxs)(y.a,{divider:!0,children:[Object(I.jsx)(S.a,{onClick:function(){a(t)},children:Object(I.jsx)(N.a,{primary:Object(I.jsx)(g.a,{style:x.a.noteTitle,children:t.title}),secondary:Object(I.jsxs)(r.a.Fragment,{children:[Object(I.jsx)(g.a,{sx:x.a.inlineBlock,component:"span",style:x.a.noteInList,className:"shortDescription",children:Object(A.a)(t.description)}),Object(D.a)(t.createdAt)]}),style:x.a.noteInList,"data-testid":"noteInList"})}),Object(I.jsx)(m.a,{onClick:function(){return s(t)},color:"inherit",component:"span","data-testid":"shareNote",children:Object(I.jsx)(T.a,{style:x.a.shareIcon})}),Object(I.jsx)(m.a,{onClick:function(){n(t.id)},color:"inherit",component:"span","data-testid":"deleteNote",children:Object(I.jsx)(E.a,{style:x.a.deleteIcon})})]})},U=function(e){var t=e.note,a=e.displayChosenNote,r=e.shareNote,c=e.removeNote,i=Object(n.useState)(o.a.ID),l=Object(s.a)(i,2),h=l[0],d=l[1];return Object(n.useEffect)((function(){h.length>o.a.ID&&c(h)}),[h]),Object(I.jsx)(k,{note:t,displayChosenNote:a,shareNote:r,setNoteToRemove:d})},L=function(e){var t=e.displayChosenNote,a=e.notesToDisplay,s=e.setPage,n=e.page,r=e.shareNote,o=e.removeNote;return Object(I.jsx)("div",{style:x.a.allNotes,children:Object(I.jsxs)(b.a,{onDragEnd:function(e){f(e,a)},children:[!a.length&&Object(I.jsx)(u.a,{variant:"filled",severity:"info",id:"saveNoteError",style:x.a.noNotes,children:p.a.NO_NOTES}),a.length&&Object(I.jsx)(b.c,{droppableId:"droppable-1",children:function(e,c){return Object(I.jsx)("div",Object(d.a)(Object(d.a)({id:"scrollableDiv",style:x.a.droppable,ref:e.innerRef},e.droppableProps),{},{"data-testid":"scrollableList",children:Object(I.jsx)(j.a,{children:Object(I.jsxs)(O.a,{dataLength:a.length,next:function(){return s(n+1)},hasMore:!0,scrollableTarget:"scrollableDiv",children:[a.map((function(e,a){return Object(I.jsx)(b.b,{draggableId:"draggable"+a,index:a,children:function(a,s){return Object(I.jsx)("div",Object(d.a)(Object(d.a)(Object(d.a)({ref:a.innerRef},a.draggableProps),a.dragHandleProps),{},{style:Object(d.a)(Object(d.a)({},a.draggableProps.style),{},{boxShadow:s.isDragging?x.a.draggingShadow:"none",background:s.isDragging?x.a.draggingBackground:"inherit"}),children:Object(I.jsx)(U,{note:e,displayChosenNote:t,shareNote:r,removeNote:o})}))}},e.id)})),e.placeholder]})})}))}})]})})},R=function(e,t,a,s,n,r,c,h){var d=l.a.SERVER_SHARE+"/"+e;i()({method:"PUT",url:d,headers:{Authorization:"Basic ".concat(a)},data:{users:t}}).then((function(e){s(o.a.ACTIVE),n([]),r(!1)})).catch((function(e){c(!0),h(e.response.data)}))},w=a(208),z=a(226),P=a(227),B=a(228),V=a(205),_=a(216),H=a(211),Z=a(229),F=a(247),J=a(248),$=a(249),M=a(250),W=function(e){var t=e.openShare,a=e.noteToShare,s=e.usersToShare,n=e.removeUser,r=e.setUser,o=e.setUserToShare,c=e.userEmailValue,i=e.addUserToList,l=e.cancelShare,h=e.shareNoteSubmit,d=e.alertShareOpen,j=e.handleAlertShareClose,b=e.shareError;return Object(I.jsxs)(w.a,{open:t,onClose:function(){},children:[Object(I.jsx)(z.a,{style:x.a.shareNote,children:"Share note"}),Object(I.jsxs)(P.a,{children:[Object(I.jsxs)(B.a,{style:x.a.dialogShare,children:[Object(I.jsx)("h4",{style:x.a.shareNoteTitles,children:"Title:"}),Object(I.jsx)("p",{style:x.a.shareNoteText,children:a.title}),Object(I.jsx)("h4",{style:x.a.shareNoteTitles,children:"Description:"}),Object(I.jsx)("p",{style:x.a.shareNoteText,children:a.description}),Object(I.jsx)("h4",{style:x.a.shareNoteTitles,children:"Date:"}),Object(I.jsx)("p",{style:x.a.shareNoteText,children:Object(D.a)(a.createdAt)})]}),Object(I.jsx)(B.a,{style:x.a.shareNoteTitles,children:"Share with:"}),s.map((function(e,t){return Object(I.jsxs)(y.a,{style:x.a.emailsList,children:[Object(I.jsx)("span",{style:x.a.widthEmail,children:e}),Object(I.jsx)(m.a,{style:x.a.clearUsers,onClick:function(e){return n(t)},"data-testid":"removeUser",children:Object(I.jsx)(F.a,{fontSize:"small"})})]})})),Object(I.jsx)(V.a,{id:"userToShare",placeholder:"user@gmail.com",value:c,className:"activeNote",minRows:null,maxLength:40,minLength:5,style:x.a.userToShare,onFocus:function(){return r("")},onChange:function(e){return o(e.target.value)}}),Object(I.jsxs)(_.a,{style:x.a.addUsers,onClick:i,"data-testid":"addUser",children:[Object(I.jsx)(J.a,{fontSize:"small",color:"inherit",style:x.a.inline}),Object(I.jsx)("span",{children:"Add"})]}),Object(I.jsx)(H.a,{open:d,autoHideDuration:3e3,onClose:j,children:Object(I.jsx)(u.a,{onClose:j,severity:"error",sx:x.a.maxWidth,children:b})})]}),Object(I.jsxs)(Z.a,{style:x.a.addNoteButtons,children:[Object(I.jsxs)(_.a,{style:x.a.cancelShareButton,onClick:l,"data-testid":"cancelShare",children:[Object(I.jsx)($.a,{style:x.a.saveIcon}),"Cancel"]}),Object(I.jsxs)(_.a,{style:x.a.primaryButton,variant:"contained",onClick:h,"data-testid":"submitShare",children:[Object(I.jsx)(M.a,{style:x.a.saveIcon}),"Share"]})]})]})},q=function(e){var t=e.user,a=e.openShare,r=e.noteToShare,c=e.setNoteToShare,i=e.shareNoteOpen,l=(e.setAuthorizeAlertOpen,Object(n.useState)("")),h=Object(s.a)(l,2),d=h[0],j=h[1],u=Object(n.useState)([]),b=Object(s.a)(u,2),O=b[0],p=b[1],x=Object(n.useState)(!1),f=Object(s.a)(x,2),y=f[0],S=f[1],N=Object(n.useState)(""),g=Object(s.a)(N,2),m=g[0],v=g[1];return Object(I.jsx)(W,{openShare:a,noteToShare:r,usersToShare:O,removeUser:function(e){var t=O;t.splice(e,1),p(t),j(" ")},setUser:j,setUserToShare:function(e){j(e)},userEmailValue:d,addUserToList:function(){if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(d)){var e=O;e.push(d),p(e),j("")}else S(!0),v("Invalid email format")},cancelShare:function(){c(o.a.ACTIVE),p([]),j(""),i(!1)},shareNoteSubmit:function(){R(r.id,O,t,c,p,i,S,v)},alertShareOpen:y,handleAlertShareClose:function(e,t){"clickaway"!==t&&S(!1)},shareError:m})};t.default=function(e){var t=e.user,a=e.displayChosenNote,r=e.notesToDisplay,c=e.setNotes,i=e.setPage,l=e.page,d=Object(n.useState)(!1),j=Object(s.a)(d,2),u=j[0],b=j[1],O=Object(n.useState)(o.a.ACTIVE),p=Object(s.a)(O,2),x=p[0],f=p[1];return Object(I.jsxs)("div",{children:[Object(I.jsx)(L,{displayChosenNote:a,notesToDisplay:r,setPage:i,page:l,shareNote:function(e){b(!0),f(e)},removeNote:function(e){h(e,t,c,i)}}),Object(I.jsx)(q,{user:t,openShare:u,noteToShare:x,setNoteToShare:f,shareNoteOpen:b})]})}}}]);
//# sourceMappingURL=4.5d119d7d.chunk.js.map