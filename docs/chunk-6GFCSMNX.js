import"./chunk-LLZSS4ZU.js";import{Ca as x,Ea as h,Fa as C,Ha as m,Ia as p,Ja as f,Ka as n,La as i,Ma as _,Oa as u,Pa as a,Qa as b,Ra as w,S as g,Sa as y,Va as k,Xa as v,qa as s,sa as l,wb as S}from"./chunk-4POKWDE7.js";function F(e,t){e&1&&(n(0,"p"),a(1,"Hello World"),i())}function T(e,t){e&1&&(n(0,"p"),a(1,"Goodbye World"),i())}var M=(e,t,d)=>({"bg-red-100":e,"bg-blue-200":t,"bg-green-200":d});function O(e,t){if(e&1&&(n(0,"li"),a(1),i()),e&2){let d=t.$implicit,o=t.$index,r=t.$count;x(v(5,M,o%2===0&&o!==0&&o!==r-1,o%2!==0&&o!==0&&o!==r-1,o===0||o===r-1)),l(1),y(" ",o+1,"/",r,"-",d," ")}}function P(e,t){if(e&1&&(n(0,"li"),a(1),i()),e&2){let d=t.$implicit;l(1),b(d)}}function I(e,t){e&1&&(n(0,"p"),a(1,"No hay frameworks"),i())}var G=(()=>{let t=class t{constructor(){this.showContent=s(!1),this.grade=s("A"),this.frameworks=s(["Angular","React","Ruby","Js","Svelte"]),this.frameworks2=s([])}toggleContent(){this.showContent.update(o=>!o)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=g({type:t,selectors:[["ng-component"]],standalone:!0,features:[k],decls:37,vars:3,consts:[["lang","es"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"],["rel","stylesheet","href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css","integrity","sha512-...","crossorigin","anonymous"],["rel","stylesheet","href","https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"],[1,"container"],[1,"section"],[1,"card","md:card-lg","lg:card-xl","p-4"],[1,"card-content"],[1,"card-title","text-xl","md:text-2xl","lg:text-3xl"],[1,"card-description","mt-4","text-sm","md:text-base","lg:text-lg"],[1,"card","p-4"],[1,"card-title","text-xl","mb-5","text-gray-800"],[1,"bg-teal-500","hover:bg-teal-700","text-white","font-bold","py-2","px-4","rounded","transition","duration-300",3,"click"],[1,"bg-teal-500","hover:bg-teal-700","text-white","font-bold","py-2","px-4","rounded","mt-4","transition","duration-300",3,"click"],[3,"class"]],template:function(r,c){r&1&&(n(0,"html",0)(1,"head"),_(2,"meta",1)(3,"meta",2)(4,"link",3)(5,"link",4),n(6,"title"),a(7,"Tu T\xEDtulo"),i()(),n(8,"body")(9,"div",5)(10,"section",6)(11,"div",7)(12,"div",8)(13,"h2",9),a(14,"Ingeniero Multimedia"),i(),n(15,"p",10),a(16,"Descripci\xF3n corta o informaci\xF3n adicional"),i()()()(),n(17,"section",6)(18,"div",11)(19,"h2",12),a(20),i(),n(21,"button",13),u("click",function(){return c.toggleContent()}),a(22," click me! "),i(),h(23,F,2,0,"p")(24,T,2,0),i(),n(25,"button",14),u("click",function(){return c.toggleContent()}),a(26," click me outside the card! "),i()(),n(27,"section",6)(28,"div",11)(29,"ul"),p(30,O,2,9,"li",15,m),i()(),n(32,"div",11)(33,"ul"),p(34,P,2,1,"li",null,m,!1,I,2,0),i()()()()()()),r&2&&(l(20),w("if: ",c.showContent(),""),l(3),C(23,c.showContent()?23:24),l(7),f(c.frameworks()),l(4),f(c.frameworks2()))},dependencies:[S],styles:[`body[_ngcontent-%COMP%] {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f8f9fa;
      color: #1e1e1e;
      margin: 0;
      padding: 0;
      transition: background-color 0.3s ease;
    }

    .container[_ngcontent-%COMP%] {
      max-width: 1200px;
      margin: 0 auto;
      padding: 16px;
    }

    .section[_ngcontent-%COMP%] {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
      transition: grid-template-columns 0.3s ease;
    }

    .card[_ngcontent-%COMP%] {
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 20px;
      transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
      cursor: pointer;
    }

    .card[_ngcontent-%COMP%]:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      background-color: #f0f0f0;
    }

    .card-content[_ngcontent-%COMP%] {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }

    .card-title[_ngcontent-%COMP%] {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 10px;
    }

    .card-description[_ngcontent-%COMP%] {
      font-size: 1rem;
      color: #636363;
    }

    @media (max-width: 767px) {
      .card[_ngcontent-%COMP%] {
        padding: 16px;
      }
    }`]});let e=t;return e})();export{G as default};
