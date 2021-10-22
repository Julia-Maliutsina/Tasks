(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{48:function(e,t,o){},71:function(e,t,o){"use strict";o.r(t);var n=o(0),i=o.n(n),a=o(51),s=o.n(a),r=o(20),c=(o(48),{Wrapper:{width:"90%",marginLeft:"auto",marginRight:"auto",height:"500px",backgroundColor:"#f7f7f7"},Header:{textAlign:"left",width:"100%",height:"50px",padding:"10px",background:"#3a74c4",fontSize:"30px",lineHeight:"30px",fontFamily:"titles",color:"#ffffff"},ActiveNote:{display:"inlineBlock",width:"95%",marginTop:"25px",marginRight:"5%",padding:"5px",height:"350px",resize:"none",border:"2px solid #ccaabe",background:"#ffffff",fontFamily:"notes",fontSize:"16px",textAlign:"justify"},AllNotes:{display:"inlineBlock",width:"95%",height:"400px",marginTop:"25px",marginLeft:"5%",background:"#e6f1ff",overflowY:"scroll"},SaveButton:{background:"#a66289",outline:"none",marginTop:"10px",borderRadius:"0px",fontFamily:"notes"},NoteInList:{color:"#000",width:"300px",fontFamily:"notes"},NoteTitle:{fontWeight:"bold",width:"110px",fontFamily:"titles",fontSize:"16px"},ActiveSharedNote:{display:"block",width:"98%",marginLeft:"1%",marginTop:"20px",marginBottom:"20px",padding:"5px",height:"150px",border:"2px solid #ccaabe",background:"#ffffff",fontFamily:"notes",fontSize:"16px",textAlign:"justify",color:"#c0c0c0"},Menu:{display:"inline-block",width:"80%",height:"50px",fontFamily:"notes",fontSize:"18px",color:"#ffffff",textAlign:"right"},SharedNotesGrid:{paddingLeft:"10px",height:"250px",overflowY:"scroll"}}),l=o(99),d=o(101),h=(o(96),o(104),o(100),o(8)),u=function(e){return e.slice(0,20)+"..."};u.PropTypes={fullDescr:o.n(h).a.string};var f=u,g=o(2),p=function(e){e.notes,e.noteChosen;return Object(g.jsx)("div",{style:c.AllNotes,children:Object(g.jsx)(d.a,{})})},b=o(102),x=function(e){var t=e.changeActiveNote;return Object(g.jsx)(b.a,{style:c.SaveButton,variant:"contained",onClick:function(){return t()},children:"Save changes"})},y=function(e){var t=e.showChosenNote,o=e.saveChangedNote,n=e.notes;return Object(g.jsx)("div",{style:{width:"100%"},children:Object(g.jsxs)(l.a,{sx:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:1},children:[Object(g.jsx)(p,{notes:n,noteChosen:t}),Object(g.jsxs)("div",{children:[Object(g.jsx)("textarea",{class:"chosenNote",style:c.ActiveNote,placeholder:"Select note to display"}),Object(g.jsx)(x,{changeActiveNote:o})]})]})})},m=(o(97),o(103),function(e){e.notes;return Object(g.jsxs)("div",{style:{width:"100%"},children:[Object(g.jsx)("div",{class:"chosenSharedNote",style:c.ActiveSharedNote,children:"Select note to display"}),Object(g.jsx)("div",{style:c.SharedNotesGrid,children:Object(g.jsx)(l.a,{sx:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:2}})})]})}),j=[{id:0,text:"This is my first note in the app",title:"First note",date:"24.06.2021",active:!1},{id:1,text:"Southerners have a lot of expressions to relay their dislike of the summer's heat. 'Hotter'n blue blazes' and 'hotter than the hinges on the gates of Hades' are two I always remember hearing in my childhood. But there's another truth about the South in the summer: It's one of the most delicious places to be.",title:"Travel note",date:"01.08.2021",active:!1},{id:2,text:"Yogurt is a secret ingredient used in a variety of cakes to create a super moist, light, and fluffy texture. It adds a special something, a hint of tangy lusciousness to every bite! The fun part is that you can use anything from plain yogurt to your favorite flavored yogurt \u2014 strawberry, lemon, vanilla, and more.",title:"Cooking",date:"13.10.2021",active:!1},{id:3,text:"After I woke up this morning, I made the regrettable decision of waking up. I tried to go back to sleep, but I could not even relax. Today was one of those days where either I get up, or I get up. I then decided to go outside, but because it was raining, I got wet. I went back inside, felt tired enough to go back to bed, but I still had to change out of my wet clothes. Then I got a phone call from you know who.",title:"Diary",date:"10.12.2020",active:!1},{id:4,text:"Its been so long since I last shared anything with you, to be precise 7 months. Last time when we met was the day before I entered into labour room. Motherhood is what has kept me away from you for so long, I have so many things to share.",title:"Letter",date:"19.10.2021",active:!1},{id:5,text:"My baking skills are coming along nicely! (Every failure is a lesson, right?)",title:"Cooking",date:"19.10.2021",active:!1},{id:6,text:"Books to buy: Pride and Prejudice by Jane Austen, The Great Gatsby by F. Scott Fitzgerald, In Cold Blood by Truman Capote",title:"Books",date:"19.10.2021",active:!1}],v=o(34),w=o(11),O=function(){var e=-1,t=Object(n.useState)(j),o=Object(r.a)(t,2),i=o[0],a=o[1];return Object(n.useEffect)((function(){a(JSON.parse(window.localStorage.getItem("notes")))}),[]),Object(n.useEffect)((function(){window.localStorage.setItem("notes",JSON.stringify(i))}),[i]),Object(g.jsx)("div",{style:c.Wrapper,children:Object(g.jsxs)(v.a,{basename:"Tasks",children:[Object(g.jsxs)("header",{style:c.Header,children:[Object(g.jsx)("span",{children:"My Notes"}),Object(g.jsxs)("div",{style:c.Menu,children:[Object(g.jsx)(v.b,{to:"/"}),Object(g.jsx)(v.b,{to:"/notes",activeClassName:"activeMenu",children:"My Notes"}),Object(g.jsx)(v.b,{to:"/shared-notes",activeClassName:"activeMenu",children:"Shared Notes"})]})]}),Object(g.jsxs)(w.c,{children:[Object(g.jsx)(w.a,{path:"/shared-notes",children:Object(g.jsx)(m,{notes:i})}),Object(g.jsx)(w.a,{path:"/notes",children:Object(g.jsx)(y,{notes:i,showChosenNote:function(t,o){var n=o;document.getElementsByClassName("chosenNote")[0].value=n;for(var i=document.getElementsByTagName("li"),a=0;a<i.length;a++)i[a].style.background="inherit";i[t].style.background="#cf93b6",e=t},saveChangedNote:function(){try{var t=document.getElementsByClassName("chosenNote")[0].value,o=document.getElementsByClassName("shortDescr")[e],n=i.map((function(o){return o.id===e&&(o.text=t),o}));a(n),o.innerHTML=f(i[e].text)}catch(s){alert("Select a note to save!")}}})})]})]})})},k=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,105)).then((function(t){var o=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;o(e),n(e),i(e),a(e),s(e)}))};s.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(O,{})}),document.getElementById("root")),k()}},[[71,1,2]]]);
//# sourceMappingURL=main.83444727.chunk.js.map