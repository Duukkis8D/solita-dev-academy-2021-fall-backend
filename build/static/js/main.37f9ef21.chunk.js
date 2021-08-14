(this["webpackJsonpsolita-dev-academy-2021-fall-frontend"]=this["webpackJsonpsolita-dev-academy-2021-fall-frontend"]||[]).push([[0],{38:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(14),a=c.n(i),r=c(3),s=c(4),o=c.n(s),j="/api/orders",d=function(){return o.a.get("".concat(j,"/firstOrderDate")).then((function(e){return e.data}))},h=function(){return o.a.get("".concat(j,"/latestOrderDate")).then((function(e){return e.data}))},b=function(e){return o.a.get("".concat(j,"/amountOfVaccines/").concat(e)).then((function(e){return e.data}))},u=function(e){return o.a.get("".concat("/api/vaccinations","/amountOfVaccinationsDone/").concat(e)).then((function(e){return e.data}))},l=c.p+"static/media/time_machine.b4c7c82f.jpg",m=c(0),O=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(""),s=Object(r.a)(a,2),o=s[0],j=s[1],O=Object(n.useState)(new Date),f=Object(r.a)(O,2),p=f[0],x=f[1],v=Object(n.useState)(""),g=Object(r.a)(v,2),w=g[0],y=g[1],S=Object(n.useState)(""),k=Object(r.a)(S,2),P=k[0],D=k[1];Object(n.useEffect)((function(){d().then((function(e){y(e[0].firstOrder)})),h().then((function(e){D(e[0].latestOrder)}))}),[]);var C=Object(n.useState)(0),T=Object(r.a)(C,2),A=T[0],E=T[1],F=Object(n.useState)(0),V=Object(r.a)(F,2),I=V[0],L=V[1];Object(n.useEffect)((function(){""!==p&&(u(p).then((function(e){E(e[0].count)})),b(p).then((function(e){L(e[0].totalNumberOfVaccines)})))}),[p]);var q=Object(n.useState)(0),J=Object(r.a)(q,2),_=J[0],B=J[1];Object(n.useEffect)((function(){B(I-A)}),[A,I]);return Object(m.jsxs)("div",{id:"appContainer",children:[Object(m.jsx)("h1",{children:"THL vaccine orders and vaccinations"}),"undefined"!==typeof w&&""!==w&&"undefined"!==typeof P&&""!==P?Object(m.jsxs)("div",{id:"basicStatistics",children:[Object(m.jsxs)("p",{children:["Date of first vaccination order: ",Object(m.jsx)("span",{children:w})]}),Object(m.jsxs)("p",{children:["Date of latest vaccination order: ",Object(m.jsx)("span",{children:P})]})]}):Object(m.jsx)("div",{id:"basicStatistics",children:Object(m.jsx)("p",{children:"Loading. Please wait."})}),Object(m.jsx)("h2",{children:"Up to this date"}),Object(m.jsx)("p",{children:Object(m.jsx)("span",{children:p.toString()})}),"undefined"!==typeof A&&0!==A&&"undefined"!==typeof I&&0!==I?Object(m.jsxs)("div",{id:"vaccineInformation",children:[Object(m.jsxs)("p",{children:["Amount of vaccinations done: ",Object(m.jsx)("span",{children:A})]}),Object(m.jsxs)("p",{children:["Amount of vaccines: ",Object(m.jsx)("span",{children:I})]}),Object(m.jsxs)("p",{children:["Amount of vaccines left to use: ",Object(m.jsx)("span",{children:_})," (Some of them might be expired!)"]})]}):Object(m.jsx)("div",{id:"vaccineInformation",children:Object(m.jsx)("p",{children:"Loading. Please wait."})}),Object(m.jsx)("h2",{children:"Filter results by using the following time machine"}),Object(m.jsx)("img",{src:l,alt:"funny time machine",width:"300px"}),Object(m.jsx)("form",{id:"dateTimePickerForm",onSubmit:function(e){e.preventDefault();var t=e.target[0].value,c=e.target[1].value;x(t.concat("T").concat(c).concat("Z"))},children:Object(m.jsxs)("div",{id:"dateTimePickerContainer",children:[Object(m.jsx)("label",{htmlFor:"datePicker",children:"Choose date"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"date",id:"datePicker",name:"datePicker",value:c,onChange:function(e){i(e.target.value)},required:!0}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"timePicker",children:"Choose time"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"time",step:"1",id:"timePicker",name:"timePicker",value:o,onChange:function(e){j(e.target.value)},required:!0}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{type:"submit",children:"Send"})]})}),Object(m.jsxs)("p",{children:["Photo ",Object(m.jsx)("a",{href:"https://www.dreamstime.com/royalty-free-stock-image-time-machine-humour-concept-image17334246",children:"17334246"})," / ",Object(m.jsx)("a",{href:"https://www.dreamstime.com/photos-images/time-machine.html",children:"Time Machine"})," \xa9 ",Object(m.jsx)("a",{href:"https://www.dreamstime.com/vilax_info",children:"Aleksandr Volkov"})," | ",Object(m.jsx)("a",{href:"https://www.dreamstime.com/photos-images/time-machine.html",children:"Dreamstime.com"})]})]})};a.a.render(Object(m.jsx)(O,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.37f9ef21.chunk.js.map