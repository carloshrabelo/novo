(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7cJJ":function(e){e.exports=JSON.parse('["Continuous delivery","SCRUM","Kanban","Agile Methodology","SOLID","DRY","TDD","BDD","Functional programming","Web Standards","Atomic Design","Mobile first"]')},Q4pm:function(e){e.exports=JSON.parse('[{"company":"Programming in HTML5 with JavaScript and CSS3 Microsoft","date":"2013","about":"Microsoft Certification, Licença 480"}]')},RXBc:function(e,a,t){"use strict";t.r(a);t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi");var n=t("q1tI"),o=t.n(n),r=t("9Koi"),i=t("vOnD"),s=t("ma3e"),l=t("ibEc");t("pJf4"),t("HQhv");function c(){var e=function(e,a){a||(a=e.slice(0));return e.raw=a,e}(["\n    float: none;\n    display: flex;\n    > span{\n      margin-left: 0.5rem;\n      order:2\n    }\n  "]);return c=function(){return e},e}var d=i.d.span.withConfig({displayName:"FloatIcon__Float",componentId:"sc-1hpklxu-0"})(["float:right;height:0.9rem;",""],l.a.lessThan("small")(c())),m=Object(i.d)(s.b).withConfig({displayName:"FloatIcon__Icon",componentId:"sc-1hpklxu-1"})(["color:",";"],(function(e){return e.theme.colors.primary})),u=function(e){var a=e.className,t=e.children;return o.a.createElement(d,{className:a},o.a.createElement("span",null,t," "),o.a.createElement(m,null))},p=Object(i.d)(u).withConfig({displayName:"Period__Capitalize",componentId:"sc-1m68n2h-0"})(["text-transform:capitalize;"]),g=function(e){var a=e.className,t=e.dateShort,n=e.date,i=Object(r.a)(),s=i.i18n,l=i.t,c=function(e,a){return function(t){var n=new Intl.DateTimeFormat(e,{year:"numeric",month:"long"}).format(new Date(t)).split(" ");return a?n[n.length-1]:[n[0],n[n.length-1]].join(" ")}}(s.language,t),d=Array.isArray(n),m=d?n:[n,""],u=m[0],g=m[1],f=c(u),h=g?c(g):l("current");return o.a.createElement(p,{className:a},f,d&&" - "+h)},f=(t("E5k/"),i.d.div.withConfig({displayName:"MyBlock__Block",componentId:"ujv16g-0"})(['position:"relative";'])),h=function(e){var a=e.role,t=e.company,n=e.date,r=e.dateShort,i=e.description,s=e.about;return o.a.createElement(f,null,a&&o.a.createElement("h3",null,a),t&&o.a.createElement("strong",null,t),n&&o.a.createElement(g,{date:n,dateShort:r},n),s&&o.a.createElement("div",null,s),i&&o.a.createElement("ul",null,i.map((function(e,a){return o.a.createElement("li",{key:a},e)}))))};h.defaultProps={dateShort:!1,description:[]};var v=h,b=i.d.section.withConfig({displayName:"Section__Div",componentId:"kokhd7-0"})(["padding:1rem 0;&:not(:first-child){border-top:1px dashed rgba(0,0,0,0.2);}"]),E=i.d.h1.withConfig({displayName:"Section__Title",componentId:"kokhd7-1"})(["text-transform:uppercase;"]);v.defaultProps={data:[]};var y=function(e){var a=e.title,t=e.children,n=e.dateShort,r=e.data;return o.a.createElement(b,null,o.a.createElement(E,null,a),r&&r.map((function(e,a){return o.a.createElement(v,Object.assign({key:a,dateShort:n},e))})),t)},S=function(e){var a,n=Object(r.a)().i18n.language.toLocaleLowerCase(),o=t("kyAT")("./"+e+".json"),i=o;try{if("pt-br"===n||void 0===n)throw new Error;a=t("kyAT")("./"+e+"."+n+".json")}catch(s){}return a&&(i=o.map((function(e,t){return"string"==typeof e?a[t]:Object.assign({},e,a[t])}))),i},w=function(){var e=Object(r.a)().t,a=S("education");return o.a.createElement(y,{title:e("formation")},a.map((function(e,a){var t=e.institution,n=e.date,r=e.courses;return o.a.createElement("div",{key:a},n&&o.a.createElement(g,{date:n,dateShort:!0}),o.a.createElement("h3",null,t),r&&o.a.createElement("ul",null,r.map((function(e,a){return o.a.createElement("li",{key:a},e.name," ",o.a.createElement(g,{date:e.date,dateShort:!0}))}))))})))},x=t("vrFN");var I=i.d.span.withConfig({displayName:"Badge__Div",componentId:"sc-1mryb9d-0"})(["display:inline-block;padding:0.25em 0.4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:0.25rem;flex:1;margin:0 0.25rem 0.25rem;color:#fff;background-color:",";@media print{&{-webkit-print-color-adjust:exact;box-shadow:0 0px 10px "," inset;}}"],(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary})),j=function(e){var a=e.children,t=e.className,n=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["children","className"]);return o.a.createElement(I,Object.assign({className:t},n),a)};var O=i.d.div.withConfig({displayName:"flex__Div",componentId:"sc-4z4rip-0"})(["display:flex;flex-wrap:wrap;"]),N=function(e){var a=e.className,t=e.children,n=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["className","children"]);return o.a.createElement(O,Object.assign({className:a},n),t)};var C=Object(i.c)(["background-color:#eee;border-radius:2px;box-shadow:0 2px 5px rgba(0,0,0,0.25) inset;@media print{&{-webkit-print-color-adjust:exact;box-shadow:0 0px 40px #ccc inset;}}"]),D=i.d.progress.withConfig({displayName:"Progress",componentId:"alir5i-0"})(["&[value]{"," appearance:none;border:none;color:var(--color-primary);width:100%;&::-moz-progress-bar{background:var(--color-primary);@media print{&{-webkit-print-color-adjust:exact;box-shadow:0 0px 40px var(--color-primary) inset;}}}&::-webkit-progress{&-value{transition:width 2.5s ease-in-out;background:var(--color-primary);@media print{&{-webkit-print-color-adjust:exact;box-shadow:0 0px 40px var(--color-primary) inset;}}}&-bar{","}}}"],C,C),k=function(e){var a=e.className,t=e.children,r=e.value,i=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["className","children","value"]),s=Object(n.useState)(0),l=s[0],c=s[1];return setTimeout((function(){return c(r)})),o.a.createElement(D,Object.assign({value:l,className:a},i),t)},J=t("W2cw");var A=function(e,a,t){void 0===a&&(a="medium"),void 0===t&&(t="greaterThan");var n="string"==typeof e?Object(i.c)([e]):e;return Object(i.c)([""," @media print{","}"],l.a[t](a)(n),n)},_=i.d.span.withConfig({displayName:"pages__Float",componentId:"sc-4r07yd-0"})(["float:right;"]),P=i.d.div.withConfig({displayName:"pages__Container1",componentId:"sc-4r07yd-1"})(["padding:0 ",";",""],(function(e){return e.theme.padding}),A(Object(i.c)(["width:60%;"]))),T=i.d.div.withConfig({displayName:"pages__Container2",componentId:"sc-4r07yd-2"})(["padding:0 ",";",""],(function(e){return e.theme.padding}),A(Object(i.c)(["width:40%;"]))),B=Date.now()-Date.UTC(1992,10,24,3,0,0),M=new Date(B),z=Math.abs(M.getUTCFullYear()-1970),R=i.d.h1.withConfig({displayName:"pages__FullName",componentId:"sc-4r07yd-3"})(["text-align:center;"]),W=i.d.div.withConfig({displayName:"pages__Contato",componentId:"sc-4r07yd-4"})(["display:flex;flex:1;"]),L=i.d.a.withConfig({displayName:"pages__Link",componentId:"sc-4r07yd-5"})(["color:var(--color-text);text-decoration:none;&:hover{color:var(--color-primary);}"]),G=i.d.div.withConfig({displayName:"pages__ContatoWrapper",componentId:"sc-4r07yd-6"})(["> div{margin:0.25rem 0;}",""],A(Object(i.c)(['display:flex;justify-content:"space-between";']))),F=Object(J.a)(Object(i.d)((function(e){var a=e.t,t=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["t"]);return o.a.createElement("div",t,o.a.createElement(R,null,"Carlos Henrique Rabelo de Oliveira"),o.a.createElement("p",null,o.a.createElement(s.e,null)," ",a("about.nationality"),", ",a("about.relationship"),", ",z," ",a("about.years")),o.a.createElement("p",null,o.a.createElement(s.j,null)," R. Cláudio Soares, 101 - Pinheiros, São Paulo - SP"),o.a.createElement(G,null,o.a.createElement(W,null,o.a.createElement(L,{target:"_blank",href:"https://api.whatsapp.com/send?phone=5561982770330"},o.a.createElement(s.l,null)," +55 (61) 9 8277-0330")),o.a.createElement(W,null,o.a.createElement(L,{href:"mailto:carloshrabelo@hotmail.com"},o.a.createElement(s.a,null)," carloshrabelo@hotmail.com")),o.a.createElement(W,null,o.a.createElement(L,{target:"_blank",href:"https://www.linkedin.com/in/carloshrabelo/"},o.a.createElement(s.h,null)," /carloshrabelo"))))})).withConfig({displayName:"pages__Header",componentId:"sc-4r07yd-7"})(["padding:1rem;border-bottom:1px dashed rgba(0,0,0,0.2);p{margin:0.25rem 0;}svg{fill:",";}@media print{h1{margin:0.5rem 0;}}"],(function(e){return e.theme.colors.primary})));a.default=function(){var e=Object(r.a)().t,a=S("experience"),t=S("projects"),n=S("certificates"),i=S("technologies"),s=S("knowledges");return o.a.createElement(o.a.Fragment,null,o.a.createElement(x.a,{title:e("curriculum")}),o.a.createElement(F,null),o.a.createElement(N,null,o.a.createElement(P,null,o.a.createElement(y,{title:e("professional experience"),data:a}),o.a.createElement(y,{title:e("certificates"),dateShort:!0,data:n}),o.a.createElement(y,{title:e("technologies")},o.a.createElement(N,null,i.map((function(e,a){return o.a.createElement(j,{key:a},e)})))),o.a.createElement(y,{title:e("languages")},o.a.createElement(N,null,s.map((function(e,a){return o.a.createElement(j,{key:a},e)}))))),o.a.createElement(T,null,o.a.createElement(w,null),o.a.createElement(y,{title:e("languages")},o.a.createElement("div",null,o.a.createElement("p",null,e("portuguese"),o.a.createElement(_,null,e("native")))),o.a.createElement(k,{value:"100",max:"100"}),o.a.createElement("div",null,o.a.createElement("p",null,e("english"),o.a.createElement(_,null," ",e("intermediate"))),o.a.createElement(k,{value:"65",max:"100"}))),o.a.createElement(y,{title:e("projects"),data:t}))))}},V5sB:function(e){e.exports=JSON.parse('[{"company":"Programming in HTML5 with JavaScript and CSS3 Microsoft","date":"2013","about":"Microsoft Certification, Licença 480"}]')},eNX6:function(e){e.exports=JSON.parse('[{"role":"Ada - PagSeguro","about":"The Ada service platform provides accessible customer information to attendants from different sectors of the PagSeguro company.","description":["Development with React / Redux on NodeJs with modular architecture","Creation / Integration of WebServices in NodeJs."]},{"role":"Biometric Identification (TSE)","about":"Project to combat electoral fraud by means of biometric analyzes.","description":["Customization of OBIEE.","Creation of web applications integrated with OBIEE."]},{"role":"Metroplan","about":"Development of SIGWeb applications integrated with Oracle Apex to provide geospatial information on aulinor and Baixo Cai projects."}]')},hWJS:function(e){e.exports=JSON.parse('[{"institution":"IT Management - Senac","date":["01-01-2011","01-01-2013"]},{"institution":"Escola Técnica de Brasília","courses":[{"name":"Java II - Java for the web","date":"01-01-2011"},{"name":"Java I - Java with Database","date":"01-01-2010"},{"name":"object-oriented programming in Java","date":"01-01-2010"},{"name":"Data modeling with MySQL and Acess","date":"01-01-2010"}]}]')},jRnE:function(e){e.exports=JSON.parse('["HTML5","CSS3","JS","NodeJs","ES6","SASS","LESS","Stylus","React","Jest","VUE","AngularJs","Redux","Webpack","GULP","GRUNT","GIT","SPA","PWA","JQUERY","YARN","Bootstrap","ArcGis JS","OpenLayers 3"]')},kyAT:function(e,a,t){var n={"./certificates.en.json":"V5sB","./certificates.json":"Q4pm","./education.en.json":"hWJS","./education.json":"tXTD","./experience.en.json":"naEg","./experience.json":"nuXs","./knowledges.en.json":"7cJJ","./knowledges.json":"oEKc","./projects.en.json":"eNX6","./projects.json":"qtb/","./technologies.json":"jRnE"};function o(e){var a=r(e);return t(a)}function r(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id="kyAT"},naEg:function(e){e.exports=JSON.parse('[{"role":"Front-end engineer","description":["Development focused on continuous delivery on one of the PagSeguro Service Platforms, used as a basis by the attendants in assisting customers.","Collaborative development of Pagseguro\'s library of visual components."]},{"role":"Web Developer Analyst","description":["Development of SPA systems with Angular / Vue for customers from abroad, mainly Switzerland."]},{"role":"Web Developer / GIS Analyst","description":["Development of integrated solutions to BI systems, with the provision of geographic intelligence through panels.","Customizations of systems to better adapt the visual identity and guarantee a better user experience."]},{"role":"Internship / Web Trainee / GIS","description":["I work with JavaScript map APIs from ESRI and MapViewer (Oracle), providing new ideas and customized views through geographic representations.","Integration of information from BI (OBIEE and Pentaho) with customized applications."]}]')},nuXs:function(e){e.exports=JSON.parse('[{"company":"PagSeguro","role":"Engenheiro Front-End","date":["07-01-2018"],"description":["Desenvolvimento focado em entrega contínua numa das Plataformas de Atendimento PagSeguro, utilizada como base pelos atendentes no auxílio aos clientes.","Desenvolvimento colaborativo da biblioteca de componentes visuais da Pagseguro."]},{"company":"AIS Digital","role":"Analista Desenvolvedor Web","date":["01-01-2016","06-01-2018"],"description":["Desenvolvimento de sistemas em SPA com Angular / Vue para clientes do exterior, principalmente Suiça."]},{"company":"CDS - Condomínio de Soluções","role":"Analista Desenvolvedor Web/GIS","date":["07-01-2015","09-01-2016"],"description":["Desenvolvimento de soluções integradas aos sistemas de BI, com a disponibilização de inteligência geográfica através de painéis.","Customizações de sistemas para melhor adequar a identidade visual e garantir melhor experiência ao usuário."]},{"company":"CDS - Condomínio de Soluções","role":"Estágio/Trainee Web / GIS","date":["06-01-2014","07-01-2015"],"description":["Trabalho com APIs de mapas em JavaScript da ESRI e MapViewer (Oracle), provendo novas ideias e visões customizadas através de representações geográficas.","Integração de informações provenientes do BI (OBIEE e Pentaho) com aplicações customizadas."]}]')},oEKc:function(e){e.exports=JSON.parse('["Entrega contínua","SCRUM","Kanban","Metodologia Ágil","SOLID","DRY","TDD","BDD","Programação funcional","Web Standards","Atomic Design","Mobile first"]')},"qtb/":function(e){e.exports=JSON.parse('[{"role":"Ada - PagSeguro","about":"A plataforma de atendimento Ada disponibiliza informações sensíveis de clientes aos atendentes, vindas de diversos setores da empresa PagSeguro.","description":["Desenvolvimento com React / Redux sobre NodeJs com arquitetura modular","Criação/Integração WebServices em NodeJs."]},{"role":"Identificação Biométrica (TSE)","about":"Projeto de combate a fraudes eleitorais, por meio de análises biométricas.","description":["Customização do OBIEE.","Criação de webapps integradas ao OBIEE."]},{"role":"Metroplan","about":"Desenvolvimento de aplicações SIGWeb integradas com Oracle Apex para disponibilização de informações geoespaciais dos projetos aulinor e baixo cai."}]')},tXTD:function(e){e.exports=JSON.parse('[{"institution":"Gestão de TI - Senac","date":["01-01-2011","01-01-2013"]},{"institution":"Escola Técnica de Brasília","courses":[{"name":"Java II - Java para web","date":"01-01-2011"},{"name":"Java I - Java com Banco de dados","date":"01-01-2010"},{"name":"Programação orientada a objetos em Java","date":"01-01-2010"},{"name":"Modelagem de dados com MySQL e Acess","date":"01-01-2010"}]}]')}}]);
//# sourceMappingURL=component---src-pages-index-js-f8a0ecb89839b629c41c.js.map