(this.webpackJsonpplacement=this.webpackJsonpplacement||[]).push([[0],{79:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(0),s=a.n(n),r=a(10),i=a.n(r),l=(a(79),a(31)),o=a.n(l),j=a(41),d=a(13),b=a(12),h=a(11),p=a(125),m=a(140),u=a(139),x=a(137),O=a(129),f=a(130),g=a(141),v=a(138),k=a(57),y=a.n(k),_=a(58),P=a.n(_),F=Object(p.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function S(e){var t=e.change,a=e.hall_of_fame,n=F(),r=s.a.useState({year:"",name:"hai"}),i=Object(h.a)(r,2),l=i[0],o=i[1],j=s.a.useState({checkedA:!0}),p=Object(h.a)(j,2),k=p[0],_=p[1];return Object(c.jsxs)("div",{className:"text-center",children:[Object(c.jsxs)(u.a,{variant:"outlined",className:n.formControl,children:[Object(c.jsx)(m.a,{htmlFor:"outlined-age-native-simple",children:"Year"}),Object(c.jsxs)(x.a,{native:!0,value:l.age,onChange:function(e){var a=e.target.name;o(Object(b.a)(Object(b.a)({},l),{},Object(d.a)({},a,e.target.value))),t(a,e.target.value)},label:"Year",inputProps:{name:"year",id:"outline  d-age-native-simple"},children:[Object(c.jsx)("option",{"aria-label":"None",value:""}),Object(c.jsx)("option",{value:4,children:"Statistics"}),Object(c.jsx)("option",{value:1,children:"First Year"}),Object(c.jsx)("option",{value:2,children:"Second Year"}),Object(c.jsx)("option",{value:3,children:"Third Year"}),Object(c.jsx)("option",{value:null,children:"All"})]})]}),Object(c.jsxs)(O.a,{row:!0,children:[Object(c.jsx)("div",{className:"ml-auto",children:Object(c.jsx)(f.a,{control:Object(c.jsx)(g.a,{checked:k.checkedA,onChange:function(e){_(Object(b.a)(Object(b.a)({},l),{},Object(d.a)({},e.target.name,e.target.checked))),"checkedA"===e.target.name?t("Increasing",!k.checkedA):t("statsyear",k.checkedB?3:2)},name:"checkedA"}),label:"Sort Increasingly"})}),Object(c.jsx)(v.a,{"aria-label":"delete",className:n.margin,size:"small",onClick:function(){t("HOF",!1)},children:a?Object(c.jsx)(y.a,{fontSize:"inherit"}):Object(c.jsx)(P.a,{fontSize:"inherit"})})]})]})}var C=a(4),w=a(131),I=a(132),N=a(133),E=a(134),A=a(135),T=a(136),B=a(142),L=a(38),M=a(49),H=a(61),Y=a.n(H),z=a(62),D=a.n(z),J=a(60),W=a.n(J),q=a(59),Q=a.p+"static/media/heart.c1fa4ec3.svg",G=Object(p.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:M.a[500]}}}));function K(e){var t=e.name,a=e.branch,r=e.company,i=e.profile,l=e.Package,b=e.date,p=G(),m=s.a.useState(!1),u=Object(h.a)(m,2),x=u[0],O=u[1],f=s.a.useState(),g=Object(h.a)(f,2),k=g[0],y=g[1],_=Object(n.useState)(!1),P=Object(h.a)(_,2),F=P[0],S=P[1];return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://source.unsplash.com/1600x900/?coding,".concat(r.replace(/ /g,"")));case 2:t=e.sent,y(t.url);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsxs)(w.a,{className:p.root,children:[Object(c.jsx)(I.a,{avatar:Object(c.jsx)(B.a,{"aria-label":"name",className:p.avatar,children:t[0]}),action:Object(c.jsx)(v.a,{"aria-label":"settings",children:Object(c.jsx)(W.a,{})}),title:t,subheader:b}),Object(c.jsx)(N.a,{className:p.media,image:k,title:r}),Object(c.jsx)(E.a,{children:Object(c.jsxs)(L.a,{variant:"body2",color:"textSecondary",component:"p",children:[l," Lacs"]})}),Object(c.jsxs)(A.a,{disableSpacing:!0,children:[Object(c.jsx)(v.a,{"aria-label":"add to favorites",children:Object(c.jsx)("div",{onClick:function(){S(!F)},children:Object(c.jsx)(q.SpriteAnimator,{width:36,height:36,sprite:Q,shouldAnimate:F,fps:60,startFrame:0,stopLastFrame:!0,reset:!F})})}),Object(c.jsx)("div",{class:"fb-share-button","data-href":"https://developers.facebook.com/docs/plugins/","data-layout":"button_count","data-size":"large",children:Object(c.jsx)("a",{target:"_blank",href:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&src=sdkpreparse",class:"fb-xfbml-parse-ignore",children:Object(c.jsx)(Y.a,{})})}),Object(c.jsx)(v.a,{className:Object(C.a)(p.expand,Object(d.a)({},p.expandOpen,x)),onClick:function(){O(!x)},"aria-expanded":x,"aria-label":"show more",children:Object(c.jsx)(D.a,{})})]}),Object(c.jsx)(T.a,{in:x,timeout:"auto",unmountOnExit:!0,children:Object(c.jsxs)(E.a,{children:[Object(c.jsx)(L.a,{paragraph:!0,children:"Details:"}),Object(c.jsxs)(L.a,{paragraph:!0,children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h6",{children:"Student Name"}),t]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h6",{children:"Student Branch"}),a]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h6",{children:"Company"}),r]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h6",{children:"Package offered"}),l]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h6",{children:"Job Profile"}),i]})]})]})})]})}var R=function(e){var t=e.info,a="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1110&&h=470&q=80";return Object(c.jsx)("div",{className:"container",children:t.length?Object(c.jsxs)("div",{id:"carouselExampleCaptions",class:"carousel slide","data-ride":"carousel",children:[Object(c.jsxs)("ol",{class:"carousel-indicators",children:[Object(c.jsx)("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"0",class:"active"}),Object(c.jsx)("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"1"}),Object(c.jsx)("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"2"})]}),Object(c.jsxs)("div",{class:"carousel-inner",children:[Object(c.jsxs)("div",{class:"carousel-item active",children:[Object(c.jsx)("img",{src:a,alt:"new"}),Object(c.jsxs)("div",{class:"carousel-caption d-none d-md-block",children:[Object(c.jsx)("h5",{children:t[0].students[0].student_name}),Object(c.jsx)("p",{children:t[0].company_name})]})]}),Object(c.jsxs)("div",{class:"carousel-item",children:[Object(c.jsx)("img",{src:a,alt:"new"}),Object(c.jsxs)("div",{class:"carousel-caption d-none d-md-block",children:[Object(c.jsx)("h5",{children:t[1].students[0].student_name}),Object(c.jsx)("p",{children:t[1].company_name})]})]}),Object(c.jsxs)("div",{class:"carousel-item",children:[Object(c.jsx)("img",{src:a,alt:"new"}),Object(c.jsxs)("div",{class:"carousel-caption d-none d-md-block",children:[Object(c.jsx)("h5",{children:t[2].students[0].student_name}),Object(c.jsx)("p",{children:t[2].company_name})]})]})]}),Object(c.jsxs)("a",{class:"carousel-control-prev",href:"#carouselExampleCaptions",role:"button","data-slide":"prev",children:[Object(c.jsx)("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),Object(c.jsx)("span",{class:"sr-only",children:"Previous"})]}),Object(c.jsxs)("a",{class:"carousel-control-next",href:"#carouselExampleCaptions",role:"button","data-slide":"next",children:[Object(c.jsx)("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),Object(c.jsx)("span",{class:"sr-only",children:"Next"})]})]}):Object(c.jsx)("div",{class:"text-center",children:Object(c.jsx)("div",{class:"spinner-border",role:"status",children:Object(c.jsx)("span",{class:"sr-only",children:"Loading..."})})})})};var U=function(e){var t=e.Placement;return Object(c.jsx)("div",{children:Object(c.jsxs)("table",{class:"table  table-striped",children:[Object(c.jsx)("thead",{class:"thead-dark",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"#"}),Object(c.jsx)("th",{scope:"col",children:"Branch"}),Object(c.jsx)("th",{scope:"col",children:"Total Placed"}),Object(c.jsx)("th",{scope:"col",children:"Average Package"}),Object(c.jsx)("th",{scope:"col",children:"Maximum Package"})]})}),Object(c.jsx)("tbody",{children:Object.keys(t).map((function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row",children:"#"}),Object(c.jsx)("td",{children:e}),Object(c.jsx)("td",{children:t[e].total}),Object(c.jsx)("td",{children:(t[e].package/t[e].total).toFixed(2)}),Object(c.jsx)("td",{children:t[e].maximum})]})})}))})]})})};function V(e){var t=e.Placement,a=e.batch;return Object(c.jsx)("div",{children:Object(c.jsx)("table",{class:"table  table-striped",children:Object(c.jsxs)("thead",{class:"thead-dark",children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"#"}),Object(c.jsx)("th",{scope:"col",children:"Name"}),Object(c.jsx)("th",{scope:"col",children:"Branch"}),Object(c.jsxs)("th",{scope:"col",children:["Package (",2021==a?"Lacs":"Thousand",")"]}),Object(c.jsx)("th",{scope:"col",children:"Company"})]}),t.map((function(e){if(e.passout_batch==a){var t=e.students[0].student_name,n=e.students[0].department,s=e.company_name,r=2022==a?e.intern_stipend:e.package;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{scope:"row",children:"#"}),Object(c.jsx)("td",{children:t}),Object(c.jsx)("td",{children:n}),Object(c.jsx)("td",{children:r}),Object(c.jsx)("td",{children:s})]})})}}))]})})})}var X=a(65),Z=a(63);var $=function(e){var t=e.Placement,a=e.total_student_placement,n=function(){var e=[];return Object.keys(t).map((function(c){e=[[c,100*(parseFloat(t[c].total)/parseFloat(a)).toFixed(2)]].concat(e)})),e}();return n=[["Branch","Placed"]].concat(Object(X.a)(n)),Object(c.jsxs)("div",{children:[Object(c.jsx)("h6",{children:"Pie Tell It All!"}),Object(c.jsx)(Z.a,{width:"1000px",height:"500px",chartType:"PieChart",loader:Object(c.jsx)("div",{children:"Loading Chart"}),data:n,options:{title:"Percentage Students Placed"},rootProps:{"data-testid":"1"}})]})};var ee=function(e){var t=e.info,a=s.a.useState({gilad:!1}),n=Object(h.a)(a,2),r=n[0],i=n[1],l=[],o=[],j={total:0,package:0,maximum:0},p={total:0,package:0,maximum:0},m=0,u=0;return t.forEach((function(e){if("2021"===e.passout_batch){var t=e.package,a=e.students[0].department;j.total+=1,j.package+=parseInt(t,10),j.maximum=Math.max(j.maximum,parseInt(t,10)),l[a]||(l[a]={total:0,package:0,maximum:0}),l[a].total+=1,l[a].package+=parseInt(t,10),l[a].maximum=Math.max(parseInt(t,10),parseInt(l[a].maximum,10)),m+=1}else{var c=e.intern_stipend,n=e.students[0].department;p.total+=1,p.package+=parseInt(c,10),p.maximum=Math.max(p.maximum,parseInt(c,10)),o[n]||(o[n]={total:0,package:0,maximum:0}),o[n].total+=1,o[n].package+=parseInt(c,10),o[n].maximum=Math.max(parseInt(c,10),parseInt(o[n].maximum,10)),u+=1}})),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f.a,{control:Object(c.jsx)(g.a,{checked:r.gilad,onChange:function(e){i(Object(b.a)(Object(b.a)({},r),{},Object(d.a)({},e.target.name,e.target.checked)))},name:"gilad"}),label:"Second Year"}),r.gilad?Object(c.jsx)(U,{Placement:o}):Object(c.jsx)(U,{Placement:l}),r.gilad?Object(c.jsx)($,{Placement:o,total_student_placement:u}):Object(c.jsx)($,{Placement:l,total_student_placement:m}),r.gilad?Object(c.jsx)(V,{Placement:t,batch:2022}):Object(c.jsx)(V,{Placement:t,batch:2021})]})};var te=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)({year:"0",Increasing:!1,HOF:!0}),i=Object(h.a)(r,2),l=i[0],p=i[1],m=Object(n.useState)(!1),u=Object(h.a)(m,2),x=u[0];return u[1],Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cors-anywhere.herokuapp.com/http://placements.mnit.ac.in/api/placements/getAll",{method:"POST"});case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,s(a.placements),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{style:{textAlign:"center",fontFamily:"Dancing Script"},children:"E-Placement Portal"}),Object(c.jsx)(S,{className:"container",change:function(e,t){p("HOF"===e?function(t){var a=!t.HOF;return Object(b.a)(Object(b.a)({},t),{},Object(d.a)({},e,a))}:function(a){return Object(b.a)(Object(b.a)({},a),{},Object(d.a)({},e,t))}),s("Increasing"===e&&!0===t?function(e){var t=e;return t.sort((function(e,t){return("Internship"===e.recruitment?parseFloat(e.intern_stipend):parseFloat(e.package))-("Internship"===e.recruitment?parseFloat(t.intern_stipend):parseFloat(t.package))})),t.reverse(),t}:function(e){var t=e;return t.sort((function(){return Math.random()-.5})),t})},hall_of_fame:l.HOF,subtask:x}),l.HOF?Object(c.jsx)(R,{info:a}):Object(c.jsx)("div",{}),Object(c.jsx)("br",{}),Object(c.jsx)("hr",{}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{className:"row",children:"0"===l.year?a.map((function(e){var t=e.students[0].student_name,a=e.students[0].department,n=e.company_name,s=e.job_profile,r=0;r="Placement"===e.recruitment?e.package:e.intern_stipend;var i=e.students.department,l=e.recruitment_date;return Object(c.jsx)("div",{className:"col-sm-3",children:Object(c.jsx)(K,{name:t,branch:a,company:n,profile:s,Package:r,department:i,date:l})})})):"4"===l.year?Object(c.jsx)("div",{className:"container",children:Object(c.jsx)(ee,{info:a})}):"2"===l.year?a.map((function(e){if("2022"===e.passout_batch){var t=e.students[0].student_name,a=e.students[0].department,n=e.company_name,s=e.job_profile,r=e.intern_stipend,i=e.students.department,l=e.recruitment_date;return Object(c.jsx)("div",{className:"col-sm-3",children:Object(c.jsx)(K,{name:t,branch:a,company:n,profile:s,Package:r,department:i,date:l})})}})):"3"===l.year?a.map((function(e){if("2021"===e.passout_batch){var t=e.students[0].student_name,a=e.students[0].department,n=e.company_name,s=e.job_profile,r=e.package,i=e.students.department,l=e.recruitment_date;return Object(c.jsx)("div",{className:"col-sm-3",children:Object(c.jsx)(K,{name:t,branch:a,company:n,profile:s,Package:r,department:i,date:l})})}})):void 0})]})},ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,143)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(te,{})}),document.getElementById("root")),ae()}},[[86,1,2]]]);
//# sourceMappingURL=main.c9b0343e.chunk.js.map