(this["webpackJsonpsolita-dev-academy-2021-fall-frontend"]=this["webpackJsonpsolita-dev-academy-2021-fall-frontend"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(14),c=n.n(i),s=n(2),r=n(0),o=function(e){var t=e.dateOfFirstOrder,n=e.dateOfLatestOrder,a=e.dateOfFirstVaccination,i=e.dateOfLatestVaccination;return"undefined"!==typeof t&&""!==t&&"undefined"!==typeof n&&""!==n&&"undefined"!==typeof a&&""!==a&&"undefined"!==typeof i&&""!==i?Object(r.jsxs)("div",{id:"basicStatistics",children:[Object(r.jsxs)("p",{children:["Date of first vaccine order: ",Object(r.jsx)("span",{children:t})]}),Object(r.jsxs)("p",{children:["Date of latest vaccine order: ",Object(r.jsx)("span",{children:n})]}),Object(r.jsxs)("p",{children:["Date of first vaccination: ",Object(r.jsx)("span",{children:a})]}),Object(r.jsxs)("p",{children:["Date of latest vaccination: ",Object(r.jsx)("span",{children:i})]})]}):Object(r.jsx)("div",{id:"basicStatistics",children:Object(r.jsx)("p",{children:"Loading. Please wait."})})},d=function(e){var t=e.amountOfOrders,n=e.amountOfVaccines,a=e.amountOfVaccinationsDone,i=e.vaccinesLeftToUse;return"undefined"!==typeof t&&""!==t&&"undefined"!==typeof a&&""!==a&&"undefined"!==typeof n&&""!==n?Object(r.jsxs)("div",{id:"statisticsBasedOnUserInput",children:[Object(r.jsxs)("p",{children:["Amount of orders arrived: ",Object(r.jsx)("span",{children:t})]}),Object(r.jsxs)("p",{children:["Amount of vaccines: ",Object(r.jsx)("span",{children:n})]}),Object(r.jsxs)("p",{children:["Amount of vaccinations done: ",Object(r.jsx)("span",{children:a})]}),Object(r.jsxs)("p",{children:["Amount of vaccines left to use: ",Object(r.jsx)("span",{children:i}),Object(r.jsxs)("span",{id:"expirationNote",children:[" (Some of them might be expired! ",Object(r.jsx)("span",{role:"img","aria-label":"wastebasket",children:"\ud83d\uddd1\ufe0f"}),")"]})]})]}):Object(r.jsx)("div",{id:"statisticsBasedOnUserInput",children:Object(r.jsx)("p",{children:"Loading. Please wait."})})},j=function(e){var t=e.handleDateTimeSubmit,n=e.date,a=e.handleDateChange,i=e.time,c=e.handleTimeChange,s=e.minDateAndTime,o=e.maxDateAndTime,d=function(e){return e.getUTCFullYear()+"-"+("0"+(e.getUTCMonth()+1)).slice(-2)+"-"+("0"+e.getUTCDate()).slice(-2)};return"undefined"!==typeof s&&""!==s&&"undefined"!==typeof o&&""!==o?Object(r.jsx)("div",{id:"dateTimePickerContainer",children:Object(r.jsxs)("form",{id:"dateTimePickerForm",onSubmit:t,children:[Object(r.jsx)("label",{htmlFor:"datePicker",children:"Choose date"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"date",id:"datePicker",name:"datePicker",value:n,onChange:a,required:!0,min:d(s),max:d(o)}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"timePicker",children:"Choose time"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"time",step:"1",id:"timePicker",name:"timePicker",value:i,onChange:c,required:!0}),Object(r.jsx)("br",{}),Object(r.jsxs)("button",{type:"submit",children:["Send ",Object(r.jsx)("span",{role:"img","aria-label":"letter",children:"\u2709\ufe0f"})]})]})}):Object(r.jsx)("div",{id:"dateTimePickerContainer",children:Object(r.jsx)("p",{children:"Loading. Please wait."})})},u=n(4),l=n.n(u),f="/api/orders",O=function(){return l.a.get("".concat(f,"/firstOrderDate")).then((function(e){return e.data}))},h=function(){return l.a.get("".concat(f,"/latestOrderDate")).then((function(e){return e.data}))},b=function(e){return l.a.get("".concat(f,"/amountOfOrders/").concat(e)).then((function(e){return e.data}))},m=function(e){return l.a.get("".concat(f,"/amountOfVaccines/").concat(e)).then((function(e){return e.data}))},p="/api/vaccinations",x=function(){return l.a.get("".concat(p,"/firstVaccinationDate")).then((function(e){return e.data}))},g=function(){return l.a.get("".concat(p,"/latestVaccinationDate")).then((function(e){return e.data}))},v=function(e){return l.a.get("".concat(p,"/amountOfVaccinationsDone/").concat(e)).then((function(e){return e.data}))},D=n.p+"static/media/time_machine.b4c7c82f.jpg",w=(n(38),function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(""),u=Object(s.a)(c,2),l=u[0],f=u[1],p=Object(a.useState)(new Date),w=Object(s.a)(p,2),T=w[0],y=w[1],C=function(e){var t=Object.keys(e[0])[0];return e[0][t]},S=function(e){return e.getUTCFullYear()+"-"+("0"+(e.getUTCMonth()+1)).slice(-2)+"-"+("0"+e.getUTCDate()).slice(-2)+" "+("0"+e.getUTCHours()).slice(-2)+":"+("0"+e.getUTCMinutes()).slice(-2)+":"+("0"+e.getUTCSeconds()).slice(-2)},k=function(e){return S(new Date(e))},U=Object(a.useState)(""),P=Object(s.a)(U,2),V=P[0],A=P[1],L=Object(a.useState)(""),F=Object(s.a)(L,2),M=F[0],E=F[1],I=Object(a.useState)(""),B=Object(s.a)(I,2),H=B[0],q=B[1],G=Object(a.useState)(""),J=Object(s.a)(G,2),Y=J[0],_=J[1];Object(a.useEffect)((function(){O().then((function(e){A(k(C(e)))})),h().then((function(e){E(k(C(e)))})),x().then((function(e){q(k(C(e)))})),g().then((function(e){_(k(C(e)))}))}),[]);var N=Object(a.useState)(""),Z=Object(s.a)(N,2),z=Z[0],K=Z[1],Q=Object(a.useState)(""),R=Object(s.a)(Q,2),W=R[0],X=R[1];Object(a.useEffect)((function(){"undefined"!==typeof V&&""!==V&&"undefined"!==typeof M&&""!==M&&"undefined"!==typeof H&&""!==H&&"undefined"!==typeof Y&&""!==Y&&(new Date(V)<new Date(H)?K(new Date(V)):K(new Date(H)),new Date(M)<new Date(Y)?X(new Date(Y)):X(new Date(M)))}),[V,M,H,Y]);var $=Object(a.useState)(""),ee=Object(s.a)($,2),te=ee[0],ne=ee[1],ae=Object(a.useState)(""),ie=Object(s.a)(ae,2),ce=ie[0],se=ie[1],re=Object(a.useState)(""),oe=Object(s.a)(re,2),de=oe[0],je=oe[1];Object(a.useEffect)((function(){""!==T&&(b(T).then((function(e){ne(C(e))})),v(T).then((function(e){se(C(e))})),m(T).then((function(e){je(C(e))})))}),[T]);var ue=Object(a.useState)(""),le=Object(s.a)(ue,2),fe=le[0],Oe=le[1];return Object(a.useEffect)((function(){Oe(de-ce)}),[ce,de]),Object(r.jsxs)("div",{id:"appContainer",children:[Object(r.jsxs)("h1",{children:["THL vaccine orders and vaccinations ",Object(r.jsx)("span",{role:"img","aria-label":"vaccination",children:"\ud83d\udc89"})]}),Object(r.jsxs)("p",{id:"allDatesUTC",children:[Object(r.jsx)("span",{role:"img","aria-label":"info",children:"\u2139\ufe0f"})," All dates are UTC (Coordinated Universal Time)"]}),Object(r.jsx)(o,{dateOfFirstOrder:V,dateOfLatestOrder:M,dateOfFirstVaccination:H,dateOfLatestVaccination:Y}),Object(r.jsx)("h2",{id:"timeMachineHeadline",children:"Go back in time section"}),Object(r.jsxs)("p",{id:"timeMachineDescription",children:[Object(r.jsx)("span",{role:"img","aria-label":"calendar",children:"\ud83d\udcc5"})," Give a date and time to this time machine to see the history"]}),Object(r.jsx)("img",{id:"timeMachineImg",src:D,alt:"funny time machine",width:"245px"}),Object(r.jsx)(j,{handleDateTimeSubmit:function(e){e.preventDefault();var t=e.target[0].value,n=e.target[1].value;y(new Date(t.concat("T").concat(n).concat("Z")))},date:n,handleDateChange:function(e){i(e.target.value)},time:l,handleTimeChange:function(e){f(e.target.value)},minDateAndTime:z,maxDateAndTime:W}),Object(r.jsx)("p",{id:"givenDateDescription",children:"Data based on the following date:"}),Object(r.jsx)("p",{id:"givenDate",children:S(T)}),Object(r.jsx)(d,{amountOfOrders:te,amountOfVaccines:de,amountOfVaccinationsDone:ce,vaccinesLeftToUse:fe}),Object(r.jsxs)("p",{id:"photoInfo",children:["Photo ",Object(r.jsx)("a",{href:"https://www.dreamstime.com/royalty-free-stock-image-time-machine-humour-concept-image17334246",children:"17334246"})," / ",Object(r.jsx)("a",{href:"https://www.dreamstime.com/photos-images/time-machine.html",children:"Time Machine"})," \xa9 ",Object(r.jsx)("a",{href:"https://www.dreamstime.com/vilax_info",children:"Aleksandr Volkov"})," | ",Object(r.jsx)("a",{href:"https://www.dreamstime.com/photos-images/time-machine.html",children:"Dreamstime.com"})]})]})});c.a.render(Object(r.jsx)(w,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.d0cf378f.chunk.js.map